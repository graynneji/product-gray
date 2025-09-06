// import React, { useState } from 'react';
// // import Diamond from "../assets/diamond.svg?react"
// // import Eco from "../assets/eco-friendly.svg?react"
// // import Shipping from "../assets/shipping.svg?react"
// // import Group from "../assets/Group.svg?react"
// import { lazy } from 'react';

// const Diamond = lazy(() => import("../assets/diamond.svg?react"));
// const Eco = lazy(() => import("../assets/eco-friendly.svg?react"));
// const Shipping = lazy(() => import("../assets/shipping.svg?react"));
// const Group = lazy(() => import("../assets/Group.svg?react"));

// const ProductInfo: React.FC = () => {
//     const [activeTab, setActiveTab] = useState('OVERVIEW');

//     const tabs = ['OVERVIEW', 'SIZING', 'PACKAGING', 'SHIPPING & FREE RETURNS'];

//     const features = [
//         {
//             icon: (
//                 <Diamond />
//             ),
//             title: 'Premium Quality',
//             description: 'Prints that last a long time.\nAt GennCustom, we take product quality very seriously.'
//         },
//         {
//             icon: (
//                 <Shipping />
//             ),
//             title: 'Free Delivery',
//             description: 'Spend from $50 to get\nfree shipping worldwide with 24/7 order tracking.'
//         },
//         {
//             icon: (
//                 <Group />
//             ),
//             title: 'Easy Return',
//             description: 'If you\'re not happy with the order,\nship it back to us for an exchange - no extra cost.'
//         },
//         {
//             icon: (
//                 <Eco />
//             ),
//             title: 'Green packaging',
//             description: 'We care about our Planet, so your order will come plastic-free, recyclable & reusable!'
//         }
//     ];

//     return (
//         <div className='mx-auto px-[135px] pt-[72px] font-sans'>
//             {/* Tabs */}
//             <div className="flex border-b gap-10 border-[#E0E0E0]  mb-8">
//                 {tabs.map((tab: string) => (
//                     <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`pb-3.5 text-primary cursor-pointer text-[21px] leading-[150%] font-bold transition-colors ${activeTab === tab
//                             ? ' border-b-2 border-black'
//                             : ''
//                             }`}
//                     >
//                         {tab}
//                     </button>
//                 ))}
//             </div>

//             {/* Tab Content */}
//             {activeTab === 'OVERVIEW' && (
//                 <div className="">
//                     <div className="grid grid-cols-1 mb-[72px] lg:grid-cols-4 gap-[62px]">
//                         {/* Overview Section */}
//                         <div className='text-[16px] leading-[150%] lg:col-span-2'>
//                             <h3 className="font-bold text-primary mb-4">Overview</h3>
//                             <p className="text-[#424242] mb-6">
//                                 One of our most popular t-shirts for direct-to-garment printing.
//                             </p>
//                             <p className="text-[#424242] mb-8">
//                                 It's eco-friendly, unisex, and available in plenty of colour options. And it's manufactured not only to high quality standards but with garment decoration in mind. It's made for DTG, made for embroidery. There's a reason why countless online clothing brands use it as their staple hoodie! Find yours below.
//                             </p>

//                             <ul className="space-y-2 text-[#424242] pl-3">
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     Unisex style, medium fit. It's for everyone.
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     Round drawcords in matching body color.
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     1x1 rib at sleeve hem and bottom hem.
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     Flatlock topstitch on all seams.
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     Kangaroo pocket with flatlock topstitch.
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Material Section */}
//                         <div className='lg:col-span-1'>
//                             <h3 className="text-lg font-semibold text-black mb-4">Material</h3>
//                             <ul className="space-y-2 text-sm text-gray-600 mb-8">
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     85% Organic ring-spun Combed Cotton
//                                 </li>
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     15% Recycled Polyester.
//                                 </li>
//                             </ul>

//                             <h3 className="text-lg font-semibold text-black mb-4">Weight</h3>
//                             <ul className="space-y-2 text-sm text-gray-600">
//                                 <li className="flex items-start">
//                                     <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                                     270 gsm.
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Color Information Section */}
//                         <div className='lg:col-span-1'>
//                             <h3 className="text-lg font-semibold text-black mb-4">Color information</h3>
//                             <p className="text-gray-600 text-sm leading-6">
//                                 Color representation is only as accurate as the web design process allows.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Features Section */}
//                     <div className="py-[72px] px-[135px] bg-[#FAFBFC] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{
//                         paddingLeft: "-135px"
//                     }}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {features.map((feature, index) => (
//                                 <div key={index} className="text-center">
//                                     <div className="flex justify-center mb-8">
//                                         {feature.icon}
//                                     </div>
//                                     <h4 className="text-[16px] font-bold text-primary mb-2 leading-[150%]">
//                                         {feature.title}
//                                     </h4>
//                                     <p className="text-[16px] text-primary leading-[150%] whitespace-pre-line">
//                                         {feature.description}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Other tab contents would go here */}
//             {activeTab === 'SIZING' && (
//                 <div className="py-12 px-6">
//                     <h3 className="text-lg font-semibold text-primary mb-4">Sizing Information</h3>
//                     <p className="text-gray-600">Sizing content would go here...</p>
//                 </div>
//             )}

//             {activeTab === 'PACKAGING' && (
//                 <div className="py-12 px-6">
//                     <h3 className="text-lg font-semibold text-primary mb-4">Packaging Information</h3>
//                     <p className="text-gray-600">Packaging content would go here...</p>
//                 </div>
//             )}

//             {activeTab === 'SHIPPING & FREE RETURNS' && (
//                 <div className="py-12 px-6">
//                     <h3 className="text-lg font-semibold text-primary mb-4">Shipping & Returns</h3>
//                     <p className="text-gray-600">Shipping and returns content would go here...</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductInfo;


import React, { useState } from 'react';

// Convert to regular image imports to avoid Babel optimization warnings
import diamondIcon from "../assets/diamond.svg";
import ecoIcon from "../assets/eco-friendly.svg";
import shippingIcon from "../assets/shipping.svg";
import groupIcon from "../assets/Group.svg";

const ProductInfo: React.FC = () => {
    const [activeTab, setActiveTab] = useState('OVERVIEW');

    const tabs = ['OVERVIEW', 'SIZING', 'PACKAGING', 'SHIPPING & FREE RETURNS'];

    const features = [
        {
            icon: (
                <img src={diamondIcon} alt="Premium Quality" className="w-12 h-12" />
            ),
            title: 'Premium Quality',
            description: 'Prints that last a long time.\nAt GennCustom, we take product quality very seriously.'
        },
        {
            icon: (
                <img src={shippingIcon} alt="Free Delivery" className="w-12 h-12" />
            ),
            title: 'Free Delivery',
            description: 'Spend from $50 to get\nfree shipping worldwide with 24/7 order tracking.'
        },
        {
            icon: (
                <img src={groupIcon} alt="Easy Return" className="w-12 h-12" />
            ),
            title: 'Easy Return',
            description: 'If you\'re not happy with the order,\nship it back to us for an exchange - no extra cost.'
        },
        {
            icon: (
                <img src={ecoIcon} alt="Green packaging" className="w-12 h-12" />
            ),
            title: 'Green packaging',
            description: 'We care about our Planet, so your order will come plastic-free, recyclable & reusable!'
        }
    ];

    return (
        <div className='mx-auto px-[135px] pt-[72px] font-sans'>
            {/* Tabs */}
            <div className="flex border-b gap-10 border-[#E0E0E0] mb-8">
                {tabs.map((tab: string) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3.5 text-primary cursor-pointer text-[21px] leading-[150%] font-bold transition-colors ${activeTab === tab
                            ? ' border-b-2 border-black'
                            : ''
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'OVERVIEW' && (
                <div className="">
                    <div className="grid grid-cols-1 mb-[72px] lg:grid-cols-4 gap-[62px]">
                        {/* Overview Section */}
                        <div className='text-[16px] leading-[150%] lg:col-span-2'>
                            <h3 className="font-bold text-primary mb-4">Overview</h3>
                            <p className="text-[#424242] mb-6">
                                One of our most popular t-shirts for direct-to-garment printing.
                            </p>
                            <p className="text-[#424242] mb-8">
                                It's eco-friendly, unisex, and available in plenty of colour options. And it's manufactured not only to high quality standards but with garment decoration in mind. It's made for DTG, made for embroidery. There's a reason why countless online clothing brands use it as their staple hoodie! Find yours below.
                            </p>

                            <ul className="space-y-2 text-[#424242] pl-3">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Unisex style, medium fit. It's for everyone.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Round drawcords in matching body color.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    1x1 rib at sleeve hem and bottom hem.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Flatlock topstitch on all seams.
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Kangaroo pocket with flatlock topstitch.
                                </li>
                            </ul>
                        </div>

                        {/* Material Section */}
                        <div className='lg:col-span-1'>
                            <h3 className="text-lg font-semibold text-black mb-4">Material</h3>
                            <ul className="space-y-2 text-sm text-gray-600 mb-8">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    85% Organic ring-spun Combed Cotton
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    15% Recycled Polyester.
                                </li>
                            </ul>

                            <h3 className="text-lg font-semibold text-black mb-4">Weight</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    270 gsm.
                                </li>
                            </ul>
                        </div>

                        {/* Color Information Section */}
                        <div className='lg:col-span-1'>
                            <h3 className="text-lg font-semibold text-black mb-4">Color information</h3>
                            <p className="text-gray-600 text-sm leading-6">
                                Color representation is only as accurate as the web design process allows.
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="py-[72px] px-[135px] bg-[#FAFBFC] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{
                        paddingLeft: "-135px"
                    }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-8">
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-[16px] font-bold text-primary mb-2 leading-[150%]">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[16px] text-primary leading-[150%] whitespace-pre-line">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Other tab contents would go here */}
            {activeTab === 'SIZING' && (
                <div className="py-12 px-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">Sizing Information</h3>
                    <p className="text-gray-600">Sizing content would go here...</p>
                </div>
            )}

            {activeTab === 'PACKAGING' && (
                <div className="py-12 px-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">Packaging Information</h3>
                    <p className="text-gray-600">Packaging content would go here...</p>
                </div>
            )}

            {activeTab === 'SHIPPING & FREE RETURNS' && (
                <div className="py-12 px-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">Shipping & Returns</h3>
                    <p className="text-gray-600">Shipping and returns content would go here...</p>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;