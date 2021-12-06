/**
 * A route for the API
 *
 * @typedef {Object} Route
 * @property {string} path - Indicates the route path
 * @property {string} method - Indicates the route method in lowercase.
 * @property {Function} handler - The route handler.
 * @property {object} [validation] - Indicates a optional vlaidation object.
 */
export interface Route {
  path: string
  method: string
  handler: Function
  validation: object
}
