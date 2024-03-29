require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');

const KEY = process.env.KEY;

const stripe = require('stripe')(KEY);

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.post("/api/checkout" , async (req, res) => {

    const {products} = req.body;

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    })

    res.json({id:session.id});

});

app.listen(PORT, () => {
    console.log("server listening on port",PORT);
});