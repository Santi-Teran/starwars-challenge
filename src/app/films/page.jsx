import FilmsComponent from '@/components/FilmsComponent';
import Image from 'next/image';
import Link from 'next/link';
import starwars from '../../../public/starwars.png'
import Footer from '@/components/Footer';

const getFilms = async () => {
  const res = await fetch('https://swapi.dev/api/films/');
  
  if (!res.ok) throw new Error('Something went wrong');

  return res.json();
};

const Films = async () => {

  const films = await getFilms();

  return (
    <div className='star-wars-gradient'>
      <Link href='/' className='w-fit flex mx-12'>
        <Image src={starwars} alt='StarWars'/>
      </Link>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 md:mx-20 mx-10'>
        { films.results.map((film) => (
          <div key={film.episode_id}>
            <FilmsComponent film={film} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Films;