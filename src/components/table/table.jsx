import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import Row from '../row/row';
import { headers } from '../../const';

function Table() {
  const { stocks } = useSelector((state) => state.stocks);
  const [step, setStep] = useState(0);
  const buttonPrevRef = useRef(null);
  const buttonNextRef = useRef(null);

  const onClickNext = () => {
    setStep((prev) => prev + 10);
  };

  const onClickPrev = () => {
    if (step <= 10) {
      setStep(0);
    } else {
      setStep((prev) => prev - 10);
    }
  };

  return (
    <>
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
          {stocks.slice(step, step + 10).map((obj, i) => (
            <Row key={obj.symbol} index={i + 1 + step} {...obj} />
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button
          ref={buttonPrevRef}
          onClick={onClickPrev}
          className="button button--prev"
          type="button">
          PREV
        </button>
        <button
          ref={buttonNextRef}
          onClick={onClickNext}
          className="button button--next"
          type="button">
          NEXT
        </button>
      </div>
    </>
  );
}

export default Table;
