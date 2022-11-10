import Image from 'next/image';
import { ThemeButton } from './ThemeButton.components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Header = () => {
  return (
    <>
      <section className="bg-[#141f2f] flex flex-col px-5 py-8 dark:bg-[#141f2f]">
        <div className="md:w-full md:mx-auto md:max-w-[1024px]">
          <div className="flex justify-between items-center md:grid md:grid-cols-12">
            <div className="md:col-start-1 md:col-span-3">
              {/* Desktop logo */}
              <Image
                src="https://i.imgur.com/zJCLnNZ.png"
                alt="logo"
                width={151}
                height={39}
                className="hidden md:block"
              />
              {/* Mobile logo */}
              <Image
                src="https://i.imgur.com/zJCLnNZ.png"
                alt="logo"
                width={125}
                height={30}
                className="md:hidden"
              />
            </div>
            <div className="md:col-start-4 md:col-span-9 md:flex md:justify-end md:items-center md:gap-10 flex justify-between items-center gap-6">
              {/* Desktop search input */}
              <div className="hidden md:grid md:grid-cols-12 md:items-center md:max-w-[400px] md:w-full md:mt-1">
                <div className="col-start-1 col-span-10 bg-white py-2 rounded-l-3xl h-full border border-[#34455d] pl-4">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pr-2 focus:outline-none dark:bg-white dark:text-black"
                  />
                </div>
                <div className="col-start-11 col-span-2 bg-[#34455d] pt-2 rounded-r-3xl h-full flex justify-end pr-3 text-white">
                  <AiOutlineSearch size={25} />
                </div>
              </div>
              <div className="border-r border-gray-600 h-6 hidden md:box" />
              <div className="text-white mt-2">
                <ThemeButton />
              </div>
              <div className="border-r border-gray-700 h-6" />
              <div className="text-white font-bold md:text-lg">
                <button className="tracking-wide">Logout</button>
              </div>
            </div>
          </div>
          {/* Mobile search input */}
          <div className="grid grid-cols-12 mt-5 items-center md:hidden">
            <div className="col-start-1 col-span-10 bg-white py-2 rounded-l-3xl h-full border border-[#34455d] pl-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full pr-2 focus:outline-none dark:bg-white dark:text-black"
              />
            </div>
            <div className="col-start-11 col-span-2 bg-[#34455d] pt-2 rounded-r-3xl h-full flex justify-end pr-3 text-white">
              <AiOutlineSearch size={25} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
