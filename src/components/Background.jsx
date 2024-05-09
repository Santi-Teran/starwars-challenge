import Image from 'next/image';
import bg from '../../public/bg.jpg'

const Background = () => {
  return (
    <Image 
      alt='starwars'
      src={bg}
      quality={100}
      fill
      className='object-cover -z-10'
    />
  )
}

export default Background;
