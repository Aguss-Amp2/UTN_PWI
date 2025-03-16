import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createWorkspaceController, getWorkspacesController, inviteUserWorkspaceController } from "../controllers/workspace.controller.js";

const workspace_router = Router()

workspace_router.post('/', authMiddleware, createWorkspaceController)
workspace_router.get('/', authMiddleware, getWorkspacesController)

// /api/workspace/invite/:invited_id
workspace_router.post('/:workspace_id/invite/:invited_id', authMiddleware, inviteUserWorkspaceController)

export default workspace_router