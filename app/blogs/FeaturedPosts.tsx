import Image from 'next/image';
import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaCalendarAlt, FaRegUser } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';

const FeaturedPosts = () => {
    const featuredPosts = [
        {
            id: 1,
            title: "Top 10 Tips for Finding Your Perfect Rental Home",
            excerpt:
                "Discover essential tips and strategies to help you find the ideal rental property that meets all your needs and preferences.",
            image: "/assets/blog-1.webp",
            category: "Rental Tips",
            date: "March 15, 2024",
            readTime: "5 min read",
            author: "Sarah Johnson",
        },
        {
            id: 2,
            title: "Understanding Rental Agreements: A Complete Guide",
            excerpt:
                "Learn everything you need to know about rental agreements, from key terms to your rights and responsibilities as a tenant.",
            image: "/assets/blog-2.webp",
            category: "Legal Guide",
            date: "March 12, 2024",
            readTime: "7 min read",
            author: "Michael Chen",
        },
        {
            id: 3,
            title: "How to Budget Smartly for Your Next Rental",
            excerpt:
                "Smart budgeting tips to help you manage rent, utilities, and other expenses without financial stress.",
            image: "/assets/blog-3.webp",
            category: "Finance",
            date: "March 10, 2024",
            readTime: "6 min read",
            author: "Emily Parker",
        },

    ];

    return (
        <section className="container mx-auto px-5 py-24">
            <h1 className="text-5xl pt-4 px-2 text-black font-semibold ">
                Featured Posts
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-15'>
                {featuredPosts.map((featuredPost) => (
                    <div key={featuredPost.id} className="bg-[#fffff] border shadow hover:shadow-xl rounded-xl relative">
                        <Image
                            src={featuredPost.image}
                            alt="Category Inages"
                            width={200}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-t-xl"
                        />
                        <span className='absolute top-3 left-5 bg-[#4375FF] rounded-full px-4 py-1 text-[14px] text-[#fff]'>{featuredPost.category}</span>
                        <div className="mt-10 px-7 pb-7">
                            <h2 className="text-xl font-medium mt-4">{featuredPost.title}</h2>
                            <p className='mt-5 text-[16px]'>{featuredPost.excerpt}</p>
                            <div className='mt-5 flex gap-5'>
                                {/*----------1----------*/}
                                <span className='flex items-center gap-1'>
                                    <FaCalendarAlt className='text-[14px] text-[#6a7282]' />
                                    <p className='text-[14px] text-[#6a7282]'>{featuredPost.date}</p>
                                </span>
                                {/*----------1----------*/}
                                <span className='flex items-center gap-1'>
                                    <CiClock2 className='text-[14px] text-[#6a7282]' />
                                    <p className='text-[14px] text-[#6a7282]'>{featuredPost.readTime}</p>
                                </span>
                                {/*----------1----------*/}
                                <span className='flex items-center gap-1'>
                                    <FaRegUser className='text-[14px] text-[#6a7282]' />
                                    <p className='text-[14px] text-[#6a7282]'>{featuredPost.author}</p>
                                </span>
                            </div>

                            <div className='flex items-center justify-center gap-1 mt-5 cursor-pointer bg-[#EFEFEF] text-[16px] text-[#4375ff] py-3 px-6 rounded-sm hover:bg-[#4375FF] hover:text-[#fff] transition-all duration-500'>
                                <span>Read More</span>
                                <FaArrowTrendUp />

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedPosts