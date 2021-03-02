import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .ant-modal-content {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    border: 1px solid ${({ theme }) => theme.color.border};

    svg {
      color: ${({ theme }) => theme.color.text}; 
    }

    .ant-modal-header, .ant-modal-footer {
      background-color: ${({ theme }) => theme.color.background};
      border-color: ${({ theme }) => theme.color.border};
    }
    .ant-modal-title {
      color: ${({ theme }) => theme.color.text};
    }
    .ant-modal-footer {
      .ant-btn:not(.ant-btn-primary) {
        ${({ theme }) => theme.button.defaultButton};
      }
      .ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active{
        background-color: rgb(74 74 74) !important;
        color: ${({ theme }) => theme.color.text};
        border-color: ${({ theme }) => theme.color.border};
      }
    }
  }

  .ant-switch:not(.ant-switch-checked) {
    background-color: rgb(255 255 255 / 25%);
  }
  .ant-select-selector {
    ${({ theme }) => theme.input.defaultInput};
  }
`;
