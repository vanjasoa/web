<template>
    <div>
        card levels
        <h1>{{ props.level.name }}</h1>
        <h2>{{ props.level.point }}</h2>
    </div>
</template>

<script setup>

const props = defineProps(['level'])
</script>