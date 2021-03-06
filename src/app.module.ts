import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';

import { BaseModule } from './base';
import { CommonModule, ExceptionsFilter, LoggerMiddleware } from './common';
import { configuration } from './config';
import { SampleModule as DebugSampleModule } from './debug';
import { GqlModule } from './gql';

@Module({
  imports: [
    // Configuration
    // https://docs.nestjs.com/techniques/configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // TODO Database

    // Static Folder
    // https://docs.nestjs.com/recipes/serve-static
    // https://docs.nestjs.com/techniques/mvc
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../public`,
      renderPath: '/',
    }),
    // Service Modules
    CommonModule, // Global
    BaseModule,
    GqlModule,
    DebugSampleModule,
    // Module Router
    // https://docs.nestjs.com/recipes/router-module
    RouterModule.register([
      {
        path: 'test',
        module: DebugSampleModule,
      },
    ]),
  ],
  providers: [
    // Global Guard, Authentication check on all routers
    // { provide: APP_GUARD, useClass: AuthenticatedGuard },
    // Global Filter, Exception check
    { provide: APP_FILTER, useClass: ExceptionsFilter },
  ],
})
export class AppModule implements NestModule {
  // Global Middleware, Inbound logging
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
