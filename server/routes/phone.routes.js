const PhoneModel = require("../../data/phones.json")

//GET /phones => Show all phones (use the phones.json) as fake data

router.get("/phones", async  (req, res, next) =>{


    try {

        const reponse = await PhoneModel.find().select("name")
        res.json(reponse)
        console.log(response)
        
    } catch (error) {
        next(error)
    }
   

})


//GET /phone/:id => Show a phone details
router.get("/phone/:id", async  (req, res, next) =>{

    const {id} =req.params

    try {
        const reponse = await PhoneModel.findById(id)
        res.json(reponse)
        console.log(response)
        
    } catch (error) {
        next(error)
    }
   
})