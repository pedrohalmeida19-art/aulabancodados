import {
    Entity,
    PrimaryGeneratedColumn,
    Column

}  from 'typeorm'

@Entity('evento')

export class Evento {

    @PrimaryGeneratedColumn()
    id!:number

    @Column({length:100})
    nome!: string

    @Column({length:300})
    descricao!:string

    @Column({type:'date'})
    data!:Date

    @Column({length:150})
    local!:string

    @Column({type: 'int',})
    capacidade!:number

    @Column({default:true})
    ativo!:boolean
}
