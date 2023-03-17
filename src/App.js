import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Watch } from 'react-loader-spinner';

import Button from './components/button/button';
import Table from './components/table/table';
import Search from './components/search/search';

function App() {
  const { status, stocks } = useSelector((state) => state.stocks);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0);

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

  const onChangeInput = ({ target }) => {
    setInputValue(target.value);
    setStep(0);
  };

  const filteredStocks = stocks.filter((item) =>
    item.companyName.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="container">
      <Search handleChange={onChangeInput} value={inputValue} setInputValue={setInputValue} />
      {status === 'loading' ? (
        <div className="loader-wrapper">
          <Watch
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            visible={true}
          />
        </div>
      ) : (
        <>
          <Table filteredStocks={stocks} step={step} inputValue={inputValue} />
          <div className="buttons">
            <Button handelClick={onClickPrev} disabled={step < 10} isPrev>
              PREV
            </Button>
            <Button
              handelClick={onClickNext}
              disabled={filteredStocks.length - step <= 10}
              isPrev={false}>
              NEXT
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
