function promenaTeme(checkbox)
{
	if(checkbox.checked)
	{
		document.body.classList.add("svetla_tema");
	}
	else
	{
		document.body.classList.remove("svetla_tema");
	}
}