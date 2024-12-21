// pages/404.js
import Image from "next/image";

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Image
                src={"/img/404.png"}
                alt="404 page"
                width={200}
                height={200}
            />
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4 text-gray-700">
                Page Not Found.
            </p>
            <a
                href="/"
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
                Return to Home
            </a>
        </div>
    );
}
