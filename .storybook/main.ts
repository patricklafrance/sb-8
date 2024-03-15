import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Options } from "@swc/core";
import { swcConfig as SwcBuildConfig } from "../swc.build.js";
import { swcConfig as SwcDevConfig } from "../swc.dev.js";

const config: StorybookConfig = {
    framework: "@storybook/react-webpack5",
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    core: {
        builder: {
            name: "@storybook/builder-webpack5",
            options: {
                lazyCompilation: true
            }
        }
    },
    swc: (_: Options, { configType }): Options => {
        return configType === "PRODUCTION" ? SwcBuildConfig : SwcDevConfig;
    },
    docs: {
        autodocs: "tag"
    }
};

export default config;
