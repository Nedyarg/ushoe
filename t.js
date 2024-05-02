document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
        	eval(prompt("Eval:"));
    }
})
