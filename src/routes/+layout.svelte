<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";
    import Pagination from "$lib/Pagination.svelte";
    import { onMount } from "svelte";
    import { breedStore } from "../store.js";
    import { page } from "$app/stores";
    import Error from "$lib/Error.svelte";

    let breedName = "";

    let pageNumber = $page.params.id;
    $: {
        console.log(pageNumber);
    }

    onMount(async () => {
        fetch(
            `https://api.thecatapi.com/v1/breeds/?limit=9&page=${pageNumber - 1}`,
        )
            .then((response) => response.json())
            .then((data) => breedStore.set(data));
    });
</script>

<svelte:head>
    <title>Cat Breeds</title>
</svelte:head>
{#if pageNumber >= 9}
    <Error />
{:else}
    <Header />
    <Pagination />
{/if}
<slot />
