const jQready = setInterval(() => {
	$(document).ready(() => {
		clearInterval(jQready);
		$("head").append(
			"<style type='text/css'>:root {--theme-hue: " +
				Math.random() * 360 +
				"deg;}</style>"
		);

		for (let i = 0; i < $("h2, h3, h4, h5, h6").length; i++) {
			$($("h2, h3, h4, h5, h6")[i])
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
	});
}, 50);
