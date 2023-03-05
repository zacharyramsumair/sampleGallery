let footer = document.querySelector("footer");
let backButton = document.querySelector(".back");
let frontButton = document.querySelector(".front");
let artName = document.querySelector(".artName");
let artistName = document.querySelector(".artistName");
let main = document.querySelector("main");
let stopButton = document.querySelector(".stop");

let count = 0;

addingContent();

backButton.addEventListener("click", minusCount);
frontButton.addEventListener("click", addCount);
stopButton.addEventListener("click", goToIndex);

function goToIndex() {
	window.location.href = "/";
}

function minusCount() {
	if (count > 0) {
		count--;
		addingContent();
		frontButton.classList.remove("buttonFaded");
	}
	if (count == 0) {
		backButton.classList.add("buttonFaded");
	} else {
		backButton.classList.remove("buttonFaded");
	}
}

function addCount() {
	if (count < 14) {
		count++;
		addingContent();
		backButton.classList.remove("buttonFaded");
	}
	if (count == 14) {
		frontButton.classList.add("buttonFaded");
	} else {
		frontButton.classList.remove("buttonFaded");
	}
}

function addingContent() {
	// clearing content of main before entering new things
	main.innerHTML = "";
	main.innerText = "";
	main.textContent = "";

	//add content to footer
	artName.textContent = MobileData[count].ArtName;
	artistName.textContent = MobileData[count].ArtistName;

	// adding content to put in main

	//art image
	let image = document.createElement("img");
	image.setAttribute("src", MobileData[count].Image);

	//Art Name
	let nameOfArt = document.createElement("h1");
	nameOfArt.textContent = MobileData[count].ArtName;
	nameOfArt.innerText = MobileData[count].ArtName;
	// Artist Name
	let nameOfArtist = document.createElement("p");
	nameOfArtist.textContent = MobileData[count].ArtistName;
	nameOfArtist.innerText = MobileData[count].ArtistName;
	// Info
	let artInfo = document.createElement("p");
	let info = MobileData[count].Info;
	if (info.length > 670) {
		info = info.split(" ").slice(0, 100).join(" ");
		info += "...";
	}
	artInfo.textContent = info;
	artInfo.innerText = info;
	// Year
	let artYear = document.createElement("span");
	artYear.textContent = MobileData[count].Year;
	artYear.innerText = MobileData[count].Year;
	// View source backlink to wikipedia
	let source = document.createElement("div");
	source.innerHTML = `<a href="">GO TO SOURCE</a>`;

	//put artist Info in div
	let ArtDiv = document.createElement("div");
	ArtDiv.appendChild(nameOfArt);
	ArtDiv.appendChild(nameOfArtist);

	//put wiki Info in div
	let wikiDiv = document.createElement("div");
	wikiDiv.appendChild(artInfo);
	wikiDiv.appendChild(artYear);
	wikiDiv.appendChild(source);

	let link = `https://en.wikipedia.org/wiki/${MobileData[count].ArtName}`;
	source.setAttribute("href", link);

	//adding classes
	image.classList.add("slide-pos-image");
	ArtDiv.classList.add("slide-pos-names");
	wikiDiv.classList.add("slide-pos-info");
	nameOfArt.classList.add("nameOfArt");
	nameOfArtist.classList.add("nameOfArtist");
	source.classList.add("top-space");
	artYear.classList.add("yearBehindText");

	// adding created elements to main
	main.appendChild(image);
	main.appendChild(ArtDiv);
	main.appendChild(wikiDiv);

	//change the footer border top width to match the count number
	let borderWidth = ((count + 1) / 15) * 100;
	console.log("yes");
	console.log(borderWidth);
	footer.style.borderTop = "1px solid";
	footer.style.borderImage = `linear-gradient(to right, #000 ${borderWidth}%, transparent ${borderWidth}%) 100% 1`;

	// border-top: 1px solid;
	// border-image: linear-gradient(to right, #000 50%, transparent 50%) 100% 1;
	//change it to 670 characters
}
