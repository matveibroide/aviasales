import "./TicketFilterPrice.scss";

const TicketsFilterPrice = () => {
  return (
    <div className="tickets-filter-price">
      <button className = 'tickets-filter-price-btn tickets-filter-price-btn_active'>САМЫЙ ДЕШЕВЫЙ</button>
      <button className = 'tickets-filter-price-btn'>САМЫЙ БЫСТРЫЙ</button>
      <button className = 'tickets-filter-price-btn'>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};

export default TicketsFilterPrice;
