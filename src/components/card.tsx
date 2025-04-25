import { Slot, component$ } from "@builder.io/qwik";
import "./card.css";
import CardSider from "./card/card-sider";

interface CardProps {
  isAfterEvent: boolean;
  holidayDate?: string;
}

const Card = component$(({ isAfterEvent, holidayDate }: CardProps) => {
  return (
    <div class="card">
      {holidayDate ? <CardSider holidayDate={holidayDate} /> : null}
      <div class={{ card_body: true, is_after_event: isAfterEvent }}>
        <Slot />
      </div>
    </div>
  );
});

export default Card;
