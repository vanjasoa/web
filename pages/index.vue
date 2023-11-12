<template>
    <div>
        <TopNav>
            <template #logo>
                <Logo @click="showAuth = null" />
            </template>
        </TopNav>
        <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
        <AuthCard v-if="showAuth" :show-auth="showAuth" />
        <ProjectDescriptionCard v-else />
    </div>
</template>

<script setup>
const showAuth = ref(null)
</script>