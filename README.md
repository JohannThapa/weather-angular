# weather-angular

Simple Weather application made from Angular 18 framework with TailwindCSS

## Installation

Install `pnpm` sing `npm`

```bash
npm install -g pnpm
// or
npm install -g @pnpm/exe
```

install packages

```bash
pnpm install
```

run application

```bash
ng serve
```

## Environment Variables

To run this project, you will need to add the following environment variables to your environment.ts file

`openWeatherApiKey`

`openCageApiKey`



## API Reference

### OpenWeather API

```http
  GET https://api.openweathermap.org/data/2.5/weather&appid=${openWeatherApiKey}
```

| environment | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `openWeatherApiKey` | `string` | **Required**. openWeather API key |

### OpenCageData API

```http
  GET https://api.opencagedata.com/geocode/v1/json&key=${openCageApiKey}
```

| environment | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `openCageApiKey`      | `string` | **Required**. opencagedata API key |


## Tech Stack

**Client:** Angular, TailwindCSS, chart.js

**API:** OpenWeather, OpenCageData


## Features

- Light/dark mode toggle
- Theme color modes
- Fullscreen mode
- Cross platform
- Responsive

## Running Tests

To run tests, run the following command

```bash
  ng test
```

## Running Prettier

To run prettier, run the following command

```bash
  pnpm run prettier
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Screenshots

![Address Form](https://github.com/user-attachments/assets/39180a83-122e-4634-90c3-ba9410245f86)

![Charts](https://github.com/user-attachments/assets/ad13166f-16b1-48fb-9748-97ca4a43fba1)

![Dark Mode](https://github.com/user-attachments/assets/f14d341f-3f87-4a67-b27d-34fb1e072eda)
