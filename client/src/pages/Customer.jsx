import { useContext, useState } from "react"
import axios from "axios"
import DataContext from "../context/Store"
import { useNavigate } from "react-router-dom";

const Customer = () => {

    const [formData , setFormData] = useState("")
    const [ sheet , setSheet ] = useState(null)

    const { userData , changeUserData , changeBusiness } = useContext(DataContext)

    const navigate = useNavigate()

    function handleChange(e){
        const { name , value } = e.target
        setFormData(prev => ({ ...prev , [name] : value}))
    }

    async function getBalanceSheet(){

            changeUserData({ status : "loading" , data : null , error : null })

        try{
            let res = await axios.get("http://localhost:4000/balanceSheet")
            res = res.data
            changeUserData({status : "success" , data : res , error : null })
            changeBusiness(formData)
            navigate('/review')
        }
        catch(e){
            console.error(e)
        }
    }

  return (
    <div>
      <h1>Fill out the form</h1>
      <div>
        <label htmlFor="name">Enter business name</label>
        <input type="text" placeholder="Enter Business name" id="name" name="name"  onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="date">Enter Year of establishment</label>
        <input type="year" name="year" id="date"  onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="loan">Enter Loan amount?</label>
        <input type="number" placeholder="123,454" name="loan" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="accountProvider">Select your Account Provider</label>
        <select name="accountProvider" id="accountProvider" onChange={handleChange} required>
            <option value="null">Account Provider</option>
            <option value="xero">xero</option>
            <option value="myob">MYOB</option>
            <option value="other">other</option>
        </select>
      </div>

      <button onClick={ getBalanceSheet }>Get balance sheet</button>
    </div>
  );
};

export default Customer;
