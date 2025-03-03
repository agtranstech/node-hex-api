import { TenantService } from '../../src/application/services/tenantService';
import { Tenant } from '../infrastructure/database/models/tenantModel';

jest.mock('../../src/infrastructure/database/sequelize/models/tenantModel');

describe('TenantService', () => {
    let tenantService: TenantService;

    beforeEach(() => {
        tenantService = new TenantService();
    });

    it('should create a tenant', async () => {
        const mockTenant = { id: 1, code: 'T001', phone_number: '1234567890' };
        (Tenant.create as jest.Mock).mockResolvedValue(mockTenant);

        const tenant = await tenantService.createTenant('T001', '1234567890');
        expect(tenant).toEqual(mockTenant);
    });

    it('should get a tenant by id', async () => {
        const mockTenant = { id: 1, code: 'T001', phone_number: '1234567890' };
        (Tenant.findByPk as jest.Mock).mockResolvedValue(mockTenant);

        const tenant = await tenantService.getTenantById(1);
        expect(tenant).toEqual(mockTenant);
    });
});