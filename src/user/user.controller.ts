import { Controller, Get, Post, Put, Body, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam, ApiBody } from '@nestjs/swagger'; // Importações do Swagger
import { UserService } from './user.service';
import { User } from './user.entity';

@ApiTags('users') 
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' }) 
  @ApiQuery({ name: 'page', required: false, description: 'Número da página' })
  @ApiQuery({ name: 'limit', required: false, description: 'Número de itens por página' }) 
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso' }) 
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ): Promise<{ users: User[], totalPages: number }> {
    return this.userService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um usuário por ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário' }) 
  @ApiResponse({ status: 200, description: 'Usuário encontrado com sucesso', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({ type: User }) 
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso', type: User })
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um usuário existente' })
  @ApiParam({ name: 'id', description: 'ID do usuário a ser atualizado' })
  @ApiBody({ type: User }) 
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso', type: User })
  update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.update(+id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuário' })
  @ApiParam({ name: 'id', description: 'ID do usuário a ser removido' })
  @ApiResponse({ status: 200, description: 'Usuário removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(+id);
  }
}
