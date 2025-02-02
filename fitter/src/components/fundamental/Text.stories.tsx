import { Meta, StoryObj } from "@storybook/preact";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Hello, World!",
  },
};
