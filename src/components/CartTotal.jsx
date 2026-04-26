import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  const subtotal = getCartAmount()
  const delivery = subtotal === 0 ? 0 : delivery_fee
  const total = subtotal + delivery

  return (
    <div className='w-full sm:w-80'>

      <div className='border p-5 rounded-lg shadow-sm'>

        <h2 className='text-xl font-semibold mb-4'>Cart Totals</h2>

        {/* Subtotal */}
        <div className='flex justify-between py-2 border-b text-sm'>
          <p>Subtotal</p>
          <p>{currency}{subtotal.toFixed(2)}</p>
        </div>

        {/* Delivery Fee */}
        <div className='flex justify-between py-2 border-b text-sm'>
          <p>Delivery Fee</p>
          <p>{currency}{delivery.toFixed(2)}</p>
        </div>

        {/* Total */}
        <div className='flex justify-between py-3 text-lg font-semibold'>
          <p>Total</p>
          <p>{currency}{total.toFixed(2)}</p>
        </div>

      </div>

    </div>
  )
}

export default CartTotal