const jQready = setInterval(() => {
	$(document).ready(() => {
		clearInterval(jQready);
		for (var i = 0; i < $("pre").length; i++) {
			$($("pre")[i]).wrapInner(
				"<code class='language-" +
					$($("pre")[i]).attr("lang") +
					"'></code>"
			);
		}
		hljs.highlightAll();
	});
}, 500);
