# Riby Test By Ugwu Isaac Giphy search with added funtionality
run it locally with
`npm install` and `npm run start`

## Frontend
- Basic, custom 12-col CSS grid added for responsive scaling.
- Redux added for better scaling and state management
    - Probably not necessary with the small amount of state management required right now, but offers greater scalability.
    - Using dispatch feels cleaner than modifying state directly anyways.
- Makes use of upcoming JS features such as promises and fetch (polyfilled)
- Use intersection observers (with polyfill) to create an infinite scroll experience
    - A reducer adds additional gifs to the current collection

## Potential improvements
- Add paddles to pop-up modal to use a carousel-like experience for browsing
    - Could be implemented by instead passing all gif data to the modal for easy switching.

