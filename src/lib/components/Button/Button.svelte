<script lang="ts">
    import commonProps from "$lib/utils/commonProps";
    import { Spinner } from "$lib";

    export let {
        variant = "primary",
        size = "md",
        type = "filled",
        borderRadius = "sm",
    } = commonProps;

    export let loading = false;
    export let loadingSpinDuration: number | undefined = undefined;

    let baseClass = `flex flex-wrap justify-center items-center gap-2 type-${type} size-${size} border-radius-${borderRadius} variant-${variant} ${
        loading ? "cursor-wait" : ""
    }`;
</script>

<button
    on:click
    on:dblclick
    on:focus
    tabindex="0"
    class={baseClass}
    disabled={loading}
>
    {#if loading}
        <div>
            <Spinner
                spinDuration={loadingSpinDuration}
                {variant}
                stroke={3}
                size="xs"
            />
        </div>
    {/if}
    <slot />
</button>

<style lang="postcss" scoped>
    button {
        width: fit-content;
        height: fit-content;
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
        border-radius: var(--button-default-border-radius);

        &:not(:disabled):hover {
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

        &:not(:disabled):active {
            scale: var(--button-default-focus-scale, 1.1);
        }

        &:disabled {
            @apply opacity-80;
        }

        /* BORDER RADIUS */
        &.border-radius-none {
            @apply rounded-none;
        }
        &.border-radius-sm {
            @apply rounded-sm;
        }
        &.border-radius-md {
            @apply rounded-md;
        }
        &.border-radius-lg {
            @apply rounded-lg;
        }
        &.border-radius-xl {
            @apply rounded-xl;
        }
        &.border-radius-full {
            @apply rounded-full;
        }

        /* SIZE */
        &.size-xs {
            @apply text-xs px-1 py-0.5;
        }
        &.size-sm {
            @apply text-sm px-2 py-0.5;
        }
        &.size-md {
            @apply text-base px-3 py-1;
        }
        &.size-lg {
            @apply text-lg px-3 py-1.5;
        }
        &.size-xl {
            @apply text-xl px-4 py-2;
        }

        /* TYPE:FILLED */
        &.type-filled {
            &.variant-primary {
                background-color: var(--color-primary-500);
                color: var(--on-primary);

                &:hover {
                    background-color: var(--color-primary-600);
                }

                &:disabled {
                    background-color: var(--color-primary-300);
                }
            }

            &.variant-secondary {
                background-color: var(--color-secondary-500);
                color: var(--on-secondary);

                &:hover {
                    background-color: var(--color-secondary-600);
                }

                &:disabled {
                    background-color: var(--color-secondary-300);
                }
            }

            &.variant-tertiary {
                background-color: var(--color-tertiary-500);
                color: var(--on-tertiary);

                &:hover {
                    background-color: var(--color-tertiary-600);
                }

                &:disabled {
                    background-color: var(--color-tertiary-300);
                }
            }

            &.variant-success {
                background-color: var(--color-success-500);
                color: var(--on-success);

                &:hover {
                    background-color: var(--color-success-600);
                }

                &:disabled {
                    background-color: var(--color-success-300);
                }
            }

            &.variant-warn {
                background-color: var(--color-warn-500);
                color: var(--on-warn);

                &:hover {
                    background-color: var(--color-warn-600);
                }

                &:disabled {
                    background-color: var(--color-warn-300);
                }
            }

            &.variant-error {
                background-color: var(--color-error-500);
                color: var(--on-error);

                &:hover {
                    background-color: var(--color-error-600);
                }

                &:disabled {
                    background-color: var(--color-error-300);
                }
            }

            &.variant-info {
                background-color: var(--color-info-500);
                color: var(--on-info);

                &:hover {
                    background-color: var(--color-info-600);
                }

                &:disabled {
                    background-color: var(--color-info-300);
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

        /* TYPE:OUTLINED */
        &.type-outlined {
            &.variant-primary {
                color: var(--color-primary-500);
                border: 1px solid var(--color-primary-500);

                &:not(:disabled):hover {
                    background-color: var(--color-primary-500);
                    color: var(--on-primary);
                }

                &:disabled {
                    background-color: var(--color-primary-50);
                }
            }

            &.variant-secondary {
                color: var(--color-secondary-500);
                border: 1px solid var(--color-secondary-500);

                &:not(:disabled):hover {
                    background-color: var(--color-secondary-500);
                    color: var(--on-secondary);
                }

                &:disabled {
                    background-color: var(--color-secondary-50);
                }
            }

            &.variant-tertiary {
                color: var(--color-tertiary-500);
                border: 1px solid var(--color-tertiary-500);

                &:not(:disabled):hover {
                    background-color: var(--color-tertiary-500);
                    color: var(--on-tertiary);
                }

                &:disabled {
                    background-color: var(--color-tertiary-50);
                }
            }

            &.variant-success {
                color: var(--color-success-500);
                border: 1px solid var(--color-success-500);

                &:not(:disabled):hover {
                    background-color: var(--color-success-500);
                    color: var(--on-success);
                }

                &:disabled {
                    background-color: var(--color-success-50);
                }
            }

            &.variant-warn {
                color: var(--color-warn-500);
                border: 1px solid var(--color-warn-500);

                &:not(:disabled):hover {
                    background-color: var(--color-warn-500);
                    color: var(--on-warn);
                }

                &:disabled {
                    background-color: var(--color-warn-50);
                }
            }

            &.variant-error {
                color: var(--color-error-500);
                border: 1px solid var(--color-error-500);

                &:not(:disabled):hover {
                    background-color: var(--color-error-500);
                    color: var(--on-error);
                }

                &:disabled {
                    background-color: var(--color-error-50);
                }
            }

            &.variant-info {
                color: var(--color-info-500);
                border: 1px solid var(--color-info-500);

                &:not(:disabled):hover {
                    background-color: var(--color-info-500);
                    color: var(--on-info);
                }

                &:disabled {
                    background-color: var(--color-info-50);
                }
            }

            &.variant-dark {
                color: theme("textColor.black");
                border: 1px solid theme("borderColor.black");

                &:not(:disabled):hover {
                    background-color: theme("backgroundColor.black");
                    color: theme("textColor.white");
                }

                &:disabled {
                    background-color: theme("backgroundColor.gray.50");
                }
            }
        }

        /* TYPE:SOFT */
        &.type-soft {
            &.variant-primary {
                background-color: var(--color-primary-100);
                border: 1px solid var(--color-primary-600);
                color: var(--color-primary-800);

                &:not(:disabled):hover {
                    background-color: var(--color-primary-200);
                    color: var(--color-primary-950);
                }

                &:disabled {
                    background-color: var(--color-primary-50);
                }
            }

            &.variant-secondary {
                background-color: var(--color-secondary-100);
                border: 1px solid var(--color-secondary-600);
                color: var(--color-secondary-800);

                &:not(:disabled):hover {
                    background-color: var(--color-secondary-200);
                    color: var(--color-secondary-950);
                }

                &:disabled {
                    background-color: var(--color-secondary-100);
                }
            }

            &.variant-tertiary {
                background-color: var(--color-tertiary-100);
                border: 1px solid var(--color-tertiary-600);
                color: var(--color-tertiary-800);

                &:not(:disabled):hover {
                    background-color: var(--color-tertiary-200);
                    color: var(--color-tertiary-950);
                }

                &:disabled {
                    background-color: var(--color-tertiary-100);
                }
            }

            &.variant-success {
                background-color: var(--color-success-100);
                border: 1px solid var(--color-success-600);
                color: var(--color-success-800);

                &:not(:disabled):hover {
                    background-color: var(--color-success-200);
                    color: var(--color-success-950);
                }

                &:disabled {
                    background-color: var(--color-success-100);
                }
            }

            &.variant-warn {
                background-color: var(--color-warn-100);
                border: 1px solid var(--color-warn-600);
                color: var(--color-warn-800);

                &:not(:disabled):hover {
                    background-color: var(--color-warn-200);
                    color: var(--color-warn-950);
                }

                &:disabled {
                    background-color: var(--color-warn-100);
                }
            }

            &.variant-error {
                background-color: var(--color-error-100);
                border: 1px solid var(--color-error-600);
                color: var(--color-error-800);

                &:not(:disabled):hover {
                    background-color: var(--color-error-200);
                    color: var(--color-error-950);
                }

                &:disabled {
                    background-color: var(--color-error-100);
                }
            }

            &.variant-info {
                background-color: var(--color-info-100);
                border: 1px solid var(--color-info-600);
                color: var(--color-info-800);

                &:not(:disabled):hover {
                    background-color: var(--color-info-200);
                    color: var(--color-info-950);
                }

                &:disabled {
                    background-color: var(--color-info-100);
                }
            }

            &.variant-dark {
                background-color: theme("backgroundColor.gray.100");
                border: 1px solid theme("backgroundColor.gray.600");
                color: theme("textColor.gray.800");

                &:not(:disabled):hover {
                    background-color: theme("backgroundColor.gray.200");
                    color: theme("textColor.gray.800");
                }

                &:disabled {
                    background-color: theme("backgroundColor.gray.100");
                }
            }
        }
    }
</style>
