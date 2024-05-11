'use client'
import React, { useState, useEffect } from 'react';
import CharacterComponent from '@/components/CharacterComponent';
import Pagination from '@/components/Pagination'; 
import NavBar from '@/components/NavBar';

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

  const fetchCharacters = async (pageNumber) => {
    setLoading(true);
    try {
      const data = await getCharacters(pageNumber);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  const goToPage = (pageNumber) => setPage(pageNumber);

  return (
    <div className='star-wars-gradient bg-neutral-400 text-white'>
      <NavBar />
      {/* {Array.from({ length: 500 }).map((_, index) => (
        <div
          key={index}
          className='star'
          style={{
            '--star-top': Math.random(),
            '--star-left': Math.random(),
            '--animation-delay': Math.random() * 10
          }}
        />
      ))} */}
      <Pagination
        page={page}
        totalPages={totalPages}
        goToPage={goToPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : (
        <div className='grid grid-cols-3 gap-10 mx-20 z-10'>
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
    </div>
  );
};

export default Characters;