<template>
    <div class="w-[177px] h-[200px] border-4 rounded-xl">
        Category {{ props.name }}
    </div>
</template>

<script setup>

const props = defineProps(['name'])
</script>