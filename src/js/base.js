"use strict";

document.head.innerHTML +=
	"<style type='text/css'>:root {--theme-hue: " +
	Math.random() * 360 +
	"deg;}</style>";

let headings = [].concat(
	...document.body.getElementsByTagName("h1"),
	...document.body.getElementsByTagName("h2"),
	...document.body.getElementsByTagName("h3"),
	...document.body.getElementsByTagName("h4"),
	...document.body.getElementsByTagName("h5"),
	...document.body.getElementsByTagName("h6")
);
for (let i = 0; i < headings.length; i++) {
	headings[i].setAttribute("id", i);
	headings[i].innerHTML =
		"<a href='#" + i + "'>" + headings[i].innerHTML + "</a>";
}

const pres = [...document.getElementsByTagName("pre")];
for (let i = 0; i < pres.length; i++) {
	pres[i].innerHTML =
		"<code class='language-" +
		pres[0].getAttribute("lang") +
		"'>" +
		pres[i].innerHTML +
		"</code>";
}
hljs.highlightAll();

const materialSymbols = document.body.querySelectorAll(
	"[class|=material-symbols]"
);
for (let i = 0; i < materialSymbols.length; i++) {
	materialSymbols[i].setAttribute("translate", "no");
}
