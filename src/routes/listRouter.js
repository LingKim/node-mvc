import router from "../utils/newRouter";
import ListController from "../controllers/ListController";

router.get('/getList',ListController.getList);

export default router