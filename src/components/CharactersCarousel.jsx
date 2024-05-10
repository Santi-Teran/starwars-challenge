'use client'
import React, { useCallback } from 'react'
import Image from 'next/image'
import characterss from '../../public/characters.png'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'

const CharactersCarousel = ( {characters} ) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='flex '>
      <button className="embla__prev" onClick={scrollPrev}>Prev</button>
      <div className="embla__viewport max-w-3xl" ref={emblaRef}>
        <div className="embla__container">
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
      <button className="embla__next" onClick={scrollNext}>Next</button>
    </div>
  )
}

export default CharactersCarousel;
