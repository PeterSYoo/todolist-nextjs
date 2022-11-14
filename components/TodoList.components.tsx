import { Fragment, useEffect, useState } from 'react';
import { todoValidate } from '../lib/todoValidate';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { RiDeleteBinLine, RiEditLine, RiCheckFill } from 'react-icons/ri';
import { FiDelete } from 'react-icons/fi';

interface Values {
  title?: string;
  id?: string;
  readOnly: boolean;
}

interface ShowTask {
  preventDefault: () => void;
}

interface ResetForm {
  resetForm: () => void;
}

interface TodosMap {
  id: string;
  title?: string;
  readOnly: boolean;
}

export const TodoList = () => {
  const [hydrated, setHydrated] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [todos, setTodos] = useState<any>([]);

  const showTask = (e: ShowTask) => {
    e.preventDefault();
    formik.setFieldValue('id', uuid());
    setShowNew(true);
  };

  const appendToStorage = (values: Values) => {
    let existingEntries = JSON.parse(localStorage.getItem('todos')!);
    if (existingEntries === null) existingEntries = [];
    localStorage.setItem('todo', JSON.stringify(values));
    existingEntries.push(values);
    localStorage.setItem('todos', JSON.stringify(existingEntries));
  };

  const onSubmit = (values: Values, { resetForm }: ResetForm) => {
    appendToStorage(values);
    const parsed = JSON.parse(localStorage.getItem('todos')!);
    setTodos(parsed);
    resetForm();
    setShowNew(false);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      id: '',
      readOnly: true,
    },
    validate: todoValidate,
    onSubmit,
  });

  const parsed =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('todos')!)
      : null;

  const handleCloseNew = () => {
    setShowNew(false);
    formik.resetForm();
  };

  const handleRemove = (id: string) => {
    const newList = todos.filter(
      (todo: { id: string | number }) => todo.id !== id
    );
    setTodos(newList);
  };

  const handleUpdate = (e: React.FormEvent<HTMLInputElement>, id: string) => {
    formik.handleChange;
    const editList = [...todos];
    const thisItem = editList.find((x) => x.id === id);
    thisItem.title = e.currentTarget.value;
    setTodos(editList);
  };

  const handleEdit = (id: string) => {
    const editList = [...todos];
    const thisItem = editList.find((x) => x.id === id);
    thisItem.readOnly = !thisItem.readOnly;
    setTodos(editList);
  };

  console.log(todos);

  useEffect(() => {
    if (todos !== null) setTodos(parsed);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  } else {
    return (
      <>
        <form onSubmit={formik.handleSubmit}>
          <section className="min-w-screen flex flex-col mt-14 items-center px-7 max-w-[768px] mx-auto mb-48">
            <div className="w-full">
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

              {/* Create New Task */}
              {showNew ? (
                <>
                  <div className="mt-6 w-full mb-2">
                    <div className="flex justify-between items-center px-10">
                      <div
                        className={`${
                          formik.errors.title
                            ? 'border border-red-400 hover:border-red-600 rounded-md flex items-center py-3 dark:border-red-500 hover:dark:border-red-600 w-full pr-4'
                            : 'border border-gray-400 hover:border-black rounded-md flex items-center py-3 dark:border-gray-700 hover:dark:border-white w-full pr-4'
                        }`}
                      >
                        <input
                          type="text"
                          className="w-full focus:outline-none px-3 dark:bg-black dark:placeholder:text-gray-800"
                          placeholder="new todo"
                          {...formik.getFieldProps('title')}
                          name="title"
                          onChange={formik.handleChange}
                          value={formik.values.title}
                        />
                        <input
                          type="hidden"
                          {...formik.getFieldProps('id')}
                          name="id"
                          value={formik.values.id}
                        />
                        {formik.errors.title ? (
                          <span className="bg-white dark:bg-black text-gray-400 dark:text-gray-700 dark:border-gray-900 font-bold px-4 py-1 rounded-lg border border-gray-400 ">
                            Save
                          </span>
                        ) : (
                          <button
                            type="submit"
                            className="bg-black dark:bg-white text-white dark:text-black font-bold px-4 py-1 rounded-lg border border-white dark:hover:bg-black dark:hover:text-white dark:hover:border dark:hover:border-gray-700 hover:bg-white hover:text-black hover:border-gray-300"
                          >
                            Save
                          </button>
                        )}
                      </div>
                      <span onClick={handleCloseNew} className="ml-4">
                        <FiDelete
                          size={25}
                          className="text-gray-500 hover:text-black dark:text-gray-800 dark:hover:text-white cursor-pointer"
                        />
                      </span>
                    </div>
                    <div className="flex justify-center">
                      {formik.errors.title ? (
                        <span className="text-red-500 text-[10px] md:text-[12px]">
                          {formik.errors.title}
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            {/* Todo List */}
            {todos?.map((todo: TodosMap) => (
              <Fragment key={todo.id}>
                <div className="mt-6 w-full">
                  <div className="flex justify-between items-center">
                    <div className="w-full pr-10">
                      {/* Edit input field. */}
                      <input
                        onChange={(e) => handleUpdate(e, todo.id)}
                        type="text"
                        name="title"
                        readOnly={todo.readOnly}
                        defaultValue={todo.title}
                        className={
                          todo.readOnly
                            ? 'dark:bg-black w-full bg-white focus:outline-none'
                            : 'border border-gray-400 hover:border-black rounded-md py-2 dark:border-gray-700 hover:dark:border-white w-full px-2 focus:outline-none dark:bg-black my-3'
                        }
                      />
                    </div>
                    {/* Conditionally render edit or save. */}
                    <div className="flex justify-end gap-6">
                      {todo.readOnly ? (
                        <span
                          onClick={() => handleEdit(todo.id)}
                          className="text-gray-500 hover:text-black dark:hover:text-white cursor-pointer"
                        >
                          <RiEditLine size={20} />
                        </span>
                      ) : (
                        <span
                          onClick={() => handleEdit(todo.id)}
                          className="text-gray-500 hover:text-black dark:hover:text-white cursor-pointer"
                        >
                          <RiCheckFill size={20} />
                        </span>
                      )}
                      {/* Delete */}
                      <span
                        onClick={() => handleRemove(todo.id)}
                        className="text-gray-500 hover:text-black dark:hover:text-white cursor-pointer"
                      >
                        <RiDeleteBinLine size={20} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-300 w-full mt-5 dark:border-gray-700" />
              </Fragment>
            ))}
          </section>
        </form>
      </>
    );
  }
};
