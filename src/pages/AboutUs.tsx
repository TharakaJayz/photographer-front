import React from "react";
import HeaderSection from "../components/HeaderSection";
import { images, images2 } from "../assets/Images";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <div className="w-full ">
      <HeaderSection imgUrl={images[1]} title="About Us" desc="this is about us " TextLogic = {true} />
      <div className="w-full px-vw5 ">
        <div className="w-full h-vh100 bg-primary flex  gap-vw2 px-vw5 py-vh5 rounded-md">
          <section className="w-p50 flex flex-col justify-between items-center ">
            <img src={images[0]} alt="" className="object-cover object-center w-full h-vh30  "/>
            <div className="w-full h-p30 flex justify-between items-center">

                <img src={images2[3]} alt="" className="object-cover object-top w-p48 h-full  "/>
                <img src={images2[2]} alt="" className="object-cover object-center w-p48 h-full "/>
                
            </div>
            <img src={images[2]} alt="" className="object-cover object-top w-full h-p30 "/>
          </section>
          <section className="w-p50 text-white flex flex-col gap-vh3">
            

            <p>We're excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile... We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to</p>
            

                <p>We're excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile... We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to make your special day unique. Our commitment? A
            stress-free, relaxed, and fun experience led by an amazing team.
            Capturing that perfect moment? It all starts with a smile...We're
            excited to</p>
            

          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
