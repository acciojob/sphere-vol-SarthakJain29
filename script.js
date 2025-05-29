function volume_sphere() {
	event.preventDefault();
    const rad = document.querySelector("#radius");
	const r = parseFloat(rad.value);
	let vol = NaN;
	if(r>0){
		 vol = 4/3 * Math.PI * Math.pow(r,3);
	}
	const v = document.querySelector("#volume");
	v.value = vol.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
