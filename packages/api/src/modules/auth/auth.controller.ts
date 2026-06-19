import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(
    @Body() body: { email: string; username: string; password: string }
  ) {
    return {
      message: 'User registered successfully',
      email: body.email,
      username: body.username,
    };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return {
      access_token: 'jwt_token_here',
      refresh_token: 'refresh_token_here',
      user: { email: body.email },
    };
  }

  @Post('refresh')
  async refresh(@Body() body: { refresh_token: string }) {
    return {
      access_token: 'new_jwt_token_here',
    };
  }

  @Get('me')
  async getCurrentUser(@Req() req: any) {
    return { user: 'Current user data' };
  }
}