<script lang="ts">
    import type { VariantProps } from "class-variance-authority";
    import { cn } from "$lib/utils";
    import { buttonConfig } from ".";
    import Icon from "@iconify/svelte";

    let className: string | undefined | null = undefined;
    export { className as class };

    export let variant: VariantProps<typeof buttonConfig>["variant"] =
        "default";
    export let size: VariantProps<typeof buttonConfig>["size"] = "default";
    export let rounded: VariantProps<typeof buttonConfig>["rounded"] =
        "default";
    export let startIcon: string | undefined | null = undefined;
    export let endIcon: string | undefined | null = undefined;
</script>

<button
    class={cn(buttonConfig({ variant, size, rounded, className }))}
    {...$$restProps}
    on:click
    on:change
    on:keydown
    on:keyup
    on:mouseenter
    on:mouseleave
>
    {#if startIcon}
        <Icon class="text-lg" icon={startIcon} />
    {/if}
    {#if $$slots.default}
        <slot />
    {/if}
    {#if endIcon}
        <Icon class="text-lg" icon={endIcon} />
    {/if}
</button>
