const jQready = setInterval(() => {
	$(document).ready(() => {
		clearInterval(jQready);
		if (jQready) {
			$("head").append(
				"<style id='theme-hue' type='text/css'>:root {--theme-hue: " +
					Math.random() * 360 +
					"deg;}</style>"
			);

			for (let i = 0; i < $("h1, h2, h3, h4, h5, h6").length; i++) {
				$($("h1, h2, h3, h4, h5, h6")[i])
					.attr("id", i)
					.wrapInner("<a href='#" + i + "'></a>");
			}

			for (let i = 0; i < $("pre").length; i++) {
				$($("pre")[i]).wrapInner(
					"<code class='language-" +
						$($("pre")[i]).attr("lang") +
						"'></code>"
				);
			}
			hljs.highlightAll();

			$("[class|=material-symbols]").attr("translate", "no");
		}
	});
}, 50);
