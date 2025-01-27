import {
  DashboardOutlined,
  FileOutlined,
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
  // Add more icons as needed
};

export default icons;
