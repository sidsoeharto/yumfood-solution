const router = require('express').Router();
const authentication = require('../middlewares/authentication')
const { adminAuthorization, userAuthorization } = require('../middlewares/authorization')
const UserController = require('../controllers/UserController')
const OrderController = require('../controllers/OrderController')
const VendorController = require('../controllers/VendorController')
const DishController = require('../controllers/DishController')

router.post('/register', UserController.register)
router.post('/login/admin', UserController.adminLogin)
router.post('/login/user', UserController.userLogin)

router.get('/restaurants', VendorController.readAll)
router.get('/restaurants/:id/menu', VendorController.readMenu)

router.use(authentication)

router.get('/order', userAuthorization, OrderController.readOrder)
router.post('/order', userAuthorization, OrderController.addOrder)
router.put('/order/:orderId', userAuthorization, OrderController.updateOrder)
router.delete('/order/:orderId', userAuthorization, OrderController.deleteOrder)

router.use(adminAuthorization)

router.post('/restaurants', VendorController.create)
router.put('/restaurants/:id', VendorController.update)
router.delete('/restaurants/:id', VendorController.delete)

router.post('/restaurants/:id/menu', DishController.create)
router.put('/restaurants/:id/menu/:dishId', DishController.update)
router.delete('/restaurants/:id/menu/:dishId', DishController.delete)


module.exports = router