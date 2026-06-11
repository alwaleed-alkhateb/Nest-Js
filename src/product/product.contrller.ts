import { Controller,Get } from "@nestjs/common";

@Controller({})
export class ProductController{
    @Get("/api/product")
    public getAllProduct() {
        return([
            {id:1,title:"bock",price:20},
            {id:2,title:"desk",price:100},
            {id:3,title:"labtop",price:400}
        ])
    }
}