import TicketCard from "../TicketCard/TicketCard";
import "./TicketsContainer.scss";
import { setSearchId, setTickets } from "../features/state/ticketsSlice";
import { getTickets, getSearchId } from "../features/state/ticketsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Spin } from "antd";
const TicketsContainer = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const searchId = useSelector((state) => state.tickets.searchId);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.value);
  console.log(filters);
  const filtersArray = [];
  for (let key in filters) {
    if (filters[key]) {
      filtersArray.push(key);
    }
  }
  console.log(filtersArray);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  async function manageAPICalls(id) {
    let stop = false;

    while (!stop) {
      setIsLoading(true);
      let data = await getTickets(id).catch((e) => {
        setIsError(true);
        console.log(e);
      });

      let tickets = data !== undefined ? data.tickets : [];

      dispatch(setTickets(tickets));

      let stop = data !== undefined ? data.stop : false;

      if (stop) {
        console.log(stop);
        setIsError(false);
        setIsLoading(false);
        break;
      }
    }
  }

  useEffect(() => {
    getSearchId().then((id) => {
      dispatch(setSearchId(id.searchId));
    });
  }, []);

  useEffect(() => {
    if (searchId) {
      manageAPICalls(searchId);
    }
  }, [searchId]);

  useEffect(() => {
    setData(tickets);
  }, [tickets]);

  function onClickLoadTickets() {
    setOffset((offset) => offset + 10);
  }

  const one = data.filter(
    (ticket) =>
      filtersArray.includes("oneTransfer") &&
      ticket.segments.every((segment) => segment.stops.length === 1)
  );

  const two = data.filter(
    (ticket) =>
      filtersArray.includes("twoTransfers") &&
      ticket.segments.every((segment) => segment.stops.length === 2)
  );

  const three = data.filter(
    (ticket) =>
      filtersArray.includes("threeTransfers") &&
      ticket.segments.every((segment) => segment.stops.length === 3)
  );

  const noTrans = data.filter(
    (ticket) =>
      filtersArray.includes("noTransfers") &&
      ticket.segments.every((segment) => segment.stops.length === 0)
  );

  const all = data.filter((ticket) => filtersArray.includes("all"));

  let filteredTickets = [...one, ...two, ...three, ...all, ...noTrans];

  return (
    <ul className="tickets-container">
      {isLoading ? (
        <Spin />
      ) : (
        filteredTickets.slice(0, offset).map((el, i) => {
          const { price, segments } = el;
          console.log(segments);
          return (
            <li key={i} className="ticket-card-container">
              <TicketCard price={price} segments={segments} />
            </li>
          );
        })
      )}
      {isLoading || filteredTickets.length === 0 ? null : (
        <button className="load-tickets" onClick={onClickLoadTickets}>
          ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ
        </button>
      )}
    </ul>
  );
};

export default TicketsContainer;
