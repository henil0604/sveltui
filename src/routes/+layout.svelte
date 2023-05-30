<script>
    import "$lib/themes/default.postcss";
    import "$lib/pat.postcss";
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
