import React, { FunctionComponent, useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { useQuery } from 'react-query';
import { Anchor, Icon, LoadingSpinner, Section, Text } from '../common';
import { fetchLighthouseReport } from '@src/api';
import { LighthouseReportResult } from '@src/types/lighthouse.types';
import { AnimatedGauge } from './Lighthouse.animatedGauge';

const StyledLighthouseReport = styled.div`
  width: 100%;
  max-width: calc(75ch + 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.L};
  padding: ${({ theme }) => theme.spacing.M} 0;
`;

const StyledLighthouseGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.S};
`;

const StyledLighthouseGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.XXS};
`;

const StyledLighthouseGaugeContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledScore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.main};

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const StyledCategory = styled.div`
  font-size: 0.7rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.body.text};

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const cacheTime = 1000 * 60 * 60 * 24; // 24 hours (cache time is the time until the cache is considered invalid)

export const LighthouseReport: FunctionComponent = () => {
  const { data, isLoading, error } = useQuery<LighthouseReportResult, Error>(
    'lighthouse-report',
    fetchLighthouseReport,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      cacheTime: cacheTime,
      staleTime: cacheTime,
    }
  );

  return (
    <React.Fragment>
      <Section>
        <Text variant='h3'>Lighthouse Report</Text>

        {!!error && <Text>Oh no! My Lighthouse report went missing! :(</Text>}

        {!!data && !isLoading && (
          <Text>
            <Anchor
              to='https://developer.chrome.com/docs/lighthouse/overview/'
              target='_blank'
            >
              Lighthouse
            </Anchor>{' '}
            is an open-source, automated tool provided by Google for improving
            the quality of web pages. It includes audits for performance,
            accessibility, progressive web apps, SEO and more. Below is the
            current report for this website.
          </Text>
        )}
      </Section>

      {isLoading && (
        <StyledLighthouseReport>
          <LoadingSpinner />
        </StyledLighthouseReport>
      )}

      {!!data && (
        <StyledLighthouseReport>
          <StyledLighthouseGrid>
            {Object.entries(data).map(([category, { title, score }]) => (
              <StyledLighthouseGridItem key={category}>
                <StyledLighthouseGaugeContainer>
                  <StyledScore>{score * 100}</StyledScore>
                  <AnimatedGauge score={score * 100} />
                </StyledLighthouseGaugeContainer>
                <StyledCategory>{title}</StyledCategory>
              </StyledLighthouseGridItem>
            ))}
          </StyledLighthouseGrid>
        </StyledLighthouseReport>
      )}
    </React.Fragment>
  );
};
