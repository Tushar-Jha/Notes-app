const router=require("express").Router();
const bodyParser=require("body-parser");
const Note=require("../models/note");

router.use(bodyParser.urlencoded({extended:true}));


//READ
router.get("/",(req,res)=>{
    Note.find()
        .then((notes)=>res.json(notes))
        .catch((err)=>console.log(err));
});


//CREATE
router.post("/add",(req,res)=>{
   const newNote= new Note({
       title:req.body.title,
       content:req.body.content
   })

   newNote.save()
        .then(()=>console.log(newNote))
        .catch((err)=>console.log(err));
});

//DELTE ONE 
router.delete("/:id",(req,res)=>{
    Note.findByIdAndDelete(req.params.id)
        .then(()=>console.log("deleted"))
        .catch((err)=>console.log(err));
});
module.exports=router;