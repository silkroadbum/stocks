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
    <tr className="table__row">
      <td className="table__cell">{index}</td>
      <td className="table__cell">{symbol}</td>
      <td className="table__cell">{companyName}</td>
      <td className="table__cell">{latestPrice}</td>
      <td className="table__cell">{iexOpen}</td>
      <td className="table__cell">{iexClose}</td>
      <td className="table__cell">{change}</td>
      <td className="table__cell">{changePercent}%</td>
      <td className="table__cell">{currency}</td>
      <td className="table__cell">{peRatio}</td>
      <td className="table__cell">{primaryExchange}</td>
    </tr>
  );
}

export default Row;
