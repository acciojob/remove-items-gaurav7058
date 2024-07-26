//your JS code here. If required.
let colorList=document.getElementById("colorSelect");

colorList.addEventListener("click",()=>{
	for (let i = 0; i < colorList.length; i++) {
		colorList[i].remove();
	}
})  