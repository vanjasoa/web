<template>
    <div>
        <Transition
        enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
        >
            <div v-if="props.showAuth === 'login'" class="flex flex-col items-center my-16 transition ease-in-out delay-150">
            <h1 class="font-extrabold text-4xl my-4">BIENVENUE</h1>
            <p class="text-xl mx-16 text-center my-4">
                Connectez-vous avec votre nom d’utilisateur ou numéro de téléphone
            </p>
            <div class="flex flex-col items-center my-8">
                <input name="email" v-model="loginForm.email" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre nom d’utilisateur ou téléphone">
                <input name="password" v-model="loginForm.password" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="password" placeholder="Votre mot de passe">
                <div class="flex justify-between w-full my-4">
                    <div>
                        <input class="mx-2" type="checkbox">
                        <span class="mx-2 font-extrabold">Se souvenir de moi</span>
                    </div>
                    
                    <a href="#">Mot de passe oublié ?</a>
                </div>
                <button @click="emit('connexion',loginForm)" class="w-full h-[70px] bg-[#E61B21] rounded-md text-white text-xl font-extrabold">Se Connecter</button>
            </div>
        </div>
        </Transition>
        

        <div v-if="props.showAuth === 'register'" class="flex flex-col items-center my-16 transition ease-in-out delay-150 mx-4">
            <h1 class="font-extrabold text-4xl my-4">Commencez</h1>
            <p class="text-xl mx-16 text-center my-4">
                Remplissez les champs ci-dessous pour vous inscrire.
            </p>
            <div class="flex flex-col items-center my-8">
                <input v-model="registerForm.email" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre nom d’utilisateur">
                <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre nom">
                <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre prénom">
                <span class="self-start my-4">Votre date de naissance</span>
                <div class="w-full flex flex-row justify-between">
                    <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Jour">
                    <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Mois">
                    <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Année">
                </div>
                <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre numéro de téléphone">
                <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre adresse email">
                <input v-model="registerForm.password" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="password" placeholder="Votre mot de passe">
                <input class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="password" placeholder="Ressaisir votre mot de passe">
                <div class="flex justify-between w-full my-4">
                    <div>
                        <input class="mx-2" type="checkbox">
                        <span class="mx-2 font-extrabold">J’accepte les Termes et Conditions</span>
                    </div>

                </div>
                <button @click="emit('register',registerForm)" class="w-full h-[70px] bg-[#E61B21] rounded-md text-white text-xl font-extrabold">S’inscrire</button>
                
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['showAuth'])
const emit =  defineEmits(['connexion','register'])

const loginForm = ref({ email: 'teddy', password: '123456' })
const registerForm = ref({ email: 'teddy', password: '123456' })


</script>