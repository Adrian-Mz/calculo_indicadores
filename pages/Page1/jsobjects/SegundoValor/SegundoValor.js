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
        let formulaPart = fullFormula.split('=')[1]?.trim();

        // Si existe "/", toma la parte después de "/" y antes de ")"
        if (formulaPart.includes('/')) {
          formulaPart = formulaPart.split('/')[1];
          if (formulaPart.includes(')')) {
            formulaPart = formulaPart.split(')')[0]?.trim();
          }
        }

        return formulaPart;
      }
    }

    return ''; // Devuelve una cadena vacía si no hay datos o no se encuentra una coincidencia
  },
}