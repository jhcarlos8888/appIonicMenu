# appIonicMenu
App construida en Ionic que permitirá un manejo básico de operaciones para clientes

# Recomendaciones para utiliza capacitor

# Instalar capacitor en el proyecto


npm i @capacitor/core
npm i -D @capacitor/cli


# Se inicializa archivo de configuracion de capacitor
npx cap init


# Se adiciona soporte de apps Android y Ios para la app

npm i @capacitor/android @capacitor/ios

# Se genera archivos compilados por medio de Ionic para utilizarse como app nativa

ionic build

# Se sincroniza archivos compilados con la arquitectura de android o Ios por medio de capacitor

npx cap sync
