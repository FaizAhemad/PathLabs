import {Tabs, TabsProps} from "antd";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import Login from "./login/Login";
import Signup from "./signup/Signup";

export default function LoginAndSignup() {
  const {state} = useLocation();
  const [activeKey, setActiveKey] = useState<string>("login");

  useEffect(() => {
    if (state?.tabName) {
      setActiveKey(state?.tabName);
    }
  }, [state?.tabName]);
  const onTabChange = (key: string) => {
    setActiveKey(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "login",
      label: "Login",
      children: <Login />,
    },
    {
      key: "signup",
      label: "Signup",
      children: <Signup />,
    },
  ];
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        size="large"
        tabBarGutter={200}
        centered
        indicator={{size: 50}}
        activeKey={activeKey}
        items={items}
        onChange={onTabChange}
      />{" "}
    </div>
  );
}
