import { Module } from "@nestjs/common";
import { ProductController } from "./product.contrller";


@Module({
    controllers:[ProductController]
})
export class ProductModule{}