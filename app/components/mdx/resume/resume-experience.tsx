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
}

export const ResumeExperience = ({ children, company, dates, title }: ResumeExperienceProps) => {
  const start = new Date(Date.parse(dates.start));
  const end = new Date(Date.parse(dates.end));
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  return (
    <div className="relative flex flex-col gap-1">
      <div className="absolute top-1.5 -left-8 rounded-full bg-accent size-4 flex items-center justify-center">
        <div className="size-2.5 bg-accent-foreground rounded-full"/>
      </div>
      <h4 className="text-xl">
        {company}
        <span className="text-sm pl-2">
        {startYear}{startYear !== endYear && <> - {endYear}</>} · {formatDuration(intervalToDuration({ start, end }))}
      </span>
      </h4>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <div className="text-sm">
        {children}
      </div>
    </div>
  );
};
