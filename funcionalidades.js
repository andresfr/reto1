function generarTabla() {
	
	
	var numerofilas = document.getElementById("filas").value;
	var numerocolumnas = document.getElementById("columnas").value;
	var color= document.getElementById("clrColor").value;
	alert(numerofilas + " " + numerocolumnas+" "+color);
	var i=0;
	var j=0;
	var codigo="<table >";
	for(i=0;i<numerofilas;i++)   //filas
	{
		codigo=codigo + "<tr>";
		for(j=0;j<numerofilas;j++)   //columnas
		{
			if( primo(i+d))
			{
				codigo=codigo + " <td> id= primos " ;
			}
			else
			{
				codigo=codigo + " <td> " ;
			}
			codigo=codigo + " celda:"+ j +","+ i + "=" + (i+j) + " </td> " ;
		}
		codigo=codigo + " </tr>";
	}
	codigo = codigo+ "</table>";
	$("#tabla").append( codigo );
	//pasar codigo al html
}
