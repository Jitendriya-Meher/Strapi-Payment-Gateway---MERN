import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { emptyCartItem } from '../redux/features/cartSlice';
import toast from 'react-hot-toast';

const Success = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(emptyCartItem());
        toast.success("Your order has been successfully checkout");
    },[]);

  return (
    <div className=' text-5xl my-10 text-center'>Success</div>
  )
}

export default Success