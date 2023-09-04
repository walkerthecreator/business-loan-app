import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div >

      <section className="bg-purple-700 text-white p-40 rounded-md mt- ">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-4">
            Apply for a Business Loan
          </h1>
          <p className="text-lg text-center mb-8 max-w-2xl">
            Secure funding for your business with our flexible and competitive
            loan options.
          </p>

          <Link to="/businessDetails">
            <button className="rounded border border-white bg-white px-12 py-3 text-sm font-medium text-purple-700 hover:bg-purple-300 hover:text-black focus:outline-none focus:ring active:text-indigo-500">
              Get Started
            </button>
          </Link>

        </div>
      </section>
    </div>
  );
};

export default Hero;
