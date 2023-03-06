import { useEffect, useState } from "react";
import { Titulo, TodoInput, TodoList } from "./components";
import axios from "axios";

function App() {
  // Definicion de los estados de la aplicación

  const [todos, setTodos] = useState([]);

  const [activeFilter, setActiveFilter] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState(todos);

  // Definicion de la URL de la API

  const API_URL = "https://b155-143-0-65-210.sa.ngrok.io/api/tareas/";

  // Función para agregar una nueva tarea

  const addTodo = async (title) => {
    try {
      const newTodo = {
        content: title,
        completed: true,
      };

      const response = await axios.post(API_URL, newTodo);
      console.log("Respuesta de API: ", response); // q pinngo puede ser

      await get();

      setTodos((prevTodos) => [...prevTodos, response.data]);
    } catch (error) {
      console.error(error);
      console.log("Error adding todo: ", error); // q pinnnngo puede ser x2
    }
  };

  // Función para obtener la lista de tareas desde la API
  const get = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("Respuesta de API: ", response); // q pinnnngo puede ser x3
      setTodos(response.data);
    } catch (error) {
      console.error(error);
      console.log("Respuesta de API:S ", error); // q pinnnngo puede ser x4
    }
  };

  // Función para marcar una tarea como completa o incompleta

  const handleSetComplete = async (id) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      const updatedTodo = {
        ...todo,
        completed: !todo.completed,
      };

      await axios.put(
        `https://b155-143-0-65-210.sa.ngrok.io/api/tareas/${id}`,
        updatedTodo
      );

      const updatedList = todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      setTodos(updatedList);
    } catch (error) {
      console.log(error);
    }
  };

  // Función para guardar los cambios en una tarea

  const handleSaveEdit = async (id, newTitle) => {
    try {
      const todo = todos.find((todo) => todo.id === id);
      const updatedTodo = {
        ...todo,
        title: newTitle,
      };

      await axios.put(
        `https://b155-143-0-65-210.sa.ngrok.io/api/tareas/${id}`,
        updatedTodo
      );

      const updatedList = todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      setTodos(updatedList);
    } catch (error) {
      console.log(error);
    }
  };

  // Función para eliminar las tareas completadas

  const handleClearComplete = async () => {
    try {
      await axios.delete(API_URL, {
        data: { completed: true },
      });
      const updatedList = todos.filter((todo) => !todo.completed);
      setTodos(updatedList);
    } catch (error) {
      console.log(error);
    }
  };

  // Función para eliminar una tarea

  const handleDelete = (id) => {
    axios
      .delete(`https://658b-143-0-65-210.sa.ngrok.io/api/tareas/${id}`)
      .then(() => {
        const updatedList = todos.filter((todo) => todo.id !== id);
        setTodos(updatedList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Funciones para cambiar el filtro activo

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900 min-h-screen font-inter h-full text-gray-100 ">
      {" "}
      <div className="min-h-screen min-w-screen  text-gray-100 flex items-center justify-center py-20 px-5 ">
        <div className="container flex flex-col max-w-xl">
          <Titulo />
          <TodoInput addTodo={addTodo} />
          <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            handleSaveEdit={handleSaveEdit}
            handleClearComplete={handleClearComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
