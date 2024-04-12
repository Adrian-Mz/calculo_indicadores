export default {
  calcular() {
		
		//Control
		if ((Input1.text.trim() === '' && Input2.text.trim() === '') || parseFloat(Input2.text) === 0) {
  	// Ambos campos están vacíos o Input2 es igual a cero, así que abrimos Modal2
  		showModal('Modal2');
		}
		else{
			showModal('Modal1');
		
			switch(Text5.text){
					case 'Inspecciones realizadas':
					case 'Cantidad de Capcitaciones y Talleres':
					case 'Número de Campañas de Esterilización':
					case 'Número total de adopciones concretadas':
					case 'Número de animales esterilizados':
					case 'Número de Áreas Mantenidas o Rehabilitadas':
					case 'Número de baches':
					case 'Número de obras contratadas':
					case 'Número de obras recibidas':
					case 'Número de TDR':
					case 'Número de socializaciones':
					Text7.setText(Input1.text);
					break;

				default:
					var res=0;
					const val1 = parseFloat(Input1.text) || 0;
					const val2 = parseFloat(Input2.text) || 1; // Previene la división por cero
					const val3 = parseFloat(Input3.text) || 0;
					res = Math.round(((val1 / val2) * val3)); // Simplemente retorna el resultado del cálculo.
					Text7.setText(res.toFixed(2).toString());
					break;
			}
			return res; // Devuelve una cadena vacía si Text5 no es "Porcentaje de cobertura"
		}
  },
}