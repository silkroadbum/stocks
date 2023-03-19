import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateList } from '../../store/stocks/stocksSlice';

import Row from '../row/row';
import { headers } from '../../const';

function Table({ step, inputValue }) {
  const dispatch = useDispatch();
  const { stocks } = useSelector((state) => state.stocks);

  const onDragEnd = (result) => {
    const items = stocks.slice();
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(updateList(items));
  };

  const filteredStocks = stocks.filter((stock) =>
    stock.companyName.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const renderRows = () =>
    filteredStocks.slice(step, step + 10).map((stock, index) => (
      <Draggable key={stock.symbol} draggableId={stock.symbol} index={index}>
        {(provided) => (
          <tr
            className="table__row"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <Row index={index + 1 + step} {...stock} />
          </tr>
        )}
      </Draggable>
    ));

  const renderHeaders = () =>
    headers.map((header, index) => (
      <th key={index} className="table__header">
        {header}
      </th>
    ));

  return (
    <>
      <h1 className="title">STOCKS</h1>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr className="row">{renderHeaders()}</tr>
          </thead>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="table__body">
              {(provided) => (
                <tbody className="table__body" {...provided.droppableProps} ref={provided.innerRef}>
                  {renderRows()}
                  {provided.placeholder}
                </tbody>
              )}
            </Droppable>
          </DragDropContext>
        </table>
      </div>
    </>
  );
}

export default Table;
