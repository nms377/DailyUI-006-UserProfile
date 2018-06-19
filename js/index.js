function favorite() {
	var redHeart = document.createElement('p');
	redHeart.id = "redHeart";
	redHeart.innerHTML = "&#9829";
	redHeart.style.display = "none";
	redHeart.style.color = "rgba(255, 0, 0, 0.60";
	fave.appendChild(redHeart);
	redHeart.addEventListener("click", function() {
		if (redHeart.style.display = "block") {
			redHeart.style.display = "none";
			whiteHeart.style.display = "block";
		} else {
			redHeart.style.display = "block";
		}
	});

	var whiteHeart = document.getElementById('whiteHeart');
	whiteHeart.addEventListener("click", function() {
		if (whiteHeart.style.display = "block") {
			whiteHeart.style.display = "none";
			redHeart.style.display = "block";
		} else {
			whiteHeart.stle.display = "block";
		}
	});


}

favorite();