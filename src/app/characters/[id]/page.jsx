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
    <div className="flex h-screen justify-between text-white overflow-hidden">
      <Link href='/characters' className="absolute m-20 text-6xl hover:scale-110 transition-all"><IoArrowBackCircle /></Link>
      <Background image={characterdetail} />
      <div className="flex items-end">
        <div className="p-20">
          <h2 className="text-7xl font-bold">{name.toUpperCase()}</h2>
          <h2 className="text-7xl font-bold">{lastName && lastName.toUpperCase()}</h2>
        </div>
        <span className="py-20 z-10">
          {character.birth_year}
        </span>
        <Image src={anakin} alt={character.name} className="absolute left-40"/>
      </div>

      <div className="bg-blackk mt-20 p-20 rounded-t-lg pl-72 flex flex-col items-end gap-y-10">
        <div className="flex gap-10">
          <div>
            <p>Height:</p>
            <p>{character.height}cm</p>
          </div>
          <div>
            <p>Mass:</p>
            <p>{character.mass}kg</p>
          </div>
          <div>
            <p>Hair:</p>
            <p>{character.hair_color}</p>
          </div>
          <div>
            <p>Skin:</p>
            <p>{character.skin_color}</p>
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
