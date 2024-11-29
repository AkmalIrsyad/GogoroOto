import Image from "next/image";
import CARS from "@/pages/api/data"
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <section className="p-6 mt-[70px]">
        <h2 className="text-4xl font-bold text-center mb-8">
          AVAILABLE <span className="bg-red-500 text-white italic p-1">CARS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARS.map((cars) => {
            // Membuat ID unik dari nama mobil (slugify)
            const carId = cars.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={carId} className="border rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={cars.image}
                  alt={cars.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cars.name}</h3>
                  <p className="text-sm text-gray-500">{cars.description}</p>
                  <div className="mt-3">
                    <p>
                      <span className="font-bold">Price:</span> {cars.price}
                    </p>
                    <p>
                      <span className="font-bold">Transmission:</span> {cars.transmission}
                    </p>
                    <p>
                      <span className="font-bold">Kilometer:</span> {cars.mileage}
                    </p>
                    <p>
                      <span className="font-bold">Fuel Type:</span> {cars.fuelType}
                    </p>
                    <p>
                      <span className="font-bold">Year:</span> {cars.year}
                    </p>
                  </div>
                  <Link
                    href={`/car/${carId}`} // Link ke halaman detail berdasarkan ID
                    className="mt-4 flex border bg-red-500 text-white px-4 py-2 rounded hover:bg-white hover:border-red-500 hover:text-black transition ease-in-out"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

