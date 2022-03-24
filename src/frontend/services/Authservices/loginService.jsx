import axios from "axios";
import { toast } from "react-toastify";
const loginService = async (email, password) => {
  try {
  const res = await axios.post("api/auth/login", {
    email: email,
    password: password,
  });
  
    if (res.status === 200) {
      toast.success(`Welcome Back ${res.data.foundUser.firstName}`)
      return res.data.encodedToken;
    } 
  } catch (error) {
      toast.error("Invalid Username or Password");
  }
};

export { loginService };
