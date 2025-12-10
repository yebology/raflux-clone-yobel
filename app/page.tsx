"use client";

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
import Sale from "@/components/sections/Sale";
import Slogan from "@/components/sections/Slogan";
import Space from "@/components/sections/Space";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrambleDone = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
      scrub: true,
      pinType: "transform", // pastikan pakai transform bukan fixed
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !scrambleDone.current) {
          scrambleDone.current = true;
          observer.disconnect();
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-kode min-w-screen bg-background overflow-hidden scroll-smooth">
      <Navbar />
      <div ref={sectionRef}>
        <Marque />
        <Hero />
        <Collection />
        <Promo />
      </div>
      <div className="relative -mt-12">
        <Mission />
        <NFT />
        <Advantage />
        <Slogan />
        <Advantage2 />
        <Announcement />
        <Sale />
        <Space />
        <CTA />
        <Marque />
        <Footer />
      </div>
    </div>
  );
}
