window.onload = function() {
	const menuToggle = document.getElementById('menuToggle');
	const menu = document.getElementById('menu');

	// document.onclick = function(e) {
	// 	if(e.target.id !== 'menu' && e.target.id !== 'menuToggle') {
	// 		menu.classList.remove('active');
	// 		menuToggle.classList.remove('active');
	// 	}
	// }

	menuToggle.onclick = function() {
		menuToggle.classList.toggle('active');
		menu.classList.toggle('active');
	}

}
