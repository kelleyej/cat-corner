<!-- <script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { breedStore } from "../../store.js";

    const { pageNumber } = $page.params;

    function test(pageNumber) {
        fetch(
            `https://api.thecatapi.com/v1/breeds/?limit=9&page=${pageNumber - 1}`,
        )
            .then((response) => response.json())
            .then((data) => breedStore.set(data));
    }

    onMount(() => {
        test(pageNumber);
    });
</script> -->
