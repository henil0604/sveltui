<script>
    import commonProps from "$lib/utils/commonProps";

    export let {
        variant = "primary",
        size = "md",
        type = "filled",
        rounded = "sm",
    } = commonProps;

    let baseClass = `type-${type} size-${size} rounded-${rounded} variant-${variant}`;
</script>

<button tabindex="0" class={baseClass}><slot /></button>

<style lang="postcss" scoped>
    button {
        background-color: var(
            --button-default-background-color,
            theme("backgroundColor.transparent")
        );

        color: var(--button-default-color, theme("textColor.black"));

        padding: var(--button-default-padding-y, theme(padding.1))
            var(--button-default-padding-x, theme(padding.3));

        box-shadow: var(
            --button-default-box-shadow,
            theme("boxShadow.DEFAULT")
        );

        border: 1px solid transparent;

        transition: all
            var(
                --button-default-transition-duration,
                theme("transitionDuration.DEFAULT")
            )
            var(
                --button-default-transition-timing-function,
                theme("transitionTimingFunction.DEFAULT")
            );

        &:hover {
            background-color: var(
                --button-default-hover-background-color,
                theme("backgroundColor.gray.100")
            );
            color: var(--button-default-hover-color, theme("textColor.black"));
            box-shadow: var(
                --button-default-hover-box-shadow,
                theme("boxShadow.md")
            );
        }

        &:active {
            scale: var(--button-default-focus-scale, 1.1);
        }

        &.type-filled {
            &.variant-primary {
                background-color: var(--color-primary-500);
                color: var(--on-primary);

                &:hover {
                    background-color: var(--color-primary-600);
                }
            }

            &.variant-secondary {
                background-color: var(--color-secondary-500);
                color: var(--on-secondary);

                &:hover {
                    background-color: var(--color-secondary-600);
                }
            }

            &.variant-tertiary {
                background-color: var(--color-tertiary-500);
                color: var(--on-tertiary);

                &:hover {
                    background-color: var(--color-tertiary-600);
                }
            }

            &.variant-dark {
                background-color: theme("backgroundColor.gray.950");
                color: theme("textColor.white");

                &:hover {
                    background-color: theme("backgroundColor.black");
                }
            }
        }

        &.type-outlined {
            &.variant-primary {
                background-color: var(--on-primary);
                color: var(--color-primary-500);
                border: 1px solid var(--color-primary-500);

                &:hover {
                    background-color: var(--color-primary-500);
                    color: var(--on-primary);
                }
            }

            &.variant-secondary {
                background-color: var(--on-secondary);
                color: var(--color-secondary-500);
                border: 1px solid var(--color-secondary-500);

                &:hover {
                    background-color: var(--color-secondary-500);
                    color: var(--on-secondary);
                }
            }

            &.variant-tertiary {
                background-color: var(--on-tertiary);
                color: var(--color-tertiary-500);
                border: 1px solid var(--color-tertiary-500);

                &:hover {
                    background-color: var(--color-tertiary-500);
                    color: var(--on-tertiary);
                }
            }

            &.variant-dark {
                background-color: theme("backgroundColor.white");
                color: theme("textColor.black");
                border: 1px solid theme("borderColor.black");

                &:hover {
                    background-color: theme("backgroundColor.black");
                    color: theme("textColor.white");
                }
            }
        }

        &.type-soft {
            &.variant-primary {
                background-color: var(--color-primary-100);
                border: 1px solid var(--color-primary-600);
                color: var(--color-primary-800);

                &:hover {
                    background-color: var(--color-primary-200);
                    color: var(--color-primary-950);
                }
            }

            &.variant-secondary {
                background-color: var(--color-secondary-100);
                border: 1px solid var(--color-secondary-600);
                color: var(--color-secondary-800);

                &:hover {
                    background-color: var(--color-secondary-200);
                    color: var(--color-secondary-950);
                }
            }

            &.variant-tertiary {
                background-color: var(--color-tertiary-100);
                border: 1px solid var(--color-tertiary-600);
                color: var(--color-tertiary-800);

                &:hover {
                    background-color: var(--color-tertiary-200);
                    color: var(--color-tertiary-950);
                }
            }

            &.variant-dark {
                background-color: theme("backgroundColor.gray.100");
                border: 1px solid theme("backgroundColor.gray.600");
                color: theme("textColor.gray.800");

                &:hover {
                    background-color: theme("backgroundColor.gray.200");
                    color: theme("textColor.gray.800");
                }
            }
        }
    }
</style>
