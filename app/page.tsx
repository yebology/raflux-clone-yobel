import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Advantage from "@/components/sections/Advantage";
import Advantage2 from "@/components/sections/Advantage2";
import Announcement from "@/components/sections/Announcement";
import Collection from "@/components/sections/Collection";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Marque from "@/components/sections/Marque";
import Mission from "@/components/sections/Mission";
import NFT from "@/components/sections/NFT";
import Promo from "@/components/sections/Promo";
import Slogan from "@/components/sections/Slogan";

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
        <Slogan />
        <Advantage2 />
        <Announcement />
        <CTA />
        <Marque />
        <Footer />
      </div>
    </div>
  );
}
