import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const [isExpanded, setIsExpanded] = useState(false); // Review control korar jonno

    const singleBook = data.find(book => book.bookId === bookId);

    if (!singleBook) {
        return <div className="h-screen flex justify-center items-center text-2xl font-bold">Book Not Found!</div>;
    }

    const { bookName, author, image, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook;

    // Review text-ke 250 character-e limit kora
    const shortReview = review.length > 250 ? review.slice(0, 250) + "..." : review;

    return (
        <div className="container mx-auto my-12 px-5 md:px-10 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Left Side: Elegant Image Frame */}
                <div className="w-full lg:w-1/2 flex justify-center items-center bg-[#13131308] rounded-[32px] p-12 lg:p-24">
                    <img 
                        className="w-full max-w-[380px] rounded-lg shadow-[0px_20px_50px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-500" 
                        src={image} 
                        alt={bookName} 
                    />
                </div>

                {/* Right Side: Detailed Info */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#131313] mb-3">{bookName}</h1>
                    <p className="text-xl font-medium text-[#131313cc] mb-4">By : {author}</p>
                    
                    <div className="border-y border-[#13131326] py-3 mb-4 text-xl font-medium text-[#131313cc]">
                        {category}
                    </div>

                    {/* Review Section with Read More */}
                    <div className="mb-6 leading-relaxed">
                        <span className="font-bold text-[#131313]">Review: </span>
                        <span className="text-[#131313b3]">
                            {isExpanded ? review : shortReview}
                        </span>
                        {review.length > 250 && (
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="ml-2 text-primary font-bold hover:underline cursor-pointer"
                            >
                                {isExpanded ? " Show Less" : " Read More"}
                            </button>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-bold text-[#131313]">Tag</span>
                        <div className="flex flex-wrap gap-3">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-[#23BE0A0d] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-bold">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

               
                    <div className="space-y-3 mb-8">
                        <div className="grid grid-cols-2 w-full md:w-3/4">
                            <span className="text-[#131313b3]">Number of Pages:</span>
                            <span className="font-bold text-[#131313]">{totalPages}</span>
                        </div>
                        <div className="grid grid-cols-2 w-full md:w-3/4">
                            <span className="text-[#131313b3]">Publisher:</span>
                            <span className="font-bold text-[#131313]">{publisher}</span>
                        </div>
                        <div className="grid grid-cols-2 w-full md:w-3/4">
                            <span className="text-[#131313b3]">Year of Publishing:</span>
                            <span className="font-bold text-[#131313]">{yearOfPublishing}</span>
                        </div>
                        <div className="grid grid-cols-2 w-full md:w-3/4">
                            <span className="text-[#131313b3]">Rating:</span>
                            <span className="font-bold text-[#131313]">{rating}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-5">
                        <button className="btn btn-outline border-[#1313134d] px-10 hover:bg-[#131313] hover:text-white rounded-xl text-lg font-semibold transition-all">
                            Read
                        </button>
                        <button className="btn bg-[#50B1C9] hover:bg-[#3d9cb3] text-white px-10 rounded-xl text-lg font-semibold border-none shadow-md">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;