import type { ErrorOptions } from '../base-error';
import type { DatabaseErrorParent } from '../database-error';
import DatabaseError from '../database-error';

/**
 * Thrown when a database query times out because of a deadlock
 */
class TimeoutError extends DatabaseError {
  constructor(parent: DatabaseErrorParent, options: ErrorOptions = {}) {
    super(parent, options);
    this.name = 'SequelizeTimeoutError';
  }
}

export default TimeoutError;
