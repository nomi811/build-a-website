





## Version 4: Final touches and "getting it out there"

Having a website on your local computer is great but you really want it to be available to everyone on the Internet. Let's deploy it to a remote server, so that you could access it from any computer.

Don't worry that it isn't finished yet. We'll deploy it first to make sure everything is set up correctly and then we'll deploy the updates once we finish the work.

### Register with Heroku

We'll be deploying our website to a platform called [Heroku](http://heroku.com). It's an US company providing free hosting for small websites. The process of putting your website online used to be convoluted but now thanks to Heroku and similar companies it's actually really simple.

Go to [Heroku](http://heroku.com) and register for a new account. Note your email and password, you'll need it in a second.

Once you have the username and password from the website, go to the terminal and run this command to check that [Heroku Toolbelt ](https://toolbelt.heroku.com/)is installed correctly.

```
heroku --version
```

You should see something like

```
heroku-gem/2.35.0 (x86_64-darwin12.3.0) ruby/2.0.0
```

If you get "command not found" message, you will need to install [Heroku Toolbelt ](https://toolbelt.heroku.com/).

You should also check that you have a program called git that is necessary to send your website to Heroku. Run this in the terminal.

```
git --version
```

You should see something like

```
git version 1.7.12.4 (Apple Git-37)
```

Once you have verified that you have heroku and git locally, we need to start preparing for deployment.

### Prepare the project for deployment

We'll need to create two additional files in our project that will be required for deployment.

The first file describes which libraries we use in our project. In our case we're using only one external library – Sinatra (remember you did "gem install sinatra"? That's when we installed it). Create a file called Gemfile ( **it must have a capital G**) in the root directory of the project. Put the following in it:

```ruby
source "https://www.rubygems.org"
gem "sinatra"
```

This means that we're using a single library (or 'gem', in Ruby terminology) called 'sinatra' and it should be downloaded from rubygems.org.

Once you've done that, you need to run this command

```
bundle install
```

If you get the message "bundle: command not found", then we need to install this utility first. Run this:

```
gem install bundler
```

Then, retry running

```
bundle install
```

This will create a Gemfile.lock file that locks downs the versions of your gems (libraries) that will be installed on the remote server.

The second file we'll need will tell Heroku how to start our website. Create a file called config.ru (all lowercase) and put the following two lines inside:

```ruby
require './app'
run Sinatra::Application
```

This means that to launch this website we need to run a Sinatra application located in `app.rb`.

Finally, we need to prepare our files for deployment. To do this, execute the following commands **while being in the motivational-posters directory in the Terminal** (to explain what exactly is going on here is outside the scope of this first day but we will go through all of this and much more during the full 12 week course at Makers Academy). Type all symbols exactly are they appear (dot, hyphen, both apostrophes).

```
git init
git add .
git commit -m 'first version'
```

### Going live!

Now our files are all bundled together and are almost ready to be sent to Heroku. Now we need to login to Heroku from the terminal. Type

```
heroku login
```

Heroku then will ask you for your username and password (the one that you've set when you registered on the website). It will also ask you if you want to generate a public key (say that you do). After you enter the username and password, you'll be able to create your new website at Heroku. Type this

```
heroku create
```

Finally, we're ready to deploy. Type this command into the terminal. At this point your website will actually be sent to the web server and become live.

```
git push heroku master
```

You should see something like this as an output.

```
Counting objects: 13, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 675 bytes, done.
Total 7 (delta 4), reused 0 (delta 0)

-----> Ruby/Rack app detected
-----> Using Ruby version: ruby-2.0.0
-----> Installing dependencies using Bundler version 1.3.2
       Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin --deployment
       Using rack (1.5.2)
       Using rack-protection (1.5.0)
       Using shotgun (0.9)
       Using tilt (1.4.1)
       Using sinatra (1.4.3)
       Using bundler (1.3.2)
       Your bundle is complete! It was installed into ./vendor/bundle
       Cleaning up the bundler cache.
-----> Discovering process types
       Procfile declares types     -> (none)
       Default types for Ruby/Rack -> console, rake, web

-----> Compiled slug size: 25.1MB
-----> Launching... done, v7
       http://tech-bikers-demo.herokuapp.com deployed to Heroku

To git@heroku.com:tech-bikers-demo.git
   fc4d30c..8bdc99d  master -> master
```

If you see it, it means that the deployment went successfully. If you see an error, you're going to have to start Googling the error you get and spending some time on Stack Overflow. Until you see an output like the one shown above, it hasn't worked. Keep trying and don't give up. You need persistence when learning to code :)

Finally, once you've got the confirmation that the app has deployed to Heroku (as per line 25 above), you can type:

```
heroku open
```

into the Command Line and it will be launched in the browser! It should look exactly the same as on your local machine but this time it will have a public URL that you'll be able to use from any computer.

### Activating image controls

To make sure the text on the image is updated when the controls are changed, we need to add some Javascript. As before, we'll be listening for "events" and executing some code to update the way the text looks when they happen. Let's start the the first input control that is responsible for the left position of the text. The Javascript we'll be using should be familiar to you by now. Put this code in the application.js.

```javascript
$(document).on('change', '#left', function() {
  $("#caption").css("left", $(this).val() + 'px');
});
```

In plain English this means that when the element with an `id` of "left" changes (that is, triggers the event "change"), then the "left" CSS property of the element with id of "caption" will get the value (`.val() + "px"`) of the element that was changed (`$(this)`). Try it in the browser. Now, if you change the value of the input, it will update the position of the caption.

**Try it!**

![try](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/try.png)

You can probably write the javascript code for other fields without further help but, just in case, here's the code for other fields.

```javascript
$(document).on('change', '#top', function() {
  $("#caption").css("top", $(this).val() + 'px');
});

$(document).on('change', '#width', function() {
  $("#caption").css("width", $(this).val() + 'px');
});

$(document).on('change', '#size', function() {
  $("#caption").css("font-size", $(this).val() + 'px');
});

$(document).on('change', '#colour', function() {
  $("#caption").css("color", $(this).val());
});

$(document).on('change', '#align', function() {
  $("#caption").css("text-align", $(this).val());
});
```

The last two event handlers don't need "+ 'px'" bit because the colour and alignment are not measured in pixels, unlike the position (left and top), the width and the font size.

### Adding the tweet button

Now that we've got the main functionality working, let's add the tweet button! Let's get the code for the button from Twitter. Go to google and search for "tweet button code". The first link should point to [Twitter Buttons](https://twitter.com/about/resources/buttons) page.

![twitter](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/twitter.png)

Select the first button (share a link) and leave all options default except the tweet text. Set it to "I built a 'Motivational Posters' page today here at @makersacademy!".

![twitter2](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/twitter_2.png)

On the right you'll see the resulting HTML code that you need. Copy it to the index.erb file right after `#controls` putting it into its own div element with the id of "twitter".

```html
<div id="twitter">
    <a href="https://twitter.com/share" class="twitter-share-button" data-text="I built Motivational Posters page today @makersacademy!">Tweet</a>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
</div>
```

Refresh the page. Now you should see the tweet button below.

![twitter3](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/twitter_3.png)

If you click it, you'll notice that the URL of the page isn't included as part of the tweet. This is because Twitter detects that you're using a local url that isn't accessible by other people (that is, you're just running a website on your computer) and doesn't include it. This shouldn't be a problem after you deploy it to Heroku.

### Adding the footer

Let's add the final section on the page: the footer. Add its HTML code at the very end of your <body> section in index.erb, after all other content. By now it should be clear what this HTML code does.

```html
<footer>
  <a href="http://www.makersacademy.com/"><img src="http://www.makersacademy.com/images/logo.png"></a>
  <div>
    I built this page during my first day at
    <a href="http://www.makersacademy.com">Makers Academy, a highly selective 12 week coding course in London</a>.
  </div>
  <div>
    This page uses Google Image search, Ruby, Sinatra, Javascript, jQuery, HTML and CSS.
  </div>
</footer>
```

Now we can see the footer on the page (but it's still completely un-styled). The reason we're putting un-styled content on the page before writing CSS is that it's easier to write CSS once you have the elements it will apply to. Otherwise you'd be writing CSS in the dark.

![style](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style.png)

### Completing the styling

So, the last bit of development we need to do is completing the styling to make sure the website looks good.

First, let's make sure everything is nicely centred. Remember how we set the background for the page?

```css
body {
  background-image: url(/images/ricepaper_v3.png)
}
```

Let's expand this CSS rule by adding a few more properties.

```css
body {
  text-align: center;
  background-image: url(/images/ricepaper_v3.png);
  color: gray;
  font-family: Helvetica, Arial;
  margin: 0;
  padding: 0;
}
```

This will make everything in the `<body>` tag (that is, on the page) nicely centred, the text will be grey, the font used will be Helvetica (and if it's not available for some reason, Arial), and the page will not have any margin or padding on the side. You can see the effect straight away.

![style2](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_2.png)

Now let's add some colour to the header. Add this CSS.

```css
header {
  padding: 15px;
  background-color: rgba(255,255,255, 0.7);
  box-shadow: 1px 0 3px rgba(0,0,0, 0.3);
}
```

This makes the header get some padding, so the text is not very close to the edge of the page. It also applies some background colour. Here, `rgba(255,255,255, 0.7)` means white colour with the opacity of 70%. Finally, we apply some black shadow that's 3 pixels wide and 30% opaque. It will give the header some volume.

You can see the result straight away.

![style3](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_3.png)

Now let's add some styling to the first section (Step 1). It has the id of "select-image". Let's give it some background and some padding, like we've done with the header.

```css
#select-image {
  background-color: rgba(255,255,255, 0.3);
  padding: 10px;
}
```

The `rgba(255,255,255,0.3)` means white background with the opacity of 30%.

![style4](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_4.png)

Awesome, it's beginning to take shape. Let's continue the styling. What about the second section? It needs some colour and padding too. This time let's give it a different colour. If we mix green and blue but leave out red, then the result will be an aqua (greenish-blue) colour. Let's set this background with a very low opacity, to show just a shade of this colour.

```css
#add-text {
    background-color: rgba(0,255,255, 0.02);
    padding: 10px;
    box-shadow: 1px 0 3px rgba(0,0,0, 0.3);
}
```

![style5](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_5.png)

Let's also make the input box wider and set the alignment to "center".

```css
#add-text input {
  width: 600px;
  text-align: center;
}
```

![style6](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_6.png)

Let's also make our button and all the input fields slightly larger by increasing the size of the font.

```css
input, button {
    font-size: 16px;
}
```

![style7](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_7.png)

Now the only section left un-styled is "Step 3" (apart from the footer). Let's add some padding, background and shadow to it as well.

```css
#style-image {
    background-color: rgba(255,255,255, 0.7);
    padding: 10px;
    box-shadow: 1px 0 3px rgba(0,0,0, 0.3);
}
```

![style8](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_8.png)

Now the section itself looks a little bit better but the contents are a mess. Let's style the controls.

First, some padding and the font size.

```css
#controls {
  padding: 10px;
  font-size: 14px;
}
```

Then, let's make the inputs of type "number" fairly narrow.

```css
input[type="number"] {
  width: 50px;
}
```

And now it looks exactly like we want it to be.

![style9](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_9.png)

Finally, the footer. The content is there but it looks all over the place. First, the familiar tricks: background, shadows, padding, text alignment.

```css
footer {
  background-color: rgba(255,0,255,0.01);
  padding: 10px;
  text-align: left;
  box-shadow: -1px 0 5px rgba(0,0,0, 0.3);
}
```

Now it looks slightly better but not quite right. What we want to see is the Makers Academy logo on the left with a bit of space between it and the text. We can achieve this effect by setting the float CSS property and applying some margin on the right.

```css
footer img {
  float: left;
  margin-right: 40px;
}
```

We've achieved this effect with this CSS but the lines of text are a bit too close together. Since both lines of text are in their own elements, divs, we can give them some space by adding some margin on above and below.

```css
footer div {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 0;
}
```

Actually, there's a shortcut for this code. You can write just a single line of CSS code achieving exactly the same effect. Pause and think for a second how it works.

```css
footer div {
  margin: 10px 0;
}
```

Cool! Now our footer looks much more organised.

![style10](https://github.com/stephenlloyd/Taster/raw/master//day_one/images/style_10.png)

**And, we're done with the styling!**

## Last Task!

Now, this is where it gets interesting!

- Deploy the website to Heroku. You'll need to make sure it works locally, then add all files to git ("git add .", "git commit -m 'message'") and finally "git push heroku master". Once you made sure it works, tweet it, you've built something cool – let friends know :)
- If you just went through the tutorial copy-pasting the code and not thinking much about how it works, go back and try to understand why it works the way it does. Can you tell why the dashed border is red? Why it's thick and how thick it is? What piece of code is responsible for loading the image into the worskpace when you click a thumbnail? What's the difference between the input fields of type "text" and "number"? What makes the Makers Academy logo to be on the left of the text in the footer, and not above it?
- The exercises below are meant to challenge you to find answers to programming problems. Try to do them and it you can't find a solution!
- Some exercises are easier than the others. If one of them seems hard, try another one!

## Extra Exercises

Finally, once you are really comfortable with the existing codebase, do the following exercises. Many of them will involve some googling around to learn something new, others will involve going back to this tutorial, as well as HTML & CSS overview.

- Add more colours into the drop-down menu. Make sure there are lots of colours to choose from.
- Change the background colours of the sections to something new, don't use the colours we've just used. Play with the opacity values.
- When the thumbnails are shown, they look rather dull: all together, without borders or shadows, without any space in between. How can you make them look better?
- When you enter the keyword and press Enter, the search isn't performed by default. What if you add a Javascript event to listen for when you hit "Enter" in the keyword input field? Then, when this event happens, you could kick off the image search. You'll probably need to google a little bit to find out how to listen for this event (stackoverflow.com is the best source of programming tips).
- Right now we're using Helvetica as the font for the page. Find out how to use a different font. What fonts are available in every browser by default? Change the font to one of them.
- Can you find out how to download an exotic font, add it to the project and apply only to the h1 header on the page using CSS?
Right now the "Powered by Google" logo is right-aligned. Can you make it centred?
- Add your name to the footer, so that everyone knew who built this site!
- In the footer we're listing the technologies used. Can you find their websites and add the links in the footer?
- We've got the tweet button on the page that we've got from the Twitter website. Can you find the code for the Facebook like page? (This may be a bit tricky, it may involve creating an "application" on Facebook but it's actually much easier than it sounds).
- What other text properties, apart from position, colour, alignment and font size can you think of? Can you add them to the page and make them work with javascript?
- Find a website that allows you to generate a logo, create one for the page and add as an image to the header.
- Find a website that allows you to generate buttons, create a beautiful "Search" button and replace our plain and dull "Go" button.
