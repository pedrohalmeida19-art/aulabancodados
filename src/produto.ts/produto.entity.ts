import {
    Entity ,
    PrimaryGeneratedColumn,
    Column

}  from 'typeorm'

@Entity ('produto')

export class Produto {
    @PrimaryGeneratedColumn()
    id!:number;
    
    @PrimaryGeneratedColumn()
    nome!:string;

    @PrimaryGeneratedColumn()
    descrição!:string;

    @PrimaryGeneratedColumn()
    preco!:number;

    @PrimaryGeneratedColumn()
    quantidade!:number;

    @PrimaryGeneratedColumn()
    ativo!:boolean;
}