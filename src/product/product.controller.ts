import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { updateProductDto } from './dtos/update-product.dto';
type ProductType = { id: number; title: string; price: number };

@Controller()
export class ProductController {
  private products: ProductType[] = [
    { id: 1, title: 'iphone', price: 320 },
    { id: 2, title: 'pc', price: 620 },
    { id: 3, title: 'laptop', price: 450 },
  ];
  // GET: ~/api/product
  @Get('/api/product')
  public getAllProduct() {
    return this.products;
  }

  // POST: ~/api/product
  @Post('/api/product')
  public createNewProduct(@Body() body: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      title: body.title,
      price: body.price,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  // GET: ~/api/product/:id
  @Get('/api/product/:id')
  public getAllProductById(@Param('id') id: string) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException();
    return product;
  }

  // PUT: ~/api/product/:id
  @Put('/api/product/:id')
  public putProductById(
    @Param('id') id: string,
    @Body() body: updateProductDto,
  ) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException();

    console.log(body);
    return { message: 'product updated' };
  }

  // DELETE: ~/api/product/:id
  @Delete('/api/product/:id')
  public deleteProductById(@Param('id') id: string) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException();

    return { message: 'product deleted' };
  }
}
