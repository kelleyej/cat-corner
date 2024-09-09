<script>
    import { breedStore } from "../store.js";
    let catBreeds = [];

    $: {
        catBreeds = $breedStore;
        console.log(catBreeds);
    }
</script>

<section class="grid grid-cols-3 gap-10 text-center mt-10 mr-5 ml-5">
    {#each catBreeds as cat (cat.id)}
        <div class="border-4 border-emerald-200 relative text-start">
            <h2 class="font-bold">{cat.name}</h2>
            <h3 class="italic mb-2 w-80">{cat.temperament}</h3>
            <div class="flex items-center ml-2 mr-5">
                <p class="w-28">Affectionate:</p>
                <div class="bg-slate-200 w-60 h-5">
                    <div
                        class="h-full border-2 bg-green-200"
                        style="width: {(cat.affection_level / 5) * 100}%"
                    ></div>
                </div>
                <img
                    class="w-28 absolute right-[-14px] top-[-14px] border-2 border-blue-200"
                    src="https://cdn2.thecatapi.com/images/{cat.reference_image_id}.jpg"
                    alt="Image of a {cat.name}"
                />
            </div>
            <div class="flex items-center ml-2 mr-5">
                <p class="w-28">Intelligence:</p>
                <div class="bg-slate-200 w-60 h-5">
                    <div
                        class="h-full border-2 bg-orange-200"
                        style="width: {(cat.intelligence / 5) * 100}%"
                    ></div>
                </div>
            </div>
            <div class="flex items-center ml-2 mr-5">
                <p class="w-28">Dog Friendly:</p>
                <div class="bg-slate-200 w-60 h-5">
                    <div
                        class="h-full border-2 bg-blue-200"
                        style="width: {(cat.dog_friendly / 5) * 100}%"
                    ></div>
                </div>
            </div>
            <div class="flex items-center ml-2 mr-5">
                <p class="w-28">Energetic:</p>
                <div class="bg-slate-200 w-60 h-5">
                    <div
                        class="h-full border-2 bg-purple-200"
                        style="width: {(cat.energy_level / 5) * 100}%"
                    ></div>
                </div>
            </div>
        </div>
    {/each}
</section>
