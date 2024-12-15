import { useState } from "react";

function TodoApp() {
  const [value, setValue] = useState("");
  const [displayTask, setDisplayTask] = useState([]);

  function handelForm(e) {
    e.preventDefault();
    if (value.trim()) {
      setDisplayTask([...displayTask, value]);
      setValue("");
    }
  }

  function handelInput(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <form onSubmit={handelForm}>
        <div className="mainContainer flex justify-center w-full h-screen bg-[#121212]">
          <div className="todoBox p-8 rounded-md shadow-md">
            <div className="headingBox">
              <h1 className="text-5xl text-white font-bold">My Todo App</h1>
              <p className="text-gray-400 text-center mt-3">
                This is my Todo App created for me
              </p>
            </div>
            <div className="action gap-3 flex justify-center space-x-2">
              <input
                value={value}
                onChange={(e) => handelInput(e)}
                placeholder="Enter your task"
                className="text-black placeholder-gray-400 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:ring-opacity-50"
                type="text"
              />
              <button
                className="bg-emerald-600 text-white font-semibold px-3 py-2 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Add Task
              </button>
            </div>
            <ul className="taskList mt-4">
              {displayTask.map((value, index) => (
                <li key={index} className="listItem hover:bg-gray-200 p-2 rounded-md">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoApp;