import ChartBar from './ChartBar'
import './Chart.css'
// import ExpensesChart from "../Expenses/ExpensesChart";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    return <div className={"chart"}>
        {
            props.dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label}
                                 value={dataPoint.value}
                                 maxValue={totalMaximum}
                                 label={dataPoint.label}/>
            })}
    </div>
}

export default Chart