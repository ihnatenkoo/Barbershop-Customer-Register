import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { IMaster } from '../../types';

interface orderState {
	currentMaster: IMaster | null;
	selectedServices: Array<string> | null;
	orderDay: string | null;
}

const initialState: orderState = {
	currentMaster: null,
	selectedServices: null,
	orderDay: null,
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setCurrentMaster: (state, action: PayloadAction<IMaster>) => {
			state.currentMaster = action.payload;
		},
		addService: (state, action: PayloadAction<{ service: string }>) => {
			const servicesSet = new Set(state.selectedServices);

			servicesSet.has(action.payload.service)
				? servicesSet.delete(action.payload.service)
				: servicesSet.add(action.payload.service);

			state.selectedServices = Array.from(servicesSet);
		},
		clearServicesList: (state) => {
			state.selectedServices = null;
		},
		addOrderDay: (state, action: PayloadAction<Date>) => {
			const formattedDate = dayjs(action.payload).format('YY.MM.DD');
			state.orderDay = formattedDate;
		},
	},
});

export const { setCurrentMaster, addService, clearServicesList, addOrderDay } =
	orderSlice.actions;

export default orderSlice.reducer;
