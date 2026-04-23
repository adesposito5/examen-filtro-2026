# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!--Agustina D'Esposito-->
**Fecha:** <!--23/04/2026-->

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Lo primero que hice fue crear el archivo style.css y volcar allí todos los estilos que se encontraban en index para empezar a limpiar el codigo, ya que era lo mas visible.
-->
```

### Lo que le pedí a la IA

```
<!--En style.css cambiame los colors y los background para que cumpla las normas de contraste minimo WCAG AA -->
```

### Análisis del resultado obtenido

```
<!--
  La IA se enfoco mas en cambiar los colores utilizados, supo identificar el contraste que se necesitaba (4.5:1) y me dio una explicacion de que etiqueta esta cambiando, que color le conviene dependiendo del fondo en el que se encuentra. 
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
   En cuanto a los colores el resultado fue bastante satisfactorio, por lo que solo corregi un poco algunos colores a mano, simplemente por gusto propio. Lo que si debí corregir manualmente fue el input focus-visible
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Luego me enfoque en purgar mas a profundidad el codigo cambiando los div y los span, por la correspondiente etiqueta.  
-->
```

### Lo que le pedí a la IA

```
<!-- En index.html cambia todos los div y span que encuentres que puedan ser reemplazados por etiquetas mas semantica. Si sabes que exista una etiqueta que describa lo que hace ese div o span, utilizala-->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
-->
```
