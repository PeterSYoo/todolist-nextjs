import Image from 'next/image';
import { ThemeButton } from './ThemeButton.components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useFormik } from 'formik';
import { useSearchStore } from '../store/useSearchStore';
import { useRouter } from 'next/router';

interface Values {
  searchTerm: string;
}

interface ResetForm {
  resetForm: () => void;
}

export const Header = () => {
  const updateSearchTerm = useSearchStore((state) => state.updateSearchTerm);

  const router = useRouter();

  const onSubmit = (values: Values, { resetForm }: ResetForm) => {
    updateSearchTerm(values.searchTerm);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      searchTerm: '',
    },
    onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <section className="flex flex-col bg-[#141f2f] px-5 py-8 dark:bg-[#141f2f]">
          <div className="md:mx-auto md:w-full md:max-w-[1024px]">
            <div className="flex items-center justify-between md:grid md:grid-cols-12">
              <div className="md:col-span-3 md:col-start-1">
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
              <div className="flex items-center justify-between gap-6 md:col-span-9 md:col-start-4 md:flex md:items-center md:justify-end md:gap-10">
                {/* Desktop search input */}
                <div className="hidden md:mt-1 md:grid md:w-full md:max-w-[400px] md:grid-cols-12 md:items-center">
                  <div className="col-span-10 col-start-1 h-full rounded-l-3xl border border-[#34455d] bg-white py-2 pl-4">
                    <input
                      type="text"
                      placeholder="Search"
                      name="searchTerm"
                      onChange={formik.handleChange}
                      className="w-full pr-2 focus:outline-none dark:bg-white dark:text-black"
                      value={formik.values.searchTerm}
                    />
                  </div>
                  <div className="col-span-2 col-start-11 flex h-full justify-end rounded-r-3xl bg-[#34455d] pt-2 pr-3 text-white">
                    <button type="submit" className="flex">
                      <AiOutlineSearch size={25} />
                    </button>
                  </div>
                </div>
                <div className="md:box hidden h-6 border-r border-gray-600" />
                <div className="mt-2 text-white">
                  <ThemeButton />
                </div>
                <div className="h-6 border-r border-gray-700" />
                <div className="font-bold text-white md:text-lg">
                  <span
                    onClick={() => router.push('/')}
                    className="cursor-pointer tracking-wide"
                  >
                    Logout
                  </span>
                </div>
              </div>
            </div>
            {/* Mobile search input */}
            <div className="mt-5 grid grid-cols-12 items-center md:hidden">
              <div className="col-span-10 col-start-1 h-full rounded-l-3xl border border-[#34455d] bg-white py-2 pl-4">
                <input
                  type="text"
                  placeholder="Search"
                  name="searchTerm"
                  onChange={formik.handleChange}
                  className="w-full pr-2 focus:outline-none dark:bg-white dark:text-black"
                  value={formik.values.searchTerm}
                />
              </div>
              <div className="col-span-2 col-start-11 flex h-full justify-end rounded-r-3xl bg-[#34455d] pt-2 pr-3 text-white">
                <button type="submit" className="flex">
                  <AiOutlineSearch size={25} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
