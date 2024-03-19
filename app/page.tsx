import Image from "next/image";
import { Navbar, Footer } from "@/components";
// import Landing from "./Landing";
import Project from "./Project";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col">
    <main>
      {/* <Landing /> */}
      {/* <Navbar/> */}
      <Project />
    </main>
  );
}
