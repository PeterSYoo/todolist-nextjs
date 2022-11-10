import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <section className="bg-[#0B121C] flex flex-col px-10 py-8">
        <div className="flex justify-between items-center">
          <Image
            src="https://i.imgur.com/zJCLnNZ.png"
            alt="logo"
            width={151}
            height={39}
            className=""
          />
          <div className="border-r border-gray-600 h-4" />
          <div className="text-white font-bold text-lg">Logout</div>
        </div>
      </section>
    </>
  );
};
