import {
    Entity,
    PrimaryGeneratedColumn,
    Column

}  from 'typeorm';

@Entity ('livro')

export class Livro {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column ({length:150})
    titulo!:string;

    @Column ({length:100})
    autor!:string;

    @Column({length:13})
    isbn!: string;

    @Column({type:'int'})
    anopublicao!:number;

    @Column({default:'true'})
    disponivel:boolean;


}
