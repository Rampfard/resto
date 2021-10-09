const getCurrentDate = () => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const time = new Date();
	const date = time.getDate();
	const day = time.getDay();
	const month = time.getMonth();
	const year = time.getFullYear();

	return {
		date,
		day: days[day],
		month: months[month],
		year,
	};
};

export default getCurrentDate;
