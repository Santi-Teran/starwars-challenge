import Image from 'next/image';
import starwars from '../../public/starwars.png'
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='px-12 flex items-center gap-x-20'>
      <Link href='/'>
        <Image src={starwars} alt='StarWars'/>
      </Link>
      <input placeholder='Search '/>
      <span>Filter</span>
    </div>
  )
}

export default NavBar;