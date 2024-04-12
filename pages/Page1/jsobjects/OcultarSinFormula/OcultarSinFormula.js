export default {
	Ocultar() {
			switch(Text3.text){
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
					return false;
					
				default:
					return true;
			}
		
	}
 }