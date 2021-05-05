let bg = document.body;
let button = document.getElementById("mode");
button.onclick = () => {
	if(bg.style.backgroundColor === 'white') {
		bg.style.backgroundColor = '#0e1b40';
		bg.style.color = 'White';
	} else {
	  bg.style.backgroundColor = 'White';
	  bg.style.color = 'Black';
	}
}
