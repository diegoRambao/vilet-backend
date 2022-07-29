import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  JwtServiceInterface,
  JwtServicePayloadInterface,
} from 'src/shared/domain/adapters/jwt.interface';

@Injectable()
export class JwtTokenService implements JwtServiceInterface {
  constructor(private jwtService: JwtService) {}

  checkToken(token: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  createToken(payload: JwtServicePayloadInterface): string {
    return this.jwtService.sign(payload);
  }
}
