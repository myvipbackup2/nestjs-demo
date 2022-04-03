// export * from './development';
export const config = {
  db: {
    type: 'mysql',
    synchronize: false,
    logging: false,
    extra: {
      connectionLimit: 5,
    },
    autoLoadEntities: true,
    // entities: [`${__dirname}/../entity/**/*.{js,ts}`],
    // subscribers: [`${__dirname}/../subscriber/**/*.{js,ts}`],
    // migrations: [`${__dirname}/../migration/**/*.{js,ts}`],
  },
  graphql: {
    playground: false,
  },
};
