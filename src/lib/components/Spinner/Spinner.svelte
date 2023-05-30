<script lang="ts">
    import commonProps from "$lib/utils/commonProps";
    import cssVariables from "$lib/utils/useCssVariables";

    export let stroke: number | undefined = undefined;

    export let spinDuration: number | undefined = undefined;

    export let { variant = "dark", size = "md" } = commonProps;

    let baseClass = `spinner variant-${variant} size-${size}`;
</script>

<div
    class={baseClass}
    use:cssVariables={{
        stroke: { value: stroke, suffix: "px" },
        spinDuration: { value: spinDuration, suffix: "ms" },
    }}
/>

<style lang="postcss" scoped>
    .spinner {
        border: var(--stroke, var(--spinner-default-stroke, 4px)) solid
            var(--track-color, var(--spinner-default-track-color, gray));
        border-radius: 50%;
        border-top: var(--stroke, var(--spinner-default-stroke, 4px)) solid
            var(--stroke-color, var(--spinner-default-stoke-color, blue));
        width: var(--spinner-default-size, 40px);
        height: var(--spinner-default-size, 40px);
        -webkit-animation: spin
            var(--spin-duration, var(--spinner-default-spin-duration, 700ms))
            linear infinite; /* Safari */
        animation: spin
            var(--spin-duration, var(--spinner-default-spin-duration, 700ms))
            linear infinite;

        &.size-xs {
            border-width: var(--stroke, 2px);
            width: theme("width.6");
            height: theme("height.6");
        }
        &.size-sm {
            border-width: var(--stroke, 3px);
            width: theme("width.8");
            height: theme("height.8");
        }
        &.size-md {
            border-width: var(--stroke, 4px);
            width: theme("width.10");
            height: theme("height.10");
        }
        &.size-lg {
            border-width: var(--stroke, 5px);
            width: theme("width.14");
            height: theme("height.14");
        }
        &.size-xl {
            border-width: var(--stroke, 6px);
            width: theme("width.20");
            height: theme("height.20");
        }

        &.variant-primary {
            border-color: var(--color-surface-200);
            border-top-color: var(--color-primary-500);
        }

        &.variant-secondary {
            border-color: var(--color-surface-200);
            border-top-color: var(--color-secondary-500);
        }

        &.variant-tertiary {
            border-color: var(--color-surface-200);
            border-top-color: var(--color-tertiary-500);
        }

        &.variant-success {
            border-color: var(--color-surface-200);
            border-top-color: var(--color-success-500);
        }
        &.variant-warn {
            border-color: var(--color-surface-200);
            border-top-color: var(--color-warn-500);
        }
        &.variant-error {
            border-color: var(--color-surface-200);
            border-top-color: var(--color-error-500);
        }
        &.variant-info {
            border-color: var(--color-surface-200);
            border-top-color: var(--color-info-500);
        }
        &.variant-dark {
            border-color: var(--color-surface-200);
            border-top-color: theme("colors.black");
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
