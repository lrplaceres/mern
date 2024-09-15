import { Router } from "express";
import * as videoCtrl from "../Controller/video.controller";

const router = Router();

router.post("/video", videoCtrl.createVideos);

router.get("/video", videoCtrl.readVideo);

router.put("/video", videoCtrl.updateVideo);

router.delete("/video", videoCtrl.deleteVideo);

router.get("/videos", videoCtrl.gettingVideos);

export default router;
