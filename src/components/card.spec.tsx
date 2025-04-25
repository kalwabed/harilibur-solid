import { createDOM } from "@builder.io/qwik/testing";
import Card from "./card";
import { describe, expect, it } from "vitest";

describe("Card sider", () => {
  it("show when date is provided", async () => {
    const { render, screen } = await createDOM();

    await render(
      <Card isAfterEvent holidayDate={new Date().toISOString()}>
        <div>test</div>
      </Card>,
    );
    const cardSider = screen.querySelector('[data-testId="card-sider"]');
    expect(cardSider?.outerHTML).toBeTruthy();
  });

  it("not show when date is not provided", async () => {
    const { render, screen } = await createDOM();

    await render(
      <Card isAfterEvent>
        <div>test</div>
      </Card>,
    );

    const cardSider = screen.querySelector('[data-testId="card-sider"]');
    expect(cardSider).not.toBeTruthy();
  });
});
