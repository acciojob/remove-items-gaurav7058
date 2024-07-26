let removeItem=document.getElementById("removeButton");
const colorSelect = document.getElementById('colorSelect');

removeItem.addEventListener("click",()=>{
	const selectedIndex = colorSelect.selectedIndex;
	if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex); 
    }
})

// document.getElementById('removeButton').addEventListener('click', function() {
//     const colorSelect = document.getElementById('colorSelect');
//     const selectedIndex = colorSelect.selectedIndex;
    
//     if (selectedIndex !== -1) {
//         colorSelect.remove(selectedIndex); 
//     }
// });