import Plus from '../assets/Plus.svg';
import date from '../assets/date.svg';
import repeat from '../assets/repeat.svg';
import reminder from '../assets/reminder.svg';

interface Todo {
    text: string;
    completed: boolean;
    notes?: string;
}
const TodoDetailsSidebar = ({
    todo,
    // onUpdate,
    todos,
    setTodos,
    starredItems,
    setStarredItems,
}: {
    todo: Todo | null;
    todos: Todo[];
    onClose: () => void;
    setTodos: (todos: Todo[]) => void;
    onUpdate: (updatedTodo: Todo) => void;
    starredItems: number[];
    setStarredItems: (starredItems: number[]) => void;
}) => {
    if (!todo) return null;


    const toggleStar = (index: number) => {
        if (starredItems.includes(index)) {
            setStarredItems(starredItems.filter((i) => i !== index));
        } else {
            setStarredItems([...starredItems, index]);
        }
    };

    const toggleComplete = (index: number) => {
        setTodos(todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (

        <div className="ml-1 pt-8 flex flex-col" style={{ width: 452, height: 964, backgroundColor: '#EEF6EF' }}>
            <hr className=" " style={{ height: '2px', backgroundColor: '#496E4B33' }} />
            <div
                style={{ top: 32, left: 48 }}
                className="flex mt-5 items-center  justify-between px-5 py-4 border-gray-200 cursor-pointer"
            >
                <div className="flex  items-center gap-3">
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
                        className=" text-black"
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
            <hr className="mt-5 " style={{ height: '2px', backgroundColor: '#496E4B33' }} />
            <div className="mt-1 mb-1 flex  gap-6 px-5 py-4 ">
                <img height={20} width={20} className="" src={Plus} alt="" />
                <div>Add Step</div>
            </div>
            <hr className=" " style={{ height: '2px', backgroundColor: '#496E4B33' }} />
            <div className="mt-1 mb-1 flex  gap-6   px-5 py-4" > 
                <img height={20} width={20} className="mt-1" src={reminder} alt="" />
                <div>Reminder</div>
            </div>
            <hr className=" " style={{ height: '2px', backgroundColor: '#496E4B33' }} />
            <div className="mt-1 mb-1 flex gap-6  px-5 py-4" >
                <img height={20} width={20} className="mt-1" src={date} alt="" />
                <div>
                    Due Date
                </div>
            </div>
            <hr className=" " style={{ height: '2px', backgroundColor: '#496E4B33' }} />
            <div className="mt-1 mb-1 flex  gap-6  px-5 py-4" >
                <img height={20} width={20} className="mt-1" src={repeat} alt="" />
                <div>Repeat</div>
            </div>
            <hr className=" " style={{ height: '2px', backgroundColor: '#496E4B33' }} />
        </div>
    );
};

export default TodoDetailsSidebar;