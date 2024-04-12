export default {
	Periodicidad(){
		
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
      const periodicidad = row['Periodicidad del indicador'];

      // Crear una nueva fecha
      let fecha = new Date((DatePicker1.selectedDate));

      // Procesar la fecha según la periodicidad
      switch (periodicidad) {
        case 'Mensual':
          fecha.setMonth(fecha.getMonth() + 1);
          break;
        case 'Trimestral':
          let nuevoTrimestre = fecha.getMonth() + 3;
          if (nuevoTrimestre > 11) {
            fecha.setFullYear(fecha.getFullYear() + 1);
            nuevoTrimestre -= 12;
          }
          fecha.setMonth(nuevoTrimestre);
          break;
        case 'Semanal':
          fecha = new Date(fecha.getTime() + (7 * 24 * 60 * 60 * 1000));
          break;
        case 'Semestral':
          let nuevoSemestre = fecha.getMonth() + 6;
          if (nuevoSemestre > 11) {
            fecha.setFullYear(fecha.getFullYear() + 1);
            nuevoSemestre -= 12;
          }
          fecha.setMonth(nuevoSemestre);
          break;
        // Añadir más casos según sea necesario
      }

      // Formatear la fecha en el formato "YYYY-MM-DD"
      let nuevaFechaFormateada = fecha.toISOString().split('T')[0];

      // Retornar la nueva fecha formateada
      return nuevaFechaFormateada;
    }
  }
}

// Retornar null si no se encontró ninguna coincidencia
return null;
		
		
		//-------------------------------------------------------------------------------
		/*
		let fecha = new Date(DatePicker1.selectedDate);
		//let options;
		let nuevaFechaFormateada;
		switch(Text3.text){
				
				//MENSUAL
				case 'Porcentaje de cobertura':
				case 'Cantidad de residuos sólidos reciclados':
				case 'Contenedores atendidos':
				case 'Nivel de participación ciudadana':
				case 'Inspecciones realizadas':
				case 'Porcentaje de cumplimiento':
				case 'Número de Campañas de Esterilización':
				case 'Número total de adopciones concretadas':
				case 'Porcentaje de Denuncias Atendidas':
				case 'Número de animales esterilizados':
				case 'Número de Áreas Mantenidas o Rehabilitadas':
				case 'Porcentaje de solicitudes ejecutadas':
				case 'Número de obras contratadas':
				case 'Número de TDR':
				case 'Número de socializaciones':

					// Formatear la nueva fecha al formato deseado (April 12, 2024)
					fecha.setMonth(fecha.getMonth() + 1);
					nuevaFechaFormateada = fecha.toISOString().split('T')[0];

					// Retornar la nueva fecha formateada
					return nuevaFechaFormateada;
				
				//TRIMESTRAS
				case 'Nivel de cumplimiento': 
				case 'Índice de Eficiencia':
				case 'Áreas naturales mantenidas y rehabilitadas':
				case 'Reducción de vulnerabilidad':
				case 'Índice de Satisfacción':
				case 'Número de obras recibidas':
				case 'Porcentaje de proyectos entregados':
				case 'Porcentaje de proyectos contratados':
					let nuevoTrimestre = fecha.getMonth() + 3;

					// Actualizar el trimestre si excede los 11 (diciembre), sumando 1 al año y restando 12 al mes
					if (nuevoTrimestre > 11) {
						fecha.setFullYear(fecha.getFullYear() + 1);
						nuevoTrimestre -= 12;
					}

					// Establecer el nuevo mes
					fecha.setMonth(nuevoTrimestre);

					// Formatear la fecha en el formato "YYYY-MM-DD"
					let fechaFormateada = fecha.toISOString().split('T')[0];

					// Retorna la fecha formateada
					return fechaFormateada;
				
				//SEMANAL
			case 'Porcentaje de pedidos atendidos':
			case 'Porcentaje de revisiones atendidas':
			case 'Porcentaje de recorridos atendidos':
				
				let nuevaFecha = new Date(fecha.getTime() + (7 * 24 * 60 * 60 * 1000));

				// Formatear la nueva fecha en el formato "YYYY-MM-DD"
				nuevaFechaFormateada = nuevaFecha.toISOString().split('T')[0];

				// Retorna la fecha formateada
				return nuevaFechaFormateada;
				
				//SEMESTRAL
			case 'Porcentaje de incremento':
			case 'Número de baches':
				
				let nuevoSemestre = fecha.getMonth() + 6;

				// Ajustar el año si el nuevo mes supera diciembre (11)
				if (nuevoSemestre > 11) {
					fecha.setFullYear(fecha.getFullYear() + 1);
					nuevoSemestre -= 12;
				}

				// Establecer el nuevo mes
				fecha.setMonth(nuevoSemestre);

				// Formatear la fecha en el formato "YYYY-MM-DD"
				nuevaFechaFormateada = fecha.toISOString().split('T')[0];

				// Retorna la fecha formateada
				return nuevaFechaFormateada;
				
			default:
				return fecha;
		}
		*/
	}
}