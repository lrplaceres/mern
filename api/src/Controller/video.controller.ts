import { RequestHandler } from "express";
import videoModel from "../Models/Video";

export const createVideos: RequestHandler = async (req, res) => {
  const video = new videoModel(req.body);
  const saveVideo = await video.save();
  res.json(saveVideo);
};

export const readVideo: RequestHandler = (req, res) => {
  res.json("reading videos");
};

export const updateVideo: RequestHandler = (req, res) => {
  res.json("update videos");
};

export const deleteVideo: RequestHandler = (req, res) => {
  res.json("delete videos");
};

export const gettingVideos: RequestHandler = (req, res) => {
  res.json("getting videos");
};
