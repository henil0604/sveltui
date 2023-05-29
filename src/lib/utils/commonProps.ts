type Variants = "primary" | "secondary" | "tertiary" | "dark" | "success" | "warn" | "error" | "info"
type Sizes = "xs" | "sm" | "md" | "lg" | "xl"
type Types = "filled" | "outlined" | "soft"
type BorderRadiusValues = "sm" | "md" | "lg" | "xl" | "none" | "full"

interface CommonProps {
    variant?: Variants,
    size?: Sizes,
    type?: Types,
    borderRadius?: BorderRadiusValues
}

const commonProps: CommonProps = {
    variant: undefined,
    size: undefined,
    type: undefined,
    borderRadius: undefined
}

export default commonProps;