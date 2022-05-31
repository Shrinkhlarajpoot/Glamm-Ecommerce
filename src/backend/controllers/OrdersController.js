import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

export const getOrderItemsHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	if (!userId) {
		new Response(
			404,
			{},
			{
				errors: ["The email you entered is not Registered. Not Found error"],
			}
		);
	}
	const userOrders = schema.users.findBy({ _id: userId }).orders;
	return new Response(200, {}, { orders: userOrders });
};

export const addItemToOrdersHandler = function (schema, request) {
	const userId = requiresAuth.call(this, request);
	try {
		if (!userId) {
			new Response(
				404,
				{},
				{
					errors: ["The email you entered is not Registered. Not Found error"],
				}
			);
		}
		const userOrders = schema.users.findBy({ _id: userId }).orders;
		const order = JSON.parse(request.requestBody);
		userOrders.push({
			...order,
			createdAt: formatDate(),
			updatedAt: formatDate(),
			_id: uuid(),
		});
		this.db.users.update({ _id: userId }, { orders: userOrders });
		return new Response(201, {}, { orders: userOrders });
	} catch (error) {
		return new Response(
			500,
			{},
			{
				error,
			}
		);
	}
};