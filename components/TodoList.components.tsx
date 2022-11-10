import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';

export const TodoList = () => {
  return (
    <>
      <section className="min-w-screen flex flex-col mt-14 items-center px-7 max-w-[768px] mx-auto">
        <div className="flex justify-between w-full">
          <h1 className="text-2xl font-bold">My To-Do List</h1>
          <button className="bg-blue-600 text-white font-bold px-4 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black">
            New
          </button>
        </div>
        <div className="border-b border-gray-300 border-2 w-full mt-4 dark:border-gray-500" />
        {/* Sample */}
        <div className="mt-6 w-full">
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg">Workout</h2>
            </div>
            <div className="flex justify-end gap-6">
              <button className="text-gray-500 hover:text-black dark:hover:text-white">
                <RiEditLine size={20} />
              </button>
              <button className="text-gray-500 hover:text-black dark:hover:text-white">
                <RiDeleteBinLine size={20} />
              </button>
            </div>
          </div>
          <div className="border-b border-gray-300 w-full mt-2 dark:border-gray-700" />
        </div>
      </section>
    </>
  );
};
