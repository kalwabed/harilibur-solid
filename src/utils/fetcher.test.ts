import { getHolidays } from "./fetcher";

describe("Fetcher", () => {
  it("success get current year holidays", async () => {
    const holidays = await getHolidays();
    expect(holidays).not.toBeNull();
    expect(holidays.length).toBeGreaterThan(0);
  });
});
