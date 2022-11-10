import Image from 'next/image';
import { FiLock, FiUser } from 'react-icons/fi';

const Login = () => {
  return (
    <>
      <section className="min-w-screen min-h-screen mx-auto flex flex-col pt-10 items-center bg-[#0B121C] md:pt-[125px] md:px-5">
        <div className="md:mb-7">
          {/* Mobile Logo */}
          <Image
            src="https://i.imgur.com/zJCLnNZ.png"
            alt="logo"
            width={187}
            height={48}
            className="md:hidden"
          />
          {/* Desktop Logo */}
          <Image
            src="https://i.imgur.com/zJCLnNZ.png"
            alt="logo"
            width={355}
            height={93}
            className="hidden md:block"
          />
        </div>
        {/* Mobile & Desktop Login Container */}
        <div className="mt-10 grid bg-white rounded-3xl shadow-lg shadow-black md:grid-cols-2">
          {/* Desktop Splash Image */}
          <div className="hidden md:block md:col-start-1 md:col-span-1">
            <Image
              src="https://i.imgur.com/TcdSLqh.png"
              alt="desktop splash"
              width={394}
              height={336}
            />
          </div>
          {/* Email and Password Container */}
          <div className="w-[228px] md:w-full mx-auto mt-6 mb-10 px-4 md:col-start-2 md:col-span-1 md:px-10 md:mt-12">
            <div className="leading-9">Email:</div>
            <div className="border border-gray-400 hover:border-black rounded-md px-2 flex items-center gap-2 md:py-1">
              <div>
                <FiUser />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="user@rapptrlabs.com"
                  className="focus:outline-none w-full text-xs md:text-base"
                />
              </div>
            </div>
            <div className="mt-3 leading-9">Password:</div>
            <div className="border border-gray-400 hover:border-black rounded-md px-2 flex items-center gap-2 md:py-1">
              <div>
                <FiLock />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="at least 4 characters"
                  className="focus:outline-none w-full text-xs md:text-base"
                />
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-10">
              <button className="bg-[#0B121C] w-full rounded-lg text-white py-1 font-bold tracking-wide hover:bg-white hover:text-[#0B121C] border border-[#0B121C] hover:border hover:border-gray-400">
                Login
              </button>
            </div>
          </div>
          {/* Mobile Splash Image */}
          <div className="md:hidden">
            <Image
              src="https://i.imgur.com/bLNtBeu.png"
              alt="mobile-splash"
              width={228}
              height={108}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;