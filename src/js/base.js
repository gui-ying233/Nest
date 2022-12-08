const jQready = setInterval(() => {
	$(document).ready(() => {
		clearInterval(jQready);
		$("head").append(
			"<style type='text/css'>:root {--theme-hue: " +
				Math.random() * 360 +
				"deg;}</style>"
		);

		for (var i = 0; i < $("pre").length; i++) {
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
