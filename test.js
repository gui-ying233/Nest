"use strict";

/**
 *
 * @param {string} selector
 * @param {string} operator
 * @param {number | string} rightValue
 * @param {string} getStyle
 * @param {string} addClassTo
 * @param {string} className
 * @param {string | null | undefined} pseudoElt
 */
function matchElementStyle(
	selector,
	operator,
	rightValue,
	getStyle,
	addClassTo = selector,
	className = "match",
	pseudoElt = null
) {
	new ResizeObserver(() => {
		const leftValue = window
			.getComputedStyle(document.body.querySelector(selector), pseudoElt)
			[getStyle].replace(/px$/, "");
		function setStyle(isMatch) {
			if (isMatch) {
				document.body
					.querySelector(addClassTo)
					.classList.add(className);
			} else {
				document.body
					.querySelector(addClassTo)
					.classList.remove(className);
			}
		}
		switch (operator) {
			case "<":
				setStyle(+leftValue < +rightValue);
				break;
			case ">":
				setStyle(+leftValue > +rightValue);
				break;
			case "<=":
				setStyle(+leftValue <= +rightValue);
				break;
			case ">=":
				setStyle(+leftValue >= +rightValue);
				break;
			case "==":
				setStyle(leftValue == rightValue);
				break;
			case "!=":
				setStyle(leftValue != rightValue);
				break;
			case "===":
				setStyle(leftValue === rightValue);
				break;
			case "!==":
				setStyle(leftValue !== rightValue);
				break;
		}
	}).observe(document.body.querySelector(selector));
}
