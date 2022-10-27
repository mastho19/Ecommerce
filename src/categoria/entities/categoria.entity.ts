import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Produto } from "src/produtos/entities/produto.entity";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id_categoria: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    moveis: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    ambiente: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
}