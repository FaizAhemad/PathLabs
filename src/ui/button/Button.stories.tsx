import {SearchOutlined} from "@ant-design/icons";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import AntdButton from "./index";

// 👇 Default export for Storybook
export default {
  title: "Components/AntdButton", // Group in Storybook UI
  component: AntdButton,
  argTypes: {
    onClick: {action: "clicked"}, // Logs clicks in Storybook
  },
} as ComponentMeta<typeof AntdButton>;

// 👇 Template for rendering the component
const Template: ComponentStory<typeof AntdButton> = (args) => (
  <AntdButton {...args} />
);

// ✅ Default button story
export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  type: "primary",
};

// ✅ Button with an icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Search",
  icon: <SearchOutlined />,
};

// ✅ Disabled button
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

// ✅ Large button
export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  size: "large",
};
