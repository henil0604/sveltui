<script lang="ts">
    import { onMount } from "svelte";

    let group: HTMLDivElement;

    onMount(() => {
        let buttons = group.querySelectorAll("button");

        if (buttons.length === 0) return;

        // Border Adjustment
        let firstButton = buttons[0];
        let lastButton = buttons[buttons.length - 1];

        firstButton.style.borderTopRightRadius = "0";
        firstButton.style.borderBottomRightRadius = "0";
        firstButton.style.borderRight = "none";
        lastButton.style.borderTopLeftRadius = "0";
        lastButton.style.borderBottomLeftRadius = "0";

        for (let i = 1; i < buttons.length - 1; i++) {
            buttons[i].style.borderRadius = "0";
            buttons[i].style.borderRight = "none";
        }
    });
</script>

<div bind:this={group} class="btn-group">
    <slot />
</div>

<style lang="postcss" scoped>
    .btn-group {
        @apply flex gap-0;
    }
</style>
