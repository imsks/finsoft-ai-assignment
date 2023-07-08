import { ChartProps } from "@/interfaces"
import { Bar } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const ChartUI = ({ chartData, stockOptions }: ChartProps) => {
    return <Bar data={chartData} options={stockOptions} />
}

export default ChartUI
