import cors from "cors"
import express from "express"
import "express-async-errors"
import errorHandler from "./middlewares/errorHandlerMiddleware.js"
import authRoute from "./routers/authRouter.js"
import clientsRouter from "./routers/clientsRouter.js"
import productRouter from "./routers/productsRouter.js"
import salesRouter from "./routers/salesRouter.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use(authRoute)
app.use(clientsRouter)
app.use(productRouter)
app.use(salesRouter)
app.use(errorHandler)

export default app