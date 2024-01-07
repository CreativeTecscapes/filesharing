import React from 'react'
import Constant from '../_utils/Constant'

function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        <span className='text-teal-500'>Upload, Save</span> <span className='text-cyan-950'>and easily </span><span className='text-teal-500'>Share</span> <span className='text-cyan-950'>your files in one place</span>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-black">
       {Constant.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-cyan-950 px-12 py-3 text-sm font-medium text-green-300 shadow hover:bg-cyan-700 focus:outline-none focus:ring  sm:w-auto"
          href="/files"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-cyan-950 shadow hover:text-cyan-700 focus:outline-none focus:ring sm:w-auto"
          href="/aboutus"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero