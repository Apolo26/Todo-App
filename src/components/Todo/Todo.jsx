import { useState } from "react";

const Todo = ({
  todo,
  handleSetComplete,
  handleDelete,
  handleEdit,
  editIndex,
  handleSaveEdit,
  setEditIndex,
  setTodo,
}) => {
  const { id, title, completed } = todo;

  const [editState, setEditState] = useState({ index: -1, title: " " });

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-800 border-b border-solid border-gray-700 ">
      <div className="flex flex-row items-center justify-start w-full sm:w-auto mb-2 sm:mb-0">
        {completed ? (
          <div
            onClick={() => handleSetComplete(id)}
            className="bg-green-700 p-1 rounded-full cursor-pointer "
          >
            <img className="h-4 w-4 " src="/check-icon.svg" alt="Check Icon" />
          </div>
        ) : (
          <span
            onClick={() => handleSetComplete(id)}
            className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer hover:animate-pulse`}
          ></span>
        )}

        {editState.index === todo.id ? (
          <input
            className="ml-3 font-inter text-black focus:shadow-lg caret-pink-900 rounded-r-lg border-r-4 border-indigo-500"
            type="text"
            value={editState.title}
            onChange={(e) =>
              setEditState({
                index: editState.index,
                title: e.target.value,
              })
            }
          />
        ) : (
          <p className={"pl-3 " + (completed && "line-through")}>{title}</p>
        )}
      </div>

      <div className="flex flex-row items-center justify-end w-full sm:w-auto">
        {editState.index === todo.id ? (
          <button
            className="mr-2.5 font-inter text-sm"
            onClick={() => {
              handleSaveEdit(editState.index, editState.title);
              setEditState({ index: -1, title: "" });
            }}
          >
            SAVE
          </button>
        ) : (
          <img
            onClick={() => setEditState({ index: todo.id, title: todo.title })}
            className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in mr-2"
            src="/pencil-30.png"
            alt="Edit Icon"
          />
        )}
      </div>
    </div>
  );
};

export { Todo };
