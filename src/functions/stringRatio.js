import settings from '../maps/settings.json';

export default function(dividend, divisor) {
  return `${dividend}${setting['special-char']['ratio-separator']}${divisor}`;
}
