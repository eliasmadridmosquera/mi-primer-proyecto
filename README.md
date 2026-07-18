# Mi primer proyecto en GitHub 🚀

Este es un proyecto de práctica para la **Clase 2 de Git & GitHub — Coding Bootcamps ESPOL**.
El objetivo es que subas este proyecto **desde cero** a un repositorio remoto en GitHub,
practicando todo el flujo completo: `init`, `add`, `commit`, `remote add` y `push`.

## 🧭 Instrucciones

### Paso 1 — Personaliza el proyecto
1. Abre `index.html` y reemplaza `[ESCRIBE TU NOMBRE AQUÍ]` y `[ESCRIBE LA FECHA DE HOY]`.
2. Abre el archivo en tu navegador (doble clic) para ver cómo se ve.

### Paso 2 — Inicializa Git localmente
Abre la terminal dentro de esta carpeta y ejecuta:

```bash
git init
git add .
git commit -m "Primera version de mi proyecto"
```

### Paso 3 — Crea el repositorio en GitHub
1. Entra a [github.com](https://github.com) y da clic en **New repository**.
2. Ponle de nombre `mi-primer-proyecto`.
3. Elige **Public**.
4. **No marques** "Add a README" (este proyecto ya tiene uno y ya tiene commits).
5. Clic en **Create repository**. GitHub te va a mostrar una URL como:
   ```
   https://github.com/tu-usuario/mi-primer-proyecto.git
   ```

### Paso 4 — Conecta y sube tu proyecto
```bash
git branch -M main
git remote add origin https://github.com/tu-usuario/mi-primer-proyecto.git
git push -u origin main
```

> El `git branch -M main` fuerza el nombre de tu rama a `main`, por si tu Git la creó como `master` por defecto — así coincide con la rama que ya existe en tu repo de GitHub.

Si la terminal te pide contraseña, pega tu **Personal Access Token** (no tu contraseña normal).

### Paso 5 — Verifica
Entra a tu repositorio en GitHub y actualiza la página (F5). Deberías ver tus archivos ahí. 🎉

### Paso 6 — Reto (opcional, para practicar el ciclo completo)
1. Abre `style.css` y cambia el color del botón (`#boton { background: ... }`).
2. Guarda el archivo.
3. En la terminal:
   ```bash
   git add .
   git commit -m "Cambiar color del boton"
   git push
   ```
4. Refresca tu repo en GitHub y confirma que el cambio (el commit) aparece en el historial.

## 📎 Comandos usados en este ejercicio

| Acción | Comando |
|---|---|
| Conectar con el remoto (una vez) | `git remote add origin URL` |
| Subir por primera vez | `git push -u origin main` |
| Subir cambios normales | `git push` |
| Ver el estado de tus archivos | `git status` |
| Ver tu historial de commits | `git log --oneline` |
