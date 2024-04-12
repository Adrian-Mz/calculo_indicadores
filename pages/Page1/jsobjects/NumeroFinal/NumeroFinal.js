export default {
  getCalculationMethod() {
    if (Api1.data) {
      const processData = Api1.data;
      const selectedSubprocess = Select1.selectedOptionLabel;
      const selectedIndicatorName = Select2.selectedOptionLabel;

      const matchingRow = processData.find(row =>
        row.Subproceso === selectedSubprocess &&
        row['Nombre del indicador'] === selectedIndicatorName
      );

      if (matchingRow) {	
        const fullFormula = matchingRow['Forma de cálculo'];
        let lastNumber = fullFormula.match(/(\d+)(?!.*\d)/);

        return lastNumber ? lastNumber[0] : ''; // Devuelve el último número o una cadena vacía si no se encuentra ningún número
      }
    }

    return ''; // Devuelve una cadena vacía si no hay datos o no se encuentra una coincidencia
  },
}