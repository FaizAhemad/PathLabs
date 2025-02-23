import {useDroppable} from "@dnd-kit/core";

export function Droppable({
  children,
  id,
}: {
  children: JSX.Element | string | null;
  id: string;
}) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
