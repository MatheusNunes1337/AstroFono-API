import Router from 'express'
import auth from '../middlewares/authentication'
import studentController from '../controllers/studentController'

const studentRoute = Router()

studentRoute.get('/', studentController.index)
studentRoute.get('/find', studentController.find)
studentRoute.post('/', studentController.create)
studentRoute.delete('/:id', auth, studentController.delete) // auth
studentRoute.put('/:id', auth, studentController.update) // auth

export default studentRoute
