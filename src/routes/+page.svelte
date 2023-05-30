<script>
    import { Button, ButtonGroup, Card, Spinner } from "$lib";
</script>

<div class="flex flex-col flex-wrap gap-4 p-3">
    <Card type="filled" variant="error">
        <svelte:fragment slot="header"
            ><h1 class="text-xl">Hey!</h1></svelte:fragment
        >
        <svelte:fragment slot="body"
            ><div class="py-2">
                Something really bad just happened!!!
            </div></svelte:fragment
        >
        <div class="flex justify-end mt-2 gap-1" slot="footer">
            <Button type="soft" variant="tertiary">Ignore</Button>
            <Button variant="warn">Report</Button>
        </div>
    </Card>
</div>
