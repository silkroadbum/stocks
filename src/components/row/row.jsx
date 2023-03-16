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
    <tr>
      <td className="table__cell table__cell--center">{index}</td>
      <td className="table__cell">{symbol}</td>
      <td className="table__cell">{companyName}</td>
      <td className="table__cell table__cell--center">{latestPrice}</td>
      <td className="table__cell table__cell--center">{iexOpen}</td>
      <td className="table__cell table__cell--center">{iexClose}</td>
      <td className="table__cell table__cell--center">{change}</td>
      <td className="table__cell table__cell--center">{changePercent}%</td>
      <td className="table__cell">{currency}</td>
      <td className="table__cell table__cell--center">{peRatio}</td>
      <td className="table__cell">{primaryExchange}</td>
    </tr>
  );
}

export default Row;
