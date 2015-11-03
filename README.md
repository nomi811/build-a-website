# Build a website with Ruby

## Why am I doing this?
You can already get a pretty long way building a website using just HTML & CSS.  Or perhaps instead using the myriad blogging engines and 'build a website' services that exist.  So why bother with Ruby?

The truth is, being a web developer is not really about HTML and CSS.  Those are only a small part of the very broad range of skills and languages that a good developer needs to have.  Plus, only a proportion of web development actually happens on the web.  For the most part, developers work with code in 'development environments' on their local machines; very far from all the bells and whistles.

Being a web developer is about leveraging a whole range of technologies and languages, often at quite low levels and being confident to dive in and learn something new - and potentially complicated - even if it's initially bewildering.

And that's what this project is for: to give you a peek under the hood and hopefully - depending on your experience - challenge you to get a bit out of your depth.

So, let's begin.

## How to follow this guide
There are no intentional tricks or traps in this guide.  If you follow the instructions correctly, you should finish with a fully-working website that can be deployed to the world.  If you get stuck, read [what to do if you get stuck]('#what-to-do-if-you-get-stuck').  There are only two rules:

* **Type every line of code yourself**.  While it's tempting to copy and paste code from this guide, you won't learn anything if you do.
* **You don't need to understand everything**.  Of course, 'understanding' is a vital part of being a developer; but so is managing how much you need to know.  It isn't possible to understand everything.

## Step 0: Creating a development environment
At Makers Academy, we like to stay as close to the machine as we can.  That means working from the 'command line' and not relying on 'GUI' tools.  However, setting up your machine for web development can be tricky - especially on Windows - and can stop you before you really get started.

Fortunately, there are a number of cloud-based development environments available that provide an almost identical experience, but without the hassle of setting up your local machine.  For this project, we recommend you use [Cloud9](https://c9.io).

1. [Create a free account](https://c9.io/web/sign-up/free) on Cloud9
2. Choose 'Create a new workspace'
3. Call your workspace `motivational-posters`
4. Choose a Hosted workspace and make it Public (we'll be able to see it if you get stuck)
5. Choose 'Custom' as a template
6. Create the workspace (this will take Cloud9 a few moments)

When your workspace has been created, you should see it open in your browser.  It will look something like this:

![Cloud9 interface](/images/cloud9_intro.jpg)

This is what is known in the business as an **Integrated Development Environment** (**IDE**).  IDEs are highly complex applications and take a bit of getting used to.  Think Microsoft Word, on steroids, exposed to radiation in a secret nuclear incident and having gained super powers.  Something like that.  Anyway, the important thing is, Cloud9 gives us the four critical components of our development environment:

* A **file system** to store our source files (code, images, HTML, CSS and so on),
* an **editor** to edit our source files,
* an **operating system** to run our programs
* and a **command line** - or **terminal** - to send instructions to the operating system.

### Step 0.1: Update the README
You'll notice that a single file has been created for you already - `README.md`.  It's a convention of all good projects to have a README file that explains what the project is for and provides information about how to install and run the program.

If you double click the file in the tree view, it will open for editing in the main pane.  The file has a `.md` extension, which means it is intended to be written in **Markdown**, a popular syntax for lightly styling text files.  Markdown is ubiquitous on **GitHub** [and here is a useful guide](https://guides.github.com/features/mastering-markdown/).  For now though, let's just create a basic placeholder for information.  Delete the contents of the file and replace with the following:

```markdown
# Motivational Posters

Built by [your name here]
```

Make sure you save the file.  Switch to the preview tab: has it been updated with your new content?

### Step 0.2: Hello Ruby
Ruby is a programming language. It comes pre-installed on your Cloud9 workspace. To test this, go to the command line and type:

```
ruby -v
```

(...then hit return to enter it.) You should see something like this:

```
ruby 2.2.1p85 (2015-02-26 revision 49769) [x86_64-linux]
```

This tells us the currently installed version of Ruby (which we requested by passing `-v` to the `ruby` command).

#### Writing a Ruby program
Create a file in your workspace called `hello.rb`.  By convention, Ruby files have the extension `.rb`.  The benefit of this convention is that Cloud9 will provide Ruby **syntax highlighting** for all files with the `.rb` extension.

Open the file in the editor and add the following content:
```ruby
puts 'Hello Ruby'
```

See how syntax highlighting works?  The IDE recognizes the Ruby language and uses colours to differentiate elements of the 'grammar'.  You may see different colours depending on your chosen theme.

Save the file.  Now go to the command line and enter the following:

```
ruby hello.rb
```

This tells the Ruby engine to run the code in `hello.rb`.  You should see the following output:

```
Hello Ruby
```

You've just written a command-line program: you run it from the command line and it outputs to the command line!

## Step 1: Hello World (...Wide Web)
A website is a program that receives requests and sends responses over the Internet.  But that's a lot easier said than done.  Fortunately, it's also so utterly fundamental that the heavy lifting is already done for us by something else; something we call a **web framework**.  Most programming languages have a number of web frameworks to choose from and Ruby is no exception.  We are going to use a framework called [Sinatra](http://www.sinatrarb.com/).

### Creating the server
Create a file in your workspace called `server.rb`.

Open the file in the editor and add the following content:
```ruby
require 'sinatra'

get '/' do
  'Hello World'
end
```

Make sure you save the file.  Now try running it from the command line:

```
ruby server.rb
```

You should get an error:

```
/usr/local/rvm/rubies/ruby-2.2.1/lib/ruby/site_ruby/2.2.0/rubygems/core_ext/kernel_require.rb:54:in `require': cannot load such file -- sinatra (LoadError)
        from /usr/local/rvm/rubies/ruby-2.2.1/lib/ruby/site_ruby/2.2.0/rubygems/core_ext/kernel_require.rb:54:in `require'
        from server.rb:1:in `<main>'
```

That was just to get you warmed up!  Error messages often look unfriendly, but they're really rather useful when you get to know them.  What does this one mean?

If you throw your hands up in the air and exclaim 'How the devil should I know?', then don't worry.  That's how we all feel sometimes.  One of the skills of a good developer is to make and test small hypotheses about the cause of an error message, then iterate over that process until the solution is found.  Oh, and Google it.  You can always just Google it.

But don't spend too long climbing down that rabbit hole, you might never make it back.  The answer here is actually much simpler than you might infer from some of the answers on Google.  Sinatra is just another Ruby program; but it's not yet installed in our workspace.  To install Sinatra, enter the following on the command line:

```
gem install sinatra
```

You should see a few lines of output and a confirmation that a certain number of gems have been installed.  Sinatra is itself dependent on some other programs, so when you install Sinatra, those dependencies are installed too.

Let's try running it again:

```
ruby server.rb -p $PORT -o $IP
```

Don't worry about what the `-p $PORT -o $IP` bit means at this stage - it's just something Cloud9 requires.  Your program should now be running and sending output to the command line.  Cloud9 should also have opened a browser tab with the URL of your website, similar to `https://motivational-posters-[YOUR USERNAME].c9.io/`.  That's a real, live URL: try opening it from another window, or from your phone.  Cool huh?

>  If you made your workspace private instead of public, you'll have to sign in to visit the URL on another browser.

To stop the program running, press Ctrl+C in the command window.
