export interface JwtServicePayloadInterface {
  id: number;
  email: string;
  name: string;
}

export interface JwtServiceInterface {
  createToken(payload: JwtServicePayloadInterface): string;
}
