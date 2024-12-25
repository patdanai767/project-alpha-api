import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from 'src/modules/users/dtos/response-users.dto';

export class AuthResponseDto {
  @ApiProperty({
    description: 'Access token',
    type: String,
  })
  accessToken: string;

  user: UserResponseDto;
}
