export const config = {
  db: {
    // https://typeorm.io/#/connection-options/common-connection-options
    synchronize: true,
    logging: true,
    extra: {
      connectionLimit: 10,
    },
    autoLoadEntities: true,
    // entities: [`${__dirname}/../entity/**/*.{js,ts}`],
    // subscribers: [`${__dirname}/../subscriber/**/*.{js,ts}`],
    // migrations: [`${__dirname}/../migration/**/*.{js,ts}`],
  },
  foo: 'dev-bar',
};
