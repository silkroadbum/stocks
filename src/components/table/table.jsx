import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateList } from '../../store/stocks/stocksSlice';

import Row from '../row/row';
import { headers } from '../../const';

function Table({ step, inputValue }) {
  const dispatch = useDispatch();
  const { stocks } = useSelector((state) => state.stocks);

  const handleOnDragEnd = (result) => {
    const items = Array.from(stocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(updateList(items));
  };

  return (
    <>
      <h1 className="title">STOCKS</h1>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr className="row">
              {headers.map((item, i) => (
                <th key={i} className="table__header">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="table__body">
              {(provided) => (
                <tbody className="table__body" {...provided.droppableProps} ref={provided.innerRef}>
                  {stocks
                    .filter((item) =>
                      item.companyName.toLowerCase().includes(inputValue.toLowerCase()),
                    )
                    .slice(step, step + 10)
                    .map((obj, i) => (
                      <Draggable key={obj.symbol} draggableId={obj.symbol} index={i}>
                        {(provided) => (
                          <tr
                            className="table__row"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}>
                            <Row index={i + 1 + step} {...obj} />
                          </tr>
                        )}
                      </Draggable>
                    ))}
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
