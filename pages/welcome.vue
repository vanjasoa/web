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

        <MenuList />
        
        <LevelsProgressBar />

    </div>
</template>