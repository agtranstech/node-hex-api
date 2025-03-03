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

    // Get all tenants
    async getAllTenants(): Promise<Tenant[]> {
        try {
            const tenants = await Tenant.findAll();
            logger.info(`Retrieved all tenants: ${JSON.stringify(tenants)}`);
            return tenants;
        } catch (error) {
            logger.error(`Error retrieving tenants: ${error}`);
            throw error;
        }
    }

    // Get a tenant by ID
    async getTenantById(id: number): Promise<Tenant | null> {
        try {
            const tenant = await Tenant.findByPk(id);
            logger.info(`Retrieved tenant by ID: ${JSON.stringify(tenant)}`);
            return tenant;
        } catch (error) {
            logger.error(`Error retrieving tenant by ID: ${error}`);
            throw error;
        }
    }

    // Update a tenant by ID
    async updateTenant(id: number, code: string, phone_number: string): Promise<Tenant | null> {
        try {
            const tenant = await Tenant.findByPk(id);
            if (tenant) {
                tenant.code = code;
                tenant.phone_number = phone_number;
                await tenant.save();
                logger.info(`Updated tenant: ${JSON.stringify(tenant)}`);
                return tenant;
            }
            return null;
        } catch (error) {
            logger.error(`Error updating tenant: ${error}`);
            throw error;
        }
    }

    // Delete a tenant by ID
    async deleteTenant(id: number): Promise<boolean> {
        try {
            const tenant = await Tenant.findByPk(id);
            if (tenant) {
                await tenant.destroy();
                logger.info(`Deleted tenant with ID: ${id}`);
                return true;
            }
            return false;
        } catch (error) {
            logger.error(`Error deleting tenant: ${error}`);
            throw error;
        }
    }
    
}

export { TenantService };