<script>
    import "$lib/themes/default.postcss";
    import "$lib/pat.postcss";
    import "../app.postcss";
</script>

<div class="wrapper">
    <slot />
</div>

<style>
    .wrapper {
        @apply w-full h-full flex justify-center items-center;
    }
</style>
