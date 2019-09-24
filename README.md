# fetch-tech-question
Solution for a technical question for Fetch

## Running the solution with docker (recommended)
If you have docker installed on your host machine, running this web service is very simple. Simply clone the repo, and in the top-level directory run:

`docker-compose up`

This brings up a docker container running Node 12.10.0 and starts the web service, listening locally to port 3000

## Running the solution on the host
If you do *not* have docker installed on yorr host machine, running this web service is still very straightforward simple. You will need NodeJS / npm installed on your system (I tested with node v12.10.0).

After cloning the repo, go to the top-level directory and run:

`npm install`

`npm start`

This should start the web service, listening locally to port 3000.

## Testing the service ##

This web service provides a REST api with a single endpoint: `/pyramid`. This endpoint takes a query parameter: `word`, which must be a string with all letters, no punctuation or spaces. 

The endpoint will return a status of 200 and a value of `true` or `false` depending on if the `word` parameter is a "pyramid word". A word is a 'pyramid' word if you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

Examples:
banana is a pyramid word because you have 1 'b', 2 'n's, and 3 'a's.
bandana is not a pyramid word because you have 1 'b' and 1 'd'.

Example Endpoing calls:

`http://localhost:3000/pyramid?word=banana` (returns 200, true)

`http://localhost:3000/pyramid?word=bandana` (returns 200, false)

`http://localhost:3000/pyramid?word=ban%20ana` (returns 422)