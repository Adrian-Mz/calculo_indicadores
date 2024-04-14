export default {
	
	Seleccion(){
		let val = Api1.data && Api1.data.length > 0 && Api1.data[0][''];
		switch(val){
				
			case 'Dirección de Gestión Ambiental, Salubridad e Higiene':
				// Ejecutar el proceso para generar las opciones del Select solo si el primer valor de la primera columna coincide
				return Array.from(new Set(Api1.data.map(obj => obj.Subproceso))).map(direction => ({ 'label': direction, 'value': direction }));
				
			default:
				// Si no se cumple la condición, retorna un array vacío o null
				return val;
		}
	}
	/*
			if (Api1.data && Api1.data.length > 0 && Api1.data[0][''] === 'Dirección de Gestión Ambiental, Salubridad e Higiene') {
			// Ejecutar el proceso para generar las opciones del Select solo si el primer valor de la primera columna coincide
			return Array.from(new Set(Api1.data.map(obj => obj.Subproceso))).map(direction => ({ 'label': direction, 'value': direction }));
		} else {
			// Si no se cumple la condición, retorna un array vacío o null
			return [];
		}
*/
}