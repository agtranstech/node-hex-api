import { Request, Response } from 'express';
import { TenantService } from '../../application/services/tenantService';


const tenantService = new TenantService();

class TenantController {
    // Create a new tenant
    async createTenant(req: Request, res: Response) {
        try {
            const { code, phone_number } = req.body;
            const tenant = await tenantService.createTenant(code, phone_number);
            res.status(201).json(tenant);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Get all tenants
    async getAllTenants(req: Request, res: Response) {
        try {
            const tenants = await tenantService.getAllTenants();
            res.status(200).json(tenants);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Get a tenant by ID
    async getTenantById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const tenant = await tenantService.getTenantById(parseInt(id));
            if (tenant) {
                res.status(200).json(tenant);
            } else {
                res.status(404).json({ error: 'Tenant not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Update a tenant by ID
    async updateTenant(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { code, phone_number } = req.body;
            const tenant = await tenantService.updateTenant(parseInt(id), code, phone_number);
            if (tenant) {
                res.status(200).json(tenant);
            } else {
                res.status(404).json({ error: 'Tenant not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Delete a tenant by ID
    async deleteTenant(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const success = await tenantService.deleteTenant(parseInt(id));
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Tenant not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export { TenantController };