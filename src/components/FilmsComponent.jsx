import Image from 'next/image';
import darth from '../../public/darth.jpeg'
import Link from 'next/link';


const FilmsComponent = ({ film }) => {
  return (
    <Link href={`/films/${film.episode_id}`} className='flex flex-col bg-stone-800 rounded-xl shadow-lg'>
      <Image  src={darth} alt='Darth Vader' className='rounded-t-xl' />
      <div className='p-2 text-white'>
        <h1 className='text-xl font-bold'>{film.title.toUpperCase()}</h1>
        <h2 className=''>EPISODE {film.episode_id}</h2>
      </div>
    </Link>
  )
}

export default FilmsComponent;