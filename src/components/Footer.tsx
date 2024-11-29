import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='mt-[60px]'>
            <section className="mt-4 border-b-2">
                <div className="text-black py-4 overflow-hidden">
                    <div className="marquee text-3xl font-semibold">
                        Stay Safe & Driving Chills | Stay Safe & Driving Chills | Stay Safe & Driving Chills | Stay Safe & Driving Chills | Stay Safe & Driving Chills
                    </div>
                </div>
            </section>

            <footer className=" text-black py-8">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div>
                            <h3 className="text-xl font-semibold mb-4">About Us</h3>
                            <p className="text-black">At GogoroOto, we are committed to offering the best vehicles to
                                our customers. Whether you're looking for a new or used car, we've got you covered with
                                top-quality models and reliable customer service.</p>
                        </div>


                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul>
                                <li><Link href="/" className='text-black hover:text-gray-500'>Home</Link></li>
                                <li><Link href="/about" className='text-black hover:text-gray-500'>About</Link></li>
                                <li><Link href="https://wa.me/6285883311259" className='text-black hover:text-gray-500'>Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <p className="text-black">Feel free to reach out to us for any inquiries or support. We are here
                                to assist you!</p>
                            <ul className="mt-4">
                                <li><a href="mailto:akmalirsyad137@gmail.com"
                                    className="text-black hover:text-white">akmalirsyad137@gmail.com</a></li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-6">
                                <a href="https://www.instagram.com/_akmalirsyad/" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCChj7ztXFL7f9D_QmNqsfQw" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t-2 border-black pt-4 text-center">
                        <p className="text-sm text-gray-400">© 2024 GogoroOto. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;