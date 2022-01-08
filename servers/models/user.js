import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    id: {type: String},
    expenses: [Number],
    expense_d: [String],
    income_d: [String],
    incomes:[Number],
    google: {type:String},
});

export default mongoose.model('User', userSchema);