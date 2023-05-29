type Variants = "primary" | "secondary" | "tertiary" | "dark"
type Sizes = "xs" | "sm" | "md" | "lg" | "xl"
type Types = "filled" | "outlined" | "soft"
type RoundedValues = "sm" | "md" | "lg" | "xl" | "none" | "full"

interface CommonProps {
    variant?: Variants,
    size?: Sizes,
    type?: Types,
    rounded?: RoundedValues
}

const commonProps: CommonProps = {
    variant: undefined,
    size: undefined,
    type: undefined,
    rounded: undefined
}

export default commonProps;