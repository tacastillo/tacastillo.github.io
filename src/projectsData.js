export const PROJECTS_DATA = [
	{
		name: "Projects",
		description: "Click on a Project to find out more about it, and then click on the outermost circle to return.",
		parent: "",
		value: 110
	},
	{
		name: "learningCurated",
		description: "Written in Node.js, React.js as a frontend framework, and MongoDB as its database. Created a responsive website where users could submit, rate, and manage content based on learning styles. Created an online database and made an API to manage it, how to deploy a full stack application onto the web, use a front-end framework and control data flow using it.",
		parent: "Projects",
		value: 25
	},
	{ name: "MEAN", parent: "learningCurated", value: 3},
	{ name: "Full Stack" , parent: "learningCurated", value: 4},
	{ name: "MongoDB", parent: "learningCurated", value: 5},
	{ name: "React.js", parent: "learningCurated", value: 6},
	{ name: "Express", parent: "learningCurated", value: 3},
	{ name: "Node.js", parent: "learningCurated", value: 5},
	{
		name: "Chipotle Visualizations",
		description: "Created three interactive web visualizations in d3.js to observe and analyze raw data of 4000 Chipotle orders and nutritional information. Pre-processing was done in Python.",
		parent: "Projects",
		value: 25
	},
	{ name: "Front End", parent: "Chipotle Visualizations", value: 2},
	{ name: "D3.js", parent: "Chipotle Visualizations", value: 10},
	{ name: "Python", parent: "Chipotle Visualizations", value: 5},
	{ name: "Data Analysis", parent: "Chipotle Visualizations", value: 2},
	{ name: "Data Visualization", parent: "Chipotle Visualizations", value: 6},
	{ 
		name: "Search Engine",
		description: "Created the front and back end of an Internet search engine that recursively searched through websites, scraped more links, stored word locations in an advanced data structure called an Inverted Index, then used a ranking algorithm (TFIDF) to rank and compute relevant pages in a search results page. Used MySQL databases to store user sessions and search history.",
		parent: "Projects",
		value: 10
	},
	{ name: "Java", parent: "Search Engine", value: 4},
	{ name: "SQL", parent: "Search Engine", value: 3},
	{ name: "Databases", parent: "Search Engine", value: 1},
	{ name: "Multithreading", parent: "Search Engine", value: 4},
	{ name: "Web", parent: "Search Engine", value: 1},
	{
		name: "Social Media Location Heatmap",
		description: "Built a heat map that illustrates the popularity of locations in an area based on unique Foursquare checkins. In this project, I learned how to work with existing APIs (Google Maps and Foursquare), front end development, jQuery, client-side networking, user interaction and data visualization.",
		parent: "Projects",
		value: 15
	},
	{ name: "REST APIs", parent: "Social Media Location Heatmap", value: 2},
	{ name: "D3.js", parent: "Social Media Location Heatmap", value: 5},
	{ name: "Front End", parent: "Social Media Location Heatmap", value: 3},
	{ name: "Google Maps API", parent: "Social Media Location Heatmap", value: 2},
	{ name: "jQuery", parent: "Social Media Location Heatmap", value: 3},
	{
		name: "The One With the Overanalyzing",
		description: "From all 10 seasons of Friends, a collection of visualizations created after mining, processing, analyzing and visualizing scripts.",
		parent: "Projects",
		value: 35
	},
	{ name: "Data Vis", parent: "The One With the Overanalyzing", value: 5},
	{ name: "Web Dev", parent: "The One With the Overanalyzing", value: 4},
	{ name: "Machine Learning", parent: "The One With the Overanalyzing", value: 6},
	{ name: "NLP", parent: "The One With the Overanalyzing", value: 8},
	{ name: "Data Mining", parent: "The One With the Overanalyzing", value: 5},
	{ name: "Python", parent: "The One With the Overanalyzing", value: 5}
]