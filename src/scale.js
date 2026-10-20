// The ONE file that differs between natural-minor-trainer,
// harmonic-minor-trainer and major-scale-trainer. Everything else in src/ and
// scripts/ is shared and must be kept identical in all three repos.
export const SCALE_ID = 'harmonic';
export const TOOL_KEY = 'hm';          // @fretworks/design registry key
export const PREFIX = 'hm_';           // localStorage prefix (sync + backup use it)
export const ACCENT = '#a3e635';       // lime
export const APP_NAME = 'Harmonic Minor Trainer';
export const ICON_TEXT = 'harm';
