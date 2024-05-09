import Background from "@/components/Background";
import Image from "next/image";
import films from "../../public/films.png"
import characters from "../../public/characters.png"
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center gap-x-40">
      <Background />
      <Link href='/films' className="flex flex-col items-center hover:scale-125 transition-all">
        <Image src={films} alt="Characters" className=""/>
        <h2 className='text-3xl font-bold text-white'>FILMS</h2>
      </Link>
      <Link href='/characters' className="flex flex-col items-center hover:scale-125 transition-all">
        <Image src={characters} alt="Characters" className=""/>
        <h2 className='text-3xl font-bold text-white'>CHARACTERS</h2>
      </Link>
    </div>
  )
}

export default Home;
