export interface FormatExceptionMessageInterface {
  message: string;
  code_error?: number;
}

export interface ExceptionServiceInterface {
  badRequestException(data: FormatExceptionMessageInterface): void;
  internalServerErrorException(data?: FormatExceptionMessageInterface): void;
  forbiddenException(data?: FormatExceptionMessageInterface): void;
  UnauthorizedException(data?: FormatExceptionMessageInterface): void;
  httException(data?: FormatExceptionMessageInterface): void;
}
