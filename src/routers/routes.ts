import { Router } from "express";
import * as PlayersController from "../controllers/players-controller";

const router = Router();

router.get("/players", PlayersController.getAllPlayers);
router.get("/players/:id", PlayersController.getPlayerById);
router.post("/players", PlayersController.insertPlayer);

export default router;
