import Image from "next/image";
import darth from '../../../../public/darth.jpeg'
import filmdetail from '../../../../public/filmdetail.png'
import Background from "@/components/Background";
import CharactersCarousel from "@/components/CharactersCarousel";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";


const getCharacterDetails = async (characterUrl) => {
  const res = await fetch(characterUrl);

  if (!res.ok) throw new Error('Something went wrong');
  return res.json();
};

const getFilmDetail = async (id) => {
  const res = await fetch(`https://swapi.dev/api/films/${id}`);
  
  if (!res.ok) throw new Error('Something went wrong');

  const filmData = await res.json();

  const characters = await Promise.all(filmData.characters.map(async (characterUrl) => {
    const characterDetail = await getCharacterDetails(characterUrl);
    return {
      name: characterDetail.name,
      url: `${characterDetail.url.split('/').slice(-2, -1)[0]}`
    };
  }));
  filmData.characters = characters;
  return filmData;
};

const FilmDetail = async ({ params }) => {

  const { id } = params;
  const film = await getFilmDetail(id);

  return (
    <div className="lg:h-screen overflow-hidden bg-blackk lg:bg-transparent py-12 lg:px-24 p-12 flex justify-between text-white flex-col lg:flex-row">
      <Link href='/films' className="lg:text-6xl text-4xl hover:scale-110 transition-all"><IoArrowBackCircle /></Link>
      <Background image={filmdetail} />
      <div className="flex flex-col">
        <h1 className='text-4xl font-bold text-center lg:text-justify'>{film.title.toUpperCase()}</h1>
        <h2 className='text-2xl text-center lg:text-justify'>EPISODE {film.episode_id}</h2>
        <Image  src={darth} alt='Darth Vader' className='rounded-xl lg:w-1/2 lg:m-10' />
      </div>
        
      <div className="flex flex-col items-end justify-center">
        <div className="flex gap-10 lg:absolute lg:top-12">
          <div className="text-end">
            <h3 >Director:</h3>
            <h4 className="text-xl">{film.director}</h4>  
          </div>
          <div className="text-end">
            <h3>Producer:</h3>
            <h4 className="text-xl">{film.producer}</h4>
          </div>
          <div className="text-end">
            <h3>Year:</h3>
            <h4 className="text-xl">{film.release_date.split('-')[0]}</h4>
          </div>
        </div>
        <CharactersCarousel characters={film.characters} />
      </div>
    </div>
  )
};

export default FilmDetail;