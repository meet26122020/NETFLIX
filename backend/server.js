import express from 'express'

import authRoutes from "./routes/auth.route.js"
import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js"

import { ENV_VARS } from './config/envVars.js'
import { connectDB } from './config/db.js'

const app = express()



app.use(express.json()) // will allow us to parse req.body

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movie", movieRoutes)
app.use("/api/v1/tv", tvRoutes)

app.listen(6253, () => {
    console.log("server started at http://localhost" + 6253)
    connectDB()
})


// DJDPqlZFFNobKoJu
// anshtalaviya22

