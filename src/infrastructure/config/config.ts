export const config = {
    db: {
        host: '192.168.29.64',
        port: 5432,
        username: 'erp_user',
        password: 'erp_user',
        database: 'erp',
        dialect: 'postgres',
    },
    logging: {
        level: 'info',
        file: 'logs/app.log',
    },
}