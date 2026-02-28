const text  = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output  = document.getElementById("output");

function wait(ms) {
	return new Promise(function (resolve, reject) {
		setTimeout(resolve, ms);				
	})
}

btn.addEventListener('click', async function(){
	const name = text.value;
	const delaytime = parseInt(delay.value);

	await wait(delaytime);

	output.innerText = name;
	console.log(name);
})