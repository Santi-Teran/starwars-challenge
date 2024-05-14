import Background from "@/components/Background";
import characterdetail from '../../../../public/characterdetail.jpg'
import darth from '../../../../public/darth.jpeg'
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";

const getCharacterDetail = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);

  if (!res.ok) throw new Error('Something went wrong');
  return res.json();
}

const CharacterDetail = async ({ params }) => {
  
  const { id } = params;
  const character = await getCharacterDetail(id);

  const [name, lastName] = character.name.split(' ');

  return (
    <div className="flex h-screen justify-between text-white overflow-hidden flex-col lg:flex-row">
      <Link href='/characters' className="absolute lg:m-20 m-5 lg:text-6xl text-4xl hover:scale-110 transition-all"><IoArrowBackCircle /></Link>
      <Background image={characterdetail} />
      <div className="flex lg:items-end flex-col lg:flex-row items-center m-5 lg:m-0">
        <div className="lg:p-20">
          <h2 className="lg:text-7xl text-4xl font-bold text-center lg:text-justify">{name.toUpperCase()}</h2>
          <h2 className="lg:text-7xl text-4xl font-bold text-center lg:text-justify">{lastName && lastName.toUpperCase()}</h2>
        </div>
        <span className="lg:py-20 py-5 lg:z-10">{character.birth_year !== 'unknown' ? character.birth_year : ''}</span>
      </div>
      <div className="bg-blackk lg:mt-20 py-20 rounded-t-lg flex flex-col justify-center items-center">
        <div className="flex gap-10 text-sm lg:text-base">
          <div>
            <p>Height:</p>
            <p>{character.height !== 'unknown' ? character.height : ''}cm</p>
          </div>
          <div>
            <p>Mass:</p>
            <p>{character.mass !== 'unknown' ? character.mass : ''}kg</p>
          </div>
          <div>
            <p>Hair:</p>
            <p>{character.hair_color !== 'n/a' ? character.hair_color : ''}</p>
          </div>
          <div>
            <p>Skin:</p>
            <p>{character.skin_color !== 'unknown' ? character.skin_color : ''}</p>
          </div>
          <div>
            <p>Eye:</p>
            <p>{character.eye_color}</p>
          </div> 
        </div>   
        <Image src={darth} alt={character.name} className="w-1/2 rounded shadow-xl" /> 
      </div>
    </div>
  )
}

export default CharacterDetail;
