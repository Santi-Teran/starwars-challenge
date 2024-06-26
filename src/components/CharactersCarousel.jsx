'use client'
import React, { useCallback } from 'react';
import Image from 'next/image';
import characterss from '../../public/characters.png';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const CharactersCarousel = ( {characters} ) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='flex mx-auto'>
      <button className="text-4xl" onClick={scrollPrev}><MdNavigateBefore /></button>
      <div className="overflow-hidden max-w-40 md:max-w-lg" ref={emblaRef}>
        <div className="flex">
          {characters.map((character, index) => (
          <div key={index} className="embla__slide justify-center flex items-center flex-col">
            <Link href={`/characters/${character.url}`} className='hover:scale-125 transition-all'>
              <Image src={characterss} alt={character.name} />
            </Link>
            <p>{character.name.toUpperCase()}</p>
          </div>
        ))}
        </div>
      </div>
      <button className="text-4xl" onClick={scrollNext}><MdNavigateNext /></button>
    </div>
  )
}

export default CharactersCarousel;
