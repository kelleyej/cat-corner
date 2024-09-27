<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";
    import Pagination from "$lib/Pagination.svelte";
    import { onMount } from "svelte";
    import { breedStore } from "../store.js";
    import { page } from "$app/stores";
    import Error from "$lib/Error.svelte";
    let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let breedName = "";

    let pageNumber = Number($page.params.id);
    $: {
        console.log(typeof pageNumber);
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
{#if pageNumber >= 9 || !pages.includes(pageNumber)}
    <Error />
{:else}
    <Header />
    <Pagination />
{/if}
<slot />
