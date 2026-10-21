import {
    Entity,
    PrimaryGeneratedColumn,
    Column

}  from 'typeorm'

@Entity ('veiculo')

export class veiculo {
    @PrimaryGeneratedColumn()
    id!:number

    @Column({length:100})
    marca!:string

    @Column({length:100})
    modelo!:string

    @Column({type:'int'})
    placa!:number

    @Column({type:'int'})
    ano!:number

    @Column({length: 'precision: 10, scale: 2'})
    valordiaria!:number

    @Column({default:true})
    disponivel:boolean

}