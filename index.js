import { Router } from 'express'
import { NewPatientController } from './src/controllers/NewPatientController';


const main = Router()

// authorization on api

const newPatientController = new NewPatientController()

main.post('/integration', (req, res) => {
    console.log("request: ", req)

    newPatientController.handle(req, res)
})

