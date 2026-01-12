import Image from 'next/image'
import React from 'react'

const BlogBanner = () => {
    return (
        <section>
            <div className="relative py-20 px-4 bg-gray-900 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/main.jpg"
                        alt="Background"
                        fill
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    {/* Header Text */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Blog
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-[20px]">
                        Insights, tips, and guides to help you make informed decisions about your rental journey
                    </p>
                </div>
            </div>
            {/* Stats Cards */}
            {/* <div className="w-[80%] mx-auto -mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white rounded-2xl z-10 p-8 shadow-lg transform transition-transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div> */}
        </section>
    )
}

export default BlogBanner