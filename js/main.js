document.addEventListener('DOMContentLoaded', function () {	

	let el = document.getElementById("grid");
	if (el.children.length == 0) {
		for (let i=1; i<256; i++) {
			var img = document.createElement("img");
			img.src = "./img/icons/" + Math.ceil(Math.random()*64) + ".svg";
			el.appendChild(img)
		}
	} else {
		for (let i=0; i < el.children.length; i++) {
			if(Math.random() < 0.05) {
				el.children[i].src = "./img/icons/" + 65 + ".svg";	
			}
		}
	}

}, false);