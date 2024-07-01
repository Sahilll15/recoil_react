import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../state/atoms/TodoState';

const Todo = ({ todo, index }) => {
    const [todos,settodos]=useRecoilState(todoState)
    const handleDeleteTodo = () => {
        settodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded shadow-sm">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={todo.completed}
                    // onChange={() => handleToggleComplete(index)}
                />
                <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>
                    {todo.text}
                </span>
            </div>
            <button
                className="bg-transparent border-none text-red-500 cursor-pointer"
                onClick={handleDeleteTodo}
            >
                🗑️
            </button>
        </div>
    );
};

export default Todo;
