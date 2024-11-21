# ITE5315 - Assignment 2: Pet Gallery Application

## Project Overview
A Node.js/Express web application that showcases a pet gallery using Handlebars templating engine. The application demonstrates the use of layouts, partials, and dynamic content rendering.

## Project Structure
```
N01610330_AsNo2/
├── app.js                  # Main application file
├── package.json           # Project dependencies and scripts
├── public/               # Static files
│   ├── images/          # Pet images
│   └── stylesheets/     # CSS files
│       └── style.css
└── views/               # Handlebars templates
    ├── layouts/         # Layout templates
    │   └── index.hbs    # Main layout
    ├── partials/        # Reusable components
    │   ├── header.hbs   # Header partial
    │   └── footer.hbs   # Footer partial
    └── main.hbs         # Main content template
```

## Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation
1. Clone or download the project
2. Navigate to project directory:
   ```bash
   cd N01610330_AsNo2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application
1. Start the server:
   ```bash
   node app.js
   ```
2. Open browser and visit:
   ```
   http://localhost:3000
   ```

## Features
- Dynamic pet gallery display
- Responsive design
- Header with student information
- Footer with contact details
- Modular template structure using Handlebars

## Dependencies
- Express.js - Web application framework
- Express-Handlebars - Templating engine
- Additional development dependencies listed in package.json

## File Descriptions
- `app.js` - Main application logic and server setup
- `views/layouts/index.hbs` - Main layout template
- `views/main.hbs` - Pet gallery content template
- `views/partials/header.hbs` - Header component
- `views/partials/footer.hbs` - Footer component
- `public/stylesheets/style.css` - Custom styles

## Routes
- GET `/` - Displays the pet gallery

## Student Information
- Name: Hitesh Jha

## Screenshots
[Add screenshots of your running application here]

## Important Notes
- The application must run locally without startup errors
- Late submissions will have a 10% deduction
- Submissions after three days will receive a grade of zero (0)
- Assignment will be checked on November 26th in class

## Troubleshooting
If you encounter issues:
1. Verify all dependencies are installed:
   ```bash
   npm install
   ```
2. Check correct file structure
3. Ensure port 3000 is available
4. Verify all required files exist

## Additional Resources
- [Express.js Documentation](https://expressjs.com/)
- [Handlebars Documentation](https://handlebarsjs.com/)
- [Node.js Documentation](https://nodejs.org/)
