import { FunctionComponent, useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';

type AnimatedGaugeProps = {
  score: number;
};

const StyledGauge = styled.svg`
  transform: rotate(-90deg);

  circle {
    transition: all ${({ theme }) => theme.transitionDuration.medium}
      ease-in-out;
  }
`;

export const AnimatedGauge: FunctionComponent<AnimatedGaugeProps> = ({
  score,
}) => {
  const { colors } = useTheme();
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      const progress = ((100 - score) / 100) * 2 * Math.PI * 25; // calculate the stroke length based on the score
      circleRef.current.style.strokeDasharray = `${2 * Math.PI * 25} ${
        2 * Math.PI * 25
      }`;
      circleRef.current.style.strokeDashoffset = `${2 * Math.PI * 25}`;
      circleRef.current.animate(
        [
          { strokeDashoffset: `${2 * Math.PI * 25}` },
          { strokeDashoffset: `${progress}` },
        ],
        {
          duration: 750,
          fill: 'forwards',
          easing: 'ease-in-out',
        }
      );
    }
  }, [score]);

  return (
    <StyledGauge viewBox='0 0 60 60'>
      <circle
        cx='30'
        cy='30'
        r='25'
        fill='none'
        stroke={colors.primary.surface}
        strokeWidth='5'
      />
      <circle
        ref={circleRef}
        cx='30'
        cy='30'
        r='25'
        fill='none'
        strokeLinecap='round'
        stroke={colors.primary.main}
        strokeWidth='5'
        strokeDasharray='100 100'
        strokeDashoffset='0'
      />

      <circle
        cx='30'
        cy='30'
        r='27'
        fill={colors.primary.surface}
        stroke='none'
      />
    </StyledGauge>
  );
};
