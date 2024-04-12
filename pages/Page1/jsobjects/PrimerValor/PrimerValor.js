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
        let formulaAfterEqual = fullFormula.split('=')[1]?.trim();
        if (formulaAfterEqual.includes('(')) {
          formulaAfterEqual = formulaAfterEqual.split('(')[1];
        }
        if (formulaAfterEqual.includes('/')) {
          formulaAfterEqual = formulaAfterEqual.split('/')[0]?.trim();
        }
        return formulaAfterEqual;
      }
    }
    
    return ''; // Devuelve una cadena vacía si no hay datos o no se encuentra una coincidencia
  },
}