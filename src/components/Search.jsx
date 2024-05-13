import { IoSearch } from "react-icons/io5";

const Search = ({ handleSearchInputChange }) => {

  return (
    <div className="flex items-center gap-x-2">
      <div>
        <IoSearch />
      </div>
      <input 
        type="text"
        placeholder="Find your favorite character"
        className="bg-transparent w-60 py-1 px-2"
        onChange={handleSearchInputChange}
      />
    </div>
  )
}

export default Search;
