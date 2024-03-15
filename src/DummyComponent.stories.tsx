import type { Meta, StoryObj } from "@storybook/react";
import { DummyComponent } from "./DummyComponent.tsx";

const meta = {
    component: DummyComponent
} satisfies Meta<typeof DummyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
