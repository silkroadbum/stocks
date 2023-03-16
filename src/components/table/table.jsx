import Row from '../row/row';
import { headers } from '../../const';

function Table({ filteredStocks, step }) {
  return (
    <table className="table">
      <caption className="table__title">Stocks</caption>
      <thead>
        <tr>
          {headers.map((item, i) => (
            <th key={i} className="table__header">
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredStocks.slice(step, step + 10).map((obj, i) => (
          <Row key={obj.symbol} index={i + 1 + step} {...obj} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
