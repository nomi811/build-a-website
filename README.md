# Build a website with Ruby

## Why am I doing this?
You can already get a pretty long way building a website using just HTML & CSS.  Or perhaps instead using the myriad blogging engines and 'build a website' services that exist.  So why bother with Ruby?

The truth is, being a web developer is not really about HTML and CSS.  Those are only a small part of the very broad range of skills and languages that a good developer needs to have.  Plus, only a proportion of web development actually happens on the web.  For the most part, developers work with code in 'development environments' on their local machines; very far from all the bells and whistles.

Being a web developer is about leveraging a whole range of technologies and languages, often at quite low levels and being confident to dive in and learn something new - and potentially complicated - even if it's initially bewildering.

And that's what this project is for: to give you a peek under the hood and hopefully - depending on your experience - challenge to you to be a little out of your depth.

So, let's begin.

## How to follow this guide
There are no intentional tricks or traps in this guide.  If you follow the instructions correctly, you should finish with a fully-working website that can be deployed to the world.  If you get stuck, read [what to do if you get stuck]('#what-to-do-if-you-get-stuck').  There are only two rules:

* **Type every line of code yourself**.  While it's tempting to copy and paste code from this guide, you won't learn anything if you do.
* **You don't need to understand everything**.  Of course, 'understanding' is a vital part of being a developer; but so is managing what you need to know.  It isn't possible to understand everything.

## Step 0: Creating a development environment
At Makers Academy, we like to stay as close to the machine as we can.  That means working from the 'command line' and not relying on too many 'GUI' tools.  However, setting up your machine for web development can be tricky - especially if you're on Windows - and can stop you before you've really got started.

Fortunately, there are a number of cloud-based development environments available that provide an almost identical experience to the above, but without the hassle of setting up your local machine.  For this project, we recommend you use [Cloud9](https://c9.io).

1) Create a free account on [Cloud9](https://c9.io/web/sign-up/free).
2) Choose 'Create a new workspace'
3) Call your workspace `motivational-posters`
4) Choose a Hosted workspace and make it Public (we'll be able to see it if you get stuck)
5) Choose 'Custom' as a template
6) Create the workspace (this will take a few moments)


![custom workspace form](https://www.dropbox.com/s/qpczlcyv0ar1s2o/Screenshot%202015-10-28%2015.37.15.png?dl=1)

3) Set up bundle

```
$ bundle init
```

4) Edit Gemfile to include sinatra gem (make sure to save)

```ruby
# A sample Gemfile
source "https://rubygems.org"

gem "sinatra"

```

5) run bundle to pull in sinatra library

```
$ bundle
```

6) create server.rb

```ruby
require 'sinatra'

get '/' do
    'hello world'
end
```

7) run the server

```
$ ruby server.rb -p $PORT -o $IP
```

8) Check out your local 'hello world' page on c9, e.g.

https://makers-resume-tansaku-1.c9.io

9) Push to Heroku for permanent display:

i) create a config.ru

```ruby
require './server'
run Sinatra::Application
```

ii) get all files into git:

```
$ git init
$ git add .
$ git commit -m  'initial hello world'
```

iii) create heroku instance (inc. sign up for heroku)

```
$ heroku create
```

iv) push to heroku

```
$ git push heroku master
```

v) open app, e.g. https://arcane-tor-5901.herokuapp.com/
