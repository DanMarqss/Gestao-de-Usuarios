import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger'; 

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'ID único do usuário' }) 
  id: number;

  @Column()
  @ApiProperty({ example: 'John Doe', description: 'Nome completo do usuário' }) 
  name: string;

  @Column()
  @ApiProperty({ example: 'john.doe@example.com', description: 'Email do usuário' })
  email: string;

  @Column()
  @ApiProperty({ example: 12345, description: 'Número de registro do usuário' })
  registration: number;

  @Column()
  @ApiProperty({ example: 'senha123', description: 'Senha do usuário' }) 
  password: string;
}
