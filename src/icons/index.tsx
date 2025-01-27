import {
  DashboardOutlined,
  FileOutlined,
  GlobalOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  PaperClipOutlined,
  ProfileOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const icons: Record<string, JSX.Element> = {
  home: <HomeOutlined />,
  user: <UserOutlined />,
  bill: <FileOutlined />,
  profile: <ProfileOutlined />,
  dashboard: <DashboardOutlined />,
  login: <LoginOutlined />,
  logout: <LogoutOutlined />,
  attachment: <PaperClipOutlined style={{fontSize: "20px"}} />,
  signup: <UserAddOutlined></UserAddOutlined>,
  language: <GlobalOutlined style={{fontSize: "20px"}}></GlobalOutlined>,
  // Add more icons as needed
};

export default icons;
