function generarTabla() {
	
	
	var numerofilas = document.getElementById("filas").value;
	var numerocolumnas = document.getElementById("columnas").value;
	var color = document.getElementById("clrColor").value;
	//alert(parseInt(numerofilas) + " " + parseInt(numerocolumnas)+" "+color);
	var codigo="<table id=\"tabla1\" border='1'>";
	var m
	for(var i=0;i<parseInt(numerofilas);i++)   //filas
	{
		codigo=codigo + " <tr> ";
		for(var j=0;j<parseInt(numerocolumnas);j++)   //columnas
		{
			m=i+j;
			if(m==1||m==2||m==3||m==5||m==7||m==11||m==13||m==17||m==19||m==23||m==29||m==31||m==37||m==41||m==43||m==47||m==53||m==59||m==61||m==67||m==71||m==73||m==79||m==83||m==89||m==97) 		//aqui se evalua si es numero primo
			{
				codigo=codigo + " <td  bgcolor=\"" + color + "\"> " ;
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
	document.getElementById("tablaprincipal").innerHTML= codigo;
	//$("#tablaprincipal").append(codigo);
	//document.write(codigo);
	//pasar codigo al html
}
