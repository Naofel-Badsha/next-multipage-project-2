import React from 'react';
import BlogBanner from './BlogBanner';
import FeaturedPosts from './FeaturedPosts';
import StayUpdated from './StayUpdated';
import RecentPosts from './RecentPosts';

const BlogsPage = () => {
    return (
        <div>
            <BlogBanner />
            <FeaturedPosts />
            <RecentPosts />
            <StayUpdated />
        </div>
    );
};

export default BlogsPage;