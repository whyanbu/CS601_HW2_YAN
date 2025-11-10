# Identify Fruits and Vegetables
A webpage for testing classification of fruits and vegetables.  Drag and drop all the fruits and vegetables to their respective drop area.  If matched, the element will added to the drop area and turn to light sky blue.  If unmatch, the element will stay in the original list.  Result will also be shown at the bottom of the webpage.  

## Table of Contents
Features  
Installation  
Usage  
Project Structure  

### Features
Written with vanilla JavaScript without CSS frameworks.  
JSON file is hosted in github page: https://whyanbu.github.io/files/cs601-assignment2-data.json  

Similar data is also stored in Firebase, and an Express.js API deployed on Vercel exposes the data as a JSON return via an HTTP GET endpoint as a second data source:  
https://cs601projectapi.vercel.app/get  


### Installation
Clone the repository:

bash  
git clone https://github.com/whyanbu/CS601_HW2_YAN.git  
cd CS601_HW2_YAN  
Open index.html directly in your web browser.  

No build or dependencies needed.  

### Usage
All application logic is in the /js directory.  

Start the app by opening index.html.  

### Project Structure
```
CS601_HW2_YAN/  
│  
├── js/  
│   └── main.js  
├── css/  
│   └── main.css  
├── index.html
└── README.md  
```
index.html: Entry point for the app.  
