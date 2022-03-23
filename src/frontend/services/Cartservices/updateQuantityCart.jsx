import axios from "axios";

 const updateQuantityCart = async (id, token, type) => {
	return await axios.post(
		`/api/user/cart/${id}`,
		{ action: { type } },
		{ headers: { authorization: token } }
	);
};
export {updateQuantityCart}