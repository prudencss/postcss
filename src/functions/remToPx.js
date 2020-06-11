import stripUnit from './stripUnit';

export default function(rem, coreSize) {
  rem = stripUnit(rem);
  coreSize = stripUnit(coreSize);

  return Math.round(rem * coreSize);
}
