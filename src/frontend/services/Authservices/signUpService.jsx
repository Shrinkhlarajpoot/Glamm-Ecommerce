import axios from "axios";

const signUpService = async (firstname, lastname, email, password) => {
  console.log(firstname, lastname, email, password);
  const res = await axios.post("api/auth/signup", {
    firstName: firstname,
    lastName: lastname,
    email: email,
    password: password,
  });
  try {
    console.log(res);
    if (res.status === 201) {
      return res.status.encodedToken;
    } else {
      throw new Error(res);
    }
  } catch (error) {
    console.log(error);
  }
};

export { signUpService };
