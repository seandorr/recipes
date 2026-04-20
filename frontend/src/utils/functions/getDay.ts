import { weekDays } from "../constants/weekDays";

const date = new Date();
const weekDay = date.getDay();

export const activeDay = weekDays[weekDay];
