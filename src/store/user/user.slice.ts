import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo } from '../../types';

interface userState {
	userInfo: IUserInfo;
}

const initialState: userState = {
	userInfo: {
		customerName: null,
		email: '',
		phone: undefined,
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUserInfo: (state, action: PayloadAction<IUserInfo>) => {
			state.userInfo = action.payload;
		},
	},
});

export const { addUserInfo } = userSlice.actions;

export default userSlice.reducer;
