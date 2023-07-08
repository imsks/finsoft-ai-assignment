import { Button, ChartUI } from "@/Components"
import { useStockData } from "@/hooks"
import { TimeDurationInterface } from "@/interfaces"
import { useState } from "react"

const IndexPage = () => {
    const [timePeriod, setTimePeriod] = useState("day1")
    const fetchedStockData = useStockData()
    const [selectedStock, setSelectedStock] = useState(null)

    const handleClick = (value: string) => {
        setTimePeriod(value)
    }

    const stockData =
        fetchedStockData &&
        fetchedStockData.stockLabels.map(
            (stock) => fetchedStockData?.stocks[stock][timePeriod]
        )

    const selectedStockData = selectedStock
        ? Object.values(fetchedStockData?.stocks[selectedStock])
        : []

    const chartButtonsContainer =
        !selectedStock &&
        fetchedStockData &&
        fetchedStockData.duration.map(
            (time: TimeDurationInterface, key: number) => {
                const { value, label } = time
                return (
                    <Button
                        key={key}
                        onClick={handleClick}
                        timePeriod={timePeriod}
                        label={label}
                        value={value}
                    />
                )
            }
        )

    const chartData = {
        labels: fetchedStockData?.stockLabels,
        datasets: [
            {
                label: "Stock Prices",
                data: stockData,
                backgroundColor: "rgba(75, 192, 192, 0.6)"
            }
        ]
    }

    const stockOptions = {
        maintainAspectRatio: false,
        onClick: (_: any, elements: any) => {
            if (elements.length > 0) {
                const clickedStock =
                    fetchedStockData?.stockLabels[elements[0].index]
                setSelectedStock(clickedStock as any)
            }
        }
    }

    return (
        fetchedStockData && (
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-center'>Social Buzz</h1>
                <div className='flex flex-col mt-2'>
                    <div className='flex align-center justify-center'>
                        {chartButtonsContainer}
                    </div>
                    <div>
                        {!selectedStock ? (
                            <ChartUI
                                chartData={chartData as any}
                                stockOptions={stockOptions}
                            />
                        ) : (
                            <ChartUI
                                chartData={{
                                    labels: fetchedStockData.duration.map(
                                        (time: TimeDurationInterface) =>
                                            time.label
                                    ),
                                    datasets: [
                                        {
                                            label: `${selectedStock} Stock Prices`,
                                            data: selectedStockData,
                                            backgroundColor:
                                                "rgba(75, 192, 192, 0.6)"
                                        }
                                    ]
                                }}
                                stockOptions={{
                                    maintainAspectRatio: true,
                                    onClick: () => {
                                        setSelectedStock(null)
                                    }
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    )
}

export default IndexPage
