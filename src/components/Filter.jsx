const Filter = ({ handleGenderFilterChange, handleEyeColorFilterChange }) => {
  return (
    <div className="flex items-center gap-20">
      <div className="flex gap-2">
        <label className="text-gray-400">Gender:</label>
        <select onChange={handleGenderFilterChange} className="bg-transparent cursor-pointer">
          <option value="" className="text-black">All</option>
          <option value="male" className="text-black">Male</option>
          <option value="female" className="text-black">Female</option>
        </select>
      </div>
      <div className="flex gap-2">
        <label className="text-gray-400">Eye Color:</label>
        <select onChange={handleEyeColorFilterChange} className="bg-transparent cursor-pointer">
          <option className="text-black" value="">All</option>
          <option className="text-black" value="blue">Blue</option>
          <option className="text-black" value="yellow">Yellow</option>
          <option className="text-black" value="red">Red</option>
          <option className="text-black" value="brown">Brown</option>
          <option className="text-black" value="orange">Orange</option>
          <option className="text-black" value="black">Black</option>
          <option className="text-black" value="hazel">Hazel</option>
          <option className="text-black" value="gold">Gold</option>
          <option className="text-black" value="yellow, blue">Yellow, Blue</option>
          <option className="text-black" value="white">White</option>
          <option className="text-black" value="dark">Dark</option>
          <option className="text-black" value="pink">Pink</option>
          <option className="text-black" value="green, yellow">Green, Yellow</option>
          <option className="text-black" value="red, blue">Red, Blue</option>
          <option className="text-black" value="blue-gray">Blue Gray</option>
          <option className="text-black" value="yellow, red">Yellow, Red</option>
          <option className="text-black" value="black, silver">Black, Silver</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
