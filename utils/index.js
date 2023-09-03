function sortDescending(messagesArray) {
	return messagesArray.sort((a, b) => b.sentAt - a.sentAt);
}

function sortAscending(messagesArray) {
	return messagesArray.sort((a, b) => a.sentAt - b.sentAt);
}

function generateKeyID() {
	return Math.floor((Math.random()*100000) + 1)
}

export { sortAscending, sortDescending, generateKeyID } = utils;