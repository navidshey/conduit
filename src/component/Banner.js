import React from 'react'

const Banner = ({ appName, token }) => {
    if (token) {
        return null;
    }
    return (
        <div class="banner">
            <div class="container">
                <h1 className="logo-font">
                    {appName}
                </h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>
    );
};

export default Banner;