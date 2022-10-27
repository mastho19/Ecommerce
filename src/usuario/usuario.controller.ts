import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entities/usuario.entity';
import { Put, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Usuario[]>{
    return this.usuarioService.findAll()
  }
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe)id: number): Promise<Usuario>{
    return this.usuarioService.findById(id)
  }
  @UseGuards(JwtAuthGuard)
  @Get('/usuario/:usuario')
  @HttpCode(HttpStatus.OK)
  findByUsuario(@Param('usuario', ParseIntPipe)Usuario: string): Promise<Usuario>{
    return this.usuarioService.findByUsuario(Usuario)
  }
  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() usuario: Usuario): Promise<Usuario>{
    return this.usuarioService.create(usuario)
  }
  @UseGuards(JwtAuthGuard)
  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  update(@Body() usuario: Usuario): Promise<Usuario>{
    return this.usuarioService.update(usuario)
  }
}
