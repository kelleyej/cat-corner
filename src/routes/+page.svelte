<script>
    import { breedStore } from "../store.js";
    let catBreeds = [];

    $: {
        catBreeds = $breedStore;
        console.log(catBreeds);
    }
</script>

<section class="grid grid-cols-3 gap-5 text-center">
    {#each catBreeds as cat (cat.id)}
        <div>
            <h2 class="font-bold">{cat.name}</h2>
            <h3>{cat.temperament}</h3>
            <p>{cat.description}</p>
        </div>
    {/each}
</section>
