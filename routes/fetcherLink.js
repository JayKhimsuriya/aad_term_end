var express = require("express");
var BlogTable = require("../model/table")

var router = express.Router()
router.post("/addInfo",(req,res) => {console.log("API Working",req.body)
var employee = new BlogTable({
    title: req.body.title,
    description:req.body.description 
})
Blog.save().then(
    (data)=>{
        console.log("Save data" , data)
        return res.status(200).json({saveData : data})
    }
).catch((error)=>{console.log("Error data" , error)
return res.status(400).json({saveData : error})})
})

router.get("/getData", (req, res) => {
  BlogTable
    .find()
    .then((data) => {
      return res.status(200).json({ getData: data });
    })
    .catch((error) => {
      console.log("Error data", error);
      return res.status(400).json({ getData: error });
    });
});

router.get("/getData/search", (req, res) => {
    BlogTable
      .find()
      .then((data) => {
        return res.status(200).json({ getData: data });
      })
      .catch((error) => {
        console.log("Error data", error);
        return res.status(400).json({ getData: error });
      });
  });

router.post("/update/:id",(req,res)=> {
    console.log("paramsData",req.params.id)
    BlogTable.findByIdAndUpdate({_id : req.params.id},{$set:req.body},{new: true}).then((data)=> {
        return res.status(200).json({ putData: "Data Updated succesfully" });
    }).catch((error) => {
        console.log("Error data", error);
        return res.status(400).json({ putData: error });
    })
})
module.exports = router;
