import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "src/produtos/entities/produto.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id_usuario: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsEmail()
    @Column({length: 255, nullable: false })
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false }) 
    senha: string

    @Column({length: 5000 }) 
    foto: string

    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[]

}