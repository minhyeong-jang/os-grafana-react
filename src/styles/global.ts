import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    border: 1px solid ${({ theme }) => theme.color.border};

    svg {
      color: ${({ theme }) => theme.color.text};  
    }
  }
  .ant-modal-header, .ant-modal-footer {
    background-color: ${({ theme }) => theme.color.background};
    border-color: ${({ theme }) => theme.color.border};
  }

  .ant-modal-title {
    color: ${({ theme }) => theme.color.text};
  }
  .ant-switch:not(.ant-switch-checked) {
    background-color: rgb(255 255 255 / 25%);
  }
`;
