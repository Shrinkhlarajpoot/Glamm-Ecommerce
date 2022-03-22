import axios from "axios";
const loginService = async (email, password) => {
  const res = await axios.post("api/auth/login", {
    email: email,
    password: password,
  });
  try {
    if (res.status === 200) {
      return res.data.encodedToken;
    } else {
      throw new Error(res);
    }
  } catch (error) {
    console.log(error);
  }
};

export { loginService };
