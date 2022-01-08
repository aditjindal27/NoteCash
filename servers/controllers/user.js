import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import mongoose from 'mongoose';


export const signIn = async (req, res) => {
    const{ email, password } = req.body;
    try {
        const exisitingUser = await User.findOne({email});
        if (!exisitingUser) return res.status(404).json({message:"User does not exist"});

        const isPasswordCorrect = await bcrypt.compare(password, exisitingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid Credentials"});

        const token = jwt.sign({email:exisitingUser.email, id: exisitingUser._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({result:exisitingUser, token});
    } catch(error) {
        res.status(500).json({message: "Something went wrong"});
    }
}

export const signUp = async (req, res) => {
    const { email, password, confirmedPassword, firstName, lastName} = req.body;

    try {
        const exisitingUser = await User.findOne({email});
        if (exisitingUser) return res.status(400).json({message:"User already exists"});
        if (password !== confirmedPassword) return res.status(400).json({message:"Passwords don't match"});

        const hashedPwd = await bcrypt.hash(password, 12);
        const result = await User.create({email, password: hashedPwd, name:`${firstName} ${lastName}`});
        const token = jwt.sign({email:result.email, id: result._id}, 'test', {expiresIn: "1h"});
        res.status(200).json({result, token});
        
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
    
}
export const getVal = async (req, res) => { 
    const { id } = req.params;
    let exisitingUser = null;
    
    if (id.length == 21) {
        exisitingUser = await User.findOne({google: id});
    } else {
        exisitingUser = await User.findById(id);
    }
    res.json(exisitingUser);
}

export const updateVal = async (req, res) => {
    const { id } = req.params;
    const { expense, income, expense_description, income_description } = req.body;
    let exisitingUser = null;
    
    if (id.length == 21) {
        exisitingUser = await User.findOne({google: id});
    } else {
        exisitingUser = await User.findById(id);
    }
    if (!exisitingUser) {
        exisitingUser = await User.create({google:id});
    } 

    let expenseArr = exisitingUser.expenses? exisitingUser.expenses: [];
    let incomeArr = exisitingUser.incomes? exisitingUser.incomes: [];
    let expenseDescArr = exisitingUser.expense_d? exisitingUser.expense_d: [];
    let incomeDescArr = exisitingUser.income_d? exisitingUser.income_d: [];

    if (expense !== 0 && expense!=="0") {
        expenseArr.push(expense);
        expenseDescArr.push(expense_description);
    }

    if (income !== 0 && income !=="0") {
        incomeArr.push(income);
        incomeDescArr.push(income_description);
    }
    

    const updatedPost = { expenses: expenseArr, incomes: incomeArr, expense_d:expenseDescArr, income_d: incomeDescArr};
    await User.findByIdAndUpdate(exisitingUser._id, updatedPost, { new: true });
    res.json(updatedPost);
    
}

export const resetVal = async (req, res) => {
    const { id } = req.params;
    
    let exisitingUser = null;

    if (id.length == 21) {
        exisitingUser = await User.findOne({google: id});
    } else {
        exisitingUser = await User.findById(id);
    }

    if (!exisitingUser) {
        exisitingUser = await User.create({google:id});
    } 
        

    let expenseArr = [];
    let incomeArr = [];
    let expenseDescArr = [];
    let incomeDescArr = [];

    const updatedPost = { expenses: expenseArr, incomes: incomeArr, expense_d:expenseDescArr, income_d: incomeDescArr}
    await User.findByIdAndUpdate(exisitingUser._id, updatedPost, { new: true });
    res.json(updatedPost);
    
}