import companyLogo from "../../assets/slogo.png";
import "./TicketCard.scss";

const TicketCard = ({ price, segments }) => {
  console.log(segments);
  const addMinutesToTime = (dateString, duration) => {
    const time = +duration; // Ensure duration is parsed to a float

    const date = new Date(dateString);
    if (isNaN(date.getTime()) || isNaN(time)) {
      return "Invalid input. Please provide valid date string and duration.";
    }
    const totalMinutes = date.getUTCHours() * 60 + date.getUTCMinutes() + time;
    const totalMilliseconds = totalMinutes * 60 * 1000;
    const newDate = new Date(totalMilliseconds);

    // Get hours and minutes from the new date
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    // Format hours and minutes
    const formattedTime =
      ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);

      return formattedTime
  };

  const minutesToHours = (minutes) =>
    `${Math.floor(minutes / 60)} ч ${minutes % 60} м`;

  const convertDateToTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const { date: dateFT } = segments[0];
  const { date: dateST } = segments[1];
  const { stops: stopsFirstTicket } = segments[0];
  const { stops: stopsSecondTicket } = segments[1];
  const { destination: destinationFT } = segments[0];
  const { destination: destinationST } = segments[1];
  const { duration: durationFT } = segments[0];
  const { duration: durationST } = segments[1];
  const transfersAmountFirst = stopsFirstTicket.length;
  const transfersAmountSecond = stopsSecondTicket.length;

  console.log(durationFT);

  return (
    <ul className="ticket-card">
      <li style={{ height: "36px" }} className="ticket-card__item">
        <span
          style={{
            color: "#2196F3",
            fontSize: "24px",
          }}
        >
          {price}
        </span>
        <img src={companyLogo} alt="" />
      </li>
      <li className="ticket-card__item">
        <span>
          {convertDateToTime(dateFT)} – {addMinutesToTime(dateFT, durationFT)}
        </span>
        <span>{minutesToHours(durationFT)}</span>
        <ul>
          <li>{stopsFirstTicket.length} пересадки</li>
          <li>{stopsFirstTicket.join(" ")}</li>
        </ul>
      </li>
      <li className="ticket-card__item">
        <span> {convertDateToTime(dateST)} –{addMinutesToTime(dateST, durationST)}</span>
        <span>{minutesToHours(durationST)}</span>
        <ul>
          <li>{`${stopsSecondTicket.length} пересадка`}</li>
          <li>{stopsSecondTicket.join(" ")}</li>
        </ul>
      </li>
    </ul>
  );
};
export default TicketCard;
