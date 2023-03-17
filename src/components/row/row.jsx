function Row({
  index,
  symbol,
  companyName,
  latestPrice,
  iexOpen,
  iexClose,
  change,
  changePercent,
  peRatio,
  primaryExchange,
  currency,
}) {
  return (
    <>
      <td className="table__cell table__cell--xs-size">{index}</td>
      <td className="table__cell table__cell--m-size">{symbol}</td>
      <td className="table__cell table__cell--xl-size">{companyName}</td>
      <td className="table__cell table__cell--xs-size">{latestPrice}</td>
      <td className="table__cell table__cell--m-size">{iexOpen}</td>
      <td className="table__cell table__cell--m-size">{iexClose}</td>
      <td className="table__cell table__cell--m-size">{change}</td>
      <td className="table__cell table__cell--x-size">{changePercent}</td>
      <td className="table__cell table__cell--s-size">{currency}</td>
      <td className="table__cell table__cell--xs-size">{peRatio}</td>
      <td className="table__cell">{primaryExchange}</td>
    </>
  );
}

export default Row;
