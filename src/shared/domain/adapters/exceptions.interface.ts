export interface FormatExceptionMessageInterface {
  message: string | string[];
  statusCode?: number;
  error?: string | string[];
}

export interface ExceptionServiceInterface {
  badRequestException(data: FormatExceptionMessageInterface): void;
  internalServerErrorException(data?: FormatExceptionMessageInterface): void;
  forbiddenException(data?: FormatExceptionMessageInterface): void;
  UnauthorizedException(data?: FormatExceptionMessageInterface): void;
  httException(data?: FormatExceptionMessageInterface): void;
  notFoundException(data?: FormatExceptionMessageInterface): void;
}
