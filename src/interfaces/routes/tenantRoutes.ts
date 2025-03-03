import express from 'express';
import { TenantController } from '../controllers/tenantController';

const router = express.Router();
const tenantController = new TenantController();

router.post('/tenants', tenantController.createTenant);
router.get('/tenants/:id', tenantController.getTenantById);

export { router as tenantRoutes };