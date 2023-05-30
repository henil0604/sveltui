<script lang="ts">
    import commonProps from "$lib/utils/commonProps";
    import cssVariables from "$lib/utils/useCssVariables";
    import { LoadingOverlay } from "$lib";
    import putIfTrue from "$lib/utils/putIfTrue";
    import { createEventDispatcher } from "svelte";

    export let {
        shadow = "md",
        variant = "primary",
        type = "filled",
        borderRadius = "md",
        maxWidth = "500px",
        maxHeight,
        paddingX,
        paddingY,
        loading = false,
        href,
        hrefTarget,
        show = true,
    } = commonProps;

    export let interactive: boolean = false;

    let baseClass = `card border-radius-${borderRadius} type-${type} variant-${variant} ${putIfTrue(
        interactive,
        "interactive"
    )}`;

    const dispatch = createEventDispatcher();

    function handleOnClick(event: MouseEvent) {
        if (href) {
            window.open(href, hrefTarget);
        }

        dispatch("click", event);
    }
</script>

{#if show}
    <div
        class={baseClass}
        use:cssVariables={{
            maxWidth,
            paddingX,
            paddingY,
        }}
        on:click={handleOnClick}
        on:dblclick
        on:drag
        on:dragstart
        on:dragover
        on:keydown
    >
        <LoadingOverlay show={loading} {variant} />

        <div class="header">
            <slot name="header" />
        </div>

        <div class="body">
            <slot name="body" />
        </div>

        <div class="footer">
            <slot name="footer" />
        </div>
    </div>
{/if}

<style lang="postcss" scoped>
    .card {
        @apply h-fit w-fit relative flex flex-col justify-between overflow-hidden;

        padding: var(
                --padding-y,
                var(--card-default-padding-y, theme("padding.3"))
            )
            var(--padding-x, var(--card-default-padding-x, theme("padding.4")));

        background-color: var(
            --card-default-background-color,
            theme("backgroundColor.gray.200")
        );

        border-radius: var(
            --card-default-border-radius,
            theme("borderRadius.md")
        );

        box-shadow: var(--card-default-box-shadow, theme("boxShadow.md"));

        max-width: var(--card-default-max-width, var(--max-width));

        transition: all
            var(
                --card-default-transition-duration,
                theme("transitionDuration.DEFAULT")
            )
            var(
                --card-default-transition-timing-function,
                theme("transitionTimingFunction.DEFAULT")
            );

        & > .header {
            @apply h-fit w-full font-semibold;
            margin-bottom: theme("margin.2");
        }
        & > .body {
            @apply flex-grow;
        }
        & > .footer {
            @apply h-fit w-full;
            margin-top: theme("margin.2");
        }

        &.interactive {
            @apply cursor-pointer;

            &:hover {
                @apply shadow-xl;
                transform: translateY(
                    var(--card-default-interactive-translate-y, -3px)
                );
            }
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

        &.type-filled {
            &.variant-primary {
                background-color: var(--color-primary-500);
                color: var(--on-primary);
            }
            &.variant-secondary {
                background-color: var(--color-secondary-500);
                color: var(--on-secondary);
            }
            &.variant-tertiary {
                background-color: var(--color-tertiary-500);
                color: var(--on-tertiary);
            }
            &.variant-success {
                background-color: var(--color-success-500);
                color: var(--on-success);
            }
            &.variant-warn {
                background-color: var(--color-warn-500);
                color: var(--on-warn);
            }
            &.variant-error {
                background-color: var(--color-error-500);
                color: var(--on-error);
            }
            &.variant-info {
                background-color: var(--color-info-500);
                color: var(--on-info);
            }
            &.variant-dark {
                background-color: theme("backgroundColor.gray.950");
                color: theme("textColor.white");
            }
        }

        &.type-outlined {
            background-color: transparent;

            &.variant-primary {
                color: var(--color-primary-500);
                border: 1px solid var(--color-primary-500);
            }
            &.variant-secondary {
                color: var(--color-secondary-500);
                border: 1px solid var(--color-secondary-500);
            }
            &.variant-tertiary {
                color: var(--color-tertiary-500);
                border: 1px solid var(--color-tertiary-500);
            }
            &.variant-success {
                color: var(--color-success-500);
                border: 1px solid var(--color-success-500);
            }
            &.variant-warn {
                color: var(--color-warn-500);
                border: 1px solid var(--color-warn-500);
            }
            &.variant-error {
                color: var(--color-error-500);
                border: 1px solid var(--color-error-500);
            }
            &.variant-info {
                color: var(--color-info-500);
                border: 1px solid var(--color-info-500);
            }
            &.variant-dark {
                color: theme("textColor.black");
                border: 1px solid theme("borderColor.black");
            }
        }

        &.type-soft {
            &.variant-primary {
                background-color: var(--color-primary-100);
                border: 1px solid var(--color-primary-600);
                color: var(--color-primary-800);
            }
            &.variant-secondary {
                background-color: var(--color-secondary-100);
                border: 1px solid var(--color-secondary-600);
                color: var(--color-secondary-800);
            }
            &.variant-tertiary {
                background-color: var(--color-tertiary-100);
                border: 1px solid var(--color-tertiary-600);
                color: var(--color-tertiary-800);
            }
            &.variant-success {
                background-color: var(--color-success-100);
                border: 1px solid var(--color-success-600);
                color: var(--color-success-800);
            }
            &.variant-warn {
                background-color: var(--color-warn-100);
                border: 1px solid var(--color-warn-600);
                color: var(--color-warn-800);
            }
            &.variant-error {
                background-color: var(--color-error-100);
                border: 1px solid var(--color-error-600);
                color: var(--color-error-800);
            }
            &.variant-info {
                background-color: var(--color-info-100);
                border: 1px solid var(--color-info-600);
                color: var(--color-info-800);
            }
            &.variant-dark {
                background-color: theme("backgroundColor.gray.200");
                border: 1px solid theme("backgroundColor.gray.600");
                color: theme("textColor.gray.800");
            }
        }
    }
</style>
