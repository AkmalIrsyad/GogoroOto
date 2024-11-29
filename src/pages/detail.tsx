import Image from "next/image";
import React from 'react';
import Link from "next/link";


export default function Detail() {
    return (
        <>
            <div className="mt-[70px] container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0">
                    {/* Gambar Mobil */}
                    <div className="md:w-1/2">
                        <Image
                            src="/img/cammry.jpg" // Ganti dengan path gambar yang sesuai
                            alt="Car Image"
                            width={600} // Tentukan lebar gambar
                            height={400} // Tentukan tinggi gambar
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Card Informasi Mobil */}
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Rp 200.000.000</h2>
                        <div className="space-y-4">
                            <p><span className="font-semibold">Merk:</span> Toyota</p>
                            <p><span className="font-semibold">Tipe:</span> Fortuner</p>
                            <p><span className="font-semibold">Transmisi:</span> Automatic</p>
                            <p><span className="font-semibold">Kilometer:</span> 30.000 KM</p>
                            <p><span className="font-semibold">Tahun:</span> 2020</p>
                            <p><span className="font-semibold">Bahan Bakar:</span> Gasoline</p>

                            <div className="flex space-x-4">
                                {/* Menggunakan icon dari Font Awesome */}
                                <div className="flex items-center space-x-1">
                                    <i className="fas fa-cogs text-gray-600"></i>
                                    <span>Transmisi</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <i className="fas fa-tachometer-alt text-gray-600"></i>
                                    <span>Kilometer</span>
                                </div>
                            </div>

                            {/* Tombol Link */}
                            <Link href="/contact">
                                <button className="mt-6 inline-block bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition ease-in-out">
                                    Contact Seller
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}