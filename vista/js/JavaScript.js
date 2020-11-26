function redireccionar(valor)
{
	console.log(valor);
	if(valor == 1)	//Registro de Profesional
	{	location.href="http://localhost/Prototipo/view/index.php?id=2";  }
	else if(valor == 2)	// Registro de Empresa
	{	location.href="http://localhost/Prototipo/view/index.php?id=1";  }
	else if(valor == 3) // Ofertas de Trabajo
	{	location.href="http://localhost/Prototipo/view/ofertas.php";  }
	else if(valor == 4) // Contacto
	{	location.href="http://localhost/Prototipo/view/index.php?id=3";  }
	else if(valor == 5) // Login
	{	location.href="http://localhost/Prototipo/view/login.php";  }
}
function salir()
{
	location.href="http://localhost/Prototipo/controlador/Exit.php"
}