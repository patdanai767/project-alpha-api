import { ApiProperty } from "@nestjs/swagger";

export class JwtPayloadDto {
    @ApiProperty({
        description: 'Access token',
        type:String
    })
    accessToken:string;
}