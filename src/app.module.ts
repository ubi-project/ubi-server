import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member/entity/member.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      entities: [Member],
      database: 'testdb',
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    MemberModule,
  ],
})
export class AppModule {}
