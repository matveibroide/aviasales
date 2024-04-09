import "./TicketFilterPrice.scss";
import {
  changeSpeedFilter,
  changePriceFilter,
} from "../features/state/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const TicketsFilterPrice = () => {
  const filters = useSelector((state) => state.filters.value2);
  const dispatch = useDispatch();

  const isSpeedActive = filters.filterSpeed
    ? "tickets-filter-price-btn_active"
    : "";
  const isPriceActive = filters.filterPrice
    ? "tickets-filter-price-btn_active"
    : "";

  console.log(isSpeedActive);
  return (
    <div className="tickets-filter-price">
      <button
        style={{ backgroundColor: { isPriceActive } }}
        onClick={() => dispatch(changePriceFilter())}
        className={`tickets-filter-price-btn ${isPriceActive}`}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        style={{ backgroundColor: `${isSpeedActive}` }}
        onClick={() => dispatch(changeSpeedFilter())}
        className={`tickets-filter-price-btn ${isSpeedActive}`}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className="tickets-filter-price-btn">ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};

export default TicketsFilterPrice;
