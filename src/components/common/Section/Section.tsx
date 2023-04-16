import { FunctionComponent } from 'react';
import styled, { DefaultTheme } from 'styled-components';

const StyledSection = styled.section<{ gap?: keyof DefaultTheme['spacing'] }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.M} 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${({ theme, gap }) => theme.spacing[gap || 'M']};
`;

type SectionProps = {
  children: React.ReactNode | React.ReactNode[];
  gap?: keyof DefaultTheme['spacing'];
};

export const Section: FunctionComponent<SectionProps> = ({
  children,
  gap = 'M',
}: SectionProps) => {
  return <StyledSection gap={gap}>{children}</StyledSection>;
};
