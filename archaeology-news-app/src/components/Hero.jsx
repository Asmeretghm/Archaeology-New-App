import React from 'react';
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('https://media.istockphoto.com/id/528606590/photo/bedouins-and-pyramids.jpg?s=612x612&w=0&k=20&c=3HvRXnbNadeBAab1Rwq6EuQToDMGozFstsPvlEscOko=')",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md mx-auto">
                    <h1 className="text-5xl font-bold">Welcome to African Archaeology News</h1>
                    <p className="py-10">
                        The goal of this website is to provide an up-to-date news-feed of African archaeology from various sources. Archaeology in Africa is widely practiced by Western scholars.
                        However, the number of African archaeologists has been growing in the last three decades. As a result, the awareness and curiosity of the African public have also increased.
                        This growth, coupled with the expansion of technology and software development, indicates the need for a web app that specifically focuses on African archaeology news.
                    </p>

                    <Link to="/NewsList" className="btn btn-3d bg-blue-500 text-white transform transition-transform duration-300 hover:scale-105">Get News</Link>

                </div>
            </div>
        </div>
    );
}

export default Hero;
