import Router from 'express'

import questionRoute from './questionRoute'
import authRoute from './authRoute'
import postRoute from './postRoute'
import schoolRoute from './schoolRoute'
import studentRoute from './studentRoute'
import bookRoute from './bookRoute'
import quizRoute from './quizRoute'
import adminRoute from './adminRoute'
import auth from '../middlewares/authentication'

const routes = Router()

routes.use('/auth', authRoute)
routes.use('/question', questionRoute)
routes.use('/student', studentRoute)
routes.use('/admin', adminRoute)
routes.use('/book', bookRoute)
routes.use('/quiz', quizRoute)
routes.use(auth)
routes.use('/school', schoolRoute)
routes.use('/post', postRoute)


export default routes
