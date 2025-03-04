import { TenantService } from "../../application/services/tenantService";
import { Tenant } from "../../infrastructure/database/models/tenantModel";

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

    it('should get all tenants', async () => {
        const mockTenants = [{ id: 1, code: 'T001', phone_number: '1234567890' }];
        (Tenant.findAll as jest.Mock).mockResolvedValue(mockTenants);

        const tenants = await tenantService.getAllTenants();
        expect(tenants).toEqual(mockTenants);
    });

    it('should get a tenant by ID', async () => {
        const mockTenant = { id: 1, code: 'T001', phone_number: '1234567890' };
        (Tenant.findByPk as jest.Mock).mockResolvedValue(mockTenant);

        const tenant = await tenantService.getTenantById(1);
        expect(tenant).toEqual(mockTenant);
    });

    it('should update a tenant', async () => {
        const mockTenant = { id: 1, code: 'T001', phone_number: '1234567890', save: jest.fn() };
        (Tenant.findByPk as jest.Mock).mockResolvedValue(mockTenant);

        const updatedTenant = await tenantService.updateTenant(1, 'T002', '0987654321');
        expect(updatedTenant?.code).toBe('T002');
        expect(updatedTenant?.phone_number).toBe('0987654321');
    });

    it('should delete a tenant', async () => {
        const mockTenant = { id: 1, code: 'T001', phone_number: '1234567890', destroy: jest.fn() };
        (Tenant.findByPk as jest.Mock).mockResolvedValue(mockTenant);

        const success = await tenantService.deleteTenant(1);
        expect(success).toBe(true);
    });
});