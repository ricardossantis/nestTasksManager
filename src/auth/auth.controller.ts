import { Controller, Post, Body } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/authCredentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<string> {
    return this.authService.signUp(authCredentialsDto);
  }
}
