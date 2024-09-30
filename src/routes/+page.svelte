<script>
    let pages = [1, 2, 3, 4, 5, 6, 7, 8];
    import { goto } from "$app/navigation";
    import { breedStore, catStore } from "../store.js";
    import { page } from "$app/stores";
    import Header from "$lib/Header.svelte";
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

    $: {
        console.log(typeof activePage);
        console.log(activePage);
    }

    $: if (!breedName.length) {
        paginateCatBreeds(activePage);
    }

    let affectionate = true;
    let intelligence = true;
    let dogFriendly = true;
    let energetic = true;
    let adaptability = true;
    let childFriendly = true;
    let catError = false;

    function paginateCatBreeds(page) {
        fetch(`https://api.thecatapi.com/v1/breeds/?limit=9&page=${page - 1}`)
            .then((response) => response.json())
            .then((data) => breedStore.set(data));
        catError = false;
    }

    function searchCatBreeds() {
        fetch("https://api.thecatapi.com/v1/breeds/?limit=67")
            .then((response) => response.json())
            .then((data) => catStore.set(data));
        catError = true;
    }

    function handleClick(page) {
        goto(`/${page}`);
        paginateCatBreeds(page);
        breedName = "";
        activePage = page;
    }
    function goToNextPage() {
        if (Number.isNaN(activePage)) {
            activePage = 1;
            let nextPage = activePage + 1;
            goto(`/${nextPage}`);
            paginateCatBreeds(nextPage);
            breedName = "";
            activePage = nextPage;
        } else {
            let nextPage = (activePage + 1).toString();
            goto(`/${nextPage}`);
            paginateCatBreeds(nextPage);
            breedName = "";
            activePage = nextPage;
        }
    }

    function goToPreviousPage() {
        let previousPage = (Number($page.params.id) - 1).toString();
        goto(`/${previousPage}`);
        paginateCatBreeds(previousPage);
        breedName = "";
        activePage = previousPage;
    }
</script>

<Header />
<label for="search" class="invisible text-xs ml-[-20px]">Search</label>
<input
    class="text-center border-2 mt-2"
    type="text"
    id="search"
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
{#if !allCats.length && catError}
    <h3 class="text-center mt-10 mb-10 text-3xl">
        No cat breed with that name exists. ☹
    </h3>
{:else}
    <section
        class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 text-center mt-10 mr-5 ml-5 mb-5 bg-hero-pattern bg-repeat bg-contain"
    >
        {#each !breedName.length ? catBreeds : allCats as cat (cat.id)}
            <div
                class="border-4 bg-custom-beige border-emerald-400 relative text-start pb-2"
            >
                <div class="flex mb-3 justify-between">
                    <div class="w-3/5">
                        <h2 class="font-bold ml-2 text-2xl">{cat.name} 🐾</h2>
                        <h3 class="italic mb-2 ml-2">{cat.temperament}</h3>
                    </div>

                    <div
                        class="rounded-full bg-cover w-28 h-28 mt-2 mr-2"
                        style="background-image: url('https://cdn2.thecatapi.com/images/{cat.reference_image_id}.jpg');"
                    ></div>
                </div>
                {#if affectionate}
                    <div class="flex items-center mb-1 mr-7">
                        <div class="w-44 mr-2 text-right">
                            <p class="text-sm">Affectionate:</p>
                        </div>
                        <div class="bg-slate-200 w-72 h-5">
                            <div
                                class="h-full border-2 bg-green-300"
                                style="width: {(cat.affection_level / 5) *
                                    100}%"
                            ></div>
                        </div>
                    </div>
                {/if}
                {#if intelligence}
                    <div class="flex items-center mb-1 mr-7">
                        <div class="w-44 mr-2 text-right">
                            <p class="text-sm">Intelligent:</p>
                        </div>
                        <div class="bg-slate-200 w-72 h-5">
                            <div
                                class="h-full border-2 bg-orange-300"
                                style="width: {(cat.intelligence / 5) * 100}%"
                            ></div>
                        </div>
                    </div>
                {/if}
                {#if dogFriendly}
                    <div class="flex items-center mb-1 mr-7">
                        <div class="w-44 mr-2 text-right">
                            <p class="text-sm">Dog Friendly:</p>
                        </div>
                        <div class="bg-slate-200 w-72 h-5">
                            <div
                                class="h-full border-2 bg-blue-300"
                                style="width: {(cat.dog_friendly / 5) * 100}%"
                            ></div>
                        </div>
                    </div>
                {/if}
                {#if energetic}
                    <div class="flex items-center mb-1 mr-7">
                        <div class="w-44 mr-2 text-right">
                            <p class="text-sm">Energetic:</p>
                        </div>
                        <div class="bg-slate-200 w-72 h-5">
                            <div
                                class="h-full border-2 bg-purple-300"
                                style="width: {(cat.energy_level / 5) * 100}%"
                            ></div>
                        </div>
                    </div>
                {/if}
                {#if adaptability}
                    <div class="flex items-center mb-1 mr-7">
                        <div class="w-44 mr-2 text-right">
                            <p class="text-sm">Adaptable:</p>
                        </div>
                        <div class="bg-slate-200 w-72 h-5">
                            <div
                                class="h-full border-2 bg-yellow-300"
                                style="width: {(cat.adaptability / 5) * 100}%"
                            ></div>
                        </div>
                    </div>
                {/if}
                {#if childFriendly}
                    <div class="flex items-center mb-1 mr-7">
                        <div class="w-44 mr-2 text-right">
                            <p class="text-sm">Child-Friendly:</p>
                        </div>
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
{/if}
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
