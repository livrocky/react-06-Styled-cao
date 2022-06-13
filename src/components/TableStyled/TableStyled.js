import styled from 'styled-components';

export const BillsTitle = styled.h1`
  text-align: center;
`;

export const BillTable = styled.table`
  & {
    background-color: blueviolet;
  }
  & tr:hover {
    background-color: coral;
  }
  & {
    color: white;
  }
  & {
    border-radius: 0.5rem;
  }
`;
