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

<header>
    <div class="flex bg-custom-blue items-center border-b-4 border-blue-500">
        <img
            class="h-60"
            src="cat.jpeg"
            alt="Orange cat with round glasses on"
        />
        <h1 class="font-catamaran not-italic font-bold text-9xl text-pink-500">
            <span
                class="bg-gradient-to-r from-pink-900 to-pink-500 inline-block text-transparent bg-clip-text"
                >C</span
            >at
            <span
                class="bg-gradient-to-r from-pink-900 to-pink-500 inline-block text-transparent bg-clip-text"
                >C</span
            >orner
        </h1>
        <section class="text-center mt-5">
            <form on:submit|preventDefault={askQuestion}>
                <input
                    class="w-64 border-2 text-center"
                    type="text"
                    name="question"
                    placeholder="Ask a question about cats..."
                    bind:value={question}
                />
                <button
                    class="border-2 w-28 cursor-pointer text-center"
                    type="submit">Ask question!</button
                >
            </form>
            {#if loading}
                <p class="w-96">Loading answer...</p>
            {:else}
                <p class="w-96 overflow-auto h-full">{answer}</p>
            {/if}
        </section>
    </div>
</header>
