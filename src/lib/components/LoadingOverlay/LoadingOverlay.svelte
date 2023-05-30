<script lang="ts">
    import { Spinner } from "$lib";
    import commonProps from "$lib/utils/commonProps";
    import cssVariables from "$lib/utils/useCssVariables";

    export let {
        variant = "primary",
        size = "md",
        zIndex = 99,
        show = true,
    } = commonProps;

    export let stroke: string | undefined = undefined;
    export let blur: string | undefined = undefined;
    export let spinDuration: string | undefined = undefined;
</script>

{#if show}
    <div class="loading-overlay" use:cssVariables={{ blur, zIndex }}>
        <Spinner {stroke} {variant} {size} {spinDuration} />
    </div>
{/if}

<style lang="postcss" scoped>
    .loading-overlay {
        @apply absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-wait;

        backdrop-filter: blur(var(--blur, theme("backdropBlur.DEFAULT")));
        z-index: var(--z-index);
    }
</style>
