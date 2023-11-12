<template>
    <div>
        
            <span>email</span>
        <input v-model="email" type="text">
        
        <span>password</span>
        <input v-model="password" type="password">
        <button @click="onSubmit">login</button>
        <button @click="logout">dec</button>

        <p v-if="user">
            {{ user }}

            <button @click="fetctProducts">refresh</button>
            <p>
                {{ products }}
            </p>
        </p>
        
        
    </div>
</template>

<script setup>
const { login, logout } = useDirectusAuth()
const user = useDirectusUser();
const password = ref('')
const email = ref('')
const { getItems, createItems } = useDirectusItems();
const products = ref([])

//const loginForm =  ref({ email: 'teddy@mail.com', password: '123456' })

const onSubmit = async () => {
    try {    
        await login({ email: email.value, password: password.value });
  } catch (e) {}
}

// const onSubmit = () => {
//     alert(password.value)
// }

const fetctProducts = async () => {
    try {
        const data  = await getItems({collection: "product"});
        products.value = data
    } catch (error) {
        
    }
}
</script>