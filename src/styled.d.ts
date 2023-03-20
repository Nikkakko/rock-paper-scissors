// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutral: {
        darkText: string;
        scoreText: string;
        headerText: string;
        lightText: string;
      };
      primary: {
        scissors: string[];
        paper: string[];
        rock: string[];
        lizard: string[];
        spock: string[];
      };
    };
    bg: {
      body: string[];
    };
  }
}
