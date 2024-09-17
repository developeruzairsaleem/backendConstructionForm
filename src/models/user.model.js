const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email:{type:String},
    username:{type:String, required:true},
    phone:{type:String, required:true},
    planName:{type:String, required:true},
    size:{type:Number, required:true},
    budgetPlanned:{type:Boolean, required:true},
    budget:{type:Number},
    basement:{type:Boolean, required:true},
    cornerPlot:{type:Boolean, required:true},
    designPreference:{type:String, required:true},
    location:{type:String, required:true},
    downPayment:{type:Number,required:true},
    allocation:{type:Number, required:true},
    possession:{type:Number, required:true},
    quarterlyInstallment:{type:Number, required:true},
    total:{type:Number, required:true}
    
})


const User = mongoose.model('User',userSchema)

module.exports= User;