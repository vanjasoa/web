<template>
    <div>
        <TopNav>
            <template #logo>
                <Logo @click="showAuth = null" />
            </template>
        </TopNav>
        <button class="w-128 h-128 bg-slate-400" @click="onSubmit">connexionTest</button>
        <button class="w-128 h-128 bg-slate-400" @click="logout">Deconnexion</button>
        <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
        <AuthCard v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit" />
        <ProjectDescriptionCard v-else />
    </div>
</template>

<script setup>
const { login, logout } = useDirectusAuth();
const user = useDirectusUser();

const onSubmit = async (logindata) => {
    try {
        await login({ email: logindata.email, password: logindata.password });
        
    } catch (e) {
        console.log(e)
     }
};


const showAuth = ref(null)

</script>