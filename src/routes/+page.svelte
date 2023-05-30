<script>
    import { Button, Spinner } from "$lib";
    import "../app.postcss";
</script>

<div class="flex flex-col gap-1">
    <div class="flex gap-1">
        <Button variant="primary" type="filled">Hello World</Button>
        <Button variant="secondary" type="filled">Hello World</Button>
        <Button variant="tertiary" type="filled">Hello World</Button>
        <Button variant="success" type="filled">Hello World</Button>
        <Button variant="warn" type="filled">Hello World</Button>
        <Button variant="error" type="filled">Hello World</Button>
        <Button variant="info" type="filled">Hello World</Button>
        <Button variant="dark" type="filled">Hello World</Button>
    </div>

    <div class="flex gap-1">
        <Button variant="primary" type="outlined">Hello World</Button>
        <Button variant="secondary" type="outlined">Hello World</Button>
        <Button variant="tertiary" type="outlined">Hello World</Button>
        <Button variant="success" type="outlined">Hello World</Button>
        <Button variant="warn" type="outlined">Hello World</Button>
        <Button variant="error" type="outlined">Hello World</Button>
        <Button variant="info" type="outlined">Hello World</Button>
        <Button variant="dark" type="outlined">Hello World</Button>
    </div>

    <div class="flex gap-1">
        <Button variant="primary" type="soft">Hello World</Button>
        <Button variant="secondary" type="soft">Hello World</Button>
        <Button variant="tertiary" type="soft">Hello World</Button>
        <Button variant="success" type="soft">Hello World</Button>
        <Button variant="warn" type="soft">Hello World</Button>
        <Button variant="error" type="soft">Hello World</Button>
        <Button variant="info" type="soft">Hello World</Button>
        <Button variant="dark" type="soft">Hello World</Button>
    </div>

    <div class="flex gap-1">
        <Spinner />
    </div>
</div>
