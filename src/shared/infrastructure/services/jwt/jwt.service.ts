import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  JwtServiceInterface,
  JwtServicePayloadInterface,
} from 'src/shared/domain/adapters/jwt.interface';

@Injectable()
export class JwtTokenService implements JwtServiceInterface {
  constructor(private jwtService: JwtService) {}

  createToken(payload: JwtServicePayloadInterface): string {
    return this.jwtService.sign(payload);
  }
}
