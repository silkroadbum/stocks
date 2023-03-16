import { useSelector } from 'react-redux';

import Row from '../row/row';
import { headers } from '../../const';

function Table() {
  const { stocks } = useSelector((state) => state.stocks);
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
        {stocks.map((obj, i) => (
          <Row key={obj.symbol} index={i + 1} {...obj} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
