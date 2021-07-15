// @flow

import matchUserPreference from '@magica11y/match-user-preference';

import colorPreferences, { type ColorPreference } from './colorPreferences';

const colorPreferenceValues: Array<ColorPreference> = [colorPreferences.NONE, colorPreferences.INVERTED];

/**
 * Detects the user’s preferences for inverted colors
 * using CSS3 Media Queries level 5 specification for `'inverted-colors'`.
 *
 * @returns Either 'none', 'inverted' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#inverted-colors
 */
const invertedColors = (): ?ColorPreference => {
  const matchedColorPreference: ?ColorPreference = colorPreferenceValues.find((colorPreferenceValue: ColorPreference) =>
    matchUserPreference('inverted-colors', colorPreferenceValue),
  );

  if (matchedColorPreference) {
    return matchedColorPreference;
  }

  return null;
};

export default invertedColors;
