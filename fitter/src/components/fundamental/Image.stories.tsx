import Image, { ImageProps } from "./Image";
import type { Meta, StoryObj } from "@storybook/preact";
import logo from "../../assets/preact.svg";
import { em, Em } from "../../types/sizeunit";

const meta: Meta<typeof Image> = {
  component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const NoImage: Story = {};

export const LocalImage: Story = {
  args: {
    src: logo,
  },
};

export const RemoteImage: Story = {
  args: {
    src: "https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY",
  },
};

export const FallbackImage: Story = {
  args: {
    src: "https://isthisrealimageurl",
    fallbackImage: logo,
  },
};

export const AltTextImage: Story = {
  args: {
    src: "https://isthisrealimageurl",
    alt: "This is alt text",
  },
};

export const SizeAppliedImage: Story = {
  args: {
    src: logo,
    size: {
      width: em(10),
      height: em(15),
      sizeFitOption: "cover",
    },
  },
};
