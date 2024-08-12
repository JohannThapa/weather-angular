# weather-angular

Simple Weather application made from Angular 18 framework with TailwindCSS

-

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

-

## Tech Stack

**Client:** Angular, TailwindCSS, chart.js

**API:** OpenWeather, OpenCageData

-

## Features

- Light/dark mode toggle
- Theme color modes
- Fullscreen mode
- Cross platform
- Responsive

-


## Running Tests

To run tests, run the following command

```bash
  ng test
```

-

## License

[MIT](https://choosealicense.com/licenses/mit/)

-

## Screenshots

![App Screenshot]()

