# Warhammer Fantasy Quiz

![AmIResponsive](assets/readme-files/AmIResponsive.PNG)

# Introduction
This website aims to test users on their knowledge in the Warhammer Fantasy Universe.

My goal is to create a functioning, responsive and fun quiz that incorporates Javascript in its fundemental design.

[Click here To View Site Live!](https://matex600.github.io/Warhammer-Quiz/)

It is recommended for users to open any links found in this README with Ctrl + left mouse button (Windows) Control + click (Mac)
# UX

## User Stories
* New Users 
  1. As a new user I want see a clearly laid out site.
  2. As a new user I want to experience a site with good visual design.
  3. As a new user I want to find a section that shows me the rules of the game.
  4. As a new user I want the site to have an interactive design
  5. As a new user I want ease of access and fluid navigation through different pages and game functions.
  6. As a new user I want the site to be responsive on multiple different displays and devices.

* Returning Users
  1. As a returning user I want to see improvements and additions to game functions and site design.
  2. As a returning user I want to see more quizes with new and interesting questions.
  3. As a returning user I want to see continued performance and accessability improvements.
  4. As a returning user I want to see if I can improve my previous high score.

## I have included the following for my target audience

* Home page with navigation, game start and leaderboard buttons.
* About page with navigation, showing rules and some background on game.
* A hero-image that is catchy and has "Warhammer" in its content helping users identify site.

# Site Design

## Composition
* [Inknut Antiqua](https://fonts.google.com/specimen/Inknut+Antiqua?query=inknut). - Font is being used for all headings.
* [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mon). - Font is used for all other text 
* I feel that these two fonts fit
  well together and compliment my site. I have used sans serif as backup font,
  this is a general font and easy to read.
* I have used appropriate images for the project idea and purpose.
* The font size I have used is 1.7em for headings, 1.3em for question and other body text and 16px for buttons.
  I feel that these font sizes work well and emphasise the importance of the elements.
## Colour Scheme
* color: rgba(29, 29, 27, 0.9); Site background with transparency 0.9 to create my desired effect.
* color: #FFD700; is used for the sites "game-area" I feel it fits with my chosen theme and helps with readability.
* color: #00008B; for when the user hovers over a button as well as an underline to help the user with cursor location.
* color: #000000; I chose this colour for text inside the gold game areas to improve readability.
* color: #00FF00; I used this color for the score area for a winning point.
* color: #FFFFFF; I have used this color for negative score in score area.
* I have primarily used Hex for my colour scheme but to reach the effect for my background I used rgba also.
* All the colours have been chosen to fit with the theme I am going for as well as having high accessibility.

![Eightshapes Contrast Grid](assets/readme-files/Contrast-Grid-P2.png)

[Eightshapes Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%231D1D1B%2Crgba(29%2C%2029%2C%2027%2C%201)%0D%0A%23FFD700%0D%0A%23000000%2C%20Black%0D%0A%2300008B%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp)

## Wireframes

### Wireframes created using Balsamiq

### PC

![Pc home](assets/readme-files/pc-home-wireframes.PNG)

![Pc quiz](assets/readme-files/pc-quiz-wireframes.PNG)

![Pc about](assets/readme-files/pc-about-wireframe.PNG)

### Tablet

![Tablet home](assets/readme-files/tablet-home-wireframe.png)

![Tablet quiz](assets/readme-files/tablet-quiz-wireframe.PNG)

![Tablet about](assets/readme-files/tablet-about-wireframe.png)

### Mobile

![Mobile home](assets/readme-files/mobile-home-wireframes.PNG)

![Mobile quiz](assets/readme-files/mobile-quiz-wireframe.PNG)

![Mobile about](assets/readme-files/mobile-about-wireframe.PNG)

# Site Features
 
 # Home page

* All site features are responsive on desktop, tablet and mobile.

## Game Logo
 ![Game logo](assets/readme-files/gamelogo.PNG)
 * This shows the user what the game instantly.

## Navigation
 ![Nav Bar](assets/readme-files/navbar.PNG)
 * Navigation bar with Home and About for easy access across different pages.
 * Responsive and has hover feature to help user identify where cursor is located.

## Title
 ![Site Title](assets/readme-files/title.PNG)
 * Title of the site challenging user into playing the game.

## Start Button
 ![Start Button](assets/readme-files/startbtn.PNG)
 * Start button to take user to game page and area.
 * Uses cursor:pointer to help user identify cursor positon.

# About Page

## Information area
![InfoArea](assets/readme-files/aboutarea.PNG)
* Short and simple information area.

# Quiz Page

## Score area
![ScoreArea](assets/readme-files/scores.PNG)
* Displays score for the user to track their progress.

## Game area
![Gamestart](assets/readme-files/gamestart.PNG)
* Initial game screen with "Play game" button

![GameArea](assets/readme-files/gamearea.PNG)
* The quiz takes place here with 10 questions
* 2 answers each randomised with javascript
* Selecting answers will award score to user

![GameEndWin](assets/readme-files/victoryscreen.PNG)
* This screen uses javascript to show user how many questions
* they got right and a "Try Again?" button to let user reset quiz.

![GameEndDraw](assets/readme-files/drawscreen.PNG)
* This screen is the same as above but shows a draw if user
* Gets 5 right and 5 wrong questions.

![GameEndLose](assets/readme-files/losescreen.PNG)
* This screen depicts a loss by the user if they end the quiz
* With more wrong than right answers.
# Technologies Useds

## Coding Languages
* [HTML5](https://en.wikipedia.org/wiki/HTML5). - Backbone of the site.
* [CSS3](https://en.wikipedia.org/wiki/CSS). - Styles the site.
* [JS](https://en.wikipedia.org/wiki/JavaScript). - For Contacting the DOM.

# Libraries and tools
 * [Google fonts](https://fonts.google.com/). - I used Google Fonts for selecting site fonts.
 * [Github](https://github.com/). - I used github to store and release project.
 * [Gitpod](https://www.gitpod.io/). - I used gitpod to create and write code.
 * [Font Awesome](https://fontawesome.com/). - I used Font Awesome for interesting font icons.
 * [Light House](https://developers.google.com/web/tools/lighthouse). - I used this developer tool in chrome to test performance, accessibility, best practices and SEO.
 * [AmIresponsive](http://ami.responsivedesign.is/). - I used this site to add image to the top of README
 and to see how my site appears on multiple devices at the same time.

# Testing

## Validation

## HTML
 * [W3C HTML Validator](https://validator.w3.org/)

   * [Index Results - Pass](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmatex600.github.io%2FWarhammer-Quiz%2Findex.html)
   * [About Results - Pass](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmatex600.github.io%2FWarhammer-Quiz%2Fabout.html)
   * [Quiz Results - Pass](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmatex600.github.io%2FWarhammer-Quiz%2Fquiz.html)
## CSS
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
   * [CSS Results](http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmatex600.github.io%2FWarhammer-Quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=)

 ![Valid CSS!](https://jigsaw.w3.org/css-validator/images/vcss)

## JS
 * [JSHint](https://jshint.com/)

 * No Errors in JSHint

![JSHint Results](assets/readme-files/JSHint.PNG)

* Testing with JSHint
   * Navigate to [JSHint](https://jshint.com/)
   * Copy Javascript code from Gitpod
   * Paste code into JSHint
   * Find Configure button
   * Enable New JavaScript features (ES6)
   * Check results on right hand side of code!

# Lighthouse

## First Phase

### Desktop
  ![DesktopTest1](assets/readme-files/Lighthouse-Desktop.PNG)

* I am happy with the score for my desktop lighthouse test.

### Mobile

  ![MobileTest1](assets/readme-files/Lighthouse-Mobile-1.PNG)

  * The first mobile test has shown a minor performance issue

## Second Phase

### Mobile 

![MobileTest2](assets/readme-files/Lighthouse-Mobile-2.PNG)

* I optimised my main image to improve performance to a satisfactory level.
# Devices Tested

I tested manually with personal or family devices

## Personal 

   *  The site behaved as expected on all mobile devices I have private access to.
   * The site loaded well and performed actions such as navigation and engaging with quiz in a efficient way.
   * Elements on the site were aligned well and how I expected them to.
### Devices Tested  
  * Iphone 11 pro max (1242 x 2688).

  * Using Chrome mobile

  * Iphone 12 pro max ((1284 x 2778).)

  * Using iOS Safari

  * One Plus 7 Pro

  * Using Firefox Mobile

## Chrome Dev tools

* I tested using Chrome developer tools by right clicking the site and clicking inspect.

* The following devices are provided via Chrome developer tools 
   * Moto G4.
   * Galaxy S5.
   * Pixel 2.
   * Pixel 2 XL.
   * Iphone 5/SE.
   * Iphone 6/7/8.
   * Iphone 6/7/8 Plus.
   * Iphone X.
   * Ipad.
   * Ipad Pro.
   * Galaxy Fold.
   * Surface Duo.

* These devices performed as I expected with the site aligning well and having consistent performance.

## Browser Testing
* Tested on Windows 10 with a monitor screen size of 27" and resolution of 2560x1440, 144hz.
   * All elements aligned as intended

   * Navigation worked as intended allowing user quick access
   between pages.

   * The Quiz functioned correctly as well as having good performance

* Browsers tested

  * Google Chrome
  * Firefox Browser
  * Opera Web Browser
  * Microsoft Edge

## Bugs

No bugs reported as of now.

# Site Deployment

## Publishing
* Site was deployed to github pages with the following steps.
  1. Navigate to github your repositories and select my [repository](https://github.com/Matex600/Warhammer-Quiz)
  2. In the repository find "settings" scroll down to "pages" tab.
  3. Select main/master in source both are correct.
  4. Once you make a selection the page will automatically refresh.
  5. A link will be provided with succesful deployment.

## Forking
* You can contribute to this project without affecting the main branch with the following steps.
  1. Navigate to github repositores select this [repository](https://github.com/Matex600/Warhammer-Quiz)
  2. On the right of the repository name you will find the fork button next to star and watch buttons.
  3. Pressing said button will create a copy for you to use.

## Cloning
* You can clone this repository to local device with the following steps
   1.  Navigate to github repositores select this [repository](https://github.com/Matex600/Warhammer-Quiz)
   2. Under the repository name there is a green clone or download button.

Link to deployed site. --[Warhammer-Fantasy-Quiz](https://matex600.github.io/Warhammer-Quiz/)--

# Credits

## Media
[Warhammer Logo](https://static.wikia.nocookie.net/warhammerfb/images/c/c0/Warhammer-logo_%281%29.png/revision/latest/scale-to-width-down/740?cb=20200506191405). - Logo from Warhammer Fantasy Wiki.

## Acknowledgment
[Code Institute](https://codeinstitute.net/). - Preparing me for HTML, CSS and JS.

[Favicon](https://favicon.io/). - I used this site to download and implement a favicon to my site.

[Fixed Footer](https://www.w3schools.com/howto/howto_css_fixed_footer.asp). - W3schools helped me create a sticky footer.

[Balsamiq](https://balsamiq.com/). - Used to create my basic wireframes.