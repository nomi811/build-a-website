# cover_letter_site


1. Create a free account with c9 https://c9.io/web/sign-up/free

2. Create a new public c9 workspace (custom)

https://www.dropbox.com/s/qpczlcyv0ar1s2o/Screenshot%202015-10-28%2015.37.15.png?dl=0

3. Set up bundle

```
$ bundle init
```

4. Edit Gemfile to include sinatra gem (make sure to save)

```ruby
# A sample Gemfile
source "https://rubygems.org"

gem "sinatra"

```

5. run bundle to pull in sinatra library

```
$ bundle
```

6. create server.rb

```ruby
require 'sinatra'

get '/' do
    'hello world'
end
```

7. run the server

```
$ ruby server.rb -p $PORT -o $IP
```

8. Check out your local 'hello world' page on c9, e.g. 

https://makers-resume-tansaku-1.c9.io

9. Push to Heroku for permanent display:

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
