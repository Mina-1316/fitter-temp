
// Mark class Definition as sealed, which makes class unextendable
export function sealed(target: Function): void {
  Object.seal(target);
  Object.seal(target.prototype);
}
