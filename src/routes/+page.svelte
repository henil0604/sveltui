<script>
    import { Button, Spinner } from "$lib";
    import "../app.postcss";

    let loading = false;

    setInterval(() => {
        loading = !loading;
    }, 2000);
</script>

<div class="flex flex-col flex-wrap gap-4 p-3">
    <div class="flex flex-wrap gap-1">
        <Button {loading} variant="primary" type="filled">Hello World</Button>
        <Button {loading} variant="secondary" type="filled">Hello World</Button>
        <Button {loading} variant="tertiary" type="filled">Hello World</Button>
        <Button {loading} variant="success" type="filled">Hello World</Button>
        <Button {loading} variant="warn" type="filled">Hello World</Button>
        <Button {loading} variant="error" type="filled">Hello World</Button>
        <Button {loading} variant="info" type="filled">Hello World</Button>
        <Button {loading} variant="dark" type="filled">Hello World</Button>
    </div>

    <div class="flex flex-wrap gap-1">
        <Button {loading} variant="primary" type="outlined">Hello World</Button>
        <Button {loading} variant="secondary" type="outlined"
            >Hello World</Button
        >
        <Button {loading} variant="tertiary" type="outlined">Hello World</Button
        >
        <Button {loading} variant="success" type="outlined">Hello World</Button>
        <Button {loading} variant="warn" type="outlined">Hello World</Button>
        <Button {loading} variant="error" type="outlined">Hello World</Button>
        <Button {loading} variant="info" type="outlined">Hello World</Button>
        <Button {loading} variant="dark" type="outlined">Hello World</Button>
    </div>

    <div class="flex flex-wrap gap-1">
        <Button {loading} variant="primary" type="soft">Hello World</Button>
        <Button {loading} variant="secondary" type="soft">Hello World</Button>
        <Button {loading} variant="tertiary" type="soft">Hello World</Button>
        <Button {loading} variant="success" type="soft">Hello World</Button>
        <Button {loading} variant="warn" type="soft">Hello World</Button>
        <Button {loading} variant="error" type="soft">Hello World</Button>
        <Button {loading} variant="info" type="soft">Hello World</Button>
        <Button {loading} variant="dark" type="soft">Hello World</Button>
    </div>

    <div class="flex flex-wrap gap-1">
        <Spinner />
    </div>
</div>
