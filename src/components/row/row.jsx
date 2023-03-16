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
      <td className="table__cell">{index}</td>
      <td className="table__cell">{symbol}</td>
      <td className="table__cell">{companyName}</td>
      <td className="table__cell table__cel--center">{latestPrice}</td>
      <td className="table__cell table__cel--center">{iexOpen}</td>
      <td className="table__cell table__cel--center">{iexClose}</td>
      <td className="table__cell table__cel--center">{change}</td>
      <td className="table__cell table__cel--center">{changePercent}%</td>
      <td className="table__cell">{currency}</td>
      <td className="table__cell table__cel--center">{peRatio}</td>
      <td className="table__cell">{primaryExchange}</td>
    </tr>
  );
}

export default Row;
