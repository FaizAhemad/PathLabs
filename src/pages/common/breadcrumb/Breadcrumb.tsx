import {Breadcrumb, Grid, Typography} from "antd";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {NavLink, useLocation} from "react-router-dom";
import icons from "../../../icons";

const Breadcrumbs = () => {
  const location = useLocation();
  const {t} = useTranslation("app");
  const {useBreakpoint} = Grid;
  const {xs} = useBreakpoint();

  // Split the current path into segments
  const pathSegments = location.pathname.split("/").filter((path) => path);

  useEffect(() => {}, [location]);
  // Generate breadcrumb items
  const breadcrumbItems = [
    {
      title: (
        <>
          <NavLink to="/home">
            {icons["home"]}
            <Typography
              style={{
                textTransform: "capitalize",
                display: "inline-block",
                margin: "0 5px",
              }}
            >
              {xs ? "" : t("home".toLowerCase()).replace(/-/g, " ")}
            </Typography>
          </NavLink>
        </>
      ),
    },
    ...pathSegments.map((segment: string, index: number) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const icon = icons[segment.toLowerCase()] || null;
      if (!url.includes("home") && !location.pathname.includes("login-signup"))
        return {
          title: (
            <NavLink to={url}>
              {icon && icon}
              <Typography
                style={{
                  textTransform: "capitalize",
                  display: "inline-block",
                  margin: "0 5px",
                }}
              >
                {xs ? "" : t(segment.toLowerCase().replace(/-/g, " "  ))}
              </Typography>
            </NavLink>
          ),
        };
    }),
  ].filter((e) => e !== undefined);

  return <Breadcrumb items={breadcrumbItems} />;
};

export default Breadcrumbs;
