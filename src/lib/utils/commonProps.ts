type Variants = "primary" | "secondary" | "tertiary" | "dark" | "success" | "warn" | "error" | "info"
type Sizes = "xs" | "sm" | "md" | "lg" | "xl"
type Types = "filled" | "outlined" | "soft"
type BorderRadiusValues = "sm" | "md" | "lg" | "xl" | "none" | "full"
type ShadowValues = "none" | "sm" | "md" | "lg" | "xl"

interface CommonProps {
    variant?: Variants,
    size?: Sizes,
    type?: Types,
    borderRadius?: BorderRadiusValues,
    shadow?: ShadowValues,
    maxWidth?: string,
    maxHeight?: string,
    paddingX?: string,
    paddingY?: string,
    loading?: boolean,
    zIndex?: number,
    show?: boolean,
    href?: string,
    hrefTarget?: string,
}

const commonProps: CommonProps = {
    variant: undefined,
    size: undefined,
    type: undefined,
    borderRadius: undefined,
    shadow: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    paddingX: undefined,
    paddingY: undefined,
    loading: undefined,
    zIndex: undefined,
    show: undefined,
    href: undefined,
    hrefTarget: undefined
}

export default commonProps;