const mongoose = require("momgoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'add a name '],
    },
    email:{
        type: String,
        required: [true, 'add an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'enter the password'],
        minlength: 6,
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }

});

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});

module.exports = mongoose.model('User', UserSchema);