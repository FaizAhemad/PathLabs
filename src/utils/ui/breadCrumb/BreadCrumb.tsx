// src/components/CustomBreadcrumb.tsx
import {Breadcrumb} from "antd";
import React from "react";
import {useLocation} from "react-router-dom";
import {routeConstants} from "../../../constants/common";
import {routes} from "../../../routes/routes";

const CustomBreadcrumb: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter(Boolean);

  // Generate breadcrumb items
  const breadcrumbItems = pathSnippets
    .map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const route = routes.find((r) => r.path === url);
      return route ? (
        <Breadcrumb.Item key={url}>{route.breadcrumb}</Breadcrumb.Item>
      ) : null;
    })
    .filter(Boolean); // Filter out null values

  return (
    <Breadcrumb
      style={{margin: "16px 0"}}
      routes={[
        {
          path: "/bill",
        },
        {
          path: "/user",
          breadcrumbName: "User",
          children: [
            {
              path: "/user1",
              breadcrumbName: "User1",
            },
            {
              path: "/user2",
              breadcrumbName: "User2",
            },
          ],
        },
      ]}
    >
      <Breadcrumb.Item key="/">{routeConstants.home}</Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
