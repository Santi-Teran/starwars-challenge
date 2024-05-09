import React from 'react'
import FilmsComponent from '@/components/FilmsComponent';
const getFilms = async () => {
  const res = await fetch('https://swapi.dev/api/films/');
  
  if (!res.ok) throw new Error('Something went wrong');

  return res.json();
};

const Films = async () => {

  const films = await getFilms();

  return (
    <div className=' grid grid-cols-3 gap-20 p-32'>
      { films.results.map((film) => (
        <div key={film.episode_id}>
          <FilmsComponent film={film} />
        </div>
      ))}
    </div>
  )
}

export default Films;