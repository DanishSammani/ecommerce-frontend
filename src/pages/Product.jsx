import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const { productId } = useParams()
  const { products, currency,addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  // Fetch product
  const fetchProductData = () => {
    const found = products.find(item => item._id === productId)
    if (found) {
      setProductData(found)
      setImage(found.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='border-t pt-10 px-4 sm:px-10 lg:px-20'>

      <div className='flex flex-col lg:flex-row gap-10'>

        {/* LEFT SECTION */}
        <div className='flex-1 flex flex-col gap-4'>

          {/* MAIN IMAGE */}
          <div
            className='w-full bg-gray-50 rounded-xl p-4 shadow-sm overflow-hidden cursor-zoom-in group'
            onMouseMove={(e) => {
              const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - left) / width) * 100
              const y = ((e.clientY - top) / height) * 100

              e.currentTarget.style.setProperty('--x', `${x}%`)
              e.currentTarget.style.setProperty('--y', `${y}%`)
            }}
          >
            <img
              src={image}
              alt=""
              className='w-full object-contain transition-transform duration-300 ease-out group-hover:scale-150'
              style={{
                transformOrigin: 'var(--x) var(--y)'
              }}
            />
          </div>

          {/* THUMBNAILS (BOTTOM) */}
          <div className='flex gap-3 overflow-x-auto justify-center'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all
                ${image === item ? 'border-black scale-105' : 'border-gray-200'}`}
                alt=""
              />
            ))}
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className='flex-1 flex flex-col gap-4'>

          {/* TITLE */}
          <h1 className='text-2xl lg:text-3xl font-semibold'>
            {productData.name}
          </h1>

          {/* RATING */}
          <div className='flex items-center gap-1'>
            {[1,2,3,4].map(i => (
              <img key={i} src={assets.star_icon} className='w-4' alt="" />
            ))}
            <img src={assets.star_dull_icon} className='w-4' alt="" />
            <span className='text-sm text-gray-500 ml-2'>(122 reviews)</span>
          </div>

          {/* PRICE */}
          <p className='text-3xl font-bold'>
            {currency}{productData.price}
          </p>

          {/* DESCRIPTION */}
          <p className='text-gray-500 max-w-md'>
            {productData.description}
          </p>

          {/* SIZE */}
          <div>
            <p className='font-medium mb-2'>Select Size</p>
            <div className='flex gap-2 flex-wrap'>
              {productData.sizes?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 border rounded-md ${
                    size === item
                      ? 'bg-black text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <button onClick={()=>addToCart(productData._id,size)} className='mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-800'>
            ADD TO CART
          </button>

          {/* EXTRA INFO */}
          <div className='text-sm text-gray-500 mt-4 flex flex-col gap-1'>
            <p>✔ 100% Original product</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ Easy return within 7 days</p>
          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className='mt-16'>
        <div className='flex border-b'>
          <button className='px-6 py-3 text-sm font-medium border-b-2 border-black'>
            Description
          </button>
          <button className='px-6 py-3 text-sm text-gray-500'>
            Reviews (122)
          </button>
        </div>

        <div className='py-6 text-gray-600 text-sm max-w-3xl'>
          <p>
            An ecommerce website allows users to buy and sell products online easily.
          </p>
          <p className='mt-2'>
            It provides convenience, accessibility, and fast shopping experience.
          </p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProducts 
        category={productData.category} 
        subCategory={productData.subCategory} 
      />

    </div>
  ) : null
}

export default Product