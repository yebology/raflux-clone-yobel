import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Advantage from "@/components/sections/Advantage";
import Collection from "@/components/sections/Collection";
import Hero from "@/components/sections/Hero";
import Marque from "@/components/sections/Marque";
import Mission from "@/components/sections/Mission";
import NFT from "@/components/sections/NFT";
import Promo from "@/components/sections/Promo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-kode min-w-screen bg-background">
      <Navbar />
      <Marque />
      <Hero />
      <Collection />
      <Promo />
      <div className="relative -mt-12">
        <Mission />
        <NFT />
        <Advantage />
        <Marque />
        <Footer />
      </div>
    </div>
  );
}
