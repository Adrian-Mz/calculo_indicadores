export default {
  getCalculationMethod() {
    // Verifica si Api1.data está disponible y tiene datos
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
        const formulaBeforeEqual = fullFormula.split('=')[0].trim();
        return formulaBeforeEqual;
      }
    }
    
    return 'nn'; // Devuelve una cadena vacía si no hay datos o no se encuentra una coincidencia
  },
}
    