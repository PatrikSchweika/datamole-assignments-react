import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "../Layout";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Default as HeaderDefault } from "./Header.stories";
import { Default as FooterDefault } from "./Footer.stories";
import { List } from "../List";
import { WithItems } from "./List.stories";

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;
export default meta;

type Story = StoryObj<typeof Layout>;

export const MainLayout: Story = {
    args: {
        children: [
            <Header onItemAdd={action("itemAdded")}>{HeaderDefault.args?.children}</Header>,
            <List>{WithItems.args?.children}</List>,
            <Footer {...FooterDefault.args} />,
        ],
    },
};
