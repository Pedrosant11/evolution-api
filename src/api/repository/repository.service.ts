import { ConfigService } from '@config/env.config';
import { Logger } from '@config/logger.config';

export class Query<T> {
  where?: T;
  sort?: 'asc' | 'desc';
  page?: number;
  offset?: number;
}

export class PrismaRepository {
  private readonly logger = new Logger('PrismaRepository');

  constructor(private readonly configService: ConfigService) {}

  public async onModuleInit() {
    this.logger.info('⚠️ Prisma desativado neste ambiente (Render).');
  }

  public async onModuleDestroy() {
    this.logger.warn('⚠️ Prisma não inicializado (modo sem banco).');
  }
}
