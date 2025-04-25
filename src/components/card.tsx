import "./card.css";
import { JSX, Show } from "solid-js";
import CardSider from "./card/card-sider";

interface CardProps {
  isAfterEvent: boolean;
  children: JSX.Element;
  holidayDate?: string;
}

const Card = ({ isAfterEvent, holidayDate, children }: CardProps) => {
  return (
    <div class="card">
      <Show when={holidayDate}>
        <CardSider holidayDate={holidayDate} />
      </Show>
      <div classList={{ card_body: true, is_after_event: isAfterEvent }}>
        {children}
      </div>
    </div>
  );
};

export default Card;
