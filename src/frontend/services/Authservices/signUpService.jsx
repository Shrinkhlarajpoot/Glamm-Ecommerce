import axios from "axios";
import toast from "react-hot-toast";

const signUpService = async (firstname, lastname, email, password) => {
  console.log(firstname, lastname, email, password);
  try {
  const res = await axios.post("api/auth/signup", {
    firstName: firstname,
    lastName: lastname,
    email: email,
    password: password,
  });
 
    console.log(res);
    if (res.status === 201) {
      toast.success("SignUp sucessfully..Please Login to Continue")
      return res;
    }
  }
    catch(error) {
    console.log(error)
    toast.error("Email Id Already Exist")
    }
   
};

export { signUpService };
