import {Breadcrumb, Typography} from "antd";
import {useTranslation} from "react-i18next";
import {NavLink, useLocation} from "react-router-dom";
import icons from "../../../icons";

const Breadcrumbs = () => {
  const location = useLocation();
  const {t} = useTranslation("app");

  // Split the current path into segments
  const pathSegments = location.pathname.split("/").filter((path) => path);

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
              {t("home".toLowerCase())}
            </Typography>
          </NavLink>
        </>
      ),
    },
    ...pathSegments.map((segment: string, index: number) => {
      const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const icon = icons[segment.toLowerCase()] || null;
      console.log(segment);
      if (!url.includes("home"))
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
                {t(segment.toLowerCase())}
              </Typography>
            </NavLink>
          ),
        };
    }),
  ].filter((e) => e !== undefined);

  return <Breadcrumb items={breadcrumbItems} />;
};

export default Breadcrumbs;
