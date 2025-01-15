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

interface Todo {
  text: string;
  completed: boolean;
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

  const toggleComplete = (index: number) => {
    setTodos(todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const toggleStar = (index: number) => {
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
    <div className="flex gap-12" style={{ height: '' }}>
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
        className="pt-6 pb-6"
        style={{
          flexGrow: 1,
          width: sidebar ? 'calc(100% - 280px)' : '100%',
          backgroundColor: '#FBFDFC',
        }}
      >
        <div style={{ height: 904, width: '100%' }}>
          {/* Todo Header */}
          <div className="pt-1 pb-1">
            <div className="flex gap-1">
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

          <div
            style={{ width: '100%', height: 178 }}
            className="pt-4 pb-4 border border-gray-200 rounded-lg"
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Add a Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="text-base pr-5 pl-5 font-normal outline-none"
                style={{ fontFamily: 'Outfit', height: 146 }}
              />
              <div
                style={{ marginTop: -40 }}
                className="flex justify-between gap-4 pr-5 pl-5"
              >
                <div className="flex gap-4 pr-5">
                </div>
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
    </div>
  );
};

export default Dashboard;
