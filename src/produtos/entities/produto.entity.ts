import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne } from "typeorm"

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id_produto: number;

    @Column({length: 100, nullable:false})
    nome: string;

    @Column({length: 1000, nullable:false})
    descricao: string;

    @Column('decimal', { precision: 6, scale: 2 })
    valor: number;

    @Column('decimal', { precision: 6, scale: 1 })
    peso: number;

    @Column({length: 1000, nullable:false})
    foto: string;

    @ManyToOne(() => Usuario,(usuario) => usuario.produto,{
         onDelete: 'CASCADE' })
    usuario: Usuario;

    @ManyToOne(() => Categoria,(categoria) => categoria.produto,{
         onDelete: 'CASCADE' })
    categoria: Categoria;

}
