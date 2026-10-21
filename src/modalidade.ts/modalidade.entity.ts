import {
    Entity ,
    PrimaryGeneratedColumn,
    Column
}  from 'typeorm';


@Entity ('modalidade')

export class modalidade {
    @PrimaryGeneratedColumn()
    id!:number

    @Column ({length:100})
    nome!:string

    @Column ({length:100})
    descricao!:string

   @Column({type:'int'})
   duracaominuto!:number

   @Column({ length: 'precision: 10, scale: 2'})
    valormensael!:number

    @Column({default:true})
    ativo!:boolean

}