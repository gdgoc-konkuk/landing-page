import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTimeLeft = (timeLeft: object) => {
  const timeEntries = Object.entries(timeLeft as Record<string, number>);

  if (timeEntries.length === 0) return null;

  const labels = {
    days: '일',
    hours: '시간',
    minutes: '분',
    seconds: '초',
  };

  return timeEntries
    .filter(([_, value]) => value > 0)
    .map(([key, value]) => `${value}${labels[key as keyof typeof labels]}`)
    .join(' ');
};

export const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
