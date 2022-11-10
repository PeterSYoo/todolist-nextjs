import Image from 'next/image';
import { FiLock, FiUser } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <section className="min-w-screen min-h-screen mx-auto flex flex-col pt-10 items-center bg-[#0B121C]">
        {/* Mobile Logo | Desktop Logo */}
        <div>
          <Image
            src="https://i.imgur.com/zJCLnNZ.png"
            alt="logo"
            width={187}
            height={48}
          />
        </div>
        {/* Mobile Login Container | Desktop Login Container */}
        <div className="mt-10 grid bg-white rounded-3xl shadow-lg shadow-black">
          {/* Email and Password Container */}
          <div className="w-[228px] mx-auto mt-6 mb-10 px-4">
            <div className="leading-9">Email:</div>
            <div className="border border-gray-400 hover:border-black rounded-md px-1 flex items-center gap-1">
              <div>
                <FiUser />
              </div>
              <div>
                <input type="text" className="focus:outline-none w-full" />
              </div>
            </div>
            <div className="mt-3 leading-9">Password:</div>
            <div className="border border-gray-400 hover:border-black rounded-md px-1 flex items-center gap-1">
              <div>
                <FiLock />
              </div>
              <div>
                <input type="text" className="focus:outline-none w-full" />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-[#0B121C] w-full rounded-lg text-white py-1 font-bold tracking-wide hover:bg-white hover:text-[#0B121C] border border-[#0B121C] hover:border hover:border-gray-400">
                Login
              </button>
            </div>
          </div>
          {/* Mobile Splash Image */}
          <div className="">
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
}
