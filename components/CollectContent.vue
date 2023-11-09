<template>
    <div>
        Collect content
        <div>
            <slot name="retour" />
            <div class="flex justify-around my-2">
                <slot name="category" />
            </div>
            <div class="flex justify-around">
                <div class="grid grid-cols-2 gap-4 place-content-evenly">
                    <slot name="productlist" />
                </div>
            </div>

        </div>
    </div>
</template>