const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxLength: [20, 'Name must be less than or equal to 20 characters'],
        trim: true
    },
    userName: {
        type: String,
        required: [true, "Username is required"],
        maxLength: [20, 'Username must be less than or equal to 20 characters'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email is already registered"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        select: false
    },
    bio: {
        type: String,
        required: [true, "Bio is required"],
        maxLength: [5, "Atleast 5 characters required"],
        maxLength: [200, "Maximum characters exceeded"],
        trim: true
    },
    resetPasswordToken: String,
    resetPasswordTokenExpires: Date

},
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
})

userSchema.methods = {
    createJwt() {
        return jwt.sign(
            { id: this._id, userName: this.userName, email: this.email, bio: this.bio },
            process.env.SECRET,
            { expiresIn: '1h' }
        )
    },
    getResetPasswordToken() {
        const resetToken = crypto.randomBytes(32).toString('hex');

        this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        this.resetPasswordTokenExpires = Date.now() + 1200 * 60 * 1000;
        
        return resetToken;
    }
}
module.exports = mongoose.model('user', userSchema);