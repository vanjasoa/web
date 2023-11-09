<template>
    <div>

        <TopNav>
            <template #logo >
                <Logo />
            </template>
            <template #profil >
                <PointButton />
                <AccountButton @click="ProfilShow" />
            </template>
        </TopNav>

        <MenuList v-if="showContent === null" >
            <template #menulist >
                <MenuButton v-for="(item, index) in itemsMenu" :key="index" :name="item.title" @click="showContent = index" />
            </template>
        </MenuList>

        <div v-else>
          <CollectContent v-if="itemsMenu[showContent].title == 'Je collecte' " >
            <template #retour >
              <button @click="showContent = null">retour</button>
            </template>
            <template #category>
              <CategoryCard v-for="category in categoryList" :name="category" />
            </template>
            <template #productlist>
              <ProductCard v-for="product in productList" :product="product" />
            </template>
          </CollectContent>
          <QrCodeContent v-if="itemsMenu[showContent].title == 'Mon QR' " >
            <template #retour >
              <button @click="showContent = null">retour</button>
            </template>
          </QrCodeContent>
          <RewardsContent v-if="itemsMenu[showContent].title == 'Mes recompenses' "> 
            <template #retour >
              <button @click="showContent = null">retour</button>
            </template>
            <template #levels >
              <LevelsCard v-for="level in levelsList" :level="level" />
            </template>
          </RewardsContent>
          <ProfilContent v-if="itemsMenu[showContent].title == 'Profil' ">
            <template #retour >
              <button @click="showContent = null">retour</button>
            </template>
          </ProfilContent>
        </div>
        
        <LevelsProgressBar />

    </div>
</template>

<script setup>

const showContent = ref(null);

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

const categoryList = ['pizza','glace','frite']

const productList = [
  {
    name: 'pizza GM',
    point:10
  },
  {
    name: 'pizza PM',
    point:15
  },
  {
    name: 'glace GM',
    point:20
  },
  {
    name: 'glace PM',
    point:25
  },
]

const levelsList = [
  {
    name:'noobs',
    point:20
  },
  {
    name:'fastoPRIME',
    point:20
  },
  {
    name:'el gourmet',
    point:20
  },
]

const ProfilShow = () => {
  showContent.value = 3
}


</script>