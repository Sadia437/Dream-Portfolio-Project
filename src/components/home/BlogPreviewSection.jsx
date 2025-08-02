import React from 'react';

const Blog = () => {
    return (
        <div className="w-full min-h-screen text-white">
            <iframe
                src="https://adventure-project-html.netlify.app/"
                title="Adventure Blog"
                width="100%"
                height="1000px"
                className="border-none"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Blog;
