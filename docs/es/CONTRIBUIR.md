# Contribuir al proyecto
<small>Lectura de 8 minutos</small>

**¿Te gusta construir tu propio entorno 💫?** Valoramos las mentes creativas.

Contribuir es simple: solo necesitas conocer los principios, estilos de diseño y métricas del material. Puedes consultarlos aquí:

+ [Principios →](./01_principios.md)
+ [Diseño →](./02_diseño.md)
+ [Métricas →](./03_metricas.md)

Si ya estás familiarizado con estos fundamentos, es crucial que revises los **términos de contribución**, **prácticas** y **recomendaciones**.

**En esta sección**:

+ [Participación consciente ↴](#-participación-consciente)
+ [Prácticas de contribución ↴](#-prácticas-de-contribución)
+ [Recomendaciones ↴](#-recomendaciones)
+ [Sistema de etiquetas ↴](#-sistema-de-etiquetas)
+ [Otras cláusulas ↴](#-otras-cláusulas)

---

## 🙇‍♂️ Participación consciente

Al contribuir, ayudas a que más personas encuentren el material que están buscando. Por eso, es importante que tu colaboración esté alineada con los objetivos del proyecto.

### ¿Cómo puedes contribuir?

1. **Nuevos iconos**  
   Puedes crear nuevos iconos subiendo el archivo SVG a la categoría correspondiente. Clona el repositorio y envía tu *pull request* (PR) para la revisión semanal.

2. **Sugerencias**  
   Si sientes que hace falta algún icono, puedes enviar tus ideas creando un nuevo *issue*. Se revisan actualizaciones semanalmente.

3. **Traducciones**  
   La inclusión es fundamental. Si crees que falta un idioma, apóyanos enviando tu propia traducción del material.

Antes de iniciar, te recomendamos explorar los contenidos a continuación.

---

## ⛳ Prácticas de contribución

Si decides crear tu propio ícono, sigue estos pasos para asegurar que tus esfuerzos sean aprobados y que tu contribución sea **válida**, **revisable** y **coherente** con el proyecto:

1. ### Selección  
   Elige con claridad la temática y estilo del icono (chubby o flattered). Puedes revisar esto en los [principios base →](./01_principios.md).

2. ### Revisión  
   Verifica si el icono que deseas crear ya existe, para evitar duplicados. Revisa la [lista de categorías →](../../icons/README.md).

3. ### Guías  
   Si no existe el icono, puedes comenzar a diseñar. Usa las guías de rejilla y formas base. 
	+ [Formas Clave →](../../icons/material/Ai-key-shapes-cb.png)
	+ [Formas clave: circulo →](../../icons/material/Ai-key-shapes-circle-cb.png)
	+ [Formas clave: triangulo →](../../icons/material/Ai-key-shapes-triangle-cb.png)

5. ### Publicación  
   Crea un PR con tu icono en formato SVG y PNG (fondo transparente). Consulta los [requisitos de publicación ↴](#requisitos-de-publicación)

6. ### Aprobación  
   Tu PR será revisado para comprobar que cumple con los estándares. Si es rechazado y crees que fue por error, puedes abrir una discusión y la evaluaremos con gusto.

### Requisitos de publicación

+ Iconos tipo **chubby** se almacenan en:
  - SVG: `./icons/chubby/svg/<categoría>`
  - PNG: `./icons/chubby/png/<categoría>`

+ Iconos tipo **flattered** se almacenan en:
  - SVG: `./icons/flattered/svg/<categoría>`
  - PNG: `./icons/flattered/png/<categoría>`

+ Cada icono debe añadirse al índice en orden alfabético, dentro de su tipo y categoría. [Ver índice →](../../icons/README.md)

+ Issues, PRs y commits deben seguir un formato específico. Consulta las plantillas:

	+ [🆕 Add a new icon](../../.github/PULL_REQUEST_TEMPLATE/pull_request_icon.md)
	+ [🔀 Request an Icon](../../.github/ISSUE_TEMPLATE/new_icon_request.md)
	+ [🐞 Bug report](../../.github/ISSUE_TEMPLATE/bug_report.md)
	+ [🆎 Translation request](../../.github/PULL_REQUEST_TEMPLATE/translation_request)


---

## 📋 Recomendaciones

Para obtener los mejores resultados:

1. **Bocetar es clave**  
   Dibuja tus ideas antes de digitalizarlas. Esto es especialmente útil con el estilo chubby.

2. **Sigue las guías**  
   Usa las rejillas y formas base proporcionadas para mantener coherencia.

3. **Pregunta sin miedo**  
   Si tienes dudas, abre una discusión en GitHub o crea un issue.

---

## 🏷️ Sistema de etiquetas

Para mantener el orden y facilitar el seguimiento, usamos las siguientes etiquetas en PRs e Issues:

| Etiqueta                    | Descripción                         |
| --------------------------- | ----------------------------------- |
| `status: pending`           | PR en espera de revisión            |
| `status: approved`          | PR aprobado y listo para merge      |
| `status: changes requested` | Cambios solicitados al contribuidor |
| `status: rejected`          | PR o Issue rechazado                |
| `type: icon`                | Contribución de nuevos iconos       |
| `type: translation`         | Contribución de traducciones        |
| `type: suggestion`          | Nueva sugerencia o recomendación    |
| `help-wanted`               | Se requiere ayuda de la comunidad   |
| `good-first-issue`          | Ideal para nuevos contribuidores    |

---

## 🧾 Otras cláusulas

### Nombrar  de los iconos
```md
Ai-[icon-name]-[style]
```

**Donde**:

+ `Ai` → Prefijo fijo del proyecto (Altered Icons).

+ `[icon-name]` → Nombre del icono en **kebab-case**.

+ `[style]` → Sufijo que indica el estilo:
	+ `cb` para **chubby**.
	+ `ft` para **flattered**.

**Ejemplos**:

+ Icono de mensaje (Chubby): `Ai-message-box-cb.svg`
+ Icono de configuración (Flattered): `Ai-settings-gear-ft.svg`
+ Icono de usuario (Chubby): `Ai-user-profile-cb.png`

⚠️ **Cosas que debes evitar**

- ❌ No usar espacios o mayúsculas: `Ai MessageBox-CB.svg`

- ❌ No incluir idioma o palabras redundantes: `Ai-icon-MessageBox-chubby-final.svg`

- ❌ No usar caracteres especiales: `Ai-message@box(cb).svg`

### Idioma
Para mantener la coherencia y facilitar la colaboración internacional, **todos los issues, pull requests, commits y nombres de archivos (incluyendo los iconos)** deben estar redactados en **inglés**. Esto incluye:

+ Títulos y descripciones de *Issues*
+ Mensajes y encabezados de *Pull Requests*
+ Commits y comentarios técnicos
+ Nombres de los archivos SVG/PNG de los iconos

> Esto permite que desarrolladores de distintas partes del mundo puedan revisar y colaborar fácilmente con el proyecto.


### Íconos no aprobados

Aunque una contribución no haya sido aprobada, consideramos valioso el esfuerzo. Si este es visto cómo referencia o inspiración, el ícono será movido a la carpeta `./icons/community-drafts/`.

Para esto se siguen algunas de las reglas de publicación: será necesario una versión en formato SVG y en PNG, ambos dentro de la carpeta correspondiente dentro de `community-drafts`.

Todos los archivos dentro de esta carpeta mantendrán el nombre del contribuidor en el historial del repositorio. Los íconos pueden ser retomados y ajustados en el futuro para su eventual aprobación.

Ver sobre esto en [iconos no aprobados →](../../icons/community-drafts/README.md).


### Aprobación secundaria


---

## 🔮 ¿Primera vez contribuyendo en GitHub?

Si eres nuevo en el mundo del código abierto, visita estos enlaces útiles:

+ [¿Qué es un Issue en GitHub? (visitar)](https://docs.github.com/es/issues/tracking-your-work-with-issues/about-issues)
+ [Cómo contribuir en GitHub (visitar)](https://docs.github.com/es/get-started/quickstart/contributing-to-projects)
+ [Cómo crear un Pull Request (visitar)](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests)