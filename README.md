# 🔮 Nostradamus AI

Aplicación inteligente de predicción que utiliza múltiples APIs en tiempo real y modelos de inteligencia artificial para generar recomendaciones sobre planificación de eventos, decisiones comerciales y análisis contextual.

---

## 🚀 Demo

👉 https://nostradamus-ia.netlify.app/

---

## 🧠 Descripción

**Nostradamus AI** es un sistema que combina datos externos + IA para generar respuestas inteligentes basadas en contexto real.

El sistema analiza:

- 🌦️ Clima en tiempo real
- 📅 Calendario de feriados (Argentina)
- 💰 Datos económicos (IPC / canasta)
- 📰 Noticias locales
- 🤖 Inteligencia Artificial (OpenAI / Gemini)

---

## ⚙️ Cómo funciona

1. El usuario ingresa un prompt (ej: plan, evento o idea)
2. El backend consulta múltiples APIs:
   - Calendario de feriados
   - Clima
   - Economía
   - Noticias
3. Se consolida toda la información
4. Un modelo de IA genera una respuesta final contextualizada
5. Se devuelve una predicción inteligente

---

## 🔌 APIs utilizadas

### 📅 Calendario

- https://api.argentinadatos.com/v1/feriados/{year}

### 💰 Economía

- https://api.argly.com.ar/api/ipc
- https://api.argly.com.ar/api/canasta

### 📰 Noticias

- https://gnews.io/api/v4/search

### 🌦️ Clima

- https://www.meteosource.com/api/v1/free/point

### 🤖 Inteligencia Artificial

- OpenAI API
- Google Gemini API (configurable)

---

## 🛠️ Stack tecnológico

### Frontend

- React
- Framer Motion
- Tailwind CSS
- tsParticles (background animado)
- Axios

### Backend

- Node.js
- Express
- PostgreSQL (Neon)
- OpenAI / Gemini SDK
- Axios
- dotenv
- cors
- express-rate-limit

---

## 🗄️ Base de datos

Se registra cada request en PostgreSQL:

- prompt del usuario
- respuesta de IA
- provider utilizado
- tiempo de respuesta
- APIs utilizadas

---

## 📊 Ejemplo de uso

```txt
Prompt:
"Quiero organizar un evento al aire libre la semana que viene en Buenos Aires"

Respuesta:
La IA analiza clima, feriados, economía y noticias para sugerir condiciones óptimas y riesgos.
```
