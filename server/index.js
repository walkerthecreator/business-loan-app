const express = require("express")
const app = express()
const cors = require("cors")
const sheet = require("./Accounting")

app.use(cors())
app.use(express.json())

app.get('/' , (req , res) => {
    return res.send("Started Application")
})

app.get('/balanceSheet' , ( req , res ) => {


    return res.status(200).json({ sheet })
})

app.post('/submitApplication' , (req , res) => {

    const { businessDetails } = req.body

    let averageAssets = 0 , profitOrLoss = 0  , preAssessment = 20 ;

    // calculate average asset value and profit loss value 
    for(let i of sheet){
        profitOrLoss = profitOrLoss + i.profitOrLoss
        averageAssets = averageAssets + i.assetsValue
    }

    // summarising application 

    if(profitOrLoss > 0 ){
        if(averageAssets > businessDetails.loan){
            preAssessment = "100"
        }
        else{
            preAssessment = "60"
        }
    }

    const finalObj = {
        ...businessDetails , preAssessment , profitOrLossSummary : profitOrLoss , averageAssets 
    }

    console.log(finalObj)
    return res.status(200).send("submitted application")


})

app.listen(4000 , ()=> {
    console.log("started server on 4000")
})