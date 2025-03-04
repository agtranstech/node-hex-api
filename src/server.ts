import { app } from './app';
import { config } from './infrastructure/config/config';
import { sequelize } from './infrastructure/database/sequelize';

const PORT = config.server.port;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
