import { Tenant } from '../../infrastructure/database/models/tenantModel';
import { logger } from '../../infrastructure/logging/logger';

class TenantService {
    async createTenant(code: string, phone_number: string): Promise<Tenant> {
        try {
            const tenant = await Tenant.create({ code, phone_number });
            logger.info(`Tenant created: ${JSON.stringify(tenant)}`);
            return tenant;
        } catch (error) {
            logger.error(`Error creating tenant: ${error}`);
            throw error;
        }
    }

    async getTenantById(id: number): Promise<Tenant | null> {
        try {
            const tenant = await Tenant.findByPk(id);
            logger.info(`Tenant retrieved: ${JSON.stringify(tenant)}`);
            return tenant;
        } catch (error) {
            logger.error(`Error retrieving tenant: ${error}`);
            throw error;
        }
    }
    
}

export { TenantService };