import { useState } from "react"

const TodoInput = ({ addTodo }) => {

    const [title, setTitle] = useState('');

    const handleAddTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title);
            setTitle('');
        }
    }

    return (
        <div className="mt-6 relative max-w-xl min-h-xl ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="border border-gray-500 border-solid p-1.5 py-0 rounded-full">+</span> {/* < no queda del todo redondo - fixed*/}
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
    )
}

export { TodoInput }