// theme.ts
import { DefaultTheme } from 'styled-components';
export const defaultTheme: DefaultTheme = {
  colors: {
    neutral: {
      darkText: 'hsl(229, 25%, 31%)',
      scoreText: 'hsl(229, 64%, 46%)',
      headerText: 'hsl(217, 16%, 45%))',
      lightText: 'hsl(0, 0%, 100%)',
    },

    primary: {
      scissors: ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)'],
      paper: ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)'],
      rock: ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)'],
      lizard: ['hsl(261, 73%, 60%)', 'hsl(261, 72%, 63%)'],
      spock: ['hsl(189, 59%, 53%)', 'hsl(189, 58%, 57%)'],
    },
  },

  bg: {
    body: ['hsl(214, 47%, 23%)', 'hsl(237, 49%, 15%)'],
  },
};
