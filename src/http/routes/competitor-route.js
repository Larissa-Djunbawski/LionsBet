
import e from "express";
import user_controller from "../controllers/competitor-controller.js"

const router = e.Router();

router.post("/", competitor-controller.store)
router.get("/", competitor-controller.index)
router.get("/:id", competitor-controller.show)
router.put("/:id", competitor-controller.update)
router.delete("/:id", competitor-controller.destroy)

export default router