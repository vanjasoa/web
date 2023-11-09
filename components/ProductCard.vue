<template>
    <div class="w-[260px] h-[322px] border-4 border-black rounded-lg">
        <h1>{{ props.product.name }}</h1>
        <h2>{{ props.product.point }}</h2>
        <slot name="image" />
    </div>
</template>

<script setup>

const props = defineProps(['product'])
</script>