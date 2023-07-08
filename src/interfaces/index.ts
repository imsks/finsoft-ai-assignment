export type APIResponseType = {
    status: boolean
    data: any
}

export interface TimeDurationInterface {
    label: string
    value: string
}

export interface ChartProps {
    chartData: {
        labels: string[]
        datasets: {
            label: string
            data: any[]
            backgroundColor: string
        }[]
    }
    stockOptions: {
        maintainAspectRatio: boolean
        onClick?: (_: any, elements: any) => void
    }
}

export interface APIStockResponse {
    stocks: any
    duration: TimeDurationInterface[]
    stockLabels: string[]
}

export interface ButtonProps {
    key: number
    onClick: (value: string) => void
    timePeriod: string
    value: string
    label: string
}
