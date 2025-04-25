import { isAfterEvent } from "~/utils/date-formatter";
import Card from "../card";
import { component$ } from "@builder.io/qwik";

const CardPreview = component$(
  ({
    holidayName,
    holidayDate,
  }: {
    holidayName: string;
    holidayDate: string;
  }) => {
    return (
      <Card isAfterEvent={isAfterEvent(holidayDate)} holidayDate={holidayDate}>
        <p>{holidayName}</p>
      </Card>
    );
  },
);

export default CardPreview;
