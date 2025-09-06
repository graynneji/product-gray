import React, { useState } from 'react';
import Payment from '../assets/Payment.svg?react';
import { Star, Heart, Gift } from 'lucide-react';
import One from "../assets/1.svg?react"
import FrameThumb from "../assets/Frame 1522.png"
import Alert from "../assets/Alert.svg?react"
import ShoppingCart from "../assets/shoppingBagCart.svg?react"

interface ProductPageProps {
    className?: string;
}

const ProductView: React.FC<ProductPageProps> = () => {
    const [selectedColor, setSelectedColor] = useState('gray');
    const [selectedSize, setSelectedSize] = useState('XL');
    const [customText, setCustomText] = useState('My custom hoodie');
    const [quantity, setQuantity] = useState(1);

    const colors = [
        { name: 'white', bg: 'bg-white' },
        { name: 'black', bg: 'bg-black' },
        { name: 'light-blue', bg: 'bg-[#9BA9D0]' },
        { name: 'blue', bg: 'bg-[#25549E]' },
        { name: 'tan', bg: 'bg-[#C5A174]' }
    ];

    const sizes = ['S', 'M', 'L', 'XL'];


    return (

        <div className="grid grid-cols-1 w-full font-serif mx-auto px-[135px] py-[72px] lg:grid-cols-2 gap-[62px]">
            {/* Left side - Images */}
            <div className="flex gap-4">
                {/* Thumbnail column */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                    <button className="w-[100px] p-[16px] flex items-center justify-center bg-[#F5F7F8] text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {/* {thumbnails.map((thumb, index) => (
                        <div key={index} className="relative w-20 h-20 border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-500">
                            {React.createElement(thumb)}
                            {index === 0 && (
                                <div className="absolute top-1 right-1 bg-[#EA3335] text-white text-xs px-1 rounded z-10">
                                    SALE
                                </div>
                            )}
                        </div>
                    ))} */}
                    <img
                        src={FrameThumb}
                        alt="product"
                        className="w-full max-w-[454px] h-auto max-h-[600px] object-contain"
                    />

                    <button className="w-[100px] p-[16px] flex items-center justify-center bg-[#F5F7F8] text-gray-400 hover:text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>

                {/* Main product image */}
                <div className="flex-1">
                    {/* <img
                        src={imageOne}
                        alt="product"
                        className="w-full max-w-[454px] h-auto max-h-[600px] object-contain rounded-lg"
                    /> */}
                    <One />
                </div>
            </div>

            {/* Right side - Product details */}
            <div className="space-y-8">
                {/* Header */}
                <div>
                    <div className="flex items-center gap-2 font-dm-sans text-[#25549E] text-[16px] leading-[150%]">
                        <Alert />
                        <span>Selling fast! 5 people have this in their carts.</span>
                    </div>
                    <h1 className="text-[38px] text-start text-primary mb-4">
                        Personalized Photo and Slogan Text Hoodie
                    </h1>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                    <span className="text-[38px] font-normal leading-[120%] text-[#242424]">$39.99</span>
                    <span className="text-[28px] text-[#E0E0E0] line-through leading-[150%]">$44.44</span>
                    {/* <div className="py-[6px] px-[24px] bg-red-100 text-[#EA3335] border border-[#EA3335] rounded-t-r-[20px] rounded-b-r-[20px] text-[16px] ml-auto">
                        <ShoppingCart />
                        In Stock
                    </div> */}
                    <div className="relative font-sans inline-flex items-center bg-white rounded-full border-2 border-[#EA3335] ml-auto h-[50px]  pl-[50px]">
                        {/* Red circle with cart icon */}
                        <div className="flex items-center justify-center w-[56px] h-[56px] bg-[#EA3335] rounded-full absolute -left-1 z-10">
                            <ShoppingCart />
                        </div>

                        {/* Text with left margin to account for the circle */}
                        <div className="py-[6px] px-[24px] pl-[14px]">
                            <span className="text-[#EA3335] font-medium text-[16px] leading-[150%]">In stock</span>
                        </div>
                    </div>

                </div>



                {/* Review */}
                <div className="bg-[#F5F7F8] py-6 px-8 flex flex-col gap-4 font-sans">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className='text-[16px] leading-[150%] text-accent'>I love this! When I saw this hoodie, I knew I had to get it.
                            It makes  me so confident every time I wear it. Thanks
                        </p>
                        <p className="text-[16px] leading-[150%] font-bold text-accent">Wendy N.</p>
                    </div>
                </div>

                {/* Color selection */}
                <div className='flex flex-col gap-4 font-sans'>
                    {/* open-sans */}
                    <h3 className="text-[16px] font-bold text-primary">Color</h3>
                    <div className="flex gap-4">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => setSelectedColor(color.name)}
                                className={`w-9 h-9 rounded-full border-2 ${color.bg} ${selectedColor === color.name ? 'border-gray-800' : 'border-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Size selection */}
                <div className='flex flex-col gap-4 font-sans'>
                    <h3 className="text-[16px] font-bold text-primary">Size</h3>
                    <div className="flex gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-6 py-2.5 border rounded-[40px] text-sm font-medium ${selectedSize === size
                                    ? 'border-primary text-primary'
                                    : 'border-secondary text-primary'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Custom text input */}
                <div className='flex flex-col gap-4 font-sans'>
                    <div className='flex flex-col gap-2'>
                        {/* open-sans */}
                        <h3 className="text-[16px] font-bold text-primary leading-[150%]">Type your custom text</h3>
                        <p className="text-[16px] leading-[150%] text-accent">
                            Please note the font size and color in parentheses after your text.
                            E.g. My BFF (30, black)
                        </p>
                    </div>
                    <input
                        type="text"
                        value={customText}
                        onChange={(e) => setCustomText(e.target.value)}
                        className="w-[538px] pl-[21px] pr-[28px] py-[14.5px] border border-[#E0E0E0] rounded-md focus:outline-none focus:border-blue-500 
                            text-[21px] leading-[150%] font-sans text-[#B4B4B4]"
                        placeholder="My custom hoodie"
                    />
                </div>

                {/* Perfect to section */}
                <div className='flex flex-col gap-4 font-sans text-[16px] leading-[150%] text-primary'>
                    <h3 className="font-bold ">Perfect to</h3>
                    {/* <div className="space-y-2"> */}
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-blue-600" />
                        <span>Dress yourself up</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-blue-600" />
                        <span>Anniversary gifts for your loved one</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-blue-600" />
                        <span>Birthday or celebration gifts for friends and family</span>
                    </div>
                    {/* </div> */}
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex gap-4">
                    <div className="w-[191px] h-[64px] flex px-[46px] py-[16px] items-center border border-primary rounded-md text-[16px] font-sans text-primary font-bold justify-between">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}

                        >
                            −
                        </button>
                        <span className="">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}

                        >
                            +
                        </button>
                    </div>
                    <button className="w-[331px] h-[64px] flex-1 bg-[#25549E] text-white py-[14.5px] px-[21px] rounded-md font-sans font-bold hover:bg-blue-800 transition-colors">
                        GET MY HOODIE
                    </button>
                </div>

                {/* Payment methods */}
                <div className="flex justify-center items-center flex-col gap-4">
                    <div className='flex gap-3 justify-center items-center font-sans w-full'>
                        <div className='flex-1 border-t border-[#E0E0E0] ' />
                        <p className="text-[16px] leading-[150%] font-bold text-[#424242] whitespace-nowrap">Guaranteed SAFE Checkout</p>
                        <div className='flex-1 border-t border-[#E0E0E0]' />
                    </div>
                    <Payment />
                </div>
            </div>
        </div>

    );
};

export default ProductView;