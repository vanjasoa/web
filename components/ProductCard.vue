<template>
    <div class="w-[260px] h-[322px] border-4">
        <h1>{{ props.product.name }}</h1>
        <h2>{{ props.product.point }}</h2>
    </div>
</template>

<script setup>

const props = defineProps(['product'])
</script>