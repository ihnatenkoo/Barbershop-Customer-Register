import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './order/order.slice';

export const store = configureStore({
	reducer: {
		order: orderReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
