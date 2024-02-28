import "./AppContainer.scss";
import TicketFilterTransfer from "../TicketFilterTransfer/TicketFilterTransfer";
import TicketsFilterPrice from "../TicketFilterPrice/TicketFilterPrice";
import TicketsContainer from "../TicketsContainer/TicketsContainer";
const AppContainer = () => {
  return (
    <div className="container">
      <TicketFilterTransfer />
      <div className="container__inner-wrapper">
        <TicketsFilterPrice />
        <TicketsContainer />
      </div>
    </div>
  );
};

export default AppContainer;
