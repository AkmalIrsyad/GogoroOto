import "@/styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // waktu animasi (dalam milidetik)
      easing: "ease-in-out", // jenis easing animasi
      once: true, // animasi hanya sekali
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
