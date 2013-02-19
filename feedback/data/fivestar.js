"use strict";

(function(){
	var fivestar = window.document.getElementById("fivestar");

	function setStars(n){
		console.log('setStars',n);
		Array.forEach(fivestar.getElementsByClassName("fivestar-x"), function(el){
			var i = /fivestar(.*)/.exec(el.id)[1];
			i = Number(i,10);
			if (i <= n) {
				el.classList.add("fivestar-on");
			} else {
				el.classList.remove("fivestar-on");
			}
		})
	}


	Array.forEach(fivestar.getElementsByClassName("fivestar-x"),function(el){
		var n = /fivestar(.*)/.exec(el.id)[1];
		n = Number(n,10);
		el.addEventListener("click", function(evt){
			console.log("on",evt.target.id);
			setStars(n);
		})
	})

})();