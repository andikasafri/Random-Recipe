# Recipe Explorer

## Table of Contents

- [Introduction](#introduction)
- [How it Works](#how-it-works)
- [Features](#features)
- [Progress](#progress)
- [Demo](#demo)
- [Installation & Contribution](#installation--contribution)
- [API Integration](#api-integration)
- [License](#license)
- [Connect with Me](#connect-with-me)

---

## Introduction

The **Recipe Explorer** is a web application that helps users discover random recipes fetched from TheMealDB API.

### Key Highlights:

- **Enhanced TypeScript Support**: Transitioned from JavaScript to TypeScript for better type safety and maintainability.
- **Improved Error Handling**: Robust handling of API errors ensures smooth user experience.
- **Refined UI**: A clean and responsive interface to display recipes attractively.

---

## How it Works

The app fetches random recipes using TheMealDB API and displays them dynamically. Users can:

1. Click a button to fetch a new recipe.
2. View detailed recipe instructions and ingredients.
3. Enjoy seamless error and loading state management.

---

## Features

- Random recipe generator powered by TheMealDB API.
- Displays recipe details, including ingredients and cooking instructions.
- Modular and readable TypeScript code.
- Comprehensive error handling for better stability.

---

## Progress

### Completed:

- Converted JavaScript codebase to TypeScript.
- Implemented the core functionality to fetch and display random recipes.
- Modularized the codebase for better structure and readability.

### Next Steps:

- Add unit tests for all key components.
- Refine code for optimization and scalability.

---

## Demo

Check out the live demo of the application here: [Live Demo](#) _(Replace this with your demo URL)._

---

## Installation & Contribution

### Clone the Repository

```bash
git clone https://github.com/revou-fsse-oct24/module-3-andikasafri.git
```

````

### Install Dependencies

Navigate to the project directory and run:

```bash
npm install
```

### Start the Application

Run the development server:

```bash
npm run dev
```

---

## API Integration

The application uses TheMealDB API for fetching recipes.

### API Service Code

Below is the TypeScript implementation for API calls:

```typescript
import { ApiError } from '../types/errors';
import { Recipe } from '../types/interfaces';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Fetch data from TheMealDB API.
 *
 * @param endpoint - API endpoint to fetch data from.
 * @returns Response data as a generic type.
 * @throws ApiError if the fetch fails.
 */
const fetchFromApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch (${response.status}): ${response.statusText}`,
        'FETCH_ERROR',
        response.status
      );
    }
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError('An unknown error occurred', 'UNKNOWN_ERROR', 0);
  }
};

/**
 * Fetch a random recipe.
 *
 * @returns A single recipe.
 * @throws ApiError if no recipe is found or if the fetch fails.
 */
export const fetchRandomRecipe = async (): Promise<Recipe> => {
  const data = await fetchFromApi<{ meals: Recipe[] }>('random.php');
  if (!data.meals || data.meals.length === 0) {
    throw new ApiError('No recipe data available.', 'NO_DATA', 0);
  }
  return data.meals[0];
};
```

### Error Handling Code

Error handling is managed using a custom `ApiError` class:

```typescript
export class ApiError extends Error {
  public readonly code: string;
  public readonly retryCount: number;

  constructor(message: string, code: string, retryCount: number = 0) {
    super(message);
    this.code = code;
    this.retryCount = retryCount;
  }
}
```

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 📧 Connect with Me

[![Linkedin Badge](https://img.shields.io/badge/-Andika_Safri-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/andika-safri/)
[![Instagram Badge](https://img.shields.io/badge/-Andika_Safri-purple?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/dikko_pujangga/)
[![Gmail Badge](https://img.shields.io/badge/-andika.saf3@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:andika.saf3@gmail.com)
````
