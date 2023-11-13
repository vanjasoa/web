<template>
    <div>
        <TopNav>
            <template #logo>
                <Logo @click="showAuth = null" />
            </template>
        </TopNav>
        <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
        <AuthCard v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit" />
        <ProjectDescriptionCard v-else />
    </div>
</template>

<script setup>
const { login } = useDirectusAuth()

const showAuth = ref(null)



const onSubmit = async (loginData) => {
    try {
        await login({ data: { email: 'teddy@mail.com', password: '123456' } });
    } catch (e) {
        console.log(e)
    }
}

</script>