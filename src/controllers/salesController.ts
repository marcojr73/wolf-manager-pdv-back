import { Request, Response } from "express"
import salesService from "../services/salesService.js"

async function getLastSalesData(req: Request, res: Response) {

    const businessId: number = res.locals.businessId

    const lastMonthYear = salesService.getLastTwelveMonthYear()
    const lastBalanceMonths = await salesService.mappingBalanceLastMonth(lastMonthYear, businessId)
    res.status(200).send(lastBalanceMonths)
}

export default {
    getLastSalesData
}