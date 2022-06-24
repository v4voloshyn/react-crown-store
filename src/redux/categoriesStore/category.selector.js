export const selectCategories = (state) => {
	console.log('Categoties Selector Fired');
	return state.categories.categories.reduce((acc, category) => {
		const { items, title } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});
};

export const selectDirectories = (state) =>
	state.categories.directories.reduce((acc, directory) => {
		const { id, title, imageUrl } = directory;
		return [...acc, { id, title, imageUrl }];
	}, []);
