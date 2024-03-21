"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Footer, Sidebar } from "@/components";
import Landing from "./Landing";
import About from "./About";
import Project from "./Project";
import Experience from "./Experience";
import Contact from './Contact';

export default function Home() {
  const landingRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (landingRef.current) {
      observer.observe(landingRef.current);
    }

    return () => {
      if (landingRef.current) {
        observer.unobserve(landingRef.current);
      }
    };
  }, []);
  return (
    <main>
      {showSidebar && <Sidebar />}
      <Landing ref={landingRef} />
      <Navbar/>
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
