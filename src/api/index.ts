import {
  LighthouseReportResponse,
  LighthouseReportResult,
} from '@src/types/lighthouse.types';

const PAGESPEED_API_KEY = import.meta.env.VITE_PAGESPEED_API_KEY;
const apiURL =
  'https://content-pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed';
const categories = [
  'PERFORMANCE',
  'ACCESSIBILITY',
  'BEST_PRACTICES',
  'SEO',
].join('&category=');
const portfolioURL = 'https://www.antonbertilsson.se';

const parseLighthouseReport = (
  response: LighthouseReportResponse
): LighthouseReportResult => {
  const {
    lighthouseResult: { categories },
  } = response;
  return categories;
};

export const fetchLighthouseReport =
  async (): Promise<LighthouseReportResult> => {
    const response = await fetch(
      `${apiURL}?category=${categories}&url=${portfolioURL}&key=${PAGESPEED_API_KEY}`
    );
    const json = await response.json();
    return parseLighthouseReport(json);
  };
