import { sequelize } from "../infrastructure/database/sequelize";

beforeAll(async () => {
    // Sync the database schema before running tests
    await sequelize.sync({ force: true }); // `force: true` drops all tables and recreates them
});

afterAll(async () => {
    // Close the database connection after all tests are done
    await sequelize.close();
});