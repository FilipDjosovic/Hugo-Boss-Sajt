const checkBox = document.getElementById('check');

function promenaTeme()
{
	if(checkBox.checked)
	{
		document.body.classList.add("svetla_tema");
	}
	else
	{
		document.body.classList.remove("svetla_tema");
	}
}

checkBox.onchange = () => {
	localStorage.setItem('stanjeCheckBoxa', checkBox.checked);
	promenaTeme();
}

window.onload = () => {
	const sacuvanoStanje = localStorage.getItem('stanjeCheckBoxa');
	if (sacuvanoStanje !== null)
	{
		checkBox.checked = sacuvanoStanje === 'true';
		promenaTeme();
	}
}

window.onstorage = (event) => {
	if (event.key === 'stanjeCheckBoxa')
	{
		checkBox.checked = event.newValue === 'true';
		promenaTeme();
	}
}