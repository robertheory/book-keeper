import { configureStore } from '@reduxjs/toolkit';
import lists from './listsSlice';

export const store = configureStore({
	reducer: {
		lists,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
