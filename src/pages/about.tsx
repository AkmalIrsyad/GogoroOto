import Image from "next/image";
import React from 'react';
import GoogleMap from "@/components/GoogleMaps";


export default function About() {
    return (
        <>
            <div className="font-montserrat">
                <main className="container mx-auto px-4 py-8">
                    <section
                        className="mt-8 flex flex-col md:flex-row items-start md:items-center md:space-x-8 border-b-2 border-black">

                        <div className="md:w-2/3 text-left" data-aos="fade-up">
                            <h1 className="text-3xl font-bold mb-4">
                                A YOUNG MAN PASSIONATE ABOUT LEARNING, PROGRAMMING, TECHNOLOGY, AND A TOUCH OF <span className="bg-red-500 italic text-white p-1">AUTOMOTIVE</span>. THAT'S
                                HOW THIS WEBSITE WAS BORN.
                            </h1>
                        </div>


                        <div className="md:w-2/3 text-gray-700 space-y-4 mb-4" data-aos="fade-up">
                            <p>
                                GogoroOto is a web platform that simplifies the buying and selling of both new and used cars. The website displays a catalog of cars with complete information, such as specifications, prices, and attractive images of the cars. Users can easily search for cars based on brand, type, year of manufacture, price, or condition (new/used).
                            </p>
                            <p>
                                This platform also features a data management system for users with various roles, such as admins, sellers, and buyers, and provides a secure transaction process. The communication feature between sellers and buyers facilitates easier and more efficient interaction.
                            </p>
                        </div>
                    </section>



                    <section
                        className="mt-8 flex flex-col md:flex-row items-start md:items-center md:space-x-8 border-b-2 border-black">
                        <div className="md:w-2/3 text-left" data-aos="fade-up">
                            <h1 className="text-3xl font-bold mb-4">
                                OWNER <i className="bg-red-500 text-white p-1">GogoroOto.</i>
                            </h1>
                        </div>
                        {/*  */}
                        <div className="md:w-2/6 text-gray-700 space-y-4 mb-4" data-aos="fade-up">
                            <Image
                                src="/img/bg1.JPG"
                                alt="Owner GogoroOto"
                                width={500}  // tentukan lebar langsung
                                height={400} // tentukan tinggi langsung
                                className="rounded-lg object-cover"
                            />
                        </div>

                    </section>


                    <section
                        className="mt-8 flex flex-col md:flex-row items-start md:items-center md:space-x-8 border-b-2 border-black">
                        <div className="md:w-1/3 text-left" data-aos="fade-up">
                            <h1 className="text-3xl font-bold mb-4">
                                SELLING <span className="bg-red-500 text-white italic p-1">BRANDS</span>
                            </h1>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700 mb-4" data-aos="fade-up">

                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/mazda.png"
                                    alt="Brand 1 Logo"
                                    width={100} // Tentukan lebar sesuai kebutuhan
                                    height={25} // Tentukan tinggi sesuai kebutuhan
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/toyota.png"
                                    alt="Brand 2 Logo"
                                    width={100}
                                    height={25}
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/honda.png"
                                    alt="Brand 3 Logo"
                                    width={100}
                                    height={25}
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <Image
                                    src="/img/landrover.png"
                                    alt="Brand 4 Logo"
                                    width={100}
                                    height={25}
                                    className="object-contain"
                                />
                            </div>

                        </div>
                    </section>

                    <section className="mt-12 py-12 px-6 md:px-16 border-b-2 border-black">
                        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                            OUR <span className="bg-red-500 text-white italic p-1">COMMITMENT</span>
                        </h2>
                        {/*  */}
                        <div className="mb-8">
                            <Image
                                src="/img/skyline.jpg"
                                alt="Owner GogoroOto"
                                width={1616} // Tentukan lebar gambar
                                height={100} // Tentukan tinggi gambar
                                className="rounded-lg object-cover" data-aos="fade-up"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="text-center" data-aos="fade-up">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                                    <i className="fas fa-car text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Premium Quality Cars</h3>
                                <p className="text-gray-700">
                                    At GogoroOto, we ensure every car meets the highest quality standards, giving you a
                                    reliable and satisfying driving experience.
                                </p>
                            </div>

                            <div className="text-center" data-aos="fade-up">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                                    <i className="fas fa-handshake text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Customer-Centric Service</h3>
                                <p className="text-gray-700">
                                    We prioritize your satisfaction by offering transparent pricing, honest advice, and exceptional
                                    customer service throughout your journey.
                                </p>
                            </div>

                            <div className="text-center" data-aos="fade-up">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                                    <i className="fas fa-seedling text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                                <p className="text-gray-700">
                                    We are committed to eco-friendly operations, including promoting hybrid and electric vehicles
                                    for a greener future.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/*  */}
                    <section className="mt-12 py-12 px-6 md:px-16 rounded-lg">
                        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
                            OUR <span className="bg-red-500 text-white italic p-1">LOCATION</span>
                        </h2>
                        {/*  */}
                        <div className="mb-8" data-aos="fade-up">
                            <GoogleMap
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.3022777599035!2d107.0357987745312!3d-6.2230407609470895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ec5afd63765%3A0xf59ee05355a33d29!2sBumi%20Anggrek%20Blok%20J%2CK%2CL!5e1!3m2!1sid!2sid!4v1732886659129!5m2!1sid!2sid"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="text-center" data-aos="fade-up">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                                    <i className="fas fa-car text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Premium Quality Cars</h3>
                                <p className="text-gray-700">
                                    At GogoroOto, we ensure every car meets the highest quality standards, giving you a
                                    reliable and satisfying driving experience.
                                </p>
                            </div>

                            <div className="text-center" data-aos="fade-up">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                                    <i className="fas fa-handshake text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Customer-Centric Service</h3>
                                <p className="text-gray-700">
                                    We prioritize your satisfaction by offering transparent pricing, honest advice, and exceptional
                                    customer service throughout your journey.
                                </p>
                            </div>

                            <div className="text-center" data-aos="fade-up">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-600 text-white flex items-center justify-center">
                                    <i className="fas fa-seedling text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                                <p className="text-gray-700">
                                    We are committed to eco-friendly operations, including promoting hybrid and electric vehicles
                                    for a greener future.
                                </p>
                            </div>
                        </div>
                    </section>


                    <section className="mt-12 py-12 bg-white mb-4 border-b-2" data-aos="fade-up">
                        <div className="container mx-auto px-6 md:px-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">VISSION</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        To become the leading automobile showroom in Indonesia by offering high-quality vehicles,
                                        exceptional customer service, and promoting innovation for a sustainable future.
                                    </p>
                                </div>

                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl font-semibold text-gray-800 mb-4">MISSION</h3>
                                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                                        <li>Provide customers with a wide range of premium and reliable vehicles at competitive
                                            prices.</li>
                                        <li>Deliver outstanding service by understanding customer needs and exceeding their
                                            expectations.</li>
                                        <li>Promote environmentally friendly practices by encouraging the use of hybrid and electric
                                            vehicles.</li>
                                        <li>Continuously improve and innovate to meet the evolving needs of the automotive industry.
                                        </li>
                                        <li>Foster long-term relationships with customers built on trust and transparency.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </>
    );
}