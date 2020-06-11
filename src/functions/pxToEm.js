import stripUnit from './stripUnit';

export default function(px, coreSize) {
  px = stripUnit(px);
  coreSize = stripUnit(coreSize);

  return px / coreSize / (16 / coreSize);
}
