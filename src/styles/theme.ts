import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    text: '#c7d0d9',
    background: 'rgb(11, 12, 14)',
    border: '#202226',
  },
  button: {
    defaultButton: `
      background-color: rgb(11, 12, 14);
      color: #c7d0d9;
      border-radius: 3px;
      border: 1px solid #202226;
      padding: 4px 15px 3px;
      font-size: 14px;

      &:hover, &:active {
        background-color: rgb(30, 30, 30) !important;
        color: #c7d0d9 !important;
        border-color: #202226 !important;
      }
      &:disabled {
        cursor: not-allowed;
        background-color: rgb(74 74 74) !important;
      }
    `,
  },
  input: {
    defaultInput: `
      background-color: #15171a !important;
      color: #c7d0d9;
      border: 1px solid #202226 !important;
      
      &:hover {
        border-color: #202226;
      }
    `,
  },
};
