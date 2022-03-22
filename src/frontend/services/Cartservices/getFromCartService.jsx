import axios from "axios";

 const getFromCartService = async (token) => {
	return await axios.get("/api/user/cart", {
		headers: { authorization: token },
	});
};
export {getFromCartService}