import { ApiProperty } from "@nestjs/swagger";

export class ReviewCourseDto {
    @ApiProperty({
        example: 5,
        type: Number,
        description: 'Course point',
    })
    point?:number;

    @ApiProperty({
        example: '',
        type: String,
        description: 'Course description',
    })
    description?:string

    @ApiProperty({
        example: '',
        type: String,
        description: 'Course is reviewed by',
    })
    user_id?:string
}