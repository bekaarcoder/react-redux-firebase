const formatDate = (value) => {
	let timestamp = new Intl.DateTimeFormat('en-GB', {
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	}).format(value.toDate());
	return timestamp;
}

export default formatDate;