"use strict";

document.head.innerHTML +=
	"<style type='text/css'>:root {--theme-hue: " +
	Math.random() * 360 +
	"deg;}</style>";

document.addEventListener("DOMContentLoaded", () => {
	const headings = document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for (let i = 0; i < headings.length; i++) {
		headings[i].setAttribute("id", i);
		headings[i].innerHTML =
			"<a href='#" + i + "'>" + headings[i].innerHTML + "</a>";
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
		preScript.addEventListener("load", function (event) {
			hljs.highlightAll();
		});
		preScript.src =
			"//unpkg.com/@highlightjs/cdn-assets@11.7.0/highlight.min.js";
		document.head.appendChild(preScript);
	}

	const connection =
		navigator.connection ||
		navigator.mozConnection ||
		navigator.webkitConnection;
	let connectionType;
	function updateConnectionStatus() {
		switch (connection.type) {
			case "bluetooth":
			case "wifi":
				connectionType = connection.type;
				break;
			case "mixed":
			case "other":
			case "wimax":
				connectionType = "sensors";
				break;
			case "cellular":
				connectionType = "signal_cellular_alt";
				break;
			case "ethernet":
				connectionType = "settings_ethernet";
				break;
			case "none":
				connectionType = "wifi_off";
			case "unknown":
			default:
				connectionType = "signal_wifi_statusbar_not_connected";
				break;
		}
		document.body.querySelector(
			"header > #network > .material-symbols-rounded"
		).innerText = connectionType;
		document.getElementById("network").title = connection.type;
	}
	connection.addEventListener("change", updateConnectionStatus);
	updateConnectionStatus();

	navigator.getBattery().then((battery) => {
		switch (Math.round(battery.level * 7)) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				document.body.querySelector(
					"header > #battery > .material-symbols-rounded"
				).innerText =
					"battery_" +
					Math.round(battery.level * 7) +
					"_bar" +
					battery.charging
						? "Bolt"
						: "";
				document.getElementById("battery").title =
					Math.round(battery.level * 100) + "%";
				break;
			case 7:
				document.body.querySelector(
					"header > #battery > .material-symbols-rounded"
				).innerText = "battery_full" + (battery.charging ? "Bolt" : "");
				document.getElementById("battery").title =
					Math.round(battery.level * 100) + "%";
				break;
			default:
				document.body.querySelector(
					"header > #battery > .material-symbols-rounded"
				).innerText =
					"battery_unknown" + (battery.charging ? "Bolt" : "");
		}
		battery.onlevelchange = () => {
			switch (Math.round(battery.level * 7)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
					document.body.querySelector(
						"header > #battery > .material-symbols-rounded"
					).innerText =
						"battery_" +
						Math.round(battery.level * 7) +
						"_bar" +
						battery.charging
							? "Bolt"
							: "";
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				case 7:
					document.body.querySelector(
						"header > #battery > .material-symbols-rounded"
					).innerText =
						"battery_full" + (battery.charging ? "Bolt" : "");
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				default:
					document.body.querySelector(
						"header > #battery > .material-symbols-rounded"
					).innerText =
						"battery_unknown" + (battery.charging ? "Bolt" : "");
			}
		};
		battery.onchargingchange = () => {
			switch (Math.round(battery.level * 7)) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
					document.body.querySelector(
						"header > #battery > .material-symbols-rounded"
					).innerText =
						"battery_" +
						Math.round(battery.level * 7) +
						"_bar" +
						battery.charging
							? "Bolt"
							: "";
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				case 7:
					document.body.querySelector(
						"header > #battery > .material-symbols-rounded"
					).innerText =
						"battery_full" + (battery.charging ? "Bolt" : "");
					document.getElementById("battery").title =
						Math.round(battery.level * 100) + "%";
					break;
				default:
					document.body.querySelector(
						"header > #battery > .material-symbols-rounded"
					).innerText =
						"battery_unknown" + (battery.charging ? "Bolt" : "");
			}
		};
	});

	const materialSymbols = document.body.querySelectorAll(
		"[class|=material-symbols]"
	);
	for (let i = 0; i < materialSymbols.length; i++) {
		materialSymbols[i].setAttribute("translate", "no");
	}
});
