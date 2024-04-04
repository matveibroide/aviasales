import "./TicketFilterTransfer.scss";
import { useSelector, useDispatch } from "react-redux";
import { allActive, oneActive } from "../features/state/filtersSlice";

const TicketFilterTransfer = () => {
  const filters = useSelector((state) => state.filters.value);
  const dispatch = useDispatch();

  const { oneTransfer, twoTransfers, threeTransfers, noTransfers, all } =
    filters;

  return (
    <form className="tickets-transfer-filter" action="">
      <div className="tickets-transfer-filter__inner-wrapper">
        <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
        <div>
          <input
            checked={all}
            onChange={(e) => {
              dispatch(allActive(e.target.checked));
            }}
            className="custom-checkbox"
            type="checkbox"
            id="all"
          />
          <label for="all">Все</label>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(oneActive(e.target.getAttribute("id")))}
            checked={noTransfers}
            className="custom-checkbox"
            type="checkbox"
            id="noTransfers"
          />
          <label for="noTransfers">Без пересадок</label>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(oneActive(e.target.getAttribute("id")))}
            checked={oneTransfer}
            className="custom-checkbox"
            type="checkbox"
            id="oneTransfer"
          />
          <label for="oneTransfer">1 пересадка</label>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(oneActive(e.target.getAttribute("id")))}
            checked={twoTransfers}
            className="custom-checkbox"
            type="checkbox"
            id="twoTransfers"
          />
          <label for="twoTransfers">2 пересадки</label>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(oneActive(e.target.getAttribute("id")))}
            checked={threeTransfers}
            className="custom-checkbox"
            type="checkbox"
            id="threeTransfers"
          />
          <label for="threeTransfers">3 пересадки</label>
        </div>
      </div>
    </form>
  );
};

export default TicketFilterTransfer;
