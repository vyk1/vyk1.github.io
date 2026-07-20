export const formatDateRange = (startDate: string | null, endDate: string | null): string => {
  if (!startDate) return endDate ?? "período em aberto";
  return `${startDate} — ${endDate ?? "atual"}`;
};
