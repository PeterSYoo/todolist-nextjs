import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import { todoValidate } from '../lib/todoValidate';

interface Values {
  task: string;
}

interface ShowTask {
  preventDefault: () => void;
}

export const TodoList = () => {
  const [showNew, setShowNew] = useState(false);
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState('');

  const showTask = (e: ShowTask) => {
    e.preventDefault();
    setShowNew(true);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };

  const onSubmit = (values: Values) => {
    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }

    setTodo('');
  };

  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validate: todoValidate,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <section className="min-w-screen flex flex-col mt-14 items-center px-7 max-w-[768px] mx-auto">
          <div className="flex justify-between w-full">
            <h1 className="text-2xl font-bold">My To-Do List</h1>
            <span
              onClick={showTask}
              className="bg-blue-600 text-white font-bold border-blue-600 border dark:hover:border-white px-4 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black hover:border-black flex items-center cursor-pointer"
            >
              New
            </span>
          </div>
          <div className="border-b border-gray-300 border-2 w-full mt-4 dark:border-gray-500" />

          {showNew ? (
            <>
              {/* New Task */}
              <div className="mt-6 w-full mb-2">
                <div className="flex justify-between items-center px-10">
                  <div
                    className={`${
                      formik.errors.task
                        ? 'border border-red-400 hover:border-red-600 rounded-md flex items-center py-3 dark:border-red-500 hover:dark:border-red-600 w-full pr-4'
                        : 'border border-gray-400 hover:border-black rounded-md flex items-center py-3 dark:border-gray-700 hover:dark:border-white w-full pr-4'
                    }`}
                  >
                    <input
                      type="text"
                      className="w-full focus:outline-none px-3 dark:bg-black"
                      placeholder="new task"
                      {...formik.getFieldProps('task')}
                      name="task"
                    />
                    {formik.errors.task ? (
                      <button className="bg-gray-400 dark:bg-gray-900 text-gray-600 dark:text-gray-700 dark:border-gray-900 font-bold px-4 py-1 rounded-lg border border-white ">
                        Save
                      </button>
                    ) : (
                      <button className="bg-black dark:bg-white text-white dark:text-black font-bold px-4 py-1 rounded-lg border border-white dark:hover:bg-black dark:hover:text-white dark:hover:border dark:hover:border-gray-700 hover:bg-white hover:text-black hover:border-gray-300">
                        Save
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {formik.errors.task ? (
                <span className="text-red-500 text-[10px] md:text-[12px]">
                  {formik.errors.task}
                </span>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}

          {/* Sample */}
          <div className="mt-6 w-full">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg">Workout</h2>
              </div>
              <div className="flex justify-end gap-6">
                <span className="text-gray-500 hover:text-black dark:hover:text-white">
                  <RiEditLine size={20} />
                </span>
                <span className="text-gray-500 hover:text-black dark:hover:text-white">
                  <RiDeleteBinLine size={20} />
                </span>
              </div>
            </div>
            <div className="border-b border-gray-300 w-full mt-2 dark:border-gray-700" />
          </div>
        </section>
      </form>
    </>
  );
};
