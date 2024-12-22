import dayjs from "dayjs";

const weekday = [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

export const formatTime = () => {
  const now = dayjs();
  const date = now.format("YYYY-MM-DD"); // 获取格式化的日期
  const time = now.format("HH:mm:ss"); // 获取格式化的时间
  const dayOfWeek = weekday[now.day()]; // 获取当前星期几，0-6对应“星期天”-“星期六”
  return `${date} | ${time} ${dayOfWeek}`;
};
