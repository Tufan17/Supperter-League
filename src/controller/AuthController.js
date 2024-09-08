const authServices = require("../services/authServices");
const { formatApiResponse } = require("../utils/responseFormatter");
const validator = require("validator");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !validator.isEmail(email)) {
      const response = formatApiResponse(
        req,
        "Login Request",
        "Invalid email address.",
        "",
        400
      );
      return res.status(400).json(response);
    }

    if (!password || !validator.isLength(password, { min: 6 })) {
      const response = formatApiResponse(
        req,
        "Login Request",
        "Password must be at least 6 characters long.",
        "",
        400
      );
      return res.status(400).json(response);
    }

    const result = await authServices.login(email, password);

    const response = formatApiResponse(
      req,
      "Login Request",
      result.message,
      result.data ? result : "",
      result.status === "success" ? 200 : 400
    );
    req.session.user = result.data;
    res.status(result.status === "success" ? 200 : 400).json(response);
  } catch (error) {
    next(error);
  }
};

const logout = (req, res, next) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        const response = formatApiResponse(
          req,
          "Logout Request",
          "Logout Error",
          "",
          500
        );
        res.status(500).json(response);
      } else {
        const response = formatApiResponse(
          req,
          "Logout Request",
          "Logout successful",
          ""
        );
        res.status(200).json(response);
      }
    });
  } catch (error) {
    next(error);
  }
};

const register =async (req, res, next) => {
  const {name,surname,email,password,again_password} = req.body;
  if(!name||!surname||!email||!password||!again_password){
    const response = formatApiResponse(
      req,
      "Register Request",
      "You must fill in all fields.",
      "",
      400
    );
    return res.status(400).json(response);
  }else if (!email || !validator.isEmail(email)) {
    const response = formatApiResponse(
      req,
      "Register Request",
      "Invalid email address.",
      "",
      400
    );
    return res.status(400).json(response);
  }else if(password!==again_password){
   
    const response = formatApiResponse(
      req,
      "Register Request",
      "Passwords do not match",
      "",
      400
    );
    return res.status(400).json(response); 

  }else{
    const result =await authServices.register(name,surname,email,password);
    if(result.status==='error'){
      const response = formatApiResponse(
        req,
        "Register Request",
        result.message,
        "",
        400
      );
      return res.status(400).json(response); 
    }

    const response = formatApiResponse(
      req,
      "Logout Request",
      "Register Success",
      result,
      200
    );
    res.status(200).json(response);
  } 
}

  module.exports = {
  login,
  logout,
  register,
};
