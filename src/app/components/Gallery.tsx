import React from 'react'
import { imgSources } from '../libs/constants'
import Image from 'next/image'

export default function Gallery() {

  function renderGallery() {
    return imgSources.map(imgSource => {
      return (
        <figure key={imgSource}>
          <Image src={imgSource} alt={imgSource} width={0} height={0} sizes="100vw" style={{width: '100%', height: "auto"}} className="ring-4 ring-white rounded-xl" />
        </figure>
      )
    }) 
  }

  return (
    <section className="text-white flex flex-col items-center justify-center gap-10 min-h-[90vh] w-80 md:w-160 lg:w-230 xl:w-300 2xl:w-350 mx-auto">
      <h2 className="text-6xl md:text-7xl lg:text-8xl text-center font-extrabold">Some of My Work</h2>
      <section className="columns-1 md:columns-2 lg:columns-3 space-y-5">
        {renderGallery()}
      </section>
    </section>
  )
}
