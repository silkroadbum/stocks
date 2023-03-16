import { useSelector } from 'react-redux';

import Row from '../row/row';
import { headers } from '../../const';

function Table() {
  const { stocks } = useSelector((state) => state.stocks);
  console.log(stocks);
  return (
    <table className="table">
      <caption>Stocks</caption>
      <tbody>
        <tr>
          {headers.map((item, i) => (
            <th key={i} className="table__header">
              {item}
            </th>
          ))}
        </tr>
        {stocks.map((obj, i) => (
          <Row key={obj.symbol} index={i + 1} {...obj} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
