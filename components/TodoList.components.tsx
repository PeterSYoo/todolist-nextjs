import { Fragment, useEffect, useState } from 'react';
import { todoValidate } from '../lib/todoValidate';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { RiDeleteBinLine, RiEditLine, RiCheckFill } from 'react-icons/ri';
import { SlRefresh } from 'react-icons/sl';
import { FiDelete } from 'react-icons/fi';
import { useSearchStore } from '../store/useSearchStore';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  const searchTerm = useSearchStore((state) => state.searchTerm);

  const showTask = (e: ShowTask) => {
    e.preventDefault();
    /* Updates 'id' hidden input field value with uuid call. On Save button
    submit we now have a unique id prop sent to our formik values. */
    formik.setFieldValue('id', uuid());
    setShowNew(true);
  };

  const appendToStorage = (values: Values) => {
    let existingEntries = JSON.parse(localStorage.getItem('todos')!);
    // If todos item is empty, existingEntries is now an empty list.
    if (existingEntries === null) existingEntries = [];
    // Push formik values to our empty list.
    existingEntries.push(values);
    // Update todos item with existingEntries list.
    localStorage.setItem('todos', JSON.stringify(existingEntries));
  };

  const onSubmit = (values: Values, { resetForm }: ResetForm) => {
    appendToStorage(values);
    const parsed = JSON.parse(localStorage.getItem('todos')!);
    // Update our todos state with todos item in localStorage.
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
    /* Returns a new list without the element that matches our mapped object's 
    id prop. */
    const newList = todos.filter((todo: { id: string }) => todo.id !== id);
    // Update our state with the new list.
    setTodos(newList);
  };

  const handleUpdate = (e: React.FormEvent<HTMLInputElement>, id: string) => {
    // Create a copy of our todos list in memory by utilizing spread operator.
    const editList = [...todos];
    /* Find single element that is equal to the current mapped element's id 
    prop, callback lets us mutate the element in the editList array. */
    const thisItem = editList.find((x) => x.id === id);
    // Edit the title prop of the found single element.
    thisItem.title = e.currentTarget.value;
    // Update our state with the mutated list.
    setTodos(editList);
  };

  const handleEdit = (id: string) => {
    const editList = [...todos];
    const thisItem = editList.find((x) => x.id === id);
    thisItem.readOnly = !thisItem.readOnly;
    setTodos(editList);
  };

  const handleRefresh = () => {
    router.reload();
  };

  useEffect(() => {
    /* If todos state is not empty, update state to localStorage item after first 
    render. This lets us persist our data on page refresh since localStorage
    will have our saved data. If we don't do this then our localStorage item
    will be set to the empty todos list. */
    if (todos !== null) setTodos(parsed);
  }, []);

  useEffect(() => {
    /* If todos state ever changes, update our localStorage item with todos 
    state. */
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // console.log(searchTerm);

  if (!hydrated) {
    return null;
  } else {
    return (
      <>
        <form onSubmit={formik.handleSubmit}>
          <section className="min-w-screen mx-auto mt-14 mb-48 flex max-w-[768px] flex-col items-center px-7">
            <div className="w-full">
              <div className="flex w-full justify-between">
                <div>
                  <h1 className="text-2xl font-bold">My To-Do List</h1>
                </div>
                <div className="flex items-center gap-10">
                  <span onClick={handleRefresh} className="cursor-pointer">
                    <SlRefresh
                      size={25}
                      className="opacity-50 duration-300 hover:rotate-180 hover:opacity-100 hover:duration-300"
                    />
                  </span>
                  <div>
                    <span
                      onClick={showTask}
                      className="flex h-9 cursor-pointer items-center rounded-lg border border-blue-600 bg-blue-600 px-4 font-bold text-white hover:border-black hover:bg-black dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                    >
                      New
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full border-2 border-b border-gray-300 dark:border-gray-500" />

              {/* Create New Task */}
              {showNew ? (
                <>
                  <div className="mt-6 mb-2 w-full">
                    <div className="flex items-center justify-between px-10">
                      <div
                        className={`${
                          formik.errors.title
                            ? 'flex w-full items-center rounded-md border border-red-400 py-3 pr-4 hover:border-red-600 dark:border-red-500 hover:dark:border-red-600'
                            : 'flex w-full items-center rounded-md border border-gray-400 py-3 pr-4 hover:border-black dark:border-gray-700 hover:dark:border-white'
                        }`}
                      >
                        <input
                          type="text"
                          className="w-full px-3 focus:outline-none dark:bg-black dark:placeholder:text-gray-800"
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
                          <span className="rounded-lg border border-gray-400 bg-white px-4 py-1 font-bold text-gray-400 dark:border-gray-900 dark:bg-black dark:text-gray-700 ">
                            Save
                          </span>
                        ) : (
                          <button
                            type="submit"
                            className="rounded-lg border border-white bg-black px-4 py-1 font-bold text-white hover:border-gray-300 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border dark:hover:border-gray-700 dark:hover:bg-black dark:hover:text-white"
                          >
                            Save
                          </button>
                        )}
                      </div>
                      <span onClick={handleCloseNew} className="ml-4">
                        <FiDelete
                          size={25}
                          className="cursor-pointer text-gray-500 hover:text-black dark:text-gray-800 dark:hover:text-white"
                        />
                      </span>
                    </div>
                    <div className="flex justify-center">
                      {formik.errors.title ? (
                        <span className="text-[10px] text-red-500 md:text-[12px]">
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
            {todos
              ?.filter((todo: any) => {
                if (searchTerm === '') {
                  return todo;
                } else if (
                  todo.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return todo;
                }
              })
              .map((todo: TodosMap) => (
                <Fragment key={todo.id}>
                  <div className="mt-6 w-full">
                    <div className="flex items-center justify-between">
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
                              ? 'w-full bg-white focus:outline-none dark:bg-black'
                              : 'my-3 w-full rounded-md border border-gray-400 py-2 px-2 hover:border-black focus:outline-none dark:border-gray-700 dark:bg-black hover:dark:border-white'
                          }
                        />
                      </div>
                      {/* Conditionally render edit or save. */}
                      <div className="flex justify-end gap-6">
                        {todo.readOnly ? (
                          <span
                            onClick={() => handleEdit(todo.id)}
                            className="cursor-pointer text-gray-500 hover:text-black dark:hover:text-white"
                          >
                            <RiEditLine size={20} />
                          </span>
                        ) : (
                          <span
                            onClick={() => handleEdit(todo.id)}
                            className="cursor-pointer text-gray-500 hover:text-black dark:hover:text-white"
                          >
                            <RiCheckFill size={20} />
                          </span>
                        )}
                        {/* Delete */}
                        <span
                          onClick={() => handleRemove(todo.id)}
                          className="cursor-pointer text-gray-500 hover:text-black dark:hover:text-white"
                        >
                          <RiDeleteBinLine size={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 w-full border-b border-gray-300 dark:border-gray-700" />
                </Fragment>
              ))}
          </section>
        </form>
      </>
    );
  }
};
