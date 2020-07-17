import settings from '../maps/settings.json';

export default function(breakpoint) {
  return `${setting['special-char']['breakpoint-separator']}${breakpoint}`;
}
