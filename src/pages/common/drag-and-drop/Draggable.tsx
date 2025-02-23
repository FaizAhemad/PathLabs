import {useDraggable} from "@dnd-kit/corec";
import {CSS} from "@dnd-kit/utilities";
import {Button} from "antd";

export default function Draggable({
  children,
  id,
}: {
  children: JSX.Element;
  id: string;
}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </Button>
  );
}
