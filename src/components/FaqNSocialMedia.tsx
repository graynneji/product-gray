import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Instagram } from 'lucide-react';
import Hover from "../assets/Hover&Pressed.svg?react"
import Neutra1 from "../assets/Neutral-1.svg?react"
import Neutra2 from "../assets/Neutral-2.svg?react"
import Neutra from "../assets/Neutral.svg?react"
import ArrowRight from "../assets/Vector.svg?react"
import ArrowLeft from "../assets/Vector(1).svg?react"

const FaqNSocialMedia: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);
    const [currentSlide, _setCurrentSlide] = useState(0);

    const faqs = [
        {
            question: "Why do I have to choose a high-resolution image for my printed product?",
            answer: "Please understand that our print is entirely based on what image you share with us. Using an image with a resolution of at least 300dpi will make your product look its best."
        },
        {
            question: "Can I make changes to my order once it has been placed?",
            answer: "Once your order has been placed and confirmed, changes may not be possible as we begin processing immediately. Please contact our customer service team as soon as possible if you need to make changes."
        },
        {
            question: "Can I cancel my order if I change my mind?",
            answer: "Orders can typically be cancelled within 24 hours of placement, before production begins. After this time, cancellations may not be possible. Please contact us immediately if you need to cancel."
        },
        {
            question: "How do I track my order?",
            answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website. You can also check your order status in your account dashboard."
        },
        {
            question: "How long before I get my return refund?",
            answer: "Once we receive your returned item and it passes our quality check, refunds are typically processed within 5-7 business days. The refund will be issued to your original payment method."
        }
    ];

    const socialImages = [
        {
            id: 1,
            image: Hover,
            alt: "Couple wearing matching hoodies"
        },
        {
            id: 2,
            image: Neutra,
            alt: "Person wearing custom cap"
        },
        {
            id: 3,
            image: Neutra1,
            alt: "Friends wearing custom t-shirts"
        },
        {
            id: 4,
            image: Neutra2,
            alt: "Custom tote bag display"
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % Math.max(1, socialImages.length - 3));
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + Math.max(1, socialImages.length - 3)) % Math.max(1, socialImages.length - 3));
    // };

    return (
        <div className=" ">
            {/* FAQ Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[62px] mb-20  w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#FAFBFC] mx-auto px-[135px] py-[72px]">
                {/* Left Side - FAQ Header */}
                <div>
                    <h2 className="text-[38px] font-serif leading-[120%] text-primary mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#424242] text-[21px] leading-[150%] font mb-2">
                        If you haven't found the answer you need, <br />

                        email us at <span className="font-bold">gemcustom@gmail.com!</span>
                    </p>
                </div>

                {/* Right Side - FAQ List */}
                <div className="">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-[#E0E0E0] mb-[16px] py-6 px-[32px]">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-primary font-bold text-[16px] pr-4">
                                    {faq.question}
                                </span>
                                {openFAQ === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                )}
                            </button>

                            {openFAQ === index && (
                                <div className="animate-in slide-in-from-top-2 duration-200">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Media Section */}
            <div className="px-[135px] py-[72px]">
                <div className='text-center mb-[56px]'>

                    <h2 className="text-[38px] font-serif leading-[120%] text-primary mb-2">
                        You Should Be The Next One Here!
                    </h2>
                    <p className="text-[#424242] text-[21px] font-bold font-sans">
                        Follow us at <span className=" text-primary">@GemCustom</span> and use the hashtag <span className="font-bold text-primary">#GemCustom</span> to be featured
                    </p>
                </div>


                {/* Social Images Carousel */}
                <div className="relative">
                    <div className="flex items-center justify-center gap-[8px]">


                        {/* Images Grid */}
                        {/* <div className="flex gap-6 max-w-5xl mx-auto overflow-hidden"> */}
                        {socialImages.map((item, _index) => (
                            <div
                                key={item.id}
                                className="relative gap-[8px]"
                                style={{
                                    transform: `translateX(-${currentSlide * 100}%)`
                                }}
                            >
                                <item.image />

                                {/* Instagram overlay icon */}
                                <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full">
                                    <Instagram className="w-5 h-5 text-gray-700" />
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className='flex justify-center items-center gap-6 mt-[32px]'>
                        <p className='w-[48px] h-[48px] rounded-[40px] border p-3 border-[#EdEEEE] flex justify-center items-center'><ArrowLeft /></p>
                        <p className='w-[48px] h-[48px] rounded-[40px] border p-3 border-[#EdEEEE] flex justify-center items-center'><ArrowRight /></p>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default FaqNSocialMedia;