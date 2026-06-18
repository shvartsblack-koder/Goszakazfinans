import React from "react";
import Navbar from "@/components/layout/Navbar";
import QuickQuoteBar from "@/components/layout/QuickQuoteBar";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import PartnersSection from "@/components/home/PartnersSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import RequestForm from "@/components/home/RequestForm";
import FooterSection from "@/components/home/FooterSection";

const HERO_IMAGE = "https://media.base44.com/images/public/6a31381eb797dcc10bc2dd54/fb5ed1d1a_generated_e32f8638.png";
const SERVICES_IMAGE = "https://media.base44.com/images/public/6a31381eb797dcc10bc2dd54/b566eedd5_generated_a181a0b1.png";
const ABOUT_IMAGE = "https://media.base44.com/images/public/6a31381eb797dcc10bc2dd54/250540479_generated_8bf93a3c.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ServicesSection bgImage={SERVICES_IMAGE} />
      <AboutSection bgImage={ABOUT_IMAGE} />
      <HowItWorksSection />
      <AdvantagesSection />
      <PartnersSection />
      <RequestForm />
      <FooterSection />
      <QuickQuoteBar />
    </div>
  );
}