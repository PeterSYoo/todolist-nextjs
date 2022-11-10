import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="min-w-screen min-h-screen mx-auto flex flex-col justify-center items-center bg-[#0B121C]">
        <div>
          <Image
            src="https://i.imgur.com/zJCLnNZ.png"
            alt="logo"
            width={187}
            height={48}
          />
        </div>
        <div className="mt-10 grid bg-white rounded-3xl">
          <div className="mx-auto my-10">
            <div className="">Email:</div>
            <input
              type="text"
              className="border border-black rounded-md focus:outline-none px-1"
            />
            <div className="mt-3">Password:</div>
            <input
              type="text"
              className="border border-black rounded-md focus:outline-none px-1"
            />
            <div className="flex justify-center mt-8">
              <button className="bg-[#0B121C] w-full rounded-lg text-white py-1 font-bold tracking-wide">
                Login
              </button>
            </div>
          </div>
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
