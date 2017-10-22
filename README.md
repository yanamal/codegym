
About This Fork
===============

This is a fork of [Pencil Code Gym](https://github.com/PencilCode/codegym) which lets (will let) you create and upload custom games to the [Doggie And Me](https://github.com/yanamal/DoggieAndMe) app.

It contains (will contain) lots of examples of dog game functionality, and (eventually) the option to modify the code and send it to the app.

That app, in itself, uses [Pencil Code](http://pencilcode.net/)'s [jquery-turtle](https://github.com/PencilCode/jquery-turtle) library, with a small dog-specific API on top of it. So in theory, you should be able to do most things you can do in Pencil Code and have them Just Work in the app!

Below are the original instructions for how to build and test your own pencil-code-like gym.

How To Build and Test
=====================
First install the prerequisites: git and nodejs (see "prequisites"
below if you don't yet have them.)

Then just do this:

<pre>
git clone https://github.com/PencilCode/codegym.git
cd codegym
npm install
npm run devserver
</pre>

This will generate the website and start a copy at
[localhost:9778](http://localhost:9778/).

You can edit the contents of the `src` subdirectory, and the
docpad process will regenerate the website as-needed.

To generate a static website (e.g., for serving through nginx or apache),
just `npm run generate`.  The static website is generated in the
`out` subdirectory.

Prerequisites
-------------

Getting git is easy:  On Linux, just `sudo apt-get install git` or
`sudo yum install git-core` if you don't have it.  On Mac, install
Apple's XCode package.  On Windows, there are git installers.

Next, you need node.js (which is the `node` and `npm` binaries).
The Ubuntu and Debian packages for node.js are pretty old, so don't
just apt-get install the packages.  Get and build the latest `node` and
`npm` and `grunt` binaries as follows:

(For Linux:)

<pre>
mkdir -p /tmp/nodejs && cd /tmp/nodejs
wget -N http://nodejs.org/dist/node-latest.tar.gz
tar xzvf node-latest.tar.gz && cd `ls -rd node-v*`
./configure --prefix=$HOME/local
make install
echo 'export PATH=$HOME/local/bin:$PATH' &gt;&gt; ~/.bashrc
source ~/.bashrc
</pre>

(For Mac:)

<pre>
mkdir -p /tmp/nodejs && cd /tmp/nodejs
curl http://nodejs.org/dist/node-latest.tar.gz > node-latest.tar.gz
tar xzvf node-latest.tar.gz && cd `ls -rd node-v*`
./configure --prefix=$HOME/local
make install
echo 'export PATH=$HOME/local/bin:$PATH' &gt;&gt; ~/.profile
source ~/.profile
</pre>

