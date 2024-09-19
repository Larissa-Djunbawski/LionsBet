import e from "express";
import roullet_bet from "../controllers/roullet-bet-controller.js"

const router = e.Router();

router.post("/", roullet_bet.store)
router.get("/", roullet_bet.index)
router.get("/:id", roullet_bet.show)
router.put("/:id", roullet_bet.update)


export default router