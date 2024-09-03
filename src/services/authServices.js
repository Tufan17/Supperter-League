const RoleModel = require('../models/RoleModel');
const UserModel = require('../models/UserModel');
const HashPassword = require('../utils/hashPassword');
const validator = require('validator');
const { v4: uuidv4 } = require('uuid');

const login = async (email, password) => {
  if (!validator.isEmail(email)) {
    return {
      status: "error",
      message: "Invalid email format",
    };
  }

  if (validator.isEmpty(password)) {
    return {
      status: "error",
      message: "Password cannot be empty",
    };
  }

  const user = await UserModel.findByEmail(email);

  if (!user) {
    return {
      status: "error",
      message: "Email not found",
    };
  }

  const hashedPassword = await HashPassword(password);
  const isMatch = hashedPassword === user.password;

  if (!isMatch) {
    return {
      status: "error",
      message: "Incorrect password",
    };
  }

  const role = await RoleModel.findId(user.role_id);
  user.role = role;

  return {
    status: "success",
    message: "Login successful",
    data: user,
  };
};

const register= async (name,surname,email,password) => {

  const checkMail=await UserModel.findByEmail(email);
  if(checkMail){
    return {
      status: "error",
      message: "Email already exists",
    };
  }else{
    const currentDate = Math.floor(Date.now() / 1000);
    const data={
      id:uuidv4(),
      name,
      surname,
      email,
      password,
      nickname: surname+currentDate,
      role_id: 'f465fb39-7d2a-40d0-be34-6239448fe12e',
      country_id: 'c8134f9f-e66c-46c4-b04b-adec068e5ce5',
    };
    const result =await UserModel.create(data);
 
    console.log(result);
    return {
      status: "success",
      message: "User registered successfully",
    };

  }

   // {
  //   id: faker.datatype.uuid(),
  //   avatar: '/storage/defaults/user.png',
  //   nickname: 'admin',
  //   email: 'admin@taraftarlarlig.com',
  //   name: 'Admin',
  //   surname: 'User',
  //   password: '99e2cf788f1f883f47f9a8d7387412bd', 
  //   role_id: 'f465fb39-7d2a-40d0-be34-6239448fe12e',
  //   country_id: 'c8134f9f-e66c-46c4-b04b-adec068e5ce5',
  //   created_at: knex.fn.now(),
  //   updated_at: knex.fn.now(),
  //   deleted_at: null,
  // },
}

module.exports = {
  login,
  register
};
