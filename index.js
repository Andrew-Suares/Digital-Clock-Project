function digitalClock() {
	const date = new Date()
	const hours = date.getHours() + ''
	const minutes = date.getMinutes() + ''
	const seconds = date.getSeconds() + ''
	const day = date.getDay()

	if (hours.length < 2) {
		'0' + hours
	}

	if (minutes.length < 2) {
		'0' + minutes
	}

	if (seconds.length < 2) {
		'0' + seconds
	}

	const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

	const clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds
	document.getElementById('clock').innerHTML = clock
}
digitalClock()
setInterval(digitalClock, 1000)
