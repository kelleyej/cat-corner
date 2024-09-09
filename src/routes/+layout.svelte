<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";
    import { onMount } from "svelte";
    import { breedStore } from "../store.js";

    onMount(async () => {
        fetch("https://api.thecatapi.com/v1/breeds")
            .then((response) => response.json())
            .then((data) => breedStore.set(data));
    });
</script>

<Header />
<slot />
