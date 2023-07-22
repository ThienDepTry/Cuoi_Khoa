news.forEach((item) => {
    document.getElementById("app").insertAdjacentHTML("beforeend", `
        <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <a href="#_" class="block">
            <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                src="https://images2.thanhnien.vn/Uploaded/2014/ihay.thanhnien.com.vn/Pictures201310/LUAN/2/damvinhhungg6.jpg">
        </a>
        <div
            class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
            <span>Lifestyle</span>
        </div>
        <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">${item.title}</a>
        </h2>
        <p class="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future
        and create a life that you are truly happy with.</p>
        <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mary Jane</a> · <span
            class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
    </div>
    `)
});
