<template>
    <div>
        <TopNav>
            <template #logo>
                <Logo @click="showAuth = null" />
            </template>
        </TopNav>
        <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
        <AuthCard v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit"/>
        <ProjectDescriptionCard v-else />
    </div>
</template>

<script setup>
const { createUser, login } = useDirectusAuth()
const { createUsers } = useDirectusUsers()
const showAuth = ref(null)
const router = useRouter()

const onSubmit = async (loginData) => {
    try {    
        await login({ email: loginData.email, password: loginData.password });
  } catch (e) {}
}

// function afficher(donnee) {
//     console.log(donnee)
// }

</script>