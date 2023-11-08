<template>
    <div class="w-full h-[208px] bg-red-600 flex justify-around items-center">
        <slot name="logo" />
        <div class="flex justify-end">
            <slot name="profil" />
        </div>
    </div>
</template>