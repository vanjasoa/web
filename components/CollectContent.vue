<template>
    <div>
        <div>
            <slot name="retour" />
            <div class="flex justify-around my-2">
                <slot name="category" />
            </div>
            <div class="flex justify-around my-16">
                <div class="grid grid-cols-2 gap-16 place-content-evenly">
                    <slot name="productlist" />
                </div>
            </div>

        </div>
    </div>
</template>