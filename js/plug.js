copywritefootISH()
function copywritefootISH(){
let d = new Date();     
document.getElementById("concopy").innerHTML = d.getFullYear();
}


wotambant()
function wotambant(){
	var getcoolloc = window.location.href
    var currento = getcoolloc.substr(getcoolloc.lastIndexOf('/') + 1);

	if(currento == "index.html" || currento.includes("index")) {
		 document.getElementById("homeInk").classList.add("current-menu-item"); 
	}else if(currento == "insurance.html" || (currento == "insurance")) {
		 document.getElementById("insInk").classList.add("current-menu-item");
	}else if(currento == "special-insurance.html" || (currento == "special-insurance")) {
		document.getElementById("spcInk").classList.add("current-menu-item");
   	}else if(currento == "management.html" || currento.includes("management")) {
		document.getElementById("mgtInk").classList.add("current-menu-item");
   	}else if(currento == "surty-bond.html" || currento.includes("surty-bond")) {
		document.getElementById("stbInk").classList.add("current-menu-item");
   	}else if(currento == "about-us.html" || currento.includes("about-us")) {
		document.getElementById("aboutInk").classList.add("current-menu-item");
   	}else if(currento == "personal-insurance.html" || currento.includes("personal-insurance")) {
		document.getElementById("insInk").classList.add("current-menu-item");
   	}else if(currento == "business-insurance.html" || currento.includes("business-insurance")) {
		document.getElementById("insInk").classList.add("current-menu-item");
   	}else{
		document.getElementById("homeInk").classList.add("current-menu-item");
	}
}