import React from 'react';
import BlogBanner from './BlogBanner';
import FeaturedPosts from './FeaturedPosts';
import StayUpdated from './StayUpdated';

const BlogsPage = () => {
    return (
        <div>
            <BlogBanner />
            <FeaturedPosts />
            <StayUpdated />
        </div>
    );
};

export default BlogsPage;