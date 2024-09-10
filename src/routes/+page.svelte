<script>
    import { breedStore } from "../store.js";
    let catBreeds = [];

    $: {
        catBreeds = $breedStore;
        console.log(catBreeds);
    }

    let affectionate = true;
    let intelligence = true;
    let dogFriendly = true;
    let energetic = true;
    let adaptability = true;
    let childFriendly = true;
</script>

<div class="text-center flex justify-center">
    <p class="mr-2">Check levels of:</p>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        bind:checked={affectionate}
    /><label class="mr-2">Affectionate</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        bind:checked={intelligence}
    /><label class="mr-2">Intelligent</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        bind:checked={dogFriendly}
    /><label class="mr-2">Dog Friendly</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        bind:checked={energetic}
    /><label class="mr-2">Energetic</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        bind:checked={adaptability}
    /><label class="mr-2">Adaptable</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        bind:checked={childFriendly}
    /><label>Child Friendly</label>
</div>

<section class="grid grid-cols-3 gap-10 text-center mt-10 mr-5 ml-5">
    {#each catBreeds as cat (cat.id)}
        <div class="border-4 border-emerald-200 relative text-start">
            <h2 class="font-bold">{cat.name}</h2>
            <h3 class="italic mb-2 w-80">{cat.temperament}</h3>
            <img
                class="w-28 absolute right-[-14px] top-[-14px] border-2 border-blue-200"
                src="https://cdn2.thecatapi.com/images/{cat.reference_image_id}.jpg"
                alt="Image of a {cat.name}"
            />
            {#if affectionate}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Affectionate:</p>
                    <div class="bg-slate-200 w-60 h-5">
                        <div
                            class="h-full border-2 bg-green-200"
                            style="width: {(cat.affection_level / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if intelligence}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Intelligent:</p>
                    <div class="bg-slate-200 w-60 h-5">
                        <div
                            class="h-full border-2 bg-orange-200"
                            style="width: {(cat.intelligence / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if dogFriendly}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Dog Friendly:</p>
                    <div class="bg-slate-200 w-60 h-5">
                        <div
                            class="h-full border-2 bg-blue-200"
                            style="width: {(cat.dog_friendly / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if energetic}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Energetic:</p>
                    <div class="bg-slate-200 w-60 h-5">
                        <div
                            class="h-full border-2 bg-purple-200"
                            style="width: {(cat.energy_level / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if adaptability}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Adaptable:</p>
                    <div class="bg-slate-200 w-60 h-5">
                        <div
                            class="h-full border-2 bg-blue-200"
                            style="width: {(cat.adaptability / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if childFriendly}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Child Friendly:</p>
                    <div class="bg-slate-200 w-60 h-5">
                        <div
                            class="h-full border-2 bg-blue-200"
                            style="width: {(cat.child_friendly / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</section>
