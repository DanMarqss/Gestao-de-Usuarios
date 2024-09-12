import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';  // Módulo que criaremos para o CRUD de usuários
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'danilo123',         // Use a senha que você configurou
      database: 'gestao_usuarios_db', // Nome do banco de dados
      entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Referência às entidades
      synchronize: true, // Sincroniza as entidades com o banco de dados (somente para desenvolvimento)
    }),
    UserModule,  // Módulo que criará as rotas e lógica para o CRUD de usuários
  ],
})
export class AppModule {}
