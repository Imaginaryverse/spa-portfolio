import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.M} 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacing.M};
`;

type SectionProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Section: FunctionComponent<SectionProps> = ({
  children,
}: SectionProps) => {
  return <StyledSection>{children}</StyledSection>;
};
