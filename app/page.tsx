"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Footer, Sidebar } from "@/components";
import Landing from "./Landing";
import About from "./About";
import Current from './Current';
import Project from "./Project";
import Experience from "./Experience";
import Contact from './Contact';

export default function Home() {
  const landingRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = landingRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <main>
      {showSidebar && <Sidebar />}
      <Landing ref={landingRef} />
      <Navbar/>
      <About />
      <Current />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
