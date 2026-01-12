import Image from 'next/image'
import React from 'react'

const BlogBanner = () => {
    return (
        <section className="relative py-20 px-4 bg-gray-900 overflow-hidden">
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
        </section>
    )
}

export default BlogBanner