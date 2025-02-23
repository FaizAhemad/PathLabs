import {rectSwappingStrategy, SortableContext} from "@dnd-kit/sortable";
import DraggableItem from "./DraggableItem";

function DraggableItems({
  items,
  draggableItems,
}: {
  items: {id: string; element: JSX.Element}[];
  draggableItems: boolean;
}) {
  return items.map((item) => (
    <div
      style={{
        flexShrink: 1,
        flexBasis: "300px",
        flexGrow: 1,
      }}
    >
      <SortableContext
        items={items}
        disabled={!draggableItems}
        strategy={rectSwappingStrategy}
      >
        <DraggableItem key={item.id} item={item}></DraggableItem>
      </SortableContext>
    </div>
  ));
}
export default DraggableItems;
