import axios from 'axios';
import config from '@/config.js';

const ITEMS_ID = [5831013, 5831014, 5831012, 231930, 232073, 232074, 233484];

export async function getItems(token) {
	const apiResponse = await axios.get(
		`${config.host}/api/v1/get/items?id_list=${ITEMS_ID.join(',')}`,
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	);
	if (apiResponse.status === 200) {
		const { status, data, error } = apiResponse.data;
		if (status) {
			return data.sort(
				(a, b) => parseInt(b.inStock.value) - parseInt(a.inStock.value)
			);
		} else {
			console.error(error);
		}
	} else {
		console.error('error in getItems()');
	}
}
