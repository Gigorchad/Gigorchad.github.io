function superClick(el) {
		el.style.background = 'green';
		el.style.color = 'black';
		
	}
	function buttonClick(){
			alert('Это хороший выбор!');
		}

var h3Showed = false;
var h2Showed = false;
var h1Showed = false;



function changeDisplay1() {
	const header3 = document.getElementById("1");
	header3.style.display = h3Showed ? "block" : 'none';
	h3Showed = !h3Showed;
}
function changeDisplay2() {
	const header2 = document.getElementById("2");
	header2.style.display = h2Showed ? "block" : 'none';
	h2Showed = !h2Showed; 
}
function changeDisplay3() {
	const header1 = document.getElementById("3");
	header1.style.display = h1Showed ? "block" : 'none';
	h1Showed = !h1Showed; 
}

