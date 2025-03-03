import express from 'express';
import { TenantController } from '../controllers/tenantController';

const router = express.Router();
const tenantController = new TenantController();
// Create a new tenant
router.post('/tenants', tenantController.createTenant);

// Get all tenants
router.get('/tenants', tenantController.getAllTenants);

// Get a tenant by ID
router.get('/tenants/:id', tenantController.getTenantById);

// Update a tenant by ID
router.put('/tenants/:id', tenantController.updateTenant);

// Delete a tenant by ID
router.delete('/tenants/:id', tenantController.deleteTenant);

export { router as tenantRoutes };