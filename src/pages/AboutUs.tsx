import React from "react";
import HeaderSection from "../components/HeaderSection";
import { images, images2 } from "../assets/Images";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <div className="w-full ">
      <HeaderSection imgUrl={images[1]} title="About Us" desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc" TextLogic = {true} />
      <div className="w-full px-vw5 ">
        
        <div className="w-full h-vh100 bg-primary flex  gap-vw2 px-vw5 py-vh5 rounded-md xl2_:bg-white xl2_:flex-col-reverse xl2_:h-auto ">
          <section className="w-p50 xl2_:w-full flex flex-col justify-between items-center  xl2_:gap-vh5 ">
            <img src={images[0]} alt="" className="object-cover object-center w-full h-vh30 xl2_:h-vh50  lg2_:h-vh30 rounded-lg  shadow-md shadow-gray-400"/>
            <div className="w-full h-p30 flex justify-between items-center">

                <img src={images2[3]} alt="" className="object-cover object-top w-p48 h-full xl2_:h-vh75  lg2_:h-vh60  md_:h-vh50 rounded-lg shadow-md shadow-gray-400  "/>
                <img src={images2[2]} alt="" className="object-cover object-center w-p48 h-full xl2_:h-vh75 lg2_:h-vh60  md_:h-vh50 rounded-lg shadow-gray-400"/>
                
            </div>
            <img src={images[2]} alt="" className="object-cover object-top w-full h-p30 xl2_:h-vh50 lg2_:h-vh30 rounded-lg  shadow-gray-400"/>
          </section>
          <section className="w-p50 xl2_:w-full   text-white flex flex-col justify-start items-center gap-vh3 xl2_:bg-primary xl2_:px-vw5 xl2_:py-vh12 xl2_:rounded-xl">
            
              

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
