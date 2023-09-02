import { createContext , useState } from "react"


const DataContext = createContext()

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {

    const [userData , setUserData] = useState({ data : null , status : null , error : null }) 

    const [ businessDetails , setBusinessDetails ] = useState("")

    function changeUserData(data){
        setUserData(data)
    }

    function changeBusiness( data ){
        setBusinessDetails(data)
    }

    return (
        <DataContext.Provider value={{ userData , changeUserData , businessDetails , changeBusiness }}>
            { children }
        </DataContext.Provider>
    )
}


export default DataContext; 