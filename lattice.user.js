// ==UserScript==
// @name         Green Lattice Overlay
// @namespace    https://github.com/jcb1032/greenlattice-place
// @version      0.6
// @description  overlay for r/place
// @author       artillect#8709, jcb#1032, jumpinglizard#4404
// @match        https://rplace.tk/
// @icon         https://rplace.tk/favicon.png
// @grant        none
// @updateURL    https://github.com/jcb1032/greenlattice-place/raw/main/lattice.user.js
// @downloadURL  https://github.com/jcb1032/greenlattice-place/raw/main/lattice.user.js
// ==/UserScript==

// options
let OVERLAY_IMAGE = "https://raw.githubusercontent.com/jcb1032/greenlattice-place/main/lattice_overlay.png";
let CANVAS_SIZE = [2000, 2000];
let MIN_ZOOM_LEVEL = 0.2; // minimum zoom level to display overlay

// create the overlay image
const overlayImage = new Image();
const overlayStyles = {
	position: "absolute",
	imageRendering: "pixelated",
	width: CANVAS_SIZE[0] + "px",
	height: CANVAS_SIZE[1] + "px",
	pointerEvents: "none",
};

for (let rule in overlayStyles) overlayImage.style[rule] = overlayStyles[rule];
overlayImage.src = OVERLAY_IMAGE;

// make the overlay togglable
let displayOverlay = true;
document.addEventListener("keypress", (e) => {
	if (e.code.toLowerCase() != "space") return;
	displayOverlay = !displayOverlay;
	overlayImage.style.display = displayOverlay ? "block" : "none";
});

window.addEventListener("load", () => {
	// add the overlay to the page
	let overlayParent = document.querySelector("#canvparent1"); // hijacking the snoo for our overlay

	overlayParent.style.zIndex = "4";
	overlayParent.append(overlayImage);

	// intercept position/scale changes
	let oldPos = pos;
	pos = () => {
		oldPos(); // do the normal things

		if (localStorage.z < MIN_ZOOM_LEVEL / 5) overlayImage.style.display = "none";
		else if (displayOverlay) overlayImage.style.display = "block";
	};
});
