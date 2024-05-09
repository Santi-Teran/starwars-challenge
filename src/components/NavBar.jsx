import Image from 'next/image';
import starwars from '../../public/starwars.png'

const NavBar = () => {
  return (
    <div className='flex flex-col items-center'>
      <Image src={starwars} alt='StarWars'/>
      <h2 className='text-3xl font-thin text-white mb-32'>DISCOVERY</h2>
    </div>
  )
}

export default NavBar;