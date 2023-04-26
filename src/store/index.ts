import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './order/order.slice';

export const store = configureStore({
	reducer: {
		order: orderReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
