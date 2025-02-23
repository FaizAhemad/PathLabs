import {Meta, StoryObj} from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/AntdButton",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: "primary",
    children: "Click Me",
  },
};
