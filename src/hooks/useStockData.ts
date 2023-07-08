import { APIStockResponse } from "@/interfaces"
import axios from "axios"
import { useEffect, useState } from "react"

const useStockData = () => {
    const [fetchedStockData, setFetchedStockData] = useState<APIStockResponse>()

    const fetchStocks = async () => {
        axios("/api").then((response) => {
            setFetchedStockData(response.data?.data as APIStockResponse)
        })
    }

    useEffect(() => {
        fetchStocks()
    }, [])

    return fetchedStockData
}

export default useStockData
