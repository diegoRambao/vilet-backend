export interface JwtServicePayloadInterface {
  id: number;
  email: string;
  name: string;
}

export interface JwtServiceInterface {
  checkToken(token: string): Promise<any>;
  createToken(payload: JwtServicePayloadInterface): string;
}
