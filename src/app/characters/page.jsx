'use client'
import React, { useState, useEffect } from 'react';
import CharacterComponent from '@/components/CharacterComponent';
import Pagination from '@/components/Pagination'; 
import NavBar from '@/components/NavBar';
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';

const getCharacters = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  
  if (!res.ok) throw new Error('Something went wrong');

  return res.json();
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [eyeColorFilter, setEyeColorFilter] = useState('');

  useEffect(() => {
    const fetchCharacters = async (pageNumber) => {
      setLoading(true);
      try {
        const data = await getCharacters(pageNumber);
        let filteredCharacters = data.results.filter(character =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (genderFilter) {
          filteredCharacters = filteredCharacters.filter(character =>
            character.gender.toLowerCase() === genderFilter.toLowerCase()
          );
        }
        if (eyeColorFilter) {
          filteredCharacters = filteredCharacters.filter(character =>
            character.eye_color.toLowerCase() === eyeColorFilter.toLowerCase()
          );
        }
        setCharacters(filteredCharacters);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCharacters(page);
  }, [page, searchTerm, genderFilter, eyeColorFilter]);  

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  const goToPage = (pageNumber) => setPage(pageNumber);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderFilterChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const handleEyeColorFilterChange = (e) => {
    setEyeColorFilter(e.target.value);
  };

  return (
    <div className='star-wars-gradient text-white'>
      <NavBar 
        handleSearchInputChange={handleSearchInputChange}
        handleGenderFilterChange={handleGenderFilterChange}
        handleEyeColorFilterChange={handleEyeColorFilterChange}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        goToPage={goToPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      {loading ? (
        <Loader />
      ) : ( characters.length == 0 ) ? (
        <div className='flex justify-center my-40 text-4xl'>No characters with those filters</div> 
      ) : (
        <div className='grid grid-cols-3 gap-10 my-10 mx-20 z-10'>
          {characters.map((character) => (
            <div key={character.url}>
              <CharacterComponent character={character} />
            </div>
          ))}
        </div>
      )}
      
      <Pagination
        page={page}
        totalPages={totalPages}
        goToPage={goToPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <Footer />
    </div>
  );
};

export default Characters;