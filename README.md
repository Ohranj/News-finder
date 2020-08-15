# News Finder

#### Users can click on an area of the map (mapbox), which will then produce a latitude and longitude value. This is then reverse geocoded in order to get the country name. The country is then fed into a secondary api in order to return trending news articles related to it.

#### In addition users can create topics of interest. Which is implimented alongside redux with data eventually stored in mongoDB. User can save up to 10 topics and then search for articles related to them and input a time period to search between if desired or left blank to pull articles from that day.

#### Users are validated using google 0Auth implimented via passport.js strategy

##### Used the MERN stack to create:

Aims of project
*Learn google 0Auth using passport.js strategy
*Impliment redux (and redux-thunk to interact asynchrously with api)

Project issues:
\*Project was originally desired to find festivals for areas of the world and then amended later on to search for news articles due to constraints in finding usable festival data.

\*Articles are presented in their native language which wouldn't be suitable for a production role out. However the option to impliment google translate feature for example is possible.

\*Had desired to impliment ability to save articles to read back later, and had implimented the feature alongisde pagination on the home page {the page whereby users can search the map for a required country and pull up trending articles} but had issues with presenting a clear ui and more importantly to one of my aims, incorporating it within a redux setup, and so removed it and went with adding topics instead. Allowing me to use redux to pass and manipulate the data synchronously whilst the backend saves the data asynchronously.

![Image of Home page](https://github.com/Ohranj/News-finder/blob/master/homepage.PNG)
![Image of Profile page](https://github.com/Ohranj/News-finder/blob/master/Profile.PNG)
![Image of Topic search page](https://github.com/Ohranj/News-finder/blob/master/topic-search.PNG)

<!-- prettier-ignore -->
* Backend
    - Express,
    - Mongo,
    - Passport with Google strategy
* Frontend
    - React,
    - Redux
