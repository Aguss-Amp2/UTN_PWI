import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createWorkspaceController, getProfile, getUserIdByEmail, getWorkspaceMembers, getWorkspaceName, getWorkspacesController, inviteUserWorkspaceController } from "../controllers/workspace.controller.js";

const workspace_router = Router()

workspace_router.post('/', authMiddleware, createWorkspaceController)
workspace_router.get('/', authMiddleware, getWorkspacesController)
workspace_router.get('/:email',authMiddleware, getUserIdByEmail)
workspace_router.get('/:workspace_id/channel', authMiddleware, getWorkspaceName)
workspace_router.get('/:workspace_id/members', authMiddleware, getWorkspaceMembers)
workspace_router.get('/:email/profile', authMiddleware, getProfile)

// /api/workspace/invite/:invited_id
workspace_router.post('/:workspace_id/invite/:invited_id', authMiddleware, inviteUserWorkspaceController)

export default workspace_router