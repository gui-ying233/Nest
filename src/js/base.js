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
		document.body.appendChild(preScript);
	}

	const materialSymbols = document.body.querySelectorAll(
		"[class|=material-symbols]"
	);
	for (let i = 0; i < materialSymbols.length; i++) {
		materialSymbols[i].setAttribute("translate", "no");
	}
});
