# Let **[Rock, Paper, Scissors](https://maya-claveau.github.io/PP2-rps/)** bring all the good memories back from your childhood 

<img src="assets/images/responsive-mockup.png" width="800">

This was built with the intention of entertaining the player, with a classic game from almost everyone’s childhood. Main objectives are: 

- to cheer up the player's mood
- to challenge the computer’s logic 
- to sharpen the player’s prediction skill 
- and most importantly to have fun

------

## **Why This**

Many of us are familiar with this game, we can even call it a classic. If you were born in the 80s like me, then you would remember that there weren't any electronics around like today, we'd play outside all day with our friends, and the rock, paper, scissors game is one of the most popular ones amongst many others. And very often, this little game also functions as a perfect solution for who starts first for a different game that we were planning to play. Here is why I chose to do this. Because of the global pandemic, we were advised not to gather with people, keep social distance, not to travel etc, basically to reduce the spread, each family needed to form and live their own babbles. For us human beings, this of course will make us feel lonely sometimes. My objective is by building this good old classy game, the player can play it wherever and whenever they would like. Hoping to bring back some of the great memories of your childhood and finally to cheer you up a little in this uncertain time.

------

## **Features:**
### Existing Features:
#### Home page:

First thing you see when you land on the website is the logo on the top left side with the title Rock, Paper, Scissors below it. Followed by the instructions of the game. Then you will come to the game area where the number of rounds are showing, so you know how many are left until the game is over. 

<br>
<img src="assets/images/landing-page1.png" width="800">
<br> 
<br>

You have 3 options to choose from, so make your decision wisely. The computer will also make its choice the same time you make yours, so fair game for everyone. The winner for that round will get a point, when round 7 is completed, there will be a message informing you whether you are the winner or … you know.  


<br>
<img src="assets/images/landing-page2.png" width="800">
<br>
<br>
Now the “Play again” button will be clickable, so you can decide to play again or play again. You are welcome!

<br>
<img src="assets/images/landing-page3.png" width="800">
<br>
<br>
There is a small footer on the bottom left of the page, with information of copyright. And that's about it, this is only a single page project. Simple, easy and chill. 

<br>

### Features to be added later:
- the option to play against another player on two different devices
- if you lose 3 rounds in a roll, you are obliged to play another round
- the option to create an account, there you can add your friends and family, so you can play together no matter where you are

------
## **Testing:**

Google dev tools became my first choice for testing purposes. I use it on a daily basis since the development stage. For instance:
- after added media queries for medium sized screens, it affected my mobile version for some reason and after some digging I finally fixed it. See screenshot below,

<br>
<img src="assets/images/media-queries-issue.png" width="800">
<br>
<br>
- the page went through major development progress as I was building it, my initial idea wasn't complete, and there are things I didn't consider. As I worked on it, more ideas came to my mind, with the help of fellow students on slack, my mentor, finally the website looked like a little more proper gaming site than what I had originally planned. 

<br>
<img src="assets/images/mob-v1.png" width="400">
<br>

<br>
<img src="assets/images/mob-v2.png" width="400">
<br>

<br>
<img src="assets/images/mob-v2-2.png" width="400">
<br>

<br>
<img src="assets/images/desktop-v2-2.png" width="800">
<br>
<br>
- when I need to write JavaScript code, the chance of it works as intended is very little for me. Without google dev tools and the help from others, this project won’t be existing. I will come back to it later.
<br>
<br>

------
## **Code Validation:**

- **HTML**
 <p> First validation had one error, as show below,</p>
 <img src="assets/images/html-validation-error1.png" width="800">

<p>Then I put the unordered list into one of the list items within the ordered list  and it worked. Second validation come out clean with 0 errors, see screenshot below,</p>
<img src="assets/images/html-validation-final.png" width="800">

<br>

- **CSS**
<p>CSS validation went in nice and smooth, with no error in the first try, I don’t think it ever happened before, so I will take it as a win!</p>
<img src="assets/images/css-validation-final.png" width="800">

<br>

- **JavaScript**
<p>JavaScript validation was tough, the first try gave me 24 warnings, and I almost had a heart attack.</p>
<img src="assets/images/js-validation-warnings.png" width="600">

<p>Since the majority of the warnings are related to “let”, I assume it is not a big deal. With the help of fellow students on Slack, I managed to remove them. Now I have only one warnings left to deal with</p>

<img src="assets/images/js-validation-warnings2.png" width="600">

<p>After some research online and discussion with fellow student, I had better understanding of the issue, however I didn’t manage to fix it, which left me with no choice but to leave it here. Good thing is that it is a warning, not an error. So here is the final validation for JavaScript:</p>

<img src="assets/images/js-validation-final.png" width="800">

------

## **Language used:**

- HTML
- CSS
- JavaScript

------

## **Tools used:** 

- [Google Fonts](https://fonts.google.com/) for selecting the fonts for the project. I choose [Architects Daughter](https://fonts.google.com/specimen/Architects+Daughter?preview.text=step%201:%20choose%20your%20first%20move&preview.text_type=custom), because it looks a little childish and it matches with the type of game and my purpose of bringing back good memories from the childhood.

- [Font Color](https://mycolor.space/?hex=%23000000&sub=1) I used colorspace to pick the Small Switch Palette, which in my opinion is nice and simple and goes well with the background. 

<img src="assets/images/colorspace.png" width="250">

- [Am I Responsive](http://ami.responsivedesign.is/?url=https%3A%2F%2Fmaya-claveau.github.io%2FPP2-rps%2F) for making the responsive screenshot

<img src="assets/images/responsive-mockup.png" width="250">

------

## **Deployment**
[Gidhub Pages](https://pages.github.com/) was used to deploy the project, as follows:

<p>1. On the Github repository, click on Settings</p>
<img src="assets/images/deploy-step1.png" width="250">

<p>2. Then click on Page from the lower left of the screen</p>
<img src="assets/images/deploy-step2.png" width="250">

<p>3. Select Main and click Save</p>
<img src="assets/images/deploy-step3.png" width="250">

<br>

The published link will be generated for live view, it can be found [here](https://maya-claveau.github.io/PP2-rps/).


------

