import Image from 'next/image';
import darth from '../../public/darth.jpeg'
import Link from 'next/link';

const CharacterComponent = ({ character }) => {

  const id = character.url.split('/')[5];

  return (
    <div className='flex flex-col gradient rounded-xl shadow-xl md:w-3/5 w-1/2 mx-auto hover:scale-110 transition-all'>
      <Link href={`/characters/${id}`} >
        <Image src={darth} alt='Darth Vader' className='rounded-t-xl'/>
        <div className='p-2 text-white'>
          <h2 className='text-xl font-bold'>{character.name}</h2>
          <p className='text-sm font-extralight'>{character.gender !== 'n/a' ? character.gender.toUpperCase() : '-'}</p>
          <p className='text-sm font-extralight'>{character.eye_color !== 'unknown' ? character.eye_color.toUpperCase() : '-'}</p>
        </div>
      </Link>
    </div>
  );
};

export default CharacterComponent;