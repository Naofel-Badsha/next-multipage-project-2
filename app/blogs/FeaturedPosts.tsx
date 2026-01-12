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
        {
            id: 4,
            title: "Things to Check Before Moving Into a New Apartment",
            excerpt:
                "A complete checklist to inspect your new apartment and avoid unexpected problems later.",
            image: "/assets/blog-4.webp",
            category: "Moving Guide",
            date: "March 8, 2024",
            readTime: "4 min read",
            author: "Daniel Wright",
        },
        {
            id: 5,
            title: "Short-Term vs Long-Term Rentals: Which Is Right for You?",
            excerpt:
                "Compare short-term and long-term rentals to decide which option best suits your lifestyle and budget.",
            image: "/assets/blog-5.webp",
            category: "Rental Guide",
            date: "March 6, 2024",
            readTime: "5 min read",
            author: "Sophia Martinez",
        },
        {
            id: 6,
            title: "How Location Impacts Your Rental Experience",
            excerpt:
                "Understand why location matters and how it can affect your daily life, commute, and rental costs.",
            image: "/assets/blog-6.png",
            category: "Lifestyle",
            date: "March 4, 2024",
            readTime: "6 min read",
            author: "James Wilson",
        },
        {
            id: 7,
            title: "Common Rental Scams and How to Avoid Them",
            excerpt:
                "Protect yourself from rental scams with these practical tips and warning signs every renter should know.",
            image: "/assets/blog-7.png",
            category: "Safety",
            date: "March 2, 2024",
            readTime: "5 min read",
            author: "Olivia Brown",
        },
        {
            id: 8,
            title: "Furnished vs Unfurnished Rentals: Pros and Cons",
            excerpt:
                "Explore the advantages and disadvantages of furnished and unfurnished rentals before making a decision.",
            image: "/assets/blog-8.png",
            category: "Rental Comparison",
            date: "February 28, 2024",
            readTime: "4 min read",
            author: "Ethan Lee",
        },
        {
            id: 9,
            title: "How to Build a Good Relationship With Your Landlord",
            excerpt:
                "Learn effective communication tips to maintain a positive and professional relationship with your landlord.",
            image: "/assets/blog-9.png",
            category: "Tenant Tips",
            date: "February 25, 2024",
            readTime: "5 min read",
            author: "Isabella Green",
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
                                    <FaCalendarAlt className='text-[14px] text-[#6a7282]'/>
                                    <p className='text-[14px] text-[#6a7282]'>{featuredPost.date}</p>
                                </span>
                                {/*----------1----------*/}
                                <span className='flex items-center gap-1'>
                                    <CiClock2 className='text-[14px] text-[#6a7282]'/>
                                    <p className='text-[14px] text-[#6a7282]'>{featuredPost.readTime}</p>
                                </span>
                                {/*----------1----------*/}
                                <span className='flex items-center gap-1'>
                                    <FaRegUser className='text-[14px] text-[#6a7282]'/>
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