export type Base = 0 | 2 | 8 | 10 | 12 | 16;
export interface Bases {
  readonly BINARY: Base;
  readonly DECIMAL: Base;
  readonly OCTAL: Base;
  readonly DUODECIMAL: Base;
  readonly HEXADECIMAL: Base;
  readonly [index: string]: Base;
}
