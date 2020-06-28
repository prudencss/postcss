import settings from '../maps/settings.json';

export default function(breakpoint) {
  return `${setting.specialChar.breakpointSeparator}${breakpoint}`;
}
