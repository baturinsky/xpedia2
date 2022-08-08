# xpedia2
Sequel to https://github.com/baturinsky/xpedia

I'm changing a lot of things around, so have created it as a separate ptoject.

Currently WIP.

# What's new 

* Severless XPedia export is now made from XPedia UI ("Export" button on the main page)
* It generates a self-sufficient HTML file that do not need additional files and directories. Just put it in game's root directory,
* More info collected from ruls
* Better support for multiple mods
* UI rework to look better on all devices
* "Reveal" mode to see untranslated text. Use eye icon or hold shift.

# How to use

Unpack or clone it into a subdir of the game.

Have https://nodejs.org installed.

Run `npm install` (or `yarn install` if you use) then `npm start`

It will read user settings to find out which mods and submods to use, then open the page.

If you run xpedia this way, you can click "Export" button on the main

