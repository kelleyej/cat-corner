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
    class="h-64 flex bg-custom-blue items-center border-b-4 border-blue-500 size-full relative"
>
    <div class="w-4/12">
        <img
            class="xl:h-60 lg:h-40 md:h-36 sm:h-32 bottom-0 absolute"
            src="cat.jpeg"
            alt="Orange cat with round glasses on"
        />
    </div>
    <div class="w-4/12 text-left h-64">
        <h1
            class="font-catamaran not-italic xl:relative md:absolute md:left-10 lg:absolute lg:left-20 lg:text-9xl font-bold md:text-8xl sm:text-8xl sm:absolute sm:left-5 h-56 text-pink-500"
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

    <div class="text-center w-4/12 mr-2">
        <form on:submit|preventDefault={askQuestion}>
            <input
                class="w-60 border-2 text-center p-2"
                type="text"
                name="question"
                placeholder="Ask a question about cats..."
                bind:value={question}
            />
            <button
                class="lg:w-28 md:w-20 sm:16 cursor-pointer text-center bg-pink-200 p-2 hover:bg-custom-brown"
                type="submit">Ask!</button
            >
        </form>
        <div class="overflow-y-auto h-40 flex justify-center mt-2">
            {#if loading}
                <p class="w-96">Loading answer...</p>
            {:else}
                <p class="w-96">{answer}</p>
            {/if}
        </div>
    </div>
</header>
