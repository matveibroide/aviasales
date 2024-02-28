import "./TicketFilterTransfer.scss";

const TicketFilterTransfer = () => {
  return (
    <form className="tickets-transfer-filter" action="">
      <div className="tickets-transfer-filter__inner-wrapper">
        <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <div>
          <input className = "custom-checkbox" type="checkbox" id="All" />
          <label for="All">Все</label>
        </div>
        <div>
          <input className = "custom-checkbox" type="checkbox" id="no-transfer" />
          <label for="no-transfer">Без пересадок</label>
        </div>
        <div>
          <input className = "custom-checkbox" type="checkbox" id="one-transfer" />
          <label for="one-transfer">1 пересадка</label>
        </div>
        <div>
          <input className = "custom-checkbox" type="checkbox" id="two-transfers" />
          <label for="two-transfers">2 пересадки</label>
        </div>
        <div>
          <input className = "custom-checkbox" type="checkbox" id="three-transfers" />
          <label for="three-transfers">3 пересадки</label>
        </div>
      </div>
    </form>
  );
};

export default TicketFilterTransfer;
