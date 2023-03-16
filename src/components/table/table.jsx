import Row from '../row/row';
import { headers } from '../../const';

function Table({ filteredStocks, step }) {
  return (
    <>
      <h1 className="title">STOCKS</h1>
      <div className="table-wrapper">
        <table className="table">
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
      </div>
    </>
  );
}

export default Table;
