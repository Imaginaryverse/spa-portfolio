import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Anchor, LoadingSpinner, Section, Text } from '../common';
import { fetchLighthouseReport } from '@src/api';
import { LighthouseReportResult } from '@src/types/lighthouse.types';
import { AnimatedGauge } from './Lighthouse.animatedGauge';

const LOADING_MSGS = [
  'Checking cache...',
  'Auditing site...',
  'Calculating performance...',
  'Analyzing accessibility...',
  'Checking best practices...',
  'Evaluating SEO...',
  '...',
  'Drinking coffee...',
  'Browsing Reddit...',
  'Watching YouTube...',
  'Getting sleepy...',
  'zzz...',
  '...',
  'Uhm, what was I doing again?',
  'Right! Audits!',
  'Fetching more coffee...',
  'Getting back to work!',
];

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

const cacheTime = 1000 * 60 * 60 * 24; // 24 hours

export const LighthouseReport: FunctionComponent = () => {
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MSGS[0]);

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

  useEffect(() => {
    if (!isLoading) {
      setLoadingMsg(LOADING_MSGS[0]);
      return;
    }

    const interval = setInterval(() => {
      setLoadingMsg(prevMsg => {
        const currentIdx = LOADING_MSGS.indexOf(prevMsg);
        return currentIdx === LOADING_MSGS.length - 1
          ? LOADING_MSGS[0]
          : LOADING_MSGS[currentIdx + 1];
      });
    }, 2250);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <React.Fragment>
      <Section>
        <Text variant='h4'>Lighthouse Report</Text>

        {!!error && <Text>Oh no! My Lighthouse report went missing! :(</Text>}

        {!!data && !isLoading && (
          <Text>
            Current Lighthouse report for this website.{' '}
            <Anchor
              to='https://developer.chrome.com/docs/lighthouse/overview/'
              target='_blank'
            >
              Lighthouse
            </Anchor>{' '}
            is an open-source, automated tool provided by Google for improving
            the quality of web pages. It includes audits for performance,
            accessibility, best practices, SEO and more.
          </Text>
        )}
      </Section>

      {isLoading && (
        <StyledLighthouseReport>
          <LoadingSpinner />
          <Text variant='label' opaque>
            {loadingMsg}
          </Text>
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
