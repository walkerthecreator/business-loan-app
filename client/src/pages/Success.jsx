const Success = () => {
  return (
    <div className="grid mt-20 px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black  text-8xl  t">Success</h1>

        <p className="text-md text-emerald-700 bg-emerald-100 font-bold tracking-tight text-gray-900 sm:text-4xl">
         We'll connect with you soon
        </p>

        <p className="mt-4 text-gray-500">we'll update you soon</p>

        <a
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Success;
