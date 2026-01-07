/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useThemeContext } from '@/app/context/ThemeContext';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: string
) {
  const { theme, mode } = useThemeContext();
  const effectiveMode = mode === 'system' ? (theme.colors.background === '#FFFFFF' ? 'light' : 'dark') : mode;
  const colorFromProps = props[effectiveMode as 'light' | 'dark'];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return (theme.colors as any)[colorName] || '#000000';
  }
}
