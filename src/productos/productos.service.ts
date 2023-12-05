import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Producto } from './interfaces/productos.int';
import { v4 as uuid } from 'uuid';
import { CreateProducrDto } from './dtos/create-car.dto';
import { UpdateProducto } from './dtos/update-car.dto';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [
    {
      id: uuid(),
      nombre: 'Laptop',
      precio: 2000.56,
    },
    {
      id: uuid(),
      nombre: 'Mouse',
      precio: 349.87,
    },
    {
      id: uuid(),
      nombre: 'Teclado',
      precio: 129.99,
    },
  ];

  findAll() {
    return this.productos;
  }

  findById(id: string) {
    const producto = this.productos.find((product) => product.id === id);

    if (!producto) throw new NotFoundException(`El ${id} no fue encontrado`);

    return producto;
  }

  create(CreateProducrDto: CreateProducrDto) {
    const product: Producto = {
      id: uuid(),
      ...CreateProducrDto,
    };

    this.productos.push(product);

    return product;
  }

  update(id: string, UpdateProduct: UpdateProducto) {
    // Tengo que pasar como parametro el id a actualizar y el DTO
    let carDB = this.findById(id);

    if (UpdateProduct.id && UpdateProduct.id !== id)
      throw new BadRequestException(`Producto id is not valid inside body`);

    this.productos = this.productos.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...UpdateProduct, id };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findById(id);
    this.productos = this.productos.filter((car) => car.id !== id);
  }
}
