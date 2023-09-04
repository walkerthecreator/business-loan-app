import { useContext, useState } from "react"
import axios from "axios"
import DataContext from "../context/Store"
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Customer = () => {

    const [formData , setFormData] = useState("")
    const [ sheet , setSheet ] = useState(null)
    const [isError , setIsError] = useState(false)

    const { userData , changeUserData , changeBusiness } = useContext(DataContext)

    const navigate = useNavigate()

    function handleChange(e){
        const { name , value } = e.target
        setFormData(prev => ({ ...prev , [name] : value}))
    }

    const inputStyle = "w-full p-2 rounded border-2 border-gray-300 focus:outline-none focus:border-indigo-500 my-2"

    async function getBalanceSheet(){

            changeUserData({ status : "loading" , data : null , error : null })

        try{
            if( formData.year && formData.loan && formData.name && formData.accountProvider){
                let res = await axios.get("http://localhost:4000/balanceSheet")
                res = res.data
                changeUserData({status : "success" , data : res , error : null })
                changeBusiness(formData)
                navigate('/review')
            }
            else {
                setIsError(true)
            }
        }
        catch(e){
            console.error(e)
        }
    }

  return (
    <div >
      <h1 className="text-2xl font-bold sm:text-3xl font-dm text-5xl ">Get started today!</h1>
      <div className="flex border-2 border-gray-200 flex-col w-96 p-6 mx-auto text-left rounded-md mt-4">
      <div>
        <label htmlFor="name">Enter business name</label>
        <input type="text" placeholder="Business name" id="name" name="name"  onChange={handleChange} className={inputStyle} required/>
      </div>

      <div>
        <label htmlFor="date">Enter year of establishment</label>
        <input type="year" name="year" id="date"  onChange={handleChange} className={inputStyle} placeholder="2001" required/>
      </div>

      <div>
        <label htmlFor="loan">Enter loan amount?</label>
        <input type="number" placeholder="₹1,23,454" name="loan" onChange={handleChange} className={inputStyle} required/>
      </div>

      <div>
        <label htmlFor="accountProvider">Select your Account Provider</label>
        <select name="accountProvider" id="accountProvider" onChange={handleChange} className={inputStyle} required>
            <option value="null">Account Provider</option>
            <option value="xero">xero</option>
            <option value="myob">MYOB</option>
            <option value="other">other</option>
        </select>
      </div>


    

      <button onClick={ getBalanceSheet } className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Get Balance sheet</button>
      </div>

      {
        isError && <Alert data="Please fill out all fields"/>
      }
    </div>
  );
};

export default Customer;
