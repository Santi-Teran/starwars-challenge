import Image from 'next/image';
import starwars from '../../public/starwars.png'
import Link from 'next/link';
import Search from './Search';
import Filter from './Filter';

const NavBar = ({ handleSearchInputChange, handleGenderFilterChange, handleEyeColorFilterChange }) => {
  return (
    <div className='px-12 flex items-center gap-x-20'>
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