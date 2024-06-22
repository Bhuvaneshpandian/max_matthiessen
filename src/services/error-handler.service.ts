import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    alert(JSON.stringify('Global error handler:', error.message))
  }
}
