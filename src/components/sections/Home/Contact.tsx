"use client";

import ContactForm from "@/src/components/ui/ContactForm";

export default function ContactSection() {
  return (
    <ContactForm 
      withSubmitLogic={false} 
      className="relative w-full bg-[#ECEFF1] pt-10 pb-0" 
      innerClassName="bg-[#1e40af] rounded-tl-[80px] w-full px-4 py-20 md:px-12 lg:px-24" 
    />
  );
}
