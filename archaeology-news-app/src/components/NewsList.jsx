import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Newss.css';

function News() {
    const [newsList, setNewsList] = useState([]);

    // Function to fetch news data from an API
    async function fetchNews() {
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=african%20archaeology&apiKey=YourAPI');
            const data = await response.json();
            return data.articles;
        } catch (error) {
            console.error('Error fetching news:', error);
            return [];
        }
    }

    // Fetch news data when the component mounts
    useEffect(() => {
        async function getNews() {
            const newsData = await fetchNews();
            setNewsList(newsData);
        }

        getNews();

        // Optional: Fetch news data periodically
        const intervalId = setInterval(getNews, 20000); // Fetch every 20 seconds

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="p-4 md:p-8">
            <div className="mb-4">
                <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {newsList.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {item.urlToImage && (
                            <img
                                src={item.urlToImage}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-700 mb-4">{item.description}</p>
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;