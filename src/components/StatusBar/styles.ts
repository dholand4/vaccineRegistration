import styled from 'styled-components/native';

interface StatusBarProps {
  color?: string;
  barStyleDark?: boolean;
}

export const StatusBar = styled.StatusBar.attrs<StatusBarProps>(
  ({ theme, color, barStyleDark }) => ({
    backgroundColor: color || theme.Colors.background_color,
    barStyle: barStyleDark ? 'dark-content' : 'default',
    height: 10,
  }),
)<StatusBarProps>``;
