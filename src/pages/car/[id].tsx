import { useRouter } from "next/router";
import CARS from "@/pages/api/data";
import Image from "next/image";
import { FaCheckCircle, FaRegClipboard, FaShieldAlt } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function CarDetail() {
    const router = useRouter();
    const { id } = router.query;

    const car = CARS.find((car) => car.name.toLowerCase().replace(/\s+/g, '-') === id);

    if (!car) {
        return <p>Car not found</p>;
    }

    const generatePDF = async () => {
        const element = document.getElementById("car-detail");
        if (element) {
            const canvas = await html2canvas(element);
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${car.name}.pdf`);
        }
    };

    return (
        <div className="p-6 mt-[70px]">
            <h2 className="text-4xl font-bold text-center mb-8">{car.name}</h2>
            <div id="car-detail" className="flex flex-col md:flex-row gap-6">
                <Image
                    src={car.image}
                    alt={car.name}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl"
                />
                <div className="flex flex-col p-4">
                    <h3 className="text-xl font-semibold">Details</h3>
                    <p className="text-sm text-gray-500">{car.description}</p>
                    <div className="mt-3">
                        <p><span className="font-bold">Price:</span> {car.price}</p>
                        <p><span className="font-bold">Transmission:</span> {car.transmission}</p>
                        <p><span className="font-bold">Kilometer:</span> {car.mileage}</p>
                        <p><span className="font-bold">Fuel Type:</span> {car.fuelType}</p>
                        <p><span className="font-bold">Year:</span> {car.year}</p>
                    </div>

                    {/* Tombol Chat */}
                    <a
                        href={`https://wa.me/6285883311259`}
                        className="mt-4 flex border bg-red-500 text-white px-4 py-2 rounded hover:bg-white hover:border-red-500 hover:text-black transition ease-in-out"
                    >
                        Chat With Seller
                    </a>
                </div>
            </div>

            {/* Card Deskripsi */}
            <div className="mt-8 bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Car Benefits</h3>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <FaShieldAlt className="text-green-500 mr-2" />
                        <p><span className="font-bold">Warranty:</span> 1 Year Warranty</p>
                    </div>
                    <div className="flex items-center">
                        <FaCheckCircle className="text-blue-500 mr-2" />
                        <p><span className="font-bold">Gogoro Oto Certified:</span> Certified by Gogoro</p>
                    </div>
                    <div className="flex items-center">
                        <FaRegClipboard className="text-yellow-500 mr-2" />
                        <p><span className="font-bold">Inspection:</span> Passed all inspections</p>
                    </div>
                </div>
            </div>

            {/* Tombol Generate PDF */}
            <button
                onClick={generatePDF}
                className="mt-4 flex bg-red-500 text-white px-4 py-2 rounded hover:bg-white hover:border-red-500 hover:text-black transition ease-in-out"
            >
                Download PDF
            </button>
        </div>
    );
}
