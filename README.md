# Weather App

### Description:

<p>
  Weather app created using NextJS, React, and Typescript.
  <br>
  Select a location on the map then press the button to receive the current weather data.
</p>

---

### Features:

- [x] React + Typescript
- [x] NextJS
- [x] Linting (ESLint)
- [x] Formatting (Prettier)
- [x] Testing (Jest)
- [x] Containerized (Docker)

---
### Preview:
<details open>
  <summary>Show</summary>
  <img src="https://github.com/user-attachments/assets/998ec1b0-b6e1-4b4e-8cdc-3e01a32ba245" alt="image" style="max-width: 100%;">
  <br>
</details>

---

### Developer Notes:

```bash
# Clone Repository
git clone https://github.com/sethcg/React-Weather-App.git

# Install Dependencies
npm install

# Run Application
npm run dev
```

---

### Docker Notes:

<p>
  Below are docker commands to setup both the development and production ready environments.
</p>

<details closed>
<summary>Development</summary>
  
```bash
# Create docker network
docker network create react-weather-app-network

# Build docker image
docker compose -f compose.dev.yaml build

# Run docker container
docker compose -f compose.dev.yaml up -d
```

</details>

<details closed>
<summary>Production</summary>

```bash
# Create docker network
docker network create react-weather-app-network

# Build docker image
docker compose -f compose.prod.yaml build

# Run docker container
docker compose -f compose.prod.yaml up -d
```

</details>

<details closed>
<summary>Remove Image/Container</summary>

```bash
# Stop Docker Container
docker stop react-weather-app

# Remove/Free Space
docker system prune -af --volumes
```

</details>

---

### Credit:

- [OpenWeather API](https://openweathermap.org/)
- [Leaflet](https://leafletjs.com/)
- [Carto Maps](https://carto.com/basemaps)

<br />

> The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding.
