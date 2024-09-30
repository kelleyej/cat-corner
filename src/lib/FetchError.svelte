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
            Oh no! Looks like there is a small cat-astrophe. Please try again
            later.
        </h1>
    </section>
</body>
