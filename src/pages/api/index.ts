import { dummyData, stockLabels, timeDuration } from "@/data"
import { APIResponseType } from "@/interfaces"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = (
    req: NextApiRequest,
    res: NextApiResponse<APIResponseType>
) => {
    res.status(200).json({
        status: true,
        data: { stocks: dummyData, duration: timeDuration, stockLabels }
    })
}

export default handler
