import { format } from "date-fns";
import { id } from "date-fns/locale/id";
import {
  isAfterEvent,
  toDateDay,
  toDateNumber,
  today,
  toMonth,
} from "./date-formatter";

describe("Date transform", () => {
  it("converts date to date number", () => {
    const date = toDateNumber("2021-01-01");
    expect(date).toBe("1");
  });

  it("converts date to date day", () => {
    const date = toDateDay("2021-01-01");
    expect(date).toBe("Jumat");
  });

  it("converts date to date month", () => {
    const date = toMonth("2021-01-01");
    expect(date).toBe("Januari");
  });

  it("check if provided date is before today", () => {
    const date = isAfterEvent("2021-01-01");
    expect(date).toBeTruthy();
  });

  it("check valid date format", () => {
    const validDate = format(new Date(), "EEEE, d MMMM yyyy", { locale: id });
    const date = today();
    expect(date).toBe(validDate);
  });
});
