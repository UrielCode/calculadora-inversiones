import styles from './Table.module.css'

const formatter = new Intl.NumberFormat('es-MX',{
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const Table = ({ data, initialInvestment }) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Año</th>
          <th>Ahorro total</th>
          <th>Interés (Año)</th>
          <th>Interés total</th>
          <th>Capital invertido</th>
        </tr>
      </thead>
      <tbody>
        {data.map(yearData => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)} </td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear - initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
            <td>{formatter.format(initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
