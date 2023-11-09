<template>
    <div class="w-[369px] h-[303px] border-4">
        {{ props.name }}
    </div>
</template>

<script setup>

const props = defineProps(['name'])

</script>