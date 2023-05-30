import convertToKebabCase from "./convertToKebabCase";

type Variables = { [key: string]: { value: any, suffix: string } | string | number | undefined | null }

export default function cssVariables(node: HTMLElement, variables: Variables) {
    setCssVariables(node, variables);

    return {
        update(variables: Variables) {
            setCssVariables(node, variables);
        }
    }
}
function setCssVariables(node: HTMLElement, variables: Variables) {
    for (const name in variables) {
        let value: string | number | undefined = undefined;
        let obj = variables[name];

        if (typeof obj !== "object") {
            value = obj;
        }

        if (typeof obj === "object" && obj?.value) {
            value = obj?.value + (obj?.suffix || "")
        }

        if (value === undefined || value === null) {
            continue;
        }

        let key = `--${convertToKebabCase(name)}`

        if (node.style.getPropertyValue(key) !== "") continue;

        node.style.setProperty(`--${convertToKebabCase(name)}`, value as any);
    }
}