import React, { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import CategoryCard from '../components/portfolio/CategoryCard'
import { images } from '../assets/Images'
import { albums, albumTypes } from '../assets/details';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { Link } from 'react-router-dom';



interface Props {

}


const Portfolio = (props: Props) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const setTypeFromCard = (value: string) => {
    setSelectedType(value);
  }
  return (
    <div className='w-full'>
      <HeaderSection imgUrl={"https://www.danushkasenadeera.lk/wp-content/uploads/2022/10/01.jpg"} title="Portfolio" desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc" TextLogic={true} />
      <div className='w-full px-vw5 bg'>
        <div className='w-full flex flex-col gap-vh5 '>
          <section className='w-full flex justify-between items-center '>
            <CategoryCard svg={""} title={albumTypes[0]} onClickAction={setTypeFromCard} desc='See our wedding albums' />
            <CategoryCard svg={""} title={albumTypes[1]} onClickAction={setTypeFromCard} desc='See our engagement albums' />
            <CategoryCard svg={""} title={albumTypes[2]} onClickAction={setTypeFromCard} desc='See our pre-shoots albums' />

          </section>

          {(selectedType === "") && (
            <section className='w-full flex flex-wrap justify-between  items-center   gap-vh3 '>

              {albums.map((singleAlbum => {

                return <PortfolioCard title={singleAlbum.type} desc={singleAlbum.name} imgUrl={singleAlbum.imgUrl} />
              }))}

            </section>
          )}

          {(selectedType !== "") && (
            <section className='w-full flex flex-wrap justify-start items-center   gap-vh5 lg_:gap-vh2 lg_:justify-between '>

              {albums.map((singleAlbum => {
                    if(singleAlbum.type === selectedType){

                      return <PortfolioCard title={singleAlbum.type} desc={singleAlbum.name} imgUrl={singleAlbum.imgUrl} />
                    }
              }))}

            </section>
          )}


        </div>
      </div>

    </div>
  )
}

export default Portfolio
