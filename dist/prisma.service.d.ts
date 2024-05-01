import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../prisma/generated';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
