import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createWorkspaceController, inviteUserWorkspaceController } from "../controllers/workspace.controller.js";

const workspace_router = Router()

workspace_router.post('/', authMiddleware, createWorkspaceController)

// /api/workspace/invite/:invited_id
workspace_router.post('/:workspace_id/invite/:invited_id', authMiddleware, inviteUserWorkspaceController)

export default workspace_router