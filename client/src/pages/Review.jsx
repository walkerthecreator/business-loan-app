import { useContext } from "react"
import DataContext from "../context/Store"
import axios from "axios"

const Review = () => {

    const { userData , businessDetails  } = useContext(DataContext)
    console.log("review" , userData)


    async function submitData(){
        let res = await axios.post("http://localhost:4000/submitApplication" , { businessDetails })
        if(res.ok){
            console.log("submitted your application")
        }
        else{
            console.log("something went wrong")
        }
    }

    return (
        <div>

                 Business Name 
                 <h1>{ businessDetails?.name     }</h1>
                 <h1>{ businessDetails?.year     }</h1>
                 <h1>{ businessDetails?.loan     }</h1>
                 <h1>{ businessDetails?.accountProvider     }</h1>
                 <p>Review </p>
                 <table>
                    <thead>
                        <tr>
                            <th>year</th>
                            <th>month</th>
                            <th>Profit or Loss</th>
                            <th>Assets Value</th>
                        </tr>
                    </thead>
                    <tbody>

                        { 
                            userData.data?.sheet.map((item ,index)=>{
                            return(
                            <>
                            <tr key={index}>
                                <td >{ item.year }</td> 
                                <td >{ item.month }</td> 
                                <td >{ item.profitOrLoss }</td> 
                                <td >{ item.assetsValue }</td> 
                            </tr>
                            </>
                            ) 
                        })
                        }

                    </tbody>

                 </table>

                 <button onClick={ submitData }>Submit Application</button>

                

        </div>
    )
}

export default Review