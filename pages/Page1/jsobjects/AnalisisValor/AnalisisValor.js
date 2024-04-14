export default {
	obtenerValorYCalcular() {
		let res;
		Text8.setText('');
    // Obtiene el valor de Text7 y lo convierte a número
    let valor = Number(Text7.text);
		var tipo=Text3.text;
    // Llama a la función calculo1 con el valor obtenido
		
		//Primer dato
		switch(tipo){
				//case 1
			case 'Porcentaje de cobertura':
			case 'Cantidad de residuos sólidos reciclados':
			case 'Nivel de cumplimiento': 
			case 'Índice de Eficiencia': 
			case 'Áreas naturales mantenidas y rehabilitadas':
				if (valor >= 90){
					res='Resultado Optimo'
					return 'Resultado Optimo';
    	 	} 
				else if (valor >= 80 && valor < 90) { // Cambiado aquí para usar '<' en lugar de '<='
      		res='Resultado Aceptable'
					return'Resultado Aceptable';
    	 	} else if (valor < 80) {
					res='Resultado Débil'
      		return'Resultado Débil';
       	}
			break;
				
				//case 2
			case 'Nivel de participación ciudadana':
				if (valor >= 50){
					res='Resultado Optimo'
					return 'Resultado Optimo';
    	 	} 
				else if (valor >= 30 && valor < 50) { // Cambiado aquí para usar '<' en lugar de '<='
      		res='Resultado Aceptable'
					return'Resultado Aceptable';
    	 	} else if (valor < 30) {
					res='Resultado Débil'
      		return'Resultado Débil';
       	}
			break;
				
				//case 3
			case 'Reducción de vulnerabilidad':
				if (valor >= 50){
					res='Resultado Optimo'
					return 'Resultado Optimo';
    	 	} 
				else if (valor >= 20 && valor < 50) { // Cambiado aquí para usar '<' en lugar de '<='
      		res='Resultado Aceptable'
					return'Resultado Aceptable';
    	 	} else if (valor < 20) {
					res='Resultado Débil'
      		return'Resultado Débil';
       	}
			break;
				
				//case 4
			case 'Porcentaje de cumplimiento':
			case 'Porcentaje de Denuncias Atendidas':
			case 'Índice de Satisfacción':
			case 'Porcentaje de solicitudes ejecutadas':
			case 'Porcentaje de pedidos atendidos':
			case 'Porcentaje de proyectos entregados':
			case 'Porcentaje de revisiones atendidas':
			case 'Porcentaje de proyectos contratados':
			case 'Porcentaje de recorridos atendidos':
				if (valor >= 90){
					res='Resultado Optimo'
					return 'Resultado Optimo';
    	 	} 
				else if (valor >= 70 && valor < 90) { // Cambiado aquí para usar '<' en lugar de '<='
      		res='Resultado Aceptable'
					return'Resultado Aceptable';
    	 	} else if (valor < 70) {
					res='Resultado Débil'
      		return'Resultado Débil';
       	}
			break;
				
				//case 4
			case 'Porcentaje de incremento':
				if (valor >= 10){
					res='Resultado Optimo'
					return 'Resultado Optimo';
    	 	} 
				else if (valor >= 5 && valor <= 10) { // Cambiado aquí para usar '<' en lugar de '<='
      		res='Resultado Aceptable'
					return'Resultado Aceptable';
    	 	} else if (valor < 5) {
					res='Resultado Débil'
      		return'Resultado Débil';
       	}
			break;
				
				//case 5
			case 'Contenedores atendidos':
				return 'Un aumento en este porcentaje puede indicar una mejora en la eficiencia del mantenimienot de la infraestructura de gesitón de residuos sólidos. Por otro lado, un descenso en el porcentaje puede sugerir la necesidad de mejorar los programas de mantenimiento preventivo o corregir deficiencias en la atención de las reparaciones necesarias';
				
				//case 6
			case 'Inspecciones realizadas':
				return 'Un mayor número de inspecciones puede indicar un esfuerzo proactivo por parte de las autoridades para asegurar la seguridad alimentaria. Sin embargo, también es importante considerar la calidad y el resultado de estas inspecciones, así como su impacto en la mejora de las prácticas de los establecimientos.';
				
				//case 7
			case 'Cantidad de Capcitaciones y Talleres':
				return 'Un mayor número de actividades formativas indica un esfuerzo activo por parte de las autoridades y organizaciones para promover la educación y el desarrollo de competencias en la población. Es importante complementar este indicador con medidas de la calidad y el impacto de estas actividades.';
				
				//case 8
			case 'Número de Campañas de Esterilización':
				return 'Se debe considerar tanto la cantidad de campañas como la cantidad de animales esterilizados en cada una para evaluar el compromiso y la eficacia de las políticas de control de población animal';
				
				//case 9
			case 'Número total de adopciones concretadas':
				return 'Un número elevado de adopciones indica un impacto positivo de las campañas en la comunidad, reflejando una alta participación ciudadana y un compromiso con el bienestar animal. Un número bajo puede señalar áreas de mejora en la promoción, accesibilidad o percepción pública de las campañas de adopción.';
				
				//case 10
			case 'Número de animales esterilizados':
				return 'Un aumento en el número de animales esterilizados puede indicar una mayor eficacia en las campañas de esterilización y un mejor control de la población animal. Además, puede contribuir a la reducción de problemas de salud pública relacionados con la proliferación de animales sin control.';
				
				//case 11
			case 'Número de Áreas Mantenidas o Rehabilitadas':
				return 'Un número elevado de áreas mantenidas o rehabilitadas refleja un compromiso activo con la mejora y conservación del entorno urbano y natural. Un número bajo puede indicar necesidades insatisfechas de mantenimiento y mejora de estos espacios esenciales para la comunidad.';
				
				//case 12
			case 'Número de baches':
				return 'El análisis de los resultados del indicador puede realizarse considerando el número de baches en relación con la extensión total de las vías y las necesidades de mantenimiento y reparación prioritarias. Un aumento significativo en el número de baches puede indicar un deterioro en la calidad de las vías y la necesidad de intervención inmediata para garantizar la seguridad vial y la comodidad de los usuarios.';
				
				//case 13
			case 'Número de obras contratadas':
				return 'Un aumento en el número de obras contratadas puede indicar un progreso positivo en la ejecución de proyectos de infraestructura, mientras que una disminución podría señalar posibles obstáculos en el proceso de contratación o en la disponibilidad de recursos. Es importante considerar también la calidad y el impacto de las obras contratadas en la comunidad para una evaluación completa del desempeño de la Dirección de Obras Públicas.';
				
				//case 14
			case 'Número de obras recibidas':
				return 'Se considera un resultado óptimo cuando la mayoría de las obras planificadas han sido concluidas satisfactoriamente dentro del periodo establecido. Un resultado aceptable podría variar dependiendo del contexto y la magnitud de los proyectos, mientras que un resultado débil indicaría posibles retrasos, incumplimientos o deficiencias en la ejecución de obras públicas.';
				
				//case 15
			case 'Número de TDR':
				return 'El análisis de los resultados del indicador implica evaluar la cantidad de TDR presentados en relación con las necesidades y prioridades de desarrollo del municipio. Un aumento en el número de TDR puede indicar una mayor actividad y planificación en la preparación de proyectos de obras públicas, lo que podría facilitar el avance de las iniciativas de infraestructura. Sin embargo, es importante también considerar la calidad y la pertinencia de los TDR presentados para garantizar la eficacia en la ejecución de los proyectos.';
				
				//case 16
			case 'Número de socializaciones':
				return 'El análisis de los resultados del indicador implica evaluar la cantidad de eventos de socialización realizados en relación con los objetivos de comunicación y participación ciudadana esteblecidos por la Dirección de Obras Públicas. Un aumento en el número de socializaciones puede indicar un esfuerzo para mejorar la transparencia y la participación de la comunidad en los proyectos de obras públicas. Sin embargo, también es importante considerar la calidad y el impacto de estas actividades en la percepción y el apoyo de la comunidad hacia los proyectos de infraestructura';
				
			default:
				return ' '
				
		}
		}
				
				/*
		if(tipo=='Porcentaje de cobertura' || tipo=='Cantidad de residuos sólidos reciclados' || tipo=='Nivel de cumplimiento' || tipo=='Índice de 				Eficiencia' || tipo=='Áre	as naturales mantenidas y rehabilitadas'){
			 if (valor >= 90) {
				 res='Resultado Optimo'
				return 'Resultado Optimo';
    	 } else if (valor >= 80 && valor < 90) { // Cambiado aquí para usar '<' en lugar de '<='
      	res='Resultado Aceptable'
				return'Resultado Aceptable';
    	 } else if (valor < 80) {
				res='Resultado Débil'
      	return'Resultado Débil';
       }
		}
		//
		*/
		
		
  }
