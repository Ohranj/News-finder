# News Finder

### Heroku

https://news-finder-app.herokuapp.com/

Please allow google location services (as map renders centralising on your location and wont render without allowing)

### Description

Users can click on an area of the map (mapbox), which will then produce a latitude and longitude value. This is then reverse geocoded in order to get the country name. The country is then fed into a secondary api in order to return trending news articles related to it.

In addition users can create topics of interest. Which is implimented alongside redux with data eventually stored in mongoDB. User can save up to 10 topics and then search for articles related to them and input a time period to search between if desired or left blank to pull articles from that day.

Users are validated using google 0Auth implimented via passport.js strategy

### Technology used - MERN stack

<!-- prettier-ignore -->
* Backend
    - Express,
    - Mongo,
    - Passport with Google strategy
* Frontend
    - React,
    - Redux

#### Aims of project:

\*Learn google 0Auth using passport.js strategy

\*Impliment redux (and redux-thunk to interact asynchrously with api)

#### Project issues:

\*Project was originally desired to find festivals for areas of the world and then amended later on to search for news articles due to constraints in finding usable festival data.

\*Articles are presented in their native language which wouldn't be suitable for a production role out (i.e if a user selects France, the articles returned are in French). However the option to impliment google translate feature, for example, is possible.

\*Had desired to impliment ability to save articles to read back later, and had implimented the feature alongisde pagination on the home page {the page whereby users can pull up trending articles by selecting coutries from the map} but had issues incorporating it for learning redux features, which was one of my initial aims, and so removed it and went with adding subject topics instead. Allowing me to use redux to pass and manipulate the data synchronously whilst the backend saves the data asynchronously.

\*Heroku deplyment issue in that when selecting a country on the map that the news api doesnt suppot (such as Denmark) causes the page to turn blank requiring a refresh (likely issue in how I handled the error, but worked in development so hadnt spotted)

#### Improvements that I would make If I decide to write the project again:

\*Add ability to search for particular sources

\*Translate articles

\*Allow users to save articles for reading back at a later date

\*Various ui changes such as background colour changes on active buttons (when a user selects a topic button to search articles for, the button currently remains the same colour) or improved layout when rendering articles (for example when selecting a country on the map if articles have already been rendered these remain in place, whilst the new countries name changes, until you click to render new articles)

### Images

Home page allowing users to click a country on the map to pull articles from it
![Image of Home page](https://github.com/Ohranj/News-finder/blob/master/homepage.PNG)

Users profile page where they can add and delete topics
![Image of Profile page](https://github.com/Ohranj/News-finder/blob/master/Profile.PNG)

Topic search page. The users topics are laid out at the top allowing them to quickly search for articles that they may enjoy
![Image of Topic search page](https://github.com/Ohranj/News-finder/blob/master/topic-search.PNG)
