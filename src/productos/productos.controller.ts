import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProducrDto } from './dtos/create-car.dto';
import { UpdateProducto } from './dtos/update-car.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly producService: ProductosService) {}

  @Get()
  getAllproducts() {
    return this.producService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.producService.findById(id);
  }

  @Post()
  createProduct(@Body() CreateProducrDto: CreateProducrDto) {
    return this.producService.create(CreateProducrDto);
  }

  @Patch(':id')
  UpdateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() UpdateProducto: UpdateProducto,
  ) {
    return this.producService.update(id, UpdateProducto);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseUUIDPipe) @Body() id: string) {
    return this.producService.delete(id);
  }
}
