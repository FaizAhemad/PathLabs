import {
  DashboardOutlined,
  HomeOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import {Button, Flex, Image, Layout, Menu, theme} from "antd";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Outlet, useNavigate} from "react-router";
import Breadcrumbs from "./pages/common/breadcrumb/Breadcrumb";
function App() {
  const {i18n, t} = useTranslation("app");
  const {Header, Content, Footer, Sider} = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  useEffect(() => {
    i18n.changeLanguage("ar");

    if (i18n.language === "ar" || i18n.language === "ur") {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
  }, [i18n.language]);

  const navigate = useNavigate();

  return (
    <Layout dir={direction} style={{minHeight: "100vh"}}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed) => {
          setCollapsed(collapsed);
        }}
      >
        <Flex align="center" justify="center" style={{padding: "10px"}}>
          {!collapsed && (
            <Image
              preview={false}
              height={127.3}
              width={200}
              src={`/images/logo1.png`}
            />
          )}
        </Flex>
        <div className="demo-logo-vertical" />
        <Menu
          expandIcon
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["/home"]}
          defaultOpenKeys={["home"]}
          onSelect={(props) => {
            navigate(props.key);
          }}
          items={[
            {
              key: "/home",
              icon: <HomeOutlined />,
              title: "Home",
              label: t("home"),
            },
            {
              key: "profile",
              icon: <ProfileOutlined />,
              label: t("profile"),
            },
            {
              key: "dashboard",
              icon: <DashboardOutlined />,
              label: t("dashboard"),
            },
            {
              key: "login",
              icon: <LoginOutlined />,
              label: t("login"),
            },
            {
              key: "signup",
              icon: <UserAddOutlined />,
              label: t("signup"),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            padding: 0,
            marginBottom: 5,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          {collapsed && (
            <div>
              <Image
                preview={false}
                height={58}
                width={60}
                src="/images/logoWhite.png"
              />
            </div>
          )}
        </Header>

        <Flex align="center" gap={3} style={{padding: 20, margin: "20 0"}}>
          <Breadcrumbs />
        </Flex>

        <Content
          style={{
            margin: "5px 16px",
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{textAlign: "center"}}>
          Af Design ©{new Date().getFullYear()} Created by Faiz Ahemad Usman
          Gani Shaikh
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
