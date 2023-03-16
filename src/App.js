import { useSelector } from 'react-redux';
import { Watch } from 'react-loader-spinner';
import Table from './components/table/table';

function App() {
  const { status } = useSelector((state) => state.stocks);

  if (status === 'loading') {
    return (
      <div className="container">
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
