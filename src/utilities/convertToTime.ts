const convertToTime = (timeValue: number): string => {
  const m = timeValue % 60;
  const h = (timeValue - m) / 60;

  return `${h}h${m}min`;
};

export default convertToTime;
