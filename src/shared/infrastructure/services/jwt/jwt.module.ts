import { Module } from '@nestjs/common';
import { JwtTokenService } from './jwt.service';
import { JwtModule as Jwt } from '@nestjs/jwt';

@Module({
  imports: [
    Jwt.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [JwtTokenService],
  exports: [JwtTokenService],
})
export class JwtTokenModule {}
