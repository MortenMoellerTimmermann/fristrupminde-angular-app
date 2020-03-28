export {};

declare global {
  interface Date {
    isSameDateAs(pDate: Date): boolean;
  }
}

Date.prototype.isSameDateAs = function(pDate: Date): boolean {
  return (
    this.getFullYear() === pDate.getFullYear() &&
    this.getMonth() === pDate.getMonth() &&
    this.getDate() === pDate.getDate()
  );
};
