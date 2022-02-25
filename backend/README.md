# WCC 2022 Academy Homework: Backend Task

## Pre-requisites:

- (NodeJS)[https://nodejs.org/en/download/]

## Setup:

1. Fork this project using the `fork` button in the top right of the github page
2. Clone your forked project with  `git clone {project_ssh_url}` (e.g. `git clone git@github.com:VardenisPavardenis/homework-2022.git`)
3. Open terminal in `backend` folder
4. Install node modules with `npm install`
5. Start hacking with `npm run dev`


## Task Specifications

- Use this project as a starting point
- Create an endpoint `/autocomplete`:
    - Takes in a string as a parameter
    - Returns relevant entries from the static data file (`src/data/smarty.json`)[https://drive.google.com/file/d/1sHn01eO0t9dSN7CQDCrbMHnBAIKyXn0N/view?usp=sharing]
- Limit response to a max of 10 entries
