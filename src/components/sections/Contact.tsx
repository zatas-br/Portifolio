'use client'

import ContactForm from "@/src/components/ui/ContactForm";

export default function Contact() {
  return (
    <ContactForm 
      withSubmitLogic={true} 
      className="relative w-full bg-[#ECEFF1] pt-32 pb-0 min-h-screen flex flex-col" 
      innerClassName="bg-[#1e40af] rounded-tl-[80px] w-full px-4 py-20 md:px-12 lg:px-24 flex-1 flex items-center" 
    />
  );
}
