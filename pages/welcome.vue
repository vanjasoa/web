<template>
    <div>

        <TopNav>
            <template #logo >
                <Logo />
            </template>
            <template #profil >
                <PointButton />
                <AccountButton />
            </template>
        </TopNav>

        <MenuList>
            <template #menulist >
                <MenuButton v-for="item in itemsMenu" :name="item.title" />
            </template>
        </MenuList>
        
        <LevelsProgressBar />

    </div>
</template>

<script setup>

const itemsMenu = [
  {
    title: "Mon QR",
    content: "Contenu Mon QrCode",
    color:'#11973F'
  },
  {
    title: "Je collecte",
    content: "Contenu collection de produits.",
    color:'#F1C534'
  },
  {
    title: "Mes recompenses",
    content: "Contenu des recompenses.",
    color:'#E61B21'
  },
  {
    title: "Profil",
    content: "Contenu des recompenses.",
    color:'#11973F'
  },
];

</script>