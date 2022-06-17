import axios from 'axios';

export const fetchShopData = async () => {
	try {
		const response = await axios.get(`http://localhost:7007/shop`);
		if (response.statusText === 'OK') {
			return response.data;
		}
	} catch (error) {
		throw new Error(error);
	}
};
