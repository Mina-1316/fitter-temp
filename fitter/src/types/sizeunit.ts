// Sizes type like px, rem, em, etc for spacing, font-size, etc

export abstract class SizeUnit {
  protected constructor(public readonly value: number, public readonly unit: string) {}

  toString(): string {
    return `${this.value}${this.unit}`;
  }
}

export abstract class RelativeSizeUnit extends SizeUnit {}

export abstract class AbsoluteSizeUnit extends SizeUnit {}

interface HorizontalSize{}

interface VerticalSize{}

type Constructor<T> = new (value: number) => T;

function createSizeFactory<T>(Constructor: Constructor<T>) {
  return (value: number) => new Constructor(value);
}

export class Px extends AbsoluteSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'px');
  }
}
export const px = createSizeFactory(Px);

export class Rem extends RelativeSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'rem');
  }
}
export const rem = createSizeFactory(Rem);

export class Em extends RelativeSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'em');
  }
}
export const em = createSizeFactory(Em);

export class Percent extends RelativeSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, '%');
  }
}
export const percent = createSizeFactory(Percent);

export class Vw extends RelativeSizeUnit implements HorizontalSize {
  constructor(value: number) {
    super(value, 'vw');
  }
}
export const vw = createSizeFactory(Vw);

export class Vh extends RelativeSizeUnit implements VerticalSize {
  constructor(value: number) {
    super(value, 'vh');
  }
}
export const vh = createSizeFactory(Vh);

export class Vmin extends RelativeSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'vmin');
  }
}
export const vmin = createSizeFactory(Vmin);

export class Vmax extends RelativeSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'vmax');
  }
}
export const vmax = createSizeFactory(Vmax);

export class Ch extends AbsoluteSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'ch');
  }
}
export const ch = createSizeFactory(Ch);

export class Ex extends RelativeSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'ex');
  }
}
export const ex = createSizeFactory(Ex);

export class Cm extends AbsoluteSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'cm');
  }
}
export const cm = createSizeFactory(Cm);

export class Mm extends AbsoluteSizeUnit implements HorizontalSize, VerticalSize {
  constructor(value: number) {
    super(value, 'mm');
  }
}
export const mm = createSizeFactory(Mm);
