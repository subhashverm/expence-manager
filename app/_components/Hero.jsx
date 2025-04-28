import React from 'react'
import Image from 'next/image';
function Hero() {
  return (
      
    <section className="bg-white flex items-center flex-col ">
    <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-prose text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Manager Your Expense
          <strong className="text-indigo-700  font font-extrabold sm:block">Control your Money </strong>
</h1>
  
        <p className="mt-4 text-base text-pretty text-dark-700 sm:text-lg/relaxed">
          Start Creating your budget and save ton of money 
        </p>
  
        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
          <a
            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            href= {'/sign-in'}>
            Get Started
          </a>
        </div>
      </div>
    </div>
    <Image src={'/deshboard.jpg'} alt='deshboard' width={1000} height={700}
    className=' mt-4 rounded-xl border-2 ' />
  </section>
  )
}

export default Hero
