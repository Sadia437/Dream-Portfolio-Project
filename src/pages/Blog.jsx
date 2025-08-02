import React from 'react';

const Blog = () => {
    return (
        <div className="w-full min-h-screen text-white relative flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white p-4 mt-10 z-20 relative">
                My another project made with only HTML and CSS
            </h1>

            <iframe
                src="https://adventure-project-html.netlify.app/"
                title="Adventure Blog"
                width="100%"
                height="1000px"
                className="border-none relative z-10 mt-8"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Blog;
