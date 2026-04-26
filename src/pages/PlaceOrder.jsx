import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const PlaceOrder = () => {

  const { currency, delivery_fee, getCartAmount,navigate } = useContext(ShopContext)

  const [method, setMethod] = useState('cod')

  const subtotal = getCartAmount()
  const delivery = subtotal === 0 ? 0 : delivery_fee
  const total = subtotal + delivery

  return (
    <div className='flex flex-col lg:flex-row justify-between gap-10 pt-10 min-h-[80vh] border-t px-4 sm:px-10'>

      {/* LEFT: DELIVERY FORM */}
      <div className='flex flex-col gap-4 w-full lg:max-w-96'>

        <div className='text-2xl mb-4'>
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        <div className='flex gap-3'>
          <input className='border p-2 w-full' type="text" placeholder='First Name' required />
          <input className='border p-2 w-full' type="text" placeholder='Last Name' required />
        </div>

        <input className='border p-2' type="email" placeholder='Email Address' required />
        <input className='border p-2' type="text" placeholder='Street' required />

        <div className='flex gap-3'>
          <input className='border p-2 w-full' type="text" placeholder='City' required />
          <input className='border p-2 w-full' type="text" placeholder='State' required />
        </div>

        <div className='flex gap-3'>
          <input className='border p-2 w-full' type="number" placeholder='Zip Code' required />
          <input className='border p-2 w-full' type="text" placeholder='Country' required />
        </div>

        <input className='border p-2' type="tel" placeholder='Phone Number' required />

      </div>

      {/* RIGHT SIDE */}
      <div className='w-full lg:w-80'>

        {/* ORDER SUMMARY */}
        <div className='border p-5 rounded-lg shadow-sm'>

          <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>

          <div className='flex justify-between py-2 border-b text-sm'>
            <p>Subtotal</p>
            <p>{currency}{subtotal.toFixed(2)}</p>
          </div>

          <div className='flex justify-between py-2 border-b text-sm'>
            <p>Delivery Fee</p>
            <p>{currency}{delivery.toFixed(2)}</p>
          </div>

          <div className='flex justify-between py-3 font-semibold'>
            <p>Total</p>
            <p>{currency}{total.toFixed(2)}</p>
          </div>

        </div>

        {/* PAYMENT METHOD */}
<div className='mt-10'>

  <Title text1="PAYMENT" text2="METHOD" />

  <div className='flex flex-col sm:flex-row gap-4 mt-5'>

    {/* STRIPE */}
    <div
      onClick={() => setMethod('stripe')}
      className={`payment-card ${method === 'stripe' ? 'active' : ''}`}
    >
      <span className='radio'></span>
      <img src={assets.stripe_logo} className='h-5' alt="stripe" />
    </div>

    {/* RAZORPAY */}
    <div
      onClick={() => setMethod('razorpay')}
      className={`payment-card ${method === 'razorpay' ? 'active' : ''}`}
    >
      <span className='radio'></span>
      <img src={assets.razorpay_logo} className='h-5' alt="razorpay" />
    </div>

    {/* COD */}
    <div
      onClick={() => setMethod('cod')}
      className={`payment-card ${method === 'cod' ? 'active' : ''}`}
    >
      <span className='radio'></span>
      <p className='text-sm font-medium'>Cash on Delivery</p>
    </div>

  </div>

</div>

        {/* PLACE ORDER BUTTON */}
        <button onClick={()=>navigate('/orders')} className='w-full bg-black text-white py-3 mt-6 rounded-md hover:bg-gray-800'>
          PLACE ORDER
        </button>

      </div>

    </div>
  )
}

export default PlaceOrder