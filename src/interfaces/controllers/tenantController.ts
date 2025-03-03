import { Request, Response } from 'express';
import { TenantService } from '../../application/services/tenantService';


const tenantService = new TenantService();

class TenantController {
    async createTenant(req: Request, res: Response) {
        try {
            const { code, phone_number } = req.body;
            const tenant = await tenantService.createTenant(code, phone_number);
            res.status(201).json(tenant);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

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

    async getAllTenants(req: Request, res: Response) {
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
}

export { TenantController };