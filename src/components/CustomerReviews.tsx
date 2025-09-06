
import React, { useState } from 'react';

// Import SVG files as static assets
import ProductImageSrc from "../assets/product image.svg";
import ProfileCustomerSrc from "../assets/_Avatar Image.svg";
import ProductForViewSrc from "../assets/_Avatar Image(1).svg";
import ArrowRightSrc from "../assets/Vector.svg";
import ArrowLeftSrc from "../assets/Vector(1).svg";
import ShirtProdSrc from "../assets/shirt_white 2.svg";
import BlackSrc from "../assets/black.svg";
import WhiteSrc from "../assets/White.svg";

const CustomerReviews: React.FC = () => {
    const [currentReview, _setCurrentReview] = useState(0);

    const reviews = [
        {
            name: "Heather Watson",
            avatar: "/api/placeholder/80/80",
            rating: 5,
            text: "I got one for myself and one for my daughter, they're so stinking adorable.",
            description: "Such a cute way to match my baby when it gets cold again. The hoodies are true to size, I ordered a youth medium and it fits PERFECTLY! Overall, 100% satisfied and will definitely order again.",
            purchasedItem: "Personalized Photo and Slogan Text Hoodie",
            price: "$39.99",
            originalPrice: "$43.99",
            productImage: "/api/placeholder/80/80",
            customerImage: "/api/placeholder/300/300"
        }
    ];

    const products = [
        {
            id: 1,
            name: "Personalized Photo & Slogan Text T-shirt",
            price: "$24.99",
            discount: "-10%",
            image: BlackSrc,
            colors: ["#ffffff", "#242424", "#25549E", "#C5A174"]
        },
        {
            id: 2,
            name: "Personalized Slogan Text Baseball Cap",
            price: "$19.99",
            discount: "-10%",
            image: ShirtProdSrc,
            colors: ["#2b6cb0", "#ffffff", "#C5A174"]
        },
        {
            id: 3,
            name: "Personalized Photo & Text Tote Bag",
            price: "$20.99",
            discount: "-10%",
            image: WhiteSrc,
            colors: ["#242424", "#ffffff"]
        }
    ];

    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < rating ? "#fbbf24" : "#e5e7eb"}
                        className="text-yellow-400"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <>
            {/* Reviews Section */}
            <div className="font-sans px-[135px] py-[72px] mx-auto">
                <div className='flex flex-col gap-2 mb-14 text-center'>
                    <h2 className="text-4xl font-bold text-primary mb-2">
                        From Our Hoodie & Tees Lovers
                    </h2>
                    <p className="text-[#424242] leading-[150%] text-[21px]">What customers have been saying!</p>
                </div>

                <div className="bg-[#fafbfc] flex flex-col gap-8 py-[72px] px-[70px]">
                    <div className="flex gap-20 justify-between  mx-auto">

                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <img src={ProfileCustomerSrc} alt="Customer Profile" />
                                <div>
                                    <h3 className="font-bold text-primary text-[21px] mb-2">
                                        {reviews[currentReview].name}
                                    </h3>
                                    <StarRating rating={reviews[currentReview].rating} />
                                </div>
                            </div>

                            <div>
                                <p className="text-primary text-[16px] font-bold mb-2">
                                    {reviews[currentReview].text}
                                </p>

                                <p className="text-[#424242] leading-[150%] text-[16px]">
                                    {reviews[currentReview].description}
                                </p>
                            </div>

                            <div className="">
                                <p className="text-[#424242] leading-[150%] text-sm mb-4">Purchased item:</p>
                                <div className="flex items-center gap-3">
                                    <img src={ProductForViewSrc} alt="Product Preview" />

                                    <div>
                                        <p className="text-primary text-[16px] leading-[150%] underline decoration-solid">
                                            {reviews[currentReview].purchasedItem}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#424242] font-bold leading-[150%] text-[16px]">
                                                {reviews[currentReview].price}
                                            </span>
                                            <span className="text-[#B4B4B4] text-[14px] leading-[150%] line-through">
                                                {reviews[currentReview].originalPrice}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Customer Image */}
                        <div className="flex-shrink-0">
                            <img src={ProductImageSrc} alt="Product Image" />
                        </div>

                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <p className='w-[48px] h-[48px] rounded-[40px] border p-3 border-[#EdEEEE] flex justify-center items-center'>
                            <img src={ArrowLeftSrc} alt="Previous" />
                        </p>
                        <p className='w-[48px] h-[48px] rounded-[40px] border p-3 border-[#EdEEEE] flex justify-center items-center'>
                            <img src={ArrowRightSrc} alt="Next" />
                        </p>
                    </div>
                </div>
            </div>

            {/* Matching Products Section */}
            <div className="px-[71px] py-[72px]">
                <div className='text-center mb-14 '>
                    <h2 className="text-[38px] font font-serif text-primary mb-2">
                        For Head-to-Toe Matching
                    </h2>
                    <p className="text-[#424242] font-sans leading-[150%] text-[21px]">
                        The collection that goes perfectly with your hoodie!
                    </p>
                </div>

                <div className="relative">
                    <div className="flex items-center justify-between gap-[16px]">
                        {/* Left Arrow */}
                        <p className='w-[48px] h-[48px] rounded-[40px] border p-3 border-[#EdEEEE] flex justify-center items-center'>
                            <img src={ArrowLeftSrc} alt="Previous" />
                        </p>

                        {/* Products Grid */}
                        <div className="flex gap-[30px]">
                            {products.map((product) => (
                                <div key={product.id} className="flex gap-6 border border-[#E0E0E0] p-6 rounded-[10px]">
                                    <div className="relative flex">
                                        <img src={product.image} alt={product.name} className='object-cover' />

                                        <span className="absolute top-2 right-0 bg-[#EA3335] text-white text-[14px] leading-[150%] px-1.5 py-[1px] rounded-bl-[6px] rounded-tl-[6px]">
                                            {product.discount}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-[16px] leading-[150%]">
                                            {product.name}
                                        </h3>
                                        <div className='flex gap-2 mb-2 items-center'>
                                            <p className="text-[#424242] font-bold text-[16px]">{product.price}</p>
                                            <p className="text-[#b4b4b4] text-[14px] leading-[150%] line-through">{product.price}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {product.colors.map((color, index) => (
                                                <button
                                                    key={index}
                                                    className="w-6 h-6 rounded-full border-2 border-gray-200"
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <p className='w-[48px] h-[48px] rounded-[40px] border p-3 border-[#EdEEEE] flex justify-center items-center'>
                            <img src={ArrowRightSrc} alt="Next" />
                        </p>

                    </div>
                </div>
                {/* View All Button */}
                <div className="text-center mt-8">
                    <button className="px-[21px] py-[14.5px] border border-[#25549E] text-[#25549E] font-semibold rounded-[6px] hover:bg-blue-50 transition-colors">
                        View All Custom Products
                    </button>
                </div>
            </div>

        </>
    );
};

export default CustomerReviews;
