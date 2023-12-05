import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateProducto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly nombre?: string;

  @IsString()
  @IsOptional()
  readonly precio?: number;
}
