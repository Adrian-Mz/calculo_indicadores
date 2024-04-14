export default {
	enviarNumeros(){
		Text10.setText(Input1.text);
		Text11.setText(Input2.text);
					
		
				if (Api1.data) {
  const processData = Api1.data;
  const selectedValue = Text5.text;

  // Buscar coincidencias en la columna "Forma de cálculo"
  for (const row of processData) {
    const fullFormula = row['Forma de cálculo'];
    const formulaBeforeEqual = fullFormula.split('=')[0].trim();

    // Comprobar si el valor de "text5" coincide con el inicio de la fórmula
    if (selectedValue === formulaBeforeEqual) {
      // Encontramos una coincidencia, obtenemos la periodicidad
      const codigo = row['Código'];
			Text12.setText(codigo.toString());
			return codigo;
      }

      // Formatear la fecha en el formato "YYYY-MM-DD"
			

      // Retornar la nueva fecha formateada
      
    }
  }
		return null;
}
}

// Retornar null si no se encontró ninguna coincidencia


	


	
	
	

