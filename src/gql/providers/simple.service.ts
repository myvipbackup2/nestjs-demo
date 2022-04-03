import { Injectable } from '@nestjs/common';

import { Logger } from '../../common';
import type { SimpleInput, SimpleArgs } from '../dto';
import type { Simple } from '../models';

@Injectable()
export class SimpleService {
  constructor(private readonly logger: Logger) {
    this.logger.setContext(SimpleService.name);
  }

  public async create(data: SimpleInput): Promise<Simple> {
    this.logger.log('create');
    await Promise.resolve('create');
    return { id: 999, title: 'test create' };
  }

  public async read(id: number): Promise<Simple | null> {
    this.logger.log('read');
    await Promise.resolve('read');
    return { id: 999, title: 'test read' };
  }

  public async find(args: SimpleArgs): Promise<Simple[]> {
    this.logger.log('find');
    await Promise.resolve('find');
    return [{ id: 999, title: 'test find' }];
  }

  public async remove(id: number): Promise<boolean> {
    this.logger.log('remove');

    await Promise.resolve('remove');
    return true;
  }
}
