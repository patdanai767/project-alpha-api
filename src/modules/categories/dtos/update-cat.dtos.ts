import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateCatDto {
    @IsNotEmpty()
    @ApiProperty({
        example: '',
        type:String,
        description: 'Category title'
    })
    title?:string

    @IsNotEmpty()
    @ApiProperty({
        example: '',
        type:String,
        description: 'Category description'
    })
    description?: string

    @IsNotEmpty()
    @ApiProperty({
        example: '',
        type:String,
        description: 'Category slug'
    })
    slug?: string
}