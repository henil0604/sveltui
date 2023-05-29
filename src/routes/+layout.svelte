<script>
    import "$lib/pat.postcss";
    import "$lib/themes/default.postcss";
</script>

<slot />

<style>
    :global(html, body) {
        height: 100%;
    }

    :global(body) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
