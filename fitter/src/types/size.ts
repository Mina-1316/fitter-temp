import { SizeUnit } from "./sizeunit";

// Length
export type Length = SizeUnit;

// Size
export type Size = {
  width: SizeUnit;
  height: SizeUnit;
}

// 3D Size
export type Size3D = {
  width: SizeUnit;
  height: SizeUnit;
  depth: SizeUnit;
}