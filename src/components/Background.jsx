import Image from 'next/image';

const Background = ({ image }) => {
  return (
    <Image 
      alt='starwars'
      src={image}
      quality={100}
      fill
      className='object-cover -z-10'
    />
  )
}

export default Background;
