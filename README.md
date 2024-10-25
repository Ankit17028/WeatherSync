**Frontend Setup (In Visual Studio Code)**
- Open Frontend in Visual Studio Code: Navigate to the frontend directory (e.g., rule-engine-ast/frontend). Open it in VS Code by running:
  
```bash
code .
```

Install Dependencies:
```bash
npm install
```
Run the Frontend Application:
```bash
npm start
```

- The frontend server should be accessible at http://localhost:3000.

# 🌐 Access the Application
frontend in Production:

Frontend: Visit http://localhost:3000 to access the Real Time Web Application.



# Real-Time Data Processing System for Weather Monitoring

## Overview

The **Real-Time Data Processing System for Weather Monitoring** is a frontend web application built with **React** and **Vite** that retrieves and processes real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/). This application provides summarized insights into weather conditions for major metros in India, focusing on daily weather summaries, alerting thresholds, and visualizations.

## Features

- **Real-time Weather Data**: Continuously fetches weather data every 5 minutes for key Indian metros (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad).
- **Daily Weather Summary**: Computes daily aggregates, including:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
  - Dominant weather condition
- **Alerting System**: Triggers alerts for user-defined thresholds (e.g., temperature exceeding 35°C).
- **Visualizations**: Displays daily summaries and historical trends.
  
## Technologies Used

- **Frontend**: React.js, Vite
- **API**: OpenWeatherMap API

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Ensure Node.js is installed. You can check by running:
  ```bash
  node -v
  npm -v
  ```

## Getting Started
1. **Clone the Repository**
```bash
git clone https://github.com/YourUsername/weather-monitoring-system.git
cd weather-monitoring-system
```
2. **Install Dependencies**
- Install the necessary dependencies using npm:

```bash
npm install
```
3. **Set Up OpenWeatherMap API Key**
- Sign up for a free API key from OpenWeatherMap.
- Create a .env file in the root directory and add your API key:

```plaintext

VITE_OPENWEATHER_API_KEY=your_api_key_here
```

4. **Run the Application**
To start the application, use the following command:

```bash
npm run dev
```
- This will start the Vite development server, and you can access the application at:

```arduino
http://localhost:3000
```
5. **Alerts and Notifications**
- The application uses React Toastify for displaying alerts. Ensure you install it using:

```bash
npm install react-toastify
```

## Usage
Upon accessing the application, it will automatically start fetching weather data every 5 minutes.
You can configure alert thresholds via the settings in the app.
View the daily weather summaries and triggered alerts in the UI.
Test Cases
The application includes several test cases to ensure functionality, including:

**API Connectivity**: Verifies successful connection to the OpenWeatherMap API.
**Data Retrieval**: Simulates API calls to check if weather data is fetched correctly.
**Temperature Conversion**: Tests the conversion of temperature from Kelvin to Celsius.
**Daily Weather Summary**: Confirms the accuracy of daily aggregate calculations.
**Alerting Thresholds**: Ensures alerts are triggered based on configured thresholds.

## Conclusion
The Real-Time Data Processing System for Weather Monitoring provides an efficient way to stay updated on weather conditions in key Indian metros. By leveraging the OpenWeatherMap API and using React and Vite for the frontend, this application offers real-time data processing with insightful visualizations and alerting mechanisms.
