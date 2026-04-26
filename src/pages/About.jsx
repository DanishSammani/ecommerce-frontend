import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='px-6 sm:px-16'>

      {/* TITLE */}
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* ================= CONTENT ================= */}
      <div className='my-16 flex flex-col md:flex-row items-center gap-12'>

        {/* IMAGE */}
        <img
          className='w-full md:max-w-md rounded-xl shadow-lg'
          src={assets.about_img}
          alt="about"
        />

        {/* TEXT */}
        <div className='flex flex-col justify-center gap-6 md:w-1/2 text-gray-600 text-[15px] leading-relaxed'>

          <h3 className='text-xl font-semibold text-gray-800'>
            Who We Are
          </h3>

          <p>
            This company was born out of a passion for innovation and a desire
            to revolutionize the way people shop online. Our journey began with
            a simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>

          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          {/* MISSION */}
          <h3 className='text-xl font-semibold text-gray-800'>
            Our Mission
          </h3>

          <p>
            Our mission is to empower customers with choice, convenience, and
            confidence. We are dedicated to providing a seamless shopping
            experience that exceeds expectations, from browsing and ordering to
            delivery and beyond.
          </p>

        </div>

      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className='text-xl py-6'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>

        {/* CARD 1 */}
        <div className='bg-gray-50 border rounded-lg p-8 flex flex-col gap-4 hover:shadow-md transition'>
          <b className='text-gray-800 text-lg'>Quality Assurance</b>
          <p className='text-gray-600 text-sm leading-relaxed'>
            We ensure every product meets high-quality standards through
            careful selection and strict quality checks to deliver the best
            experience.
          </p>
        </div>

        {/* CARD 2 */}
        <div className='bg-gray-50 border rounded-lg p-8 flex flex-col gap-4 hover:shadow-md transition'>
          <b className='text-gray-800 text-lg'>Convenience</b>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Shop anytime, anywhere with our user-friendly platform designed
            for a smooth and hassle-free shopping experience.
          </p>
        </div>

        {/* CARD 3 */}
        <div className='bg-gray-50 border rounded-lg p-8 flex flex-col gap-4 hover:shadow-md transition'>
          <b className='text-gray-800 text-lg'>Customer Support</b>
          <p className='text-gray-600 text-sm leading-relaxed'>
            Our dedicated support team is always ready to assist you,
            ensuring quick responses and complete satisfaction.
          </p>
        </div>

      </div>

      {/* ================= NEWSLETTER ================= */}
      <NewsletterBox />

    </div>
  )
}

export default About