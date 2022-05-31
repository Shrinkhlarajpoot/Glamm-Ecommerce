import axios from "axios";
import toast from "react-hot-toast";
const loginService = async (email, password) => {
  try {
  const res = await axios.post("api/auth/login", {
    email: email,
    password: password,
  });
  
    if (res.status === 200) {
      toast.success(`Welcome Back ${res.data.foundUser.firstName}`)
      return res;
    } 
  } catch (error) {
      toast.error("Invalid Username or Password");
      console.error(error);
  }
};

export { loginService };
