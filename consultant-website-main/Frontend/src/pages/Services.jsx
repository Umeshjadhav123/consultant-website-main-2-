import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div ref={cardRef} className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<AiOutlineRise />}
          title="Investment Planning"
          description="Customized investment plans tailored to your financial objectives and risk tolerance."
        />
        <ServiceCard
          icon={<FaMoneyBill1Wave />}
          title="Portfolio Management"
          description="Professional management of your investment portfolio to maximize returns."
        />
        <ServiceCard
          icon={<MdSupportAgent />}
          title="Financial Advisory"
          description="Expert financial advice to guide your investment decisions and strategy."
        />
        <ServiceCard
          icon={<RiPresentationFill />}
          title="Market Research  "
          description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
        />
        <ServiceCard
          icon={<FaChartLine />}
          title="Business Strategy"
          description="Develop winning strategies to drive your business forward."
        />
        <ServiceCard
          icon={<FaUsers />}
          title="Team Management"
          description="Optimize your team's performance and productivity."
        />
        <ServiceCard
          icon={<FaLightbulb />}
          title="Innovation Consulting"
          description="Foster a culture of innovation in your organization."
        />
      </div>
    </div>
  );
};

export default Services;
