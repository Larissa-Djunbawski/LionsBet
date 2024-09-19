import e from "express";
import user_controller from "../controllers/match-bet-controller.js"

const router = e.Router();

router.post("/", match-bet-controller.store)
router.get("/", match-bet-controller.index)
router.get("/:id", match-bet-controller.show)
router.put("/:id", match-bet-controller.update)
router.delete("/:id", match-bet-controller.destroy)

export default router