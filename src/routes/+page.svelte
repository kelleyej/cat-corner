<script>
    import { breedStore } from "../store.js";
    let catBreeds = [];

    $: {
        catBreeds = $breedStore;
        console.log(catBreeds);
    }
</script>
