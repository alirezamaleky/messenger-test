export const fromNow: (timestamp: number) => string = (timestamp: number) => {
  if (timestamp === 0) return `${"خیلی وقت پیش"}`;

  let difference = Math.floor(Date.now() / 1000) - timestamp;

  const yearsDifference = Math.floor(difference / 60 / 60 / 24 / 365);
  if (yearsDifference > 0) return `${yearsDifference} ${"سال"} ${"پیش"}`;

  const monthsDifference = Math.floor(difference / 60 / 60 / 24 / 30);
  if (monthsDifference > 0) return `${monthsDifference} ${"ماه"} ${"پیش"}`;

  const weeksDifference = Math.floor(difference / 60 / 60 / 24 / 7);
  if (weeksDifference > 0) return `${weeksDifference} ${"هفته"} ${"پیش"}`;

  const daysDifference = Math.floor(difference / 60 / 60 / 24);
  if (daysDifference > 0) return `${daysDifference} ${"روز"} ${"پیش"}`;

  const hoursDifference = Math.floor(difference / 60 / 60);
  if (hoursDifference > 0) return `${hoursDifference} ${"ساعت"} ${"پیش"}`;

  const minutesDifference = Math.floor(difference / 60);
  if (minutesDifference > 0) return `${minutesDifference} ${"دقیقه"} ${"پیش"}`;

  const secondsDifference = Math.floor(difference);
  return `${secondsDifference} ${"ثانیه"} ${"پیش"}`;
};
