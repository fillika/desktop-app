import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      sideBar: {
        width: number;
      };
    };
    colors: {
      overlay: string;
    };
  }
}

export const theme: DefaultTheme = {
  sizes: {
    sideBar: {
      width: 60,
    },
  },
  colors: {
    overlay: 'linear-gradient(rgb(68, 31, 34), rgb(34, 21, 33))',
  },
};
