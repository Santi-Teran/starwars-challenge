import Background from "@/components/Background";
import Image from "next/image";
import bg from '../../public/bg.jpg'
import starwars from '../../public/starwars.png'
import films from "../../public/films.png"
import characters from "../../public/characters.png"
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <Image src={starwars} alt='StarWars'/>
        <h2 className='text-3xl font-thin text-white mb-32 drop-shadow-2xl'>DISCOVERY</h2>
      </div>
      
      <div className="flex justify-center gap-x-40">
        <Background image={bg}/>
        <Link href='/films' className="flex flex-col items-center hover:scale-125 transition-all">
          <Image src={films} alt="Characters" className="drop-shadow-2xl"/>
          <h2 className='text-3xl font-bold text-white drop-shadow-2xl'>FILMS</h2>
        </Link>
        <Link href='/characters' className="flex flex-col items-center hover:scale-125 transition-all">
          <Image src={characters} alt="Characters" className="drop-shadow-2xl"/>
          <h2 className='text-3xl font-bold text-white drop-shadow-2xl'>CHARACTERS</h2>
        </Link>
      </div>
    </div>
  )
}

export default Home;
