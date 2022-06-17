import axios from 'axios';

export const fetchData = async () => {
	try {
		const response = await axios.get(`http://localhost:7007/categories`);
		if (response.statusText === 'OK') {
			return response.data;
		}
	} catch (error) {
		throw new Error(error);
	}
};
