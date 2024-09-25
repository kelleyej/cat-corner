<script>
    let pages = [1, 2, 3, 4, 5, 6, 7, 8];
    import { goto } from "$app/navigation";
    import { breedStore, catStore } from "../store.js";
    import { page } from "$app/stores";
    let activePage = Number($page.params.id);

    let breedName = "";
    let catBreeds = [];
    let allCats = [];
    $: catBreeds = $breedStore;
    $: allCats = $catStore;
    $: if (breedName) {
        allCats = allCats.filter((cat) =>
            cat.name.toLowerCase().includes(breedName.toLowerCase()),
        );
    }

    $: if (!breedName.length) {
        test(activePage);
    }

    let affectionate = true;
    let intelligence = true;
    let dogFriendly = true;
    let energetic = true;
    let adaptability = true;
    let childFriendly = true;

    function test(page) {
        fetch(`https://api.thecatapi.com/v1/breeds/?limit=9&page=${page - 1}`)
            .then((response) => response.json())
            .then((data) => breedStore.set(data));
    }

    function searchCatBreeds() {
        fetch("https://api.thecatapi.com/v1/breeds/?limit=67")
            .then((response) => response.json())
            .then((data) => catStore.set(data));
    }

    function handleClick(page) {
        goto(`/${page}`);
        test(page);
        breedName = "";
        activePage = page;
    }
    function goToNextPage() {
        let nextPage = (Number($page.params.id) + 1).toString();
        goto(`/${nextPage}`);
        breedName = "";
        activePage = nextPage;
    }

    function goToPreviousPage() {
        let previousPage = (Number($page.params.id) - 1).toString();
        goto(`/${previousPage}`);
        test(previousPage);
        breedName = "";
        activePage = previousPage;
    }
</script>

<input
    class="text-center border-2 ml-2 mt-2"
    type="text"
    placeholder="🔎 Search cat breeds"
    on:input={searchCatBreeds}
    bind:value={breedName}
/>
<div class="text-center flex justify-center mt-9">
    <p class="mr-2">Check levels of:</p>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        id="affection"
        bind:checked={affectionate}
    /><label for="affection" class="mr-2">Affection</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        id="intelligence"
        bind:checked={intelligence}
    /><label for="intelligence" class="mr-2">Intelligence</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        id="dog-friendly"
        bind:checked={dogFriendly}
    /><label for="dog-friendly" class="mr-2">Dog Friendliness</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        id="energy"
        bind:checked={energetic}
    /><label for="energy" class="mr-2">Energy</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        id="adaptability"
        bind:checked={adaptability}
    /><label for="adaptability" class="mr-2">Adaptability</label>
    <input
        class="mr-2 accent-pink-200 cursor-pointer"
        type="checkbox"
        id="child-friendly"
        bind:checked={childFriendly}
    /><label for="child-friendly" class="mr-2">Child Friendliness</label>
</div>

<section
    class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 text-center mt-10 mr-5 ml-5 mb-5 bg-hero-pattern bg-repeat bg-contain"
>
    {#each !breedName.length ? catBreeds : allCats as cat (cat.id)}
        <div
            class="border-4 bg-custom-beige border-emerald-400 relative text-start pb-2"
        >
            <div class="flex mb-2 justify-between">
                <div class="w-3/5">
                    <h2 class="font-bold ml-2 text-2xl">{cat.name} 🐾</h2>
                    <h3 class="italic mb-2 ml-2">{cat.temperament}</h3>
                </div>

                <div
                    class="rounded-full bg-cover w-28 h-28 mt-2 mr-2"
                    style="background-image: url('https://cdn2.thecatapi.com/images/{cat.reference_image_id}.jpg');"
                ></div>
            </div>
            <!-- <img
                class="w-28 absolute right-[-14px] top-[-14px] border-2 border-blue-200"
                src="https://cdn2.thecatapi.com/images/{cat.reference_image_id}.jpg"
                alt="Image of a {cat.name}"
            /> -->
            {#if affectionate}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Affectionate:</p>
                    <div class="bg-slate-200 w-72 h-5">
                        <div
                            class="h-full border-2 bg-green-300"
                            style="width: {(cat.affection_level / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if intelligence}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Intelligent:</p>
                    <div class="bg-slate-200 w-72 h-5">
                        <div
                            class="h-full border-2 bg-orange-300"
                            style="width: {(cat.intelligence / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if dogFriendly}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Dog Friendly:</p>
                    <div class="bg-slate-200 w-72 h-5">
                        <div
                            class="h-full border-2 bg-blue-300"
                            style="width: {(cat.dog_friendly / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if energetic}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Energetic:</p>
                    <div class="bg-slate-200 w-72 h-5">
                        <div
                            class="h-full border-2 bg-purple-300"
                            style="width: {(cat.energy_level / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if adaptability}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Adaptable:</p>
                    <div class="bg-slate-200 w-72 h-5">
                        <div
                            class="h-full border-2 bg-yellow-300"
                            style="width: {(cat.adaptability / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
            {#if childFriendly}
                <div class="flex items-center ml-2 mr-5">
                    <p class="w-28">Child Friendly:</p>
                    <div class="bg-slate-200 w-72 h-5">
                        <div
                            class="h-full border-2 bg-red-300"
                            style="width: {(cat.child_friendly / 5) * 100}%"
                        ></div>
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</section>
<section class="flex text-center flex justify-center mt-5 mb-8">
    <button
        disabled={Number(activePage) === 1 ? true : false}
        on:click={goToPreviousPage}
        class="{Number(activePage) === 1
            ? 'cursor-not-allowed text-slate-400'
            : 'cursor-pointer'} pr-2 pl-2"
    >
        Previous
    </button>
    {#each pages as page}
        <div
            on:click={() => handleClick(page)}
            class="text-center border-2 cursor-pointer w-10 mr-1 ml-1 {page ===
                Number(activePage) ||
            (isNaN(Number(activePage)) && page === 1)
                ? 'bg-pink-200'
                : ''}"
        >
            {page}
        </div>
    {/each}
    <button
        disabled={Number(activePage) === 8 ? true : false}
        on:click={goToNextPage}
        class="{Number(activePage) === 8
            ? 'cursor-not-allowed text-slate-400'
            : 'cursor-pointer'} pr-2 pl-2">Next</button
    >
</section>
