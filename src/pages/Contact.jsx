import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='px-6 sm:px-16'>

      {/* TITLE */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* ================= MAIN SECTION ================= */}
      <div className='my-16 flex flex-col md:flex-row items-center gap-12'>

        {/* IMAGE */}
        <img
          className='w-full md:max-w-md rounded-xl shadow-lg'
          src={assets.contact_img}
          alt="contact"
        />

        {/* DETAILS */}
        <div className='flex flex-col justify-center items-start gap-6 md:w-1/2 text-gray-600'>

          {/* STORE */}
          <h3 className='text-xl font-semibold text-gray-800'>
            Our Store
          </h3>

          <p className='leading-relaxed'>
            834003 Patna <br />
            Bihar, India
          </p>

          <p className='leading-relaxed'>
            Tel: (123) 546 6703 <br />
            Email: 2026@danish.com
          </p>

          {/* CAREERS */}
          <h3 className='text-xl font-semibold text-gray-800 mt-4'>
            Careers at Danish
          </h3>

          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>

          {/* BUTTON */}
          <button className='mt-2 px-8 py-3 border border-black rounded-md text-sm font-medium hover:bg-black hover:text-white transition'>
            Explore Jobs
          </button>

        </div>

      </div>

      {/* ================= NEWSLETTER ================= */}
      <NewsletterBox />

    </div>
  )
}

export default Contact