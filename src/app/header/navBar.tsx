//
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { FaBars, FaTimes } from 'react-icons/fa';
//
// export default function NavBar() {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
//
//     return (
//         <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/background.png')"}}>
//             <Image
//                 src="/Rectangle 1.png"
//                 alt=""
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0 z-10 opacity-35"
//             />
//             <div className="relative flex items-center justify-between px-4 py-4 z-20">
//                 <div className="flex items-center">
//                     <Image src="/Rectangle 2@2x.png" alt="" width={87} height={50} />
//                 </div>
//                 <div className="hidden md:flex items-center space-x-6 text-white cursor-pointer z-20">
//                     <h2 className="text-xl">About</h2>
//                     <h2 className="text-xl">Services</h2>
//                     <h2 className="text-xl">Process</h2>
//                     <h2 className="text-xl">Work</h2>
//                     <h2 className="text-xl">Pricing</h2>
//                     <h2 className="text-xl">FAQS</h2>
//                     <button className="px-4 py-2 border text-white rounded-md" style={{border: "1px solid #6881FF"}}>Book a call</button>
//                 </div>
//                 <div className="md:hidden flex items-center z-20">
//                     <button onClick={toggleMenu} className="text-white focus:outline-none">
//                         {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                     </button>
//                 </div>
//             </div>
//
//             {isOpen && (
//                 <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90 border border-blue-500 rounded-md z-30">
//                     <ul className="flex flex-col space-y-4 px-4 py-2 text-blue-500">
//                         <li className="hover:text-gray-400 cursor-pointer">About</li>
//                         <li className="hover:text-gray-400 cursor-pointer">Services</li>
//                         <li className="hover:text-gray-400 cursor-pointer">Process</li>
//                         <li className="hover:text-gray-400 cursor-pointer">Work</li>
//                         <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
//                         <li className="hover:text-gray-400 cursor-pointer">FAQS</li>
//                         <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//                             Book a call
//                         </button>
//                     </ul>
//                 </div>
//             )}
//
//             <div className="px-4 text-center mt-32 text-white">
//                 <h1 className="font-extrabold text-3xl md:text-4xl">Empowering Lives Through <br/>
//                     Innovative AI Technologies.
//                 </h1>
//                 <h2 className="mt-7 text-lg md:text-xl mx-auto max-w-xl">Finding new horizons for visionaries to accelerate their innovation and progress.</h2>
//                 <div className="flex flex-col md:flex-row justify-center mt-7 space-y-4 md:space-y-0 md:space-x-4">
//                     <button style={{backgroundColor: "#6881FF"}} className="w-full md:w-56 h-12 md:h-14 rounded-md">
//                         Explore Our Services
//                     </button>
//                     <button style={{border: "1px solid #6881FF"}} className="rounded-md w-full md:w-40 h-12 md:h-14">
//                         Learn more
//                     </button>
//                 </div>
//                 <p className="mt-9 text-lg md:text-xl mx-auto max-w-2xl">From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨ From Ideas to</p>
//             </div>
//         </div>
//     );
// }

"use client"
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/background.png')"}}>
            <Image
                src="/Rectangle 1.png"
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-10 opacity-35"
            />
            <div className="relative flex items-center justify-between px-4 py-4 z-20 rounded-md">
                <Image
                    src="/Rectangle 1.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-10 opacity-35"
                />
                <div className="relative z-20 ml-40">
                    <Image src="/Rectangle 2@2x.png" alt="" width={87} height={50}/>
                </div>
                <div className="hidden md:flex relative items-center space-x-12 text-white cursor-pointer z-20 mr-40">
                    <h2 className="text-xl">Services</h2>
                    <h2 className="text-xl">Work</h2>
                    <h2 className="text-xl">FAQS</h2>
                    <button className="relative px-4 py-2 border text-white rounded-md"
                            style={{border: "1px solid #6881FF"}}>Book a call
                    </button>
                </div>
                <div className="md:hidden flex items-center z-20">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div
                    className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90 border border-blue-500 rounded-md z-30">
                    <ul className="flex flex-col space-y-4 px-4 py-2 text-blue-500">
                        <li className="hover:text-gray-400 cursor-pointer">Services</li>
                        <li className="hover:text-gray-400 cursor-pointer">Work</li>
                        <li className="hover:text-gray-400 cursor-pointer">FAQS</li>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Book a call
                        </button>
                    </ul>
                </div>
            )}

            <div className="px-4 text-center mt-32 text-white">
                <h1 className="font-extrabold text-3xl md:text-4xl">Empowering Lives Through <br/>
                    Innovative AI Technologies.
                </h1>
                <h2 className="mt-7 text-lg md:text-xl mx-auto max-w-xl">Finding new horizons for visionaries to
                    accelerate their innovation and progress.</h2>
                <div className="flex flex-col md:flex-row justify-center mt-7 space-y-4 md:space-y-0 md:space-x-4">
                    <button style={{backgroundColor: "#6881FF"}} className="w-full md:w-56 h-12 md:h-14 rounded-md">
                        Explore Our Services
                    </button>
                    <button style={{border: "1px solid #6881FF"}} className="rounded-md w-full md:w-40 h-12 md:h-14">
                        Learn more
                    </button>
                </div>
                <div className="w-full overflow-hidden relative mt-9">
                    <p className="text-lg md:text-xl mx-auto animate-marquee whitespace-nowrap">
                        From Ideas to Software Solutions 💡✨ From Ideas to Software Solutions 🌟✨ From Ideas to
                    </p>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(50%);
                    }
                    100% {
                        transform: translateX(-150%);
                    }
                }

                .animate-marquee {
                    display: inline-block;
                    animation: marquee 15s linear infinite;
                }
            `}</style>
        </div>
    );
}
