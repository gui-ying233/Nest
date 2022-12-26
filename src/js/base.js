"use strict";

/**
 *
 * @param {object} arr
 * @returns {object}
 */
function uniq(arr) {
	return [...new Set(arr)];
}

document.head.innerHTML +=
	"<style type='text/css'>:root {--theme-hue: " +
	Math.random() * 360 +
	"deg;}</style>";

document.addEventListener("DOMContentLoaded", () => {
	const headingsCounter = new Object();
	const headings = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for (let i = 0; i < headings.length; i++) {
		if (headingsCounter[headings[i].innerText]) {
			headingsCounter[headings[i].innerText]++;
			headings[i].setAttribute(
				"id",
				encodeURI(headings[i].innerText) +
					"_" +
					headingsCounter[headings[i].innerText]
			);
			headings[i].innerHTML =
				"<a href='#" +
				encodeURI(headings[i].innerText) +
				"_" +
				headingsCounter[headings[i].innerText] +
				"'>" +
				headings[i].innerHTML +
				"</a>";
		} else {
			headings[i].setAttribute("id", encodeURI(headings[i].innerText));
			headings[i].innerHTML =
				"<a href='#" +
				encodeURI(headings[i].innerText) +
				"'>" +
				headings[i].innerHTML +
				"</a>";
			headingsCounter[headings[i].innerText] = 1;
		}
	}

	if (
		document.location.pathname !== "/Nest/index.html" &&
		document.location.pathname !== "/Nest/"
	) {
		const giveYouUp = document.createElement("button");
		giveYouUp.id = "giveYouUp";
		giveYouUp.classList.add("card", "mdi", "mdi-arrow-up");
		giveYouUp.style.cssText =
			"width:2.5em;height:2.5em;position:fixed;bottom:0;right:0;font-size:unset;";
		giveYouUp.addEventListener("click", () => {
			scrollTo(pageXOffset, 0);
		});
		window.addEventListener("scroll", () => {
			if (pageYOffset === 0) {
				document.getElementById("giveYouUp").style.display = "none";
			} else {
				document.getElementById("giveYouUp").style.display = "";
			}
		});
		document.body.appendChild(giveYouUp);
		if (pageYOffset === 0) {
			document.getElementById("giveYouUp").style.display = "none";
		}
	}

	const pres = [...document.getElementsByTagName("pre")];
	if (pres.length) {
		for (let i = 0; i < pres.length; i++) {
			pres[i].innerHTML =
				"<code class='language-" +
				pres[0].getAttribute("lang") +
				"'>" +
				pres[i].innerHTML +
				"</code>";
		}
		const preScript = document.createElement("script");
		preScript.type = "text/javascript";
		preScript.addEventListener("load", (event) => {
			hljs.highlightAll();
		});
		preScript.src =
			"//unpkg.com/@highlightjs/cdn-assets@11.7.0/highlight.min.js";
		document.head.appendChild(preScript);
	}

	setInterval(() => {
		document.getElementById("hour").innerText = String(
			new Date().getHours()
		).padStart(2, 0);
		document.getElementById("minute").innerText = String(
			new Date().getMinutes()
		).padStart(2, 0);
	}, 1000);

	const connection =
		navigator.connection ||
		navigator.mozConnection ||
		navigator.webkitConnection;
	function updateConnectionStatus() {
		let connectionType;
		switch (connection.type) {
			case "bluetooth":
			case "wifi":
			case "ethernet":
				connectionType = connection.type;
				break;
			case "mixed":
			case "other":
			case "wimax":
				connectionType = "access-point-network";
				break;
			case "cellular":
				connectionType = "signal-cellular-3";
				break;
			case "none":
				connectionType = "wifi-off";
				break;
			case "unknown":
			default:
				connectionType = "wifi-strength-alert-outline";
				break;
		}
		document.getElementById("network").className =
			"card mdi mdi-" + connectionType;
		document.getElementById("network").title = connection.type;
	}
	connection.addEventListener("change", updateConnectionStatus);
	updateConnectionStatus();

	navigator.getBattery().then((battery) => {
		switch (Math.round(battery.level * 10)) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				document.getElementById("battery").className =
					"card mdi mdi-battery-" +
					(battery.charging ? "charging-" : "") +
					Math.round(battery.level * 10) * 10;
				document.getElementById("battery").title =
					Math.round(battery.level * 100) + "%";
				break;
			case 10:
				document.getElementById("battery").className =
					"card mdi mdi-battery" +
					(battery.charging ? "-charging-100" : "");
				document.getElementById("battery").title =
					Math.round(battery.level * 100) + "%";
				break;
			default:
				document.getElementById("battery").className =
					"card mdi mdi-battery-unknown";
		}
		battery.onlevelchange = () => {
			switch (Math.round(battery.level * 10)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById("battery").className =
						"card mdi mdi-battery-" +
						(battery.charging ? "charging-" : "") +
						Math.round(battery.level * 10) * 10;
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				case 10:
					document.getElementById("battery").className =
						"card mdi mdi-battery" +
						(battery.charging ? "-charging-100" : "");
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				default:
					document.getElementById("battery").className =
						"card mdi mdi-battery-unknown";
			}
		};
		battery.onchargingchange = () => {
			switch (Math.round(battery.level * 10)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
					document.getElementById("battery").className =
						"card mdi mdi-battery-" +
						(battery.charging ? "charging-" : "") +
						Math.round(battery.level * 10) * 10;
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				case 10:
					document.getElementById("battery").className =
						"card mdi mdi-battery" +
						(battery.charging ? "-charging-100" : "");
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				default:
					document.getElementById("battery").className =
						"card mdi mdi-battery-unknown";
			}
		};
	});
});
