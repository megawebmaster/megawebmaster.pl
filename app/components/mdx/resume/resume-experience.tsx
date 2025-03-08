import type { ReactNode } from 'react';
import { formatDuration, intervalToDuration } from 'date-fns';

type ResumeExperienceProps = {
  children: ReactNode;
  company: string;
  dates: {
    start: string;
    end: string;
  };
  title: ReactNode;
};

export const ResumeExperience = ({ children, company, dates, title }: ResumeExperienceProps) => {
  const start = new Date(Date.parse(dates.start));
  const end = new Date(Date.parse(dates.end));
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  return (
    <div className="relative flex flex-col gap-1">
      <div className="absolute top-1.5 -left-8 rounded-full bg-accent size-4 flex items-center justify-center">
        <div className="size-2.5 bg-accent-foreground rounded-full" />
      </div>
      <h4 className="text-xl flex flex-col gap-2 xl:flex-row xl:items-end">
        <span className="text-nowrap">{company}</span>
        <div className="flex gap-1">
          <span className="text-sm text-nowrap">
            {startYear}
            {startYear !== endYear && <> - {endYear}</>}
          </span>
          <span className="text-base">·</span>
          <span className="text-sm text-nowrap">
            {formatDuration(intervalToDuration({ start, end }), { format: ['years', 'months'] })}
          </span>
        </div>
      </h4>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <div className="text-sm">{children}</div>
    </div>
  );
};
