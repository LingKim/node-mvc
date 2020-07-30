import router from '../utils/newRouter'
import LoginController from "../controllers/LoginController";

router.post('/userLogin', LoginController.userLogin);
router.get('/userForget', LoginController.userForget);
export default router