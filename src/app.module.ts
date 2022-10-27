import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produtos/produto.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produtos/entities/produto.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "ecommerce",
      entities: [Produto, Categoria, Usuario],
      synchronize:true
    }), 
    ProdutoModule, CategoriaModule, UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
