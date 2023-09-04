import { useContext } from "react";
import DataContext from "../context/Store";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Review = () => {
  const { userData, businessDetails } = useContext(DataContext);

  const navigate = useNavigate()


  async function submitData() {
    let res = await axios.post("http://localhost:4000/submitApplication", {
      businessDetails,
    });
    if (res) {
        navigate('/success')
    } else {
      navigate('/businessDetails')
    }
  }

  return (
    <div>

        <h1 className="text-3xl font-dm ">Review your Application</h1>

        <div className="w-full flex flex-col items-center my-6">
            <div className="w-full px-2 md:w-1/2 lg:w-1/3">
                <div className="mb-2">
                <div className="flex items-center">
                    <span className="h-full w-96 rounded-tl-md rounded-bl-md border border-r-0 border-stroke bg-gray-1 py-3 px-4 text-base text-body-color">
                    Business name
                    </span>
                    <input
                    type="text"
                    placeholder="Loading"
                    className="w-full rounded-br-md rounded-tr-md border border-form-stroke p-3 pl-5 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    value={businessDetails?.name}
                    />
                </div>
                </div>
            </div>
            <div className="w-full px-2 md:w-1/2 lg:w-1/3">
                <div className="mb-2">
                <div className="flex items-center">
                    <span className="h-full w-96 rounded-tl-md rounded-bl-md border border-r-0 border-stroke bg-gray-1 py-3 px-4 text-base text-body-color">
                    Year
                    </span>
                    <input
                    type="text"
                    placeholder="Loading"
                    className="w-full rounded-br-md rounded-tr-md border border-form-stroke p-3 pl-5 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    value={businessDetails?.year}
                    />
                </div>
                </div>
            </div>
            <div className="w-full px-2 md:w-1/2 lg:w-1/3">
                <div className="mb-2">
                <div className="flex items-center">
                    <span className="h-full w-96 rounded-tl-md rounded-bl-md border border-r-0 border-stroke bg-gray-1 py-3 px-4 text-base text-body-color">
                    Loan amount
                    </span>
                    <input
                    type="text"
                    placeholder="Loading"
                    className="w-full rounded-br-md rounded-tr-md border border-form-stroke p-3 pl-5 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    value={businessDetails?.loan}
                    />
                </div>
                </div>
            </div>
            <div className="w-full px-2 md:w-1/2 lg:w-1/3">
                <div className="mb-3">
                <div className="flex items-center">
                    <span className="h-full w-96 rounded-tl-md rounded-bl-md border border-r-0 border-stroke bg-gray-1 py-3 px-4 text-base text-body-color">
                        Account Provider
                    </span>
                    <input
                    type="text"
                    placeholder="Loading"
                    className="w-full rounded-br-md rounded-tr-md border border-form-stroke p-3 pl-5 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                    value={businessDetails?.accountProvider}
                    />
                </div>
                </div>
            </div>
      </div>

      <button
        onClick={submitData}
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Submit Application
      </button>
      <div className="overflow-x-auto rounded-md">

        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-800">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Profile/Loss
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Assets Value
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Month
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Year
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">


            {userData.data?.sheet.map((item, index) => {
              return (
                 
                <>
                  <tr key={index}>
                        <td className={Number(item.profitOrLoss) < 0 ? "text-red-400 whitespace-nowrap px-4 py-2 font-medium" : "text-emerald-400 whitespace-nowrap px-4 py-2 font-medium" } >
                            { item.profitOrLoss }
                        </td>
                        <td className="whitespace -nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                        {item.assetsValue}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                        {item.month}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                        {item.year}
                        </td>
                  </tr>
                </>

              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Review;
