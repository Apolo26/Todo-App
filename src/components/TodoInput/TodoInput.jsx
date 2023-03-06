import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="mt-6 relative max-w-xl min-h-xl ">
      <div className="pl-3 flex items-center pointer-events-none absolute mt-3">
        {" "}
        {/* arreglar esta wea -- listo, creo */}
        <span className="border border-gray-500 border-solid w-8 h-8 flex items-center justify-center rounded-full">
          +
        </span>{" "}
        {/* < no queda del todo redondo - fixed*/}
      </div>
      <input
        className="focus:shadow-lg font-Inter pl-12 w-full py-4 bg-gray-800 rounded-xl outline-none transition-all duration-300 ease-in-out caret-pink-500"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => handleAddTodo(e)}
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export { TodoInput };
