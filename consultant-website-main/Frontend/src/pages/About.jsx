import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef(null);

  const AboutCard = ({ sun, topic, desc, isLeft }) => (
    <div
      className={`timeline-item relative mb-8 p-6 bg-white shadow-lg rounded-lg ${
        !isLeft ? "timeline-left" : "timeline-right"
      }`}
    >
      <div
        className={`absolute w-4 h-4 bg-blue-500 rounded-full mt-2 ${
          isLeft ? "left-0 -ml-2" : "right-0 -mr-2"
        }`}
      ></div>
      <div className={`flex ${isLeft ? "justify-end" : "justify-start"}`}>
        <div className={`${isLeft ? "text-right" : "text-left"}`}>
          <h3 className="text-xl font-semibold mb-2">
            {sun}: {topic}
          </h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play none none none",
      },
    });

    timeline.from(".timeline-item", {
      opacity: 0,
      y: 50,
      stagger: 0.5,
    });
  }, []);

  const aboutCardsData = [
    {
      sun: 2010,
      topic: "Founded",
      desc: "Sajan Investment was established with a vision to transform businesses.",
    },
    {
      sun: 2015,
      topic: "Expansion",
      desc: "We expanded our services and team to meet growing demand.",
    },
    {
      sun: 2020,
      topic: "Global Reach",
      desc: "Sajan Investment now serves clients worldwide, driving innovation globally.",
    },
    {
      sun: 2010,
      topic: "Personalized Financial Planning",
      desc: "Our customized financial plans are designed to meet your unique needs and objectives, ensuring a secure and prosperous financial future.",
    },
    {
      sun: 2010,
      topic: "Comprehensive Portfolio Management",
      desc: "We provide expert management of your investment portfolio to maximize returns and minimize risks, helping you achieve your financial goals.",
    },
    {
      sun: 2010,
      topic: "Dedicated Client Support",
      desc: "Our team is available around the clock to provide support and answer any questions you may have, ensuring a seamless investment experience.",
    },
    {
      sun: 2010,
      topic: "Market Insights and Analysis",
      desc: "Stay informed with our detailed market insights and analysis, helping you make well-informed investment decisions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Our Journey
      </h2>
      <div ref={timelineRef} className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>
        <div className="flex flex-col items-center">
          {aboutCardsData.map((card, index) => (
            <AboutCard
              key={index}
              sun={card.sun}
              topic={card.topic}
              desc={card.desc}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
