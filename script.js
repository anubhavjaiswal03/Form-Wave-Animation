const labels = document.querySelectorAll('.form-control label');
const inputs = document.querySelectorAll('.form-control input');

labels.forEach((label, idx) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 50}ms">${letter}</span>`
		)
		.join('');
	label.addEventListener('click', () => {
		console.log(inputs[idx]);
		inputs[idx].focus();
	});
	// This was added so that when clicking the label the input gets focused
});
