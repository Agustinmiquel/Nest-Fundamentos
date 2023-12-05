import { IsString } from 'class-validator';

export class CreateProducrDto {
  @IsString()
  readonly nombre: string;

  @IsString({ message: `El modelo tiene que ser sin numero` })
  readonly precio: number;
}
