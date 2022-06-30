import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const getCategories = createSelector([selectCategoryReducer], (categoriesSlice) => {
	return categoriesSlice.categories;
});

export const getDirectories = createSelector([selectCategoryReducer], (categoriesSlice) => {
	return categoriesSlice.directories;
});

export const selectIsCategoriesLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => {
		return categoriesSlice.isLoading;
	}
);

export const selectCategoriesMap = createSelector([getCategories], (categories) =>
	categories.reduce((acc, category) => {
		const { items, title } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
);

// export const selectCategoriesMap = (state) => {
// 	// console.log('Categoties Selector Fired');
// 	return state.categories.categories.reduce((acc, category) => {
// 		const { items, title } = category;
// 		acc[title.toLowerCase()] = items;
// 		return acc;
// 	}, {});
// };

export const selectDirectories = createSelector([getDirectories], (directories) =>
	directories.reduce((acc, directory) => {
		const { id, title, imageUrl } = directory;
		return [...acc, { id, title, imageUrl }];
	}, [])
);

// export const selectDirectories = (state) =>
// 	state.categories.directories.reduce((acc, directory) => {
// 		const { id, title, imageUrl } = directory;
// 		return [...acc, { id, title, imageUrl }];
// 	}, []);
