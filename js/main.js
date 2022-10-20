document.addEventListener('DOMContentLoaded', function () {	

	// let el = document.getElementById("grid");
	// if (el.children.length == 0) {
	// 	for (let i=1; i<512; i++) {
	// 		var img = document.createElement("img");
	// 		img.src = "./img/icons/" + Math.ceil(Math.random()*64) + ".svg";
	// 		el.appendChild(img)
	// 	}
	// } else {
	// 	for (let i=0; i < el.children.length; i++) {
	// 		if(Math.random() < 0.05) {
	// 			el.children[i].src = "./img/icons/" + 65 + ".svg";	
	// 		}
	// 	}
	// }

	let el = document.getElementById("grid");
	for (let i=0; i<schedule.length; i++) {

		let talk = document.createElement("div");
		talk.className = "talk";
		
		let speaker = document.createElement("h3")
		speaker.appendChild(document.createTextNode(schedule[i].speaker))

		let bar = document.createElement("div")
		bar.className = "bar";

		let title = document.createElement("h2");
		title.appendChild(document.createTextNode(schedule[i].title))

		let description = document.createElement("p");
		description.appendChild(document.createTextNode(schedule[i].description))

		let about = document.createElement("p");
		about.appendChild(document.createTextNode(schedule[i].about))

		talk.appendChild(speaker)
		talk.appendChild(bar)
		talk.appendChild(title)
		talk.appendChild(about)
		talk.appendChild(description)


		let hash = document.createElement("div");
		hash.className = "hash";

		// if (i%7 == 0) {
		// 	for (let j=0; j<4; j++) {
		// 		let bar = document.createElement("div")
		// 		bar.style["border-top"] = Math.ceil(20*Math.random()) + "px solid #fff"
		// 		bar.style["margin-bottom"] = "0.5em"
		// 		hash.appendChild(bar)		
		// 	}
		// } else {
			for (let j=0; j<8; j++) {
				var img = document.createElement("img");
				img.src = "./img/icons/" + Math.ceil(Math.random()*64) + ".svg";
				hash.appendChild(img)
			}
		// }

		talk.appendChild(hash)

		let time = document.createElement("h4");
		let date = new Date(schedule[i].time)
		time.appendChild(document.createTextNode(date.toGMTString()))
		talk.appendChild(time)

		el.appendChild(talk)
	}

}, false);