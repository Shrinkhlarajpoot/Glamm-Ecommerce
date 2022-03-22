import axios from "axios";
 const removeFromCartService = async (id, token) => {
	return await axios.delete(`/api/user/cart/${id}`, {
		headers: { authorization: token },
	});
};
export {removeFromCartService}