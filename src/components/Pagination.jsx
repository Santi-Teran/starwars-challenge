import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Pagination = ({ page, totalPages, goToPage, nextPage, prevPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  };

  return (
    <div className='flex py-2 px-4 bg-gray-400 w-fit mx-auto rounded-full shadow-lg'>
      <button onClick={prevPage} disabled={page === 1} className="md:text-4xl hover:scale-125 transition-all cursor-pointer"><MdNavigateBefore /></button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => goToPage(pageNumber)}
          className={`md:mx-5 md:py-2 md:px-4 mx-1 p-1 rounded-full hover:scale-125 transition-all ${pageNumber === page ? 'bg-blue-500 hover:scale-100 transition-all' : ''}`}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={nextPage} disabled={page === totalPages} className="md:text-4xl hover:scale-125 transition-all cursor-pointer"><MdNavigateNext /></button>
    </div>
  );
};

export default Pagination;
