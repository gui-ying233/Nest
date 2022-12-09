const jQready = setInterval(() => {
	$(document).ready(() => {
		clearInterval(jQready);
		$("head").append(
			"<style type='text/css'>:root {--theme-hue: " +
				Math.random() * 360 +
				"deg;}</style>"
		);

		for (let i = 0; i < $("h1, h2, h3, h4, h5, h6").length; i++) {
			$($("h1, h2, h3, h4, h5, h6")[i])
				.attr("id", encodeURI($($("h1, h2, h3, h4, h5, h6")[i]).text()))
				.wrapInner(
					"<a href='#" +
						encodeURI($($("h1, h2, h3, h4, h5, h6")[i]).text()) +
						"'></a>"
				);
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
	});
}, 0);
