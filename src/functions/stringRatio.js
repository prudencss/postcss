import settings from '../maps/settings.json';

export default function(dividend, divisor) {
  return `${dividend}${setting.specialChar.ratioSeparator}${divisor}`;
}
