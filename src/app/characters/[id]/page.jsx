import Background from "@/components/Background";
import characterdetail from '../../../../public/characterdetail.jpg'
import anakin from '../../../../public/anakin.png'
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
    <div className="flex h-screen justify-between text-white overflow-hidden flex-col md:flex-row">
      <Link href='/characters' className="absolute md:m-20 m-5 md:text-6xl text-4xl hover:scale-110 transition-all"><IoArrowBackCircle /></Link>
      <Background image={characterdetail} />
      <div className="flex md:items-end flex-col md:flex-row items-center m-5 md:m-0">
        <div className="md:p-20">
          <h2 className="md:text-7xl text-4xl font-bold text-center md:text-justify">{name.toUpperCase()}</h2>
          <h2 className="md:text-7xl text-4xl font-bold text-center md:text-justify">{lastName && lastName.toUpperCase()}</h2>
        </div>
        <span className="md:py-20 py-5 md:z-10">{character.birth_year !== 'unknown' ? character.birth_year : ''}</span>
        <Image src={anakin} alt={character.name} className="absolute md:left-40 top-40 md:top-12 -z-10 md:z-0"/>
      </div>

      <div className="bg-blackk md:mt-20 md:p-20 py-20 rounded-t-lg md:pl-72 flex flex-col">
        <div className="flex gap-10 text-sm md:text-base">
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
      </div>
    </div>
  )
}

export default CharacterDetail;
