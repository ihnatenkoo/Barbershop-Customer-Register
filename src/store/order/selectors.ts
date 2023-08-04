import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

const selectCurrentDate = (state: RootState) => state.order.orderDay;

export const selectUnformattedCurrentDate = createSelector(
  selectCurrentDate,
  (currentFormattedDate): Date => {
    if (!currentFormattedDate) {
      return new Date();
    }

    const formattedDate = currentFormattedDate.split('.');

    const year = '20' + formattedDate[0];
    const month = +formattedDate[1] - 1;
    const day = formattedDate[2];

    return new Date(+year, month, +day);
  }
);
