import request from 'supertest';
import { Tenant } from "../../infrastructure/database/models/tenantModel";
import { app } from '../../app';

describe('Tenant Routes', () => {
    beforeEach(async () => {
        // Clear the database before each test
        await Tenant.destroy({ where: {} });
    });

    it('should create a tenant', async () => {
        const response = await request(app)
            .post('/api/tenants')
            .send({ code: 'T001', phone_number: '1234567890' });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should get all tenants', async () => {
        await Tenant.create({ code: 'T001', phone_number: '1234567890' });
        const response = await request(app).get('/api/tenants');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should get a tenant by ID', async () => {
        const tenant = await Tenant.create({ code: 'T001', phone_number: '1234567890' });
        const response = await request(app).get(`/api/tenants/${tenant.id}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(tenant.id);
    });

    it('should update a tenant', async () => {
        const tenant = await Tenant.create({ code: 'T001', phone_number: '1234567890' });
        const response = await request(app)
            .put(`/api/tenants/${tenant.id}`)
            .send({ code: 'T002', phone_number: '0987654321' });
        expect(response.status).toBe(200);
        expect(response.body.code).toBe('T002');
    });

    it('should delete a tenant', async () => {
        const tenant = await Tenant.create({ code: 'T001', phone_number: '1234567890' });
        const response = await request(app).delete(`/api/tenants/${tenant.id}`);
        expect(response.status).toBe(204);
    });
});