<template>
    <div>
        QrCode content
        <div>
            <slot name="retour" />
            <QRCodeVue3
          value="Simple QR code"
        />
        </div>
    </div>
</template>

<script setup>

import QRCodeVue3 from "qrcode-vue3";
</script>