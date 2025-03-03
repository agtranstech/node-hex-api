import { app } from './app';
import { sequelize } from './infrastructure/database/sequelize';
// import { sequelize } from './infrastructure/database/sequelize/sequelize';

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});