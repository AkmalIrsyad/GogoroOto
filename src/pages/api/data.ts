const CARS: {
  name: string;
  description: string;
  price: string;
  year: string;
  fuelType: string;
  mileage: string;
  transmission: string;
  image: string;
  detailsLink: string;
}[] = [
    {
      name: "Mazda 3 Hatchback",
      description:
        "Mazda 3 Hatchback comes with a sporty design and superior performance. Equipped with advanced technology for driving comfort.",
      price: "Rp 450.000.000",
      year: "2023",
      fuelType: "Petrol",
      mileage: "10.000 KM",
      transmission: "Automatic",
      image: "/img/Mazda3.jpg",
      detailsLink: "https://example.com/mazda-3-hatchback-details",
    },
    {
      name: "Mazda Miata Roadster",
      description:
        "Mazda Miata Roadster, the iconic 2-seater sports car. Offers a fun driving experience with excellent handling.",
      price: "Rp 500.000.000",
      year: "2023",
      fuelType: "Petrol",
      mileage: "5.000 KM",
      transmission: "Manual",
      image: "/img/miata.jpeg",
      detailsLink: "https://example.com/mazda-miata-roadster-details",
    },
    {
      name: "Nissan Skyline R34",
      description:
        "Nissan Skyline R34, a legendary car with high performance. Known as a JDM icon with an amazing turbocharged engine.",
      price: "Rp 1.500.000.000",
      year: "2002",
      fuelType: "Petrol",
      mileage: "25.000 KM",
      transmission: "Manual",
      image: "/img/r34.jpg",
      detailsLink: "https://example.com/nissan-skyline-r34-details",
    },
    {
      name: 'Toyota Fortuner 2022',
      description: `SUV with luxurious design and advanced features, perfect for family trips and off-road driving.`,
      price: 'Rp 600.000.000',
      year: '2022',
      fuelType: 'Diesel',
      mileage: '30.000 KM',
      transmission: 'Automatic',
      image: '/img/fortuner.jpg',
      detailsLink: 'https://example.com/toyota-fortuner-details',
    },
    {
      name: 'Honda Civic 2021',
      description: `A sedan with sporty design, fuel-efficient, and comfortable for daily use.`,
      price: 'Rp 350.000.000',
      year: '2021',
      fuelType: 'Petrol',
      mileage: '20.000 KM',
      transmission: 'Manual',
      image: '/img/civic.jpg',
      detailsLink: 'https://example.com/honda-civic-details',
    },
    {
      name: 'Suzuki Swift 2020',
      description: `A compact and affordable hatchback suitable for city driving.`,
      price: 'Rp 180.000.000',
      year: '2020',
      fuelType: 'Petrol',
      mileage: '50.000 KM',
      transmission: 'Automatic',
      image: '/img/swift.jpg',
      detailsLink: 'https://example.com/suzuki-swift-details',
    },
    {
      name: 'Mazda CX-5 2021',
      description: `A stylish crossover SUV offering premium features and performance.`,
      price: 'Rp 500.000.000',
      year: '2021',
      fuelType: 'Petrol',
      mileage: '25.000 KM',
      transmission: 'Automatic',
      image: '/img/mazdaCx5.jpg',
      detailsLink: 'https://example.com/mazda-cx5-details',
    },
    {
      name: 'Toyota Camry 2022',
      description: `A sleek sedan offering comfort, luxury, and a smooth ride with advanced safety features.`,
      price: 'Rp 650.000.000',
      year: '2022',
      fuelType: 'Petrol',
      mileage: '15.000 KM',
      transmission: 'Automatic',
      image: '/img/cammry.jpg',
      detailsLink: 'https://example.com/toyota-camry-details',
    },
    {
      name: 'Hyundai Palisade 2022',
      description: `A full-size SUV that combines luxury, power, and space for family trips.`,
      price: 'Rp 800.000.000',
      year: '2022',
      fuelType: 'Petrol',
      mileage: '20.000 KM',
      transmission: 'Automatic',
      image: '/img/Palisade.jpg',
      detailsLink: 'https://example.com/hyundai-palisade-details',
    },
    {
      name: 'Kia EV9 2023',
      description: `A futuristic electric SUV combining powerful performance and innovative design.`,
      price: 'Rp 1.200.000.000',
      year: '2023',
      fuelType: 'Electric',
      mileage: '3.000 KM',
      transmission: 'Automatic',
      image: '/img/kia-ev-9.jpg',
      detailsLink: 'https://example.com/kia-ev9-details',
    },
    {
      name: 'Toyota FT86 2022',
      description: `A compact sports coupe known for its agile handling and performance-oriented design.`,
      price: 'Rp 350.000.000',
      year: '2022',
      fuelType: 'Petrol',
      mileage: '10.000 KM',
      transmission: 'Manual',
      image: '/img/ft86.jpg',
      detailsLink: 'https://example.com/toyota-ft86-details',
    },
    {
      name: 'Subaru BRZ 2022',
      description: `A rear-wheel-drive sports car with sharp handling and a lightweight, performance-focused design.`,
      price: 'Rp 400.000.000',
      year: '2022',
      fuelType: 'Petrol',
      mileage: '8.000 KM',
      transmission: 'Manual',
      image: '/img/brz.jpg',
      detailsLink: 'https://example.com/subaru-brz-details',
    },
  ];

export default CARS;
