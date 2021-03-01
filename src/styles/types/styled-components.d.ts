import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      text: string;
      border: string;
    };
    button: {
      defaultButton: string;
    };
    input: {
      defaultInput: string;
    };
  }
}
