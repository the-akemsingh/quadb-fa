import { useState } from 'react';
import down from '../assets/down.svg';
import pfp from '../assets/pfp.svg';
import group from '../assets/Group.svg';
import Today from '../assets/Today.svg';
import imp from '../assets/Imp.svg';
import planned from '../assets/planned.svg';
import tome from '../assets/tome.svg';
import Plus from '../assets/Plus.svg';
import bar from '../assets/bar.svg';
import TodoDetailsSidebar from '../components/TodoDetailsSidebar';

interface Todo {
  text: string;
  completed: boolean;
  notes?: string;
}

const initialTodos: Todo[] = [
  "Get groceries",
  "Take Whey",
  "Go to the gym",
  "Finish the project",
  "Call the bank",
  "Plan weekend trip"
].map(text => ({ text, completed: false }));



const Dashboard = ({ sidebar }: { sidebar: boolean }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [starredItems, setStarredItems] = useState<number[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo);
  };

  const handleUpdateTodo = (updatedTodo: Todo) => {
    setTodos(todos.map(todo => 
      todo.text === updatedTodo.text ? updatedTodo : todo
    ));
  };

  const toggleComplete = (index: number) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  function toggleStar (index: number) {
    setStarredItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTodos([...todos, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    // here
    <div className={`flex ${selectedTodo ? 'gap-2' : 'gap-12'}`}>
      {sidebar && (
        <div
          className="flex flex-col items-center"
          style={{
            fontFamily: 'Outfit',
            backgroundColor: '#EEF6EF',
            width: 280,
            gap: 9,
            marginTop: 102,
          }}
        >
          {sidebar && (
            <div
              className="flex flex-col items-center"
              style={{
                fontFamily: 'Outfit',
                backgroundColor: '#EEF6EF',
                width: 280,
                gap: 9,
              }}
            >
              <img
                src={pfp}
                alt="profile-photo"
                height={118}
                width={118}
                style={{ borderRadius: 2947, marginTop: -59 }}
              />
              <div>Hey, ABCD</div>
              <div
                style={{
                  height: 248,
                  width: 240,
                  backgroundColor: '#FBFDFC',
                }}
                className="flex flex-col pt-6 pb-6"
              >
                <button className="min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex">
                  <img height={20} width={17} className="mt-1" src={group} alt="" />
                  <span>All Tasks</span>
                </button>
                <button
                  className="min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex"
                  style={{ backgroundColor: '#35793729', borderRadius: 8 }}
                >
                  <img height={20} width={17} className="mt-1" src={Today} alt="" />
                  <div>Today</div>
                </button>
                <button className="min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex">
                  <img height={20} width={17} className="mt-1" src={imp} alt="" />
                  <div>Important</div>
                </button>
                <button className="min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex">
                  <img height={20} width={17} className="mt-1" src={planned} alt="" />
                  <div>Planned</div>
                </button>
                <button className="min-h-10 gap-4 pt-2 pr-4 pb-2 pl-4 flex">
                  <img height={20} width={17} className="mt-1" src={tome} alt="" />
                  <div>Assigned to me</div>
                </button>
              </div>

              <div
                className="pt-6 pb-6 min-w-60 gap-4 flex"
                style={{
                  height: 88,
                  backgroundColor: '#FBFDFC',
                }}
              >
                <div
                  style={{ height: 40, width: 240 }}
                  className="flex gap-4 pt-2 pr-4 pb-2 pl-4"
                >
                  <img height={20} width={20} className="" src={Plus} alt="" />
                  <div>Add list</div>
                </div>
              </div>

              <div
                style={{ width: 261, paddingTop: 7, paddingBottom: 7, height: 321.13 }}
                className="pr-3 pl-3"
              >
                <img src={bar} alt="sdkf" />
              </div>

            </div>
          )}
        </div>
      )}

      <div
        className="pt-6 pb-6 flex"
        style={{
          flexGrow: 1,
          width: sidebar ? 'calc(100% - 280px)' : '100%',
          backgroundColor: '#FBFDFC',
        }}
      >
        <div className="flex-1">
          {/* Todo Header */}
          <div className="pt-1 pb-1">
            <div className="flex gap-1">
              <p style={{ fontFamily: 'Outfit' }}>To Do</p>
              <button>
                <img src={down} height={6} width={12} alt="" />
              </button>
            </div>
          </div>

          {/* Add Task Section */}
          <div className="pt-4 pb-4 border border-gray-200 rounded-lg">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Add a Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="text-base pr-5 pl-5 font-normal outline-none"
                style={{ fontFamily: 'Outfit', height: 146 }}
              />
              <div className="flex justify-between gap-4 pr-5 pl-5" style={{ marginTop: -40 }}>
                <div className="flex gap-4 pr-5"></div>
                <button
                  onClick={handleAddTask}
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

          {/* Active Todos */}
          <div className="mt-4">
            {activeTodos.map((todo, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-5 py-4 border-b border-gray-200 cursor-pointer"
                onClick={() => handleTodoClick(todo)}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleComplete(todos.indexOf(todo));
                    }}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span style={{ fontFamily: 'Outfit' }}>{todo.text}</span>
                </div>
                <button
                  className="text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStar(todos.indexOf(todo));
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={starredItems.includes(todos.indexOf(todo)) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Completed Todos */}
          {completedTodos.length > 0 && (
            <>
              <div className="mt-8 mb-4">
                <p style={{ fontFamily: 'Outfit' }} className="text-gray-600">
                  Completed
                </p>
              </div>
              <div>
                {completedTodos.map((todo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-5 py-4 border-b border-gray-200 cursor-pointer"
                    onClick={() => handleTodoClick(todo)}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) => {
                          e.stopPropagation();
                          toggleComplete(todos.indexOf(todo));
                        }}
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
                      className="text-black"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStar(todos.indexOf(todo));
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={starredItems.includes(todos.indexOf(todo)) ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Sidebar */}
        {selectedTodo && (
          <TodoDetailsSidebar
            todo={selectedTodo}
            todos={todos}
            setTodos={setTodos}
            starredItems={starredItems}
            setStarredItems={setStarredItems}
            onClose={() => setSelectedTodo(null)}
            onUpdate={handleUpdateTodo}
          />
        )}
      </div>
    </div>
  );
};



export default Dashboard;