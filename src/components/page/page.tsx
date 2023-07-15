import { ReactNode } from 'react';
import styled from 'styled-components';

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr min(65ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;

  & > * {
    grid-column: 2;
  }
`;

export const FullBleed = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  // grid-column: 1 / -1;
`;
