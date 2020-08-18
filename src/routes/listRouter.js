import router from "../utils/newRouter";
import ListController from "../controllers/ListController";

router.get('/',ListController.getList);

export default router