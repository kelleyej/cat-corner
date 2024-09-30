<script>
    let question = "";
    let answer = "";
    let loading = false;
    async function askQuestion() {
        loading = true;
        const response = await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `question=${encodeURIComponent(question)}`,
        });
        const ans = await response.json();
        answer = ans.data.split("").slice(2, -2).join("");
        loading = false;
        question = "";
    }
</script>

<header
    class="h-64 w-full flex bg-custom-blue items-center border-b-4 border-blue-500 size-full relative"
>
    <div class="w-4/12">
        <img
            class="xl:h-60 lg:h-40 md:h-36 sm:h-32 h-32 bottom-0 absolute"
            src="cat.jpeg"
            alt="Orange cat with round glasses on"
        />
    </div>
    <div class="w-4/12 text-left h-64 items-center flex relative">
        <h1
            class="mt-1 text-5xl sm:text-7xl md:text-8xl font-catamaran not-italic font-bold text-pink-500"
        >
            <span
                class="bg-gradient-to-r from-pink-900 to-pink-500 text-transparent bg-clip-text"
                >C</span
            >at
            <span
                class="bg-gradient-to-r from-pink-900 to-pink-500 text-transparent bg-clip-text"
                >C</span
            >orner
        </h1>
    </div>

    <div class="text-center w-4/12 mr-2 flex flex-col justify-center">
        <form on:submit|preventDefault={askQuestion}>
            <label for="ask" class="invisible text-xs">Ask</label>
            <input
                class="mt-5 xl:w-60 lg:w-60 md:w-60 sm:w-36 w-36 border-2 text-center p-2 ml-[-22px] mb-1 placeholder:text-sm"
                type="text"
                id="ask"
                name="question"
                placeholder="Ask a cat question"
                bind:value={question}
            />
            <button
                class="lg:w-28 md:w-20 sm:16 cursor-pointer text-center bg-pink-200 p-2 hover:bg-custom-brown"
                type="submit">Ask!</button
            >
        </form>
        <div class="overflow-y-auto h-40 flex justify-center align-center mt-2">
            {#if loading}
                <p class="w-96">Loading answer...</p>
            {:else}
                <p class="w-96">{answer}</p>
            {/if}
        </div>
    </div>
</header>
