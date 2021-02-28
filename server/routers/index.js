const router = require('express').Router();
const authentication = require('../middlewares/authentication')
const { adminAuthorization, userAuthorization } = require('../middlewares/authorization')
const errorHandler = require('../middlewares/errorHandler')
const UserController = require('../controllers/UserController')
const OrderController = require('../controllers/OrderController')
const VendorController = require('../controllers/VendorController')
const DishController = require('../controllers/DishController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/restaurants', VendorController.readAll)
router.get('/restaurants/:id/menu', VendorController.readMenu)

router.get('/order', OrderController.readOrder)
router.post('/order', OrderController.addOrder)
router.put('/order/:orderId', OrderController.updateOrder)
router.delete('/order/:orderId')

router.post('/restaurants', VendorController.create)
router.put('/restaurants/:id', VendorController.update)
router.delete('/restaurants/:id', VendorController.delete)

router.post('/restaurants/:id/menu/:dishId', DishController.create)
router.put('/restaurants/:id/menu/:dishId', DishController.update)
router.delete('/restaurants/:id/menu/:dishId', DishController.create)


module.exports = router