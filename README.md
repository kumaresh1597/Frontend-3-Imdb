# Frontend-3-Imdb
Designed an interactive movie search dashboard using the IMDB API. The dashboard includes two distinct input fields: one for the API key and another for the movie's title. 
Users will be able to retrieve a list of movies that matches their search query by clicking on a singular "Search" button.
Additionally, during the data fetching process, showcasing a custom spinning loader to enhance user experience.The application is user-friendly and responsive.

# Features
- Inputs & Search:
API Key input
Movie title input
Ensure both fields aren't empty before proceeding. Use a single "Search" button to initiate the search.

- Custom Spinning Loader: During the data fetching phase, exhibit a CSS-based spinning loader. This loader will be hidden once data is successfully fetched or if an error occurs.

- Movie Results: For each located movie, dynamically display a card illustrating:
The movie's poster
The title and its release year
A "More Details" option linking to IMDB using `imdbID`

- Error Management: In situations where errors arise (like "Invalid API Key!"), relay meaningful feedback to users.

- Adaptive Design: Ensure the dashboard's optimal performance across mobile and desktop.
