import { BaseDomainError } from './base-domain-error';

export class InvalidQueryParameterError extends BaseDomainError {
  constructor(message: string) {
    super(message);
    // Set the prototype explicitly to ensure instanceof works
    Object.setPrototypeOf(this, InvalidQueryParameterError.prototype);
  }

  getErrorMessage(): string {
    return this.message;
  }
}
