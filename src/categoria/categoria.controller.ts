import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./categoria.service";

@UseGuards(JwtAuthGuard)
@Controller("/categoria")
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get('/:id_categoria')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_categoria', ParseIntPipe) id_categoria: number): Promise<Categoria> {
    return this.categoriaService.findById(id_categoria);
  }

  @Get('/moveis/:moveis')
  @HttpCode(HttpStatus.OK)
  findByMoveis(@Param('moveis') moveis: string): Promise<Categoria[]> {
    return this.categoriaService.findByMoveis(moveis);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(Categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(Categoria);
  }

  @Delete('/:id_categoria')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id_categoria', ParseIntPipe) id_categoria: number){
    return this.categoriaService.delete(id_categoria);
  }

}
