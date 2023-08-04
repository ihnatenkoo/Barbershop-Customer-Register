const ONE_DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

export const calculateInitialDate = (): Date => {
	const currentDate = new Date();

	switch (currentDate.getDay()) {
		case 0: {
			return new Date(currentDate.getTime() + ONE_DAY_MILLISECONDS);
		}

		case 6: {
			return new Date(currentDate.getTime() + ONE_DAY_MILLISECONDS * 2);
		}

		default: {
			return currentDate;
		}
	}
};
