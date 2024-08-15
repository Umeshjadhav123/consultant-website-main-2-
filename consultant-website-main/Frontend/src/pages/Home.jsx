import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const heroImageRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const cta = ctaRef.current;
    const heroImage = heroImageRef.current;

    gsap.from(header, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
      },
    });

    gsap.from(cta, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cta,
        start: "top 80%",
      },
    });

    // gsap.from(heroImage, {
    //   opacity: 0,
    //   scale: 0.2,
    //   duration: 1,
    //   ease: "power3.out",
    //   scrollTrigger: {
    //     trigger: heroImage,
    //     start: "top 80%",
    //   },
    // });

    // gsap.to(heroImage, {
    //   opacity: 1,
    //   duration: 1,
    //   ease: "power3.out",
    //   delay: 1,
    //   scrollTrigger: {
    //     trigger: heroImage,
    //     start: "top 80%",
    //   },
    //   scale: 0.25,
    // });
  }, []);

  return (
    <div
      className="container mx-auto px-4 py-16 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#18234d75",
        height: `90vh`,
      }}
    >
      <header ref={headerRef} className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 gap-4">
          Expert Investment
          <br /> Consulting Services.
        </h1>
        <p className="text-xl text-white p-4">
          We provide tailored investment strategies to help you achieve your
          financial goals.
        </p>
      </header>
      {/* <div ref={heroImageRef} className="mb-12 h-fit w-fit">
        <img
          src={logo}
          alt="Investment Consulting"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />
      </div> */}
      <div ref={ctaRef} className="text-center">
        <Link
          to="/services"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
};

export default Home;
