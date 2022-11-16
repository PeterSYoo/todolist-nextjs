import Image from 'next/image';
import { ThemeButton } from '../../components/ThemeButton.components';
import { FiLock, FiUser } from 'react-icons/fi';
import { AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import { loginValidate } from '../../lib/loginValidate';
import { useFormik } from 'formik';
import { loginUser } from '../../lib/loginHelper';

interface Values {
  email: string;
  password: string;
}

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const onSubmit = (values: Values) => {
    loginUser(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit,
  });

  return (
    <>
      <section className="min-w-screen mx-auto flex min-h-screen flex-col items-center bg-[#141f2f] pt-10 dark:bg-black md:px-5 md:pt-[125px]">
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
          <div className="mt-10 animate-border rounded-3xl from-purple-500 via-teal-500 to-blue-500 bg-[length:400%_400%] p-0.5 dark:bg-black dark:bg-gradient-to-r">
            <div className="grid rounded-3xl bg-white shadow-lg shadow-black dark:bg-[#0B121C] dark:shadow-none md:grid-cols-2">
              {/* Desktop Splash Image */}
              <div className="hidden md:col-span-1 md:col-start-1 md:block">
                <Image
                  src="https://i.imgur.com/gcLRkyb.png"
                  alt="desktop splash"
                  width={394}
                  height={336}
                />
              </div>
              {/* Email and Password Container */}
              <div className="mx-auto mt-6 mb-10 w-[300px] px-4 md:col-span-1 md:col-start-2 md:mt-6 md:w-full md:px-10">
                <div className="flex justify-center">
                  <ThemeButton />
                </div>
                <div className="leading-9">Email:</div>
                <div
                  className={`${
                    formik.errors.email
                      ? 'flex items-center gap-2 rounded-md border border-red-400 px-2 hover:border-red-600 dark:border-red-500 hover:dark:border-red-600 md:py-1'
                      : 'flex items-center gap-2 rounded-md border border-gray-400 px-2 hover:border-black dark:border-gray-700 hover:dark:border-white md:py-1'
                  }`}
                >
                  <div>
                    <FiUser />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="user@rapptrlabs.com"
                      className="w-full text-xs focus:outline-none dark:bg-[#0B121C] dark:placeholder:text-gray-700 md:text-base"
                      {...formik.getFieldProps('email')}
                      name="email"
                    />
                  </div>
                </div>
                {formik.errors.email ? (
                  <span className="text-[10px] text-red-500 md:text-[12px]">
                    {formik.errors.email}
                  </span>
                ) : (
                  <></>
                )}
                <div className="mt-3 leading-9">Password:</div>
                <div
                  className={`${
                    formik.errors.password
                      ? 'flex items-center gap-2 rounded-md border border-red-400 px-2 hover:border-red-600 dark:border-red-500 hover:dark:border-red-600 md:py-1'
                      : 'flex items-center gap-2 rounded-md border border-gray-400 px-2 hover:border-black dark:border-gray-700 hover:dark:border-white md:py-1'
                  }`}
                >
                  <div>
                    <FiLock />
                  </div>
                  <div className="w-full">
                    <input
                      type={`${passShow ? 'text' : 'password'}`}
                      placeholder="at least 4 characters"
                      className="w-full text-xs focus:outline-none dark:bg-[#0B121C] dark:placeholder:text-gray-700 md:text-base"
                      {...formik.getFieldProps('password')}
                      name="password"
                    />
                  </div>
                  <div>
                    <span
                      onClick={() => setPassShow(!passShow)}
                      className="ml-1 flex cursor-pointer items-center text-gray-500 hover:text-black dark:hover:text-white"
                    >
                      <AiFillEye size={25} />
                    </span>
                  </div>
                </div>
                {formik.errors.password ? (
                  <span className="text-[10px] text-red-500 md:text-[12px]">
                    {formik.errors.password}
                  </span>
                ) : (
                  <></>
                )}
                <div className="mt-8 flex justify-center md:mt-10">
                  {formik.errors.email || formik.errors.password ? (
                    <>
                      <button className="w-full cursor-default rounded-lg border border-gray-300 bg-white py-1 font-bold tracking-wide text-gray-300 dark:border-gray-700 dark:bg-[#0B121C] dark:text-gray-700">
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        className="w-full rounded-lg border border-[#0B121C] bg-[#0B121C] py-1 font-bold tracking-wide text-white hover:border hover:border-gray-400 hover:bg-white hover:text-[#0B121C] dark:border-gray-400 dark:hover:border-white"
                      >
                        Login
                      </button>
                    </>
                  )}
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
