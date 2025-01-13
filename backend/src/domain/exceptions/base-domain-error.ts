export abstract class BaseDomainError extends Error {
  constructor(message: string) {
    super(message);
    // Set the prototype explicitly to ensure instanceof works
    Object.setPrototypeOf(this, BaseDomainError.prototype);
  }

  abstract getErrorMessage(): string;
}
