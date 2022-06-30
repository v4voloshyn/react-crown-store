import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const getCategories = createSelector([selectCategoryReducer], (categoriesSlice) => {
	return categoriesSlice.categories;
});

export const getDirectories = createSelector([selectCategoryReducer], (categoriesSlice) => {
	return categoriesSlice.directories;
});

export const selectCategoriesMap = createSelector([getCategories], (categories) =>
	categories.reduce((acc, category) => {
		const { items, title } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
);

export const selectIsCategoriesLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => {
		return categoriesSlice.isLoading;
	}
);

export const selectDirectories = createSelector([getDirectories], (directories) =>
	directories.reduce((acc, directory) => {
		const { id, title, imageUrl } = directory;
		return [...acc, { id, title, imageUrl }];
	}, [])
);
