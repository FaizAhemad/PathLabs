import {arrayMove} from "@dnd-kit/sortable";
import {Button, Flex, Grid, Layout, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import {useState} from "react";
import {Outlet} from "react-router";
import icons from "../../icons";
import KPIs from "./kpis/KPIS";

const initialDraggableItems = [
  {
    id: "Key Performance Metrics (KPIs)",
    element: (
      <div
        style={{
          display: "flex",
          height: "300px",
          flexDirection: "column",
        }}
      >
        <KPIs />
      </div>
    ),
  },
  {
    id: "Appointment & Booking Data",
    element: (
      <div
        style={{
          display: "flex",
          height: "300px",
        }}
      >
        {" "}
        <Typography style={{fontWeight: "bold", fontSize: "22px"}}>
          Appointment & Booking Data
        </Typography>
      </div>
    ),
  },
  {
    id: "Test Reports & Processing Data",
    element: (
      <div
        style={{
          display: "flex",
          height: "300px",
        }}
      >
        <Typography style={{fontWeight: "bold", fontSize: "22px"}}>
          Test Reports & Processing Data
        </Typography>
      </div>
    ),
  },
  {
    id: "Revenue & Billing Data",
    element: (
      <div
        style={{
          display: "flex",
          height: "300px",
        }}
      >
        <Typography style={{fontWeight: "bold", fontSize: "22px"}}>
          Revenue & Billing Data
        </Typography>
      </div>
    ),
  },
  {
    id: "Inventory & Stock Data",
    element: (
      <div
        style={{
          display: "flex",
          height: "300px",
        }}
      >
        <Typography style={{fontWeight: "bold", fontSize: "22px"}}>
          Inventory & Stock Data
        </Typography>
      </div>
    ),
  },
  {
    id: "Technician & Staff Performance",
    element: (
      <div
        style={{
          display: "flex",
          height: "300px",
        }}
      >
        <Typography style={{fontWeight: "bold", fontSize: "22px"}}>
          Technician & Staff Performance
        </Typography>
      </div>
    ),
  },
  {
    id: "Health Trends & Analytics",
    element: (
      <div
        style={{
          display: "flex",
          height: "300px",
        }}
      >
        <Typography style={{fontWeight: "bold", fontSize: "22px"}}>
          Health Trends & Analytics
        </Typography>
      </div>
    ),
  },
];

const Dashboard = () => {
  const {useBreakpoint} = Grid;
  const {xs, sm, md} = useBreakpoint();
  const [draggableItems, setDraggableItems] = useState(false);
  const [items, setItems] = useState(initialDraggableItems);

  const getItemsPosition = (id: string) =>
    items.findIndex((itm) => itm.id === id);

  const handleDraggableItemsPosition = () => {
    setDraggableItems(!draggableItems);
  };

  const saveDraggedItems = () => {
    setDraggableItems(false);
  };

  const handleDragEnd = (event) => {
    const {active, over} = event;
    if (active.id === over.id) return;
    setItems((prev) => {
      const originalPosition = getItemsPosition(active.id);
      const newPosition = getItemsPosition(over.id);
      if (originalPosition === -1 || newPosition === -1) return prev;
      return arrayMove(prev, originalPosition, newPosition);
    });
  };

  return (
    <Layout style={{padding: "20px"}}>
      <Flex justify="flex-end" gap={6} style={{marginBottom: 15}}>
        <Button
          icon={icons["save"]}
          iconPosition="end"
          variant="outlined"
          type="primary"
          onClick={saveDraggedItems}
        >
          {xs ? "" : "Save"}
        </Button>
        <Button
          icon={icons["edit"]}
          iconPosition="end"
          variant="outlined"
          type="primary"
          onClick={handleDraggableItemsPosition}
        >
          {xs ? "" : "Customize View"}
        </Button>
      </Flex>
      <Content>
        {/* <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <Flex
            wrap
            align="start"
            justify={xs || md || sm ? "center" : "flex-start"}
            style={{gap: 15, flexDirection: "column"}}
          >
            <DraggableItems
              items={items}
              draggableItems={draggableItems}
            ></DraggableItems>
          </Flex> */}
        {/* </DndContext> */}
        <Outlet />
      </Content>
    </Layout>
  );
};

export default Dashboard;
