import React, { useState } from 'react';
import down from '../assets/down.svg';

interface Todo {
  text: string;
  completed: boolean;
}

// Convert the string array to Todo objects
const initialTodos: Todo[] = [
  "Get groceries", 
  "Take Whey", 
  "Go to the gym", 
  "Finish the project", 
  "Call the bank", 
  "Plan weekend trip"
].map(text => ({ text, completed: false }));

const Dashboard = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [starredItems, setStarredItems] = useState<number[]>([]);

  // Toggle todo completion
  const toggleComplete = (index: number) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Toggle star
  const toggleStar = (index: number) => {
    setStarredItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Separate active and completed todos
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div
      className="absolute pt-6 pb-6"
      style={{ width: 1344, height: 952, backgroundColor: '#FBFDFC' }}
    >
      <div style={{ height: 904, width: 1344 }}>
        {/* Todo Header */}
        <div className="pt-1 pb-1" style={{ width: 1344, height: 32 }}>
          <div className="flex gap-1" style={{ height: 24, width: 58 }}>
            <p style={{ fontFamily: 'Outfit' }}>To Do</p>
            <button>
              <img
                src={down}
                height={6}
                width={12}
                alt=""
                style={{ left: 6, top: 9, borderRadius: 1 }}
              />
            </button>
          </div>
        </div>

        {/* Todo Input Section */}
        <div
          style={{ width: 1444, height: 178 }}
          className="pt-4 pb-4 border border-gray-200 rounded-lg"
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Add a Task"
              className="text-base pr-5 pl-5 font-normal outline-none"
              style={{ fontFamily: 'Outfit', height: 146 }}
            />

            <div
              style={{ marginTop: -40 }}
              className="flex justify-between gap-4 pr-5 pl-5"
            >
              <div className="flex gap-4 pr-5">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </button>
              </div>
              <button
                className="px-4 py-2 text-sm font-medium rounded-lg"
                style={{
                  backgroundColor: '#35793729',
                  color: '#2D6930',
                  width: 104,
                  height: 36,
                }}
              >
                ADD TASK
              </button>
            </div>
          </div>
        </div>

        {/* Active Todos Section */}
        <div className="mt-4">
          {activeTodos.map((todo) => {
            const originalIndex = todos.indexOf(todo);
            return (
              <div
                key={originalIndex}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(originalIndex)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span style={{ fontFamily: 'Outfit' }}>{todo.text}</span>
                </div>
                <button
                  className="to-black"
                  onClick={() => toggleStar(originalIndex)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={starredItems.includes(originalIndex) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* Completed Section */}
        {completedTodos.length > 0 && (
          <>
            <div className="mt-8 mb-4">
              <p style={{ fontFamily: 'Outfit' }} className="text-gray-600">
                Completed
              </p>
            </div>
            <div>
              {completedTodos.map((todo) => {
                const originalIndex = todos.indexOf(todo);
                return (
                  <div
                    key={originalIndex}
                    className="flex items-center justify-between px-5 py-4 border-b border-gray-200"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(originalIndex)}
                        className="w-4 h-4 rounded"
                        
                      />
                      <span
                        style={{ fontFamily: 'Outfit' }}
                        className="line-through text-black"
                      >
                        {todo.text}
                      </span>
                    </div>
                    <button
                      className="to-black"
                      onClick={() => toggleStar(originalIndex)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={starredItems.includes(originalIndex) ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;