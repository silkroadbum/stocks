import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Row from '../row/row';
import { headers } from '../../const';

function Table({ filteredStocks, step }) {
  const [newHeaders, updateNewHeaders] = useState(headers);

  const handleOnDragEnd = (result) => {
    const items = Array.from(newHeaders);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateNewHeaders(items);
  };

  return (
    <>
      <h1 className="title">STOCKS</h1>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="row">
                {(provided) => (
                  <tr className="row" {...provided.droppableProps} ref={provided.innerRef}>
                    {newHeaders.map((item, i) => (
                      <Draggable key={item} draggableId={item} index={i}>
                        {(provided) => (
                          <th
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="table__header">
                            {item}
                          </th>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tr>
                )}
              </Droppable>
            </DragDropContext>
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
