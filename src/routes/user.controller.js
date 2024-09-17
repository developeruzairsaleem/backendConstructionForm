const User = require("../models/user.model");
const Joi = require('joi');



// Controller function
const postUser =async (req, res) => {

  const { email, username, phone, planName, size, budgetPlanned, budget, basement, cornerPlot, designPreference, location, downPayment, allocation, possession, quarterlyInstallment, total } = req.body;

  const schema = Joi.object({
    email: Joi.string().email().optional(),
    username: Joi.string().required(),
    phone: Joi.string().required(),
    planName: Joi.string().required(),
    size: Joi.number().required(),
    budgetPlanned: Joi.boolean().required(),
    budget: Joi.number().optional(),
    basement: Joi.boolean().required(),
    cornerPlot: Joi.boolean().required(),
    designPreference: Joi.string().required(),
    location: Joi.string().required(),
    downPayment: Joi.number().required(),
    allocation: Joi.number().required(),
    possession: Joi.number().required(),
    quarterlyInstallment: Joi.number().required(),
    total: Joi.number().required()
  });
  const { error } = schema.validate({ email, username, phone, planName, size, budgetPlanned, budget, basement, cornerPlot, designPreference, location, downPayment, allocation, possession, quarterlyInstallment, total }, { abortEarly: false });


  if (error) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      details: error.details.map(detail => detail.message)  
    });
  }


  try{
    const response =await new User({ email, username, phone, planName, size, budgetPlanned, budget, basement, cornerPlot, designPreference, location, downPayment, allocation, possession, quarterlyInstallment, total } )
    return res.status(201).json({
        status: 'success',
        message: 'Plan created successfully',
        data: {
          email,
          username,
          phone,
          planName,
          size,
          budgetPlanned,
          budget,
          basement,
          cornerPlot,
          designPreference,
          location,
          downPayment,
          allocation,
          possession,
          quarterlyInstallment,
          total
        }
      });

  }
  catch(error){
    console.log(error)
    return res.status(400).json({error:"unable to upload"})
  }
};



const getAllUsers =async(req,res,next)=>{
    try{
       const response= await User.find({})
        return res.status(200).json(response)
    
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error:"Error getting users from db"})
    }

}




module.exports = {
    getAllUsers,
    postUser
}