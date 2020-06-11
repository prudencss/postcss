import stripUnit from './stripUnit';

export default function(em, coreSize) {
  em = stripUnit(em);
  coreSize = stripUnit(coreSize);

  return em * coreSize / (16 / coreSize);
}
