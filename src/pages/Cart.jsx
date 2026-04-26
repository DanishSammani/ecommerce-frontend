import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, getCartAmount, delivery_fee } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const tempData = []

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size]
          })
        }
      }
    }

    setCartData(tempData)
  }, [cartItems])

  const subtotal = getCartAmount()
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee

  return (
    <div className='border-t pt-10 px-4 sm:px-10'>
       <div className='text-2xl mb-4'>
          <Title text1={'YOUR'} text2={'CART'} />
        </div>
      {cartData.length === 0 ? (
        <p className='text-gray-500 text-center mt-10'>Your cart is empty 🛒</p>
      ) : (
        <div className='flex flex-col lg:flex-row gap-10'>

          {/* LEFT: CART ITEMS */}
          <div className='flex-1'>

            {cartData.map((item, index) => {

              const product = products.find(p => p._id === item._id)
              if (!product) return null

              return (
                <div key={index} className='flex items-center gap-6 border-b py-4'>

                  {/* IMAGE */}
                  <img src={product.image[0]} className='w-20 h-20 object-cover' alt="" />

                  {/* DETAILS */}
                  <div className='flex-1'>
                    <p className='font-medium'>{product.name}</p>

                    <div className='flex items-center gap-4 mt-2'>
                      <p className='text-gray-700'>{currency}{product.price}</p>

                      <p className='px-2 py-1 border bg-gray-100 text-sm'>
                        {item.size}
                      </p>
                    </div>
                  </div>

                  {/* QUANTITY */}
                  <input
                    className='border max-w-16 px-2 py-1'
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      if (value >= 1) {
                        updateQuantity(item._id, item.size, value)
                      }
                    }}
                  />

                  {/* DELETE */}
                  <img
                    className='w-4 sm:w-5 cursor-pointer'
                    src={assets.bin_icon}
                    alt="delete"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  />

                </div>
              )
            })}

          </div>

          {/* RIGHT: TOTAL + CHECKOUT */}
          <div className='w-full lg:w-80'>

            <div className='border p-5 rounded-lg shadow-sm'>

              <h2 className='text-xl font-semibold mb-4'>Cart Totals</h2>

              {/* Subtotal */}
              <div className='flex justify-between py-2 border-b text-sm'>
                <p>Subtotal</p>
                <p>{currency}{subtotal}</p>
              </div>

              {/* Delivery */}
              <div className='flex justify-between py-2 border-b text-sm'>
                <p>Delivery Fee</p>
                <p>{currency}{subtotal === 0 ? 0 : delivery_fee}</p>
              </div>

              {/* Total */}
              <div className='flex justify-between py-3 text-lg font-semibold'>
                <p>Total</p>
                <p>{currency}{total}</p>
              </div>

              {/* CHECKOUT BUTTON */}
              <button
                onClick={() => navigate('/place-order')}
                disabled={subtotal === 0}
                className={`w-full py-3 mt-4 rounded-md ${
                  subtotal === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                PROCEED TO CHECKOUT
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default Cart