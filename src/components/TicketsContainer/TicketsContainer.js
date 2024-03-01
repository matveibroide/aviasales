import TicketCard from "../TicketCard/TicketCard";
import "./TicketsContainer.scss";
const TicketsContainer = () => {
  const arr = [...Array(5)];
  return (
    <ul className="tickets-container">
      {arr.map((el,i) => {
        return (
          <li key = {i} className="ticket-card-container">
            <TicketCard />
          </li>
        );
      })}
    </ul>
  );
};

export default TicketsContainer;
