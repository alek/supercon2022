document.addEventListener('DOMContentLoaded', function () {	

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
		for (let j=0; j<8; j++) {
			var img = document.createElement("img");
			img.src = "./img/icons/" + Math.ceil(Math.random()*64) + ".svg";
			hash.appendChild(img)
		}

		talk.appendChild(hash)

		let date = document.createElement("h4");
		let d = new Date(schedule[i].time)
		let pst = d.toLocaleString('en-US', {
  			timeZone: 'America/Los_Angeles',
  			dateStyle: 'full',
  			timeStyle: 'full',
		});

		date.appendChild(document.createTextNode(pst.replace("Pacific Daylight Time","").replace(" at ", " ")))
		date.appendChild(document.createElement("br"))
		talk.appendChild(date)


		el.appendChild(talk)
	}

}, false);