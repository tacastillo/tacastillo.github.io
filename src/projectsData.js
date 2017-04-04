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
		url: "https://github.com/tacastillo/learningcurated",
		img: "learningcurated",
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
		url: "http://usf-cs360-2016.github.io/tacastillo-cs360/project/",
		img: "chipotle",
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
		name: "Social Media Heatmap",
		description: "Built a heat map that illustrates the popularity of locations in an area based on unique Foursquare checkins. In this project, I learned how to work with existing APIs (Google Maps and Foursquare), front end development, jQuery, client-side networking, user interaction and data visualization.",
		parent: "Projects",
		url: "https://github.com/tacastillo/wheres-it-lit",
		img: "wheresitlit",
		value: 15
	},
	{ name: "REST APIs", parent: "Social Media Heatmap", value: 1},
	{ name: "D3.js", parent: "Social Media Heatmap", value: 4},
	{ name: "Front End", parent: "Social Media Heatmap", value: 2},
	{ name: "Google Maps API", parent: "Social Media Heatmap", value: 2},
	{ name: "jQuery", parent: "Social Media Heatmap", value: 2},
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
	{ name: "Python", parent: "The One With the Overanalyzing", value: 5},
	{
		name: "GPU-Accelerated Data Analysis",
		description: "For my Senior Capstone project, I worked as a team of three creating a framework to make large-scale visualizations fast and efficient by utilizing the GPU throughout the entire pipeline: from processing the data to rendering the visualizations. We collected thousands of tweets through the Twitter Streaming API and stored the relevant metadata on an AWS RDS database.",
		parent: "Projects",
		url: "https://github.com/tacastillo/twitter-gpu-visualizations",
		img: "gpuviz",
		value: 20
	},
	{ name: "Data Vis", parent: "GPU-Accelerated Data Analysis", value: 8},
	{ name: "Web Dev", parent: "GPU-Accelerated Data Analysis", value: 4},
	{ name: "Rest APIs", parent: "GPU-Accelerated Data Analysis", value: 2},
	{ name: "Data Mining", parent: "GPU-Accelerated Data Analysis", value: 7},
	{ name: "Node.js", parent: "GPU-Accelerated Data Analysis", value: 3},
]