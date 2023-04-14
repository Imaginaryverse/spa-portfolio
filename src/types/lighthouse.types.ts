export type LighthouseReportCategory =
  | 'performance'
  | 'accessibility'
  | 'best-practices'
  | 'seo';

export type LighthouseReportResult = {
  [key in LighthouseReportCategory]: {
    title: string;
    score: number;
  };
};

export type LighthouseReportResponse = {
  lighthouseResult: {
    categories: LighthouseReportResult;
  };
};
