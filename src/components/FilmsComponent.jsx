import Image from 'next/image';
import darth from '../../public/darth.jpeg'

const FilmsComponent = ({ film }) => {
  return (
    <div className='flex flex-col'>
      <h1>{film.title}</h1>
      <Image  src={darth} alt='Darth Vader' className='' />
      <h2>Episode {film.episode_id}</h2>
    </div>
  )
}

export default FilmsComponent;