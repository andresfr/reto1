function generarTabla() {
	
	
	var numerofilas = document.getElementById("filas").value;
	var numerocolumnas = document.getElementById("columnas").value;
	var color = document.getElementById("clrColor").value;
	alert(parseInt(numerofilas) + " " + parseInt(numerocolumnas)+" "+color);
	var codigo="<table >";
	for(var i=0;i<parseInt(numerofilas);i++)   //filas
	{
		codigo=codigo + " <tr> ";
		for(var j=0;j<parseInt(numerocolumnas);j++)   //columnas
		{
			if( false)
			{
				codigo=codigo + " <td> id = primos " ;
			}
			else
			{
				codigo=codigo + " <td> " ;
			}
			codigo=codigo + " celda: "+ j +","+ i + "=" + (i+j) + " </td> " ;
		}
		codigo=codigo + " </tr>";
	}
	codigo = codigo+ "</table>";
	alert(numerofilas + " " + numerocolumnas+" "+color + " |||||  "+ codigo);
	$("#tablaprincipal").append( codigo );
	//pasar codigo al html
}
