# Tonos

Selector de paletas HEX para diseño web: doce familias, diez tonalidades (50–900) por familia y copia al portapapeles con un clic.

## Web

Sitio estático, sin dependencias ni compilación. Abre `index.html` mediante un servidor local o publícalo desde la raíz del repositorio con GitHub Pages. Las familias se abren en la misma página mediante el fragmento de URL.

## Extensión de Firefox

El código de la extensión está en `manifest.json`, `popup.html`, `popup.css`, `popup.js` e `icons/`. El popup funciona sin conexión y contiene las mismas paletas que la web. Para generar el ZIP, comprime **solo estos archivos y la carpeta `icons/`**, con `manifest.json` en la raíz.

Para probarla temporalmente, entra en `about:debugging` → **Este Firefox** → **Cargar complemento temporal** y selecciona `manifest.json` o el ZIP. La instalación temporal desaparece al reiniciar Firefox. Para instalarla de forma permanente en Firefox normal hay que enviarla a Mozilla para firma.
