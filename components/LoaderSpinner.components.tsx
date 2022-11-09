import { MoonLoader } from 'react-spinners';

export const LoaderSpinner = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen mt-10 flex justify-center">
        <MoonLoader color="#545454" size="30" />
      </div>
    </>
  );
};
