import { isAfterEvent } from "~/utils/date-formatter";
import Card from "../card";

const CardPreview = ({
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
};

export default CardPreview;
