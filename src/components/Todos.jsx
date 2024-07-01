import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoState } from '../state/atoms/TodoState';
import Todo from './Todo';
import { getTotaltodoCount } from '../state/selectors/totalTodos';

const Todos = () => {
    const [todos, settodos] = useRecoilState(todoState);
    const [todotext, settodotext] = useState('');
    const totalTodos = useRecoilValue(getTotaltodoCount);

    const handleChange = (e) => {
        settodotext(e.target.value);
    };

    const handleAddTodo = () => {
        if(!todotext){
            alert('todos cant be empty')
            return;
        }
        settodos([
            ...todos,
            {
                id: Date.now(),
                text: todotext,
                completed: false,
            },
        ]);
        settodotext('');
    };

    const handleClearTodos = () => {
        settodos([]);
    };

    return (
        <div className=" bg-gray-100  ">
            <main className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-3">Todo List</h1>
                <h1 className="text-xl font-semibold text-center mb-6">Basic application to learn recoil state</h1>
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        id="todoInput"
                        className="flex-grow p-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={todotext}
                        placeholder="Add a new task"
                    />
                    <button
                        id="addTodo"
                        className="bg-black text-white p-2 rounded shadow hover:bg-gray-800 transition"
                        onClick={handleAddTodo}
                    >
                        Add
                    </button>
                    <button
                        id="clearTodos"
                        className="bg-red-500 text-white p-2 rounded shadow hover:bg-red-600 transition"
                        onClick={handleClearTodos}
                    >
                        Clear
                    </button>
                </div>

                {todos.length > 0 && (
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Total Todos: {totalTodos}
                    </h2>
                )}

                <div className="flex flex-col gap-4">
                    {todos.map((todo, index) => (
                        <Todo key={index} todo={todo} index={index} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Todos;
