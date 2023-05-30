<script>
    import { Button, ButtonGroup, Card, Spinner } from "$lib";
    import LoadingOverlay from "$lib/components/LoadingOverlay/LoadingOverlay.svelte";
    import "../app.postcss";

    let loading = false;

    setInterval(() => {
        loading = !loading;
    }, 2000);
</script>

<div class="flex flex-col flex-wrap gap-4 p-3">
    <Card interactive type="filled" variant="error">
        <svelte:fragment slot="header"
            ><h1 class="text-xl">Hey!</h1></svelte:fragment
        >
        <svelte:fragment slot="body"
            >Something really bad just happened!!!</svelte:fragment
        >
        <div class="flex justify-end mt-2 gap-1" slot="footer">
            <Button type="soft" variant="tertiary">Ignore</Button>
            <Button variant="warn">Report</Button>
        </div>
    </Card>
</div>
