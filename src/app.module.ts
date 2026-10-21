
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './alunos/aluno.entity.js';
import { Livro } from './livraria.ts/livro.entity.js';
import { Produto } from './produto.ts/produto.entity.js';
import { modalidade } from './modalidade.ts/modalidade.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username: 'root',
      password: '12345678',
      database: 'Escola_add2',
      entities: [Aluno, Livro,Produto,modalidade, ],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

