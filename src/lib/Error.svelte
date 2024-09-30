<script>
    import { goto } from "$app/navigation";

    function goHome() {
        goto("/");
    }
</script>

<svelte:head>
    <title>Error Page</title>
</svelte:head>
<body class="bg-blue-100 h-screen">
    <header
        class="flex h-56 sm:h-64 md:h-96 bg-custom-purple border-b-4 border-green-600"
    >
        <div
            class="w-8/12 h-56 sm:h-64 md:h-96 relative border-b-4 border-green-600"
        >
            <img class="absolute bottom-0" src="./sad-cat.jpeg" alt="Sad cat" />
        </div>
    </header>
    <section class="flex items-center flex-col mt-5">
        <h1 class="font-catamaran text-7xl text-center pr-5 pl-5">
            Oh no! Looks like there is a small cat-astrophe. That page does not
            exist.
        </h1>
        <button
            on:click={goHome}
            class="w-36 mb-2 pt-1 pb-1 mt-10 border-2 rounded-full border-green-600 bg-green-200 hover:bg-custom-brown"
            >Go Home</button
        >
    </section>
</body>
