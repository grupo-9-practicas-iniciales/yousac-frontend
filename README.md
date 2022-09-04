# informe-4-frontend

Bienvenido al repositorio de YOUSAC-frontend 🐱‍🏍

## Inicio

Para empezar, puedes clonar el repositorio.

```bash
> git clone https://github.com/grupo-9-practicas-iniciales/informe-4-frontend.git
```


Vamos a trabajar con npm, por lo que el siguiente paso es instalar las dependencias

```bash
> npm install
```

Despues de eso puedes correr la aplicación con:

```bash
> npm run dev
```

## Convenciones

### Branches

Trabajaremos con gitflow, por lo que para trabajar en alguna nueva funcionalidad utilizaremos ramas.

Puedes tomar alguno de los issues del repositorio siempre que alguien no esté trabajando en el y crear una rama para esa funcionalidad. Para mantener el orden se tiene que crear la branch de la siguiente manera:

```
feature/nombre-issue-<numero-issue>
```

* Puedes ver el [Projecto](https://github.com/grupo-9-practicas-iniciales/informe-4-frontend/projects) del repositorio para saber en que se está trabajando actualmente.

* Antes de hacer push al el repositorio es recomendable hacer el build, se hace de la siguente manera `npm run build`

* Verifica siempre la rama en la que estas trajando 😔

### Commits

El nombre de los commits se debe hacer de esta manera

```
[ ADD/FIX ] <breve descripción de lo hecho>
```

* Puedes escoger entre `ADD` o `FIX` en función de qué estes haciendo

Luego de que termines con la funcionalidad puedes crear una pull request que apuntará siempre a la rama `develop` para que posteriomente con el equipo se analice su merge.

## Producción

Cuando se considere oportuno se hará el merge de la rama `develop` con la rama `main` para que esta pase a 'producción'. Estaremos trabajando con Vercel para hostear la aplicación.

