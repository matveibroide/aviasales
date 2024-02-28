import companyLogo from "../../assets/slogo.png";
import "./TicketCard.scss";

const TicketCard = () => {
  return (
    <ul className="ticket-card">
      <li style={{ height: "36px" }} className="ticket-card__item">
        <span
          style={{
            color: "#2196F3",
            fontSize: "24px",
          }}
        >
          13 400 Р{" "}
        </span>
        <img src={companyLogo} alt="" />
      </li>
      <li className="ticket-card__item">
        <span>10:45 – 08:00</span>
        <span>21ч 15м</span>
        <ul>
          <li>2 пересадки</li>
          <li>HKG, JNB</li>
        </ul>
      </li>
      <li className="ticket-card__item">
        <span>11:20 – 00:50</span>
        <span>13ч 30м</span>
        <ul>
          <li>1 пересадка</li>
          <li>HKG</li>
        </ul>
      </li>
    </ul>
  );
};
export default TicketCard;
