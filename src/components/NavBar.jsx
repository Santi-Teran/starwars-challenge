import Image from 'next/image';
import starwars from '../../public/starwars.png'
import Link from 'next/link';
import Search from './Search';
import Filter from './Filter';

const NavBar = ({ handleSearchInputChange, handleGenderFilterChange, handleEyeColorFilterChange }) => {
  return (
    <div className='md:px-12 flex items-center md:gap-x-20 flex-col md:flex-row gap-y-8 py-8 md:gap-y-0 md:py-0'>
      <Link href='/'>
        <Image src={starwars} alt='StarWars'/>
      </Link>
      <Search handleSearchInputChange={handleSearchInputChange} />
      <Filter
        handleGenderFilterChange={handleGenderFilterChange}
        handleEyeColorFilterChange={handleEyeColorFilterChange}
      />
    </div>
  );
};

export default NavBar;