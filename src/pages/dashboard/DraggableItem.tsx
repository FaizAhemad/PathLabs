import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

function DraggableItem({item}: {item: {id: string; element: JSX.Element}}) {
  const {setNodeRef, attributes, listeners, transform, transition} =
    useSortable({id: item.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      key={item.id}
    >
      {item.element}
    </div>
  );
}

export default DraggableItem;
