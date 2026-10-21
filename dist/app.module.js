var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './alunos/aluno.entity.js';
import { Livro } from './livraria.ts/livro.entity.js';
import { Produto } from './produto.ts/produto.entity.js';
import { modalidade } from './modalidade.ts/modalidade.entity.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '12345678',
                database: 'Escola_add2',
                entities: [Aluno, Livro, Produto, modalidade,],
                synchronize: true,
            }),
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map