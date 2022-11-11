import Image from 'next/image';
import { ThemeButton } from '../../components/ThemeButton.components';
import { FiLock, FiUser } from 'react-icons/fi';
import { AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import { loginValidate } from '../../lib/loginValidate';
import { useFormik } from 'formik';

interface Values {
  email?: string;
  password?: string;
}

const Login = () => {
  const [show, setShow] = useState(false);

  const onSubmit = async (values: Values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit,
  });

  console.log(formik.errors);

  return (
    <>
      <section className="min-w-screen min-h-screen mx-auto flex flex-col pt-10 items-center bg-[#141f2f] md:pt-[125px] md:px-5 dark:bg-black">
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
        <form onSubmit={formik.handleSubmit}>
          <div className="animate-border dark:bg-black from-purple-500 via-teal-500 to-blue-500 bg-[length:400%_400%] p-0.5 dark:bg-gradient-to-r rounded-3xl mt-10">
            <div className="grid bg-white rounded-3xl shadow-lg shadow-black dark:shadow-none md:grid-cols-2 dark:bg-[#0B121C]">
              {/* Desktop Splash Image */}
              <div className="hidden md:block md:col-start-1 md:col-span-1">
                <Image
                  src="https://i.imgur.com/gcLRkyb.png"
                  alt="desktop splash"
                  width={394}
                  height={336}
                />
              </div>
              {/* Email and Password Container */}
              <div className="w-[300px] md:w-full mx-auto mt-6 mb-10 px-4 md:col-start-2 md:col-span-1 md:px-10 md:mt-6">
                <div className="flex justify-center">
                  <ThemeButton />
                </div>
                <div className="leading-9">Email:</div>
                <div
                  className={`${
                    formik.errors.email
                      ? 'border border-red-400 hover:border-red-600 rounded-md px-2 flex items-center gap-2 md:py-1 dark:border-red-500 hover:dark:border-red-600'
                      : 'border border-gray-400 hover:border-black rounded-md px-2 flex items-center gap-2 md:py-1 dark:border-gray-700 hover:dark:border-white'
                  }`}
                >
                  <div>
                    <FiUser />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="user@rapptrlabs.com"
                      className="focus:outline-none w-full text-xs md:text-base dark:bg-[#0B121C] dark:placeholder:text-gray-700"
                      {...formik.getFieldProps('email')}
                      name="email"
                    />
                  </div>
                </div>
                {formik.errors.email ? (
                  <span className="text-red-500 text-[10px] md:text-[12px]">
                    {formik.errors.email}
                  </span>
                ) : (
                  <></>
                )}
                <div className="mt-3 leading-9">Password:</div>
                <div
                  className={`${
                    formik.errors.password
                      ? 'border border-red-400 hover:border-red-600 rounded-md px-2 flex items-center gap-2 md:py-1 dark:border-red-500 hover:dark:border-red-600'
                      : 'border border-gray-400 hover:border-black rounded-md px-2 flex items-center gap-2 md:py-1 dark:border-gray-700 hover:dark:border-white'
                  }`}
                >
                  <div>
                    <FiLock />
                  </div>
                  <div className="w-full">
                    <input
                      type={`${show ? 'text' : 'password'}`}
                      placeholder="at least 4 characters"
                      className="focus:outline-none w-full text-xs md:text-base dark:bg-[#0B121C] dark:placeholder:text-gray-700"
                      {...formik.getFieldProps('password')}
                      name="password"
                    />
                  </div>
                  <div>
                    <span
                      onClick={() => setShow(!show)}
                      className="flex items-center ml-1 text-gray-500 dark:hover:text-white hover:text-black cursor-pointer"
                    >
                      <AiFillEye size={25} />
                    </span>
                  </div>
                </div>
                {formik.errors.password ? (
                  <span className="text-red-500 text-[10px] md:text-[12px]">
                    {formik.errors.password}
                  </span>
                ) : (
                  <></>
                )}
                <div className="flex justify-center mt-8 md:mt-10">
                  <button className="bg-[#0B121C] w-full rounded-lg text-white py-1 font-bold tracking-wide hover:bg-white hover:text-[#0B121C] border border-[#0B121C] hover:border hover:border-gray-400 dark:border-gray-400 dark:hover:border-white">
                    Login
                  </button>
                </div>
              </div>
              {/* Mobile Splash Image */}
              <div className="md:hidden">
                <Image
                  src="https://i.imgur.com/OzOqRnn.png"
                  alt="mobile-splash"
                  width={306}
                  height={108}
                ></Image>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
