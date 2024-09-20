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
            class="h-60 mb-[-12px]"
            src="cat.jpeg"
            alt="Orange cat with round glasses on"
        />
    </div>
    <div class="w-4/12 text-left">
        <h1 class="font-catamaran not-italic font-bold text-9xl text-pink-500">
            <span
                class="bg-gradient-to-r from-pink-900 to-pink-500 inline-block text-transparent bg-clip-text"
                >C</span
            >at
            <br />
            <span
                class="bg-gradient-to-r from-pink-900 to-pink-500 inline-block text-transparent bg-clip-text"
                >C</span
            >orner
        </h1>
    </div>

    <div class="text-center w-4/12">
        <form
            class="absolute top-5 mb-5"
            on:submit|preventDefault={askQuestion}
        >
            <input
                class="w-64 border-2 text-center"
                type="text"
                name="question"
                placeholder="Ask a question about cats..."
                bind:value={question}
            />
            <button
                class="w-28 cursor-pointer text-center bg-pink-200 hover:bg-sky-700"
                type="submit">Ask question!</button
            >
        </form>

        {#if loading}
            <p class="w-96">Loading answer...</p>
        {:else}
            <p class="w-96">{answer}</p>
        {/if}
    </div>
</header>
