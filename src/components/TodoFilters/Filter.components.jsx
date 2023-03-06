const FiltersContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-solid border-gray-800 max-w-xl mx-xl">
      {children}
    </div>
  );
};

const ItemsLeft = ({ total }) => {
  return <p className="text-gray-400 text-sm">{total} items left</p>;
};

const FilterButtonContainer = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch md:space-x-2 space-y-2 md:space-y-0">
      {children}
    </div>
  );
};

const FilterButton = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        ` hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` +
        (active.toLowerCase().includes(filter.toLowerCase())
          ? "text-blue-400"
          : "text-gray-400")
      }
    >
      {filter}
    </button>
  );
};

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton };
