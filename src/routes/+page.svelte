<script>
    import { Button, ButtonGroup, Spinner } from "$lib";
    import "../app.postcss";

    let loading = false;

    setInterval(() => {
        loading = !loading;
    }, 2000);
</script>

<div class="flex flex-col flex-wrap gap-4 p-3">
    <div class="flex flex-wrap gap-1">
        <ButtonGroup>
            <Button variant="error" type="soft">Day</Button>
            <Button variant="error" type="soft">Week</Button>
            <Button variant="error" type="soft">Month</Button>
            <Button variant="error" type="soft">Year</Button>
        </ButtonGroup>
    </div>
</div>
