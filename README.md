# roll-for-initiative
A simple initiative tracker for DnD

Site: <a href="https://mattkatt.github.io/roll-for-initiative/">mattkatt.github.io/roll-for-initiative</a>
Current Version - v1.1

## Mission
To create an easy-to-use mobile-based initiative tracker for DnD/d20 games - intention is to create something "faster than paper". Potential in future to add additional features, but initial goal is to keep it simple.

> As a DM, I already find myself using modern technology more and more while running games - to keep notes, hold stats, play music, etc; a single tablet is already far easier to carry than a Players Handbook, DMG and Monster Manual, not to mention any other books needed to run a particular session.

### Initial features
- Allow user to quickly create *actors* with stats and add them to the initiative tracker
- Roll for Initiative: a single button that rolls the initiative for all 'monster/npc' characters, and prompts for player's results, ordering the tracker based on those results (with tie-breakers/grouping similar results)
- Ability to drag-and-drop in new *actors* into an active tracker and have their initiative included

### @todo
- [x] Initial app setup and layout
- [x] Add and destroy actors with minimal settings (name, initiative bonus, npc/character)
- [x] Move actors from tracker to a holding 'drawer'
- [X] Save current state in `localStorage`
- [X] Roll initiative for actors on button click
- [X] Order initiative list based on results
- [X] Prompt for player initiative rolls
- [X] Allow for tie-breakers
- [X] github.io page
- [ ] PWA for download to device

### Added features
- [X] Allow user to roll initiative for characters

### Possible features
- [ ] Allow user to select tie-breaker rules
- [ ] Allow users to change die rolled for initiative
- [ ] Dark mode

## Version History
- **v1.0** - Initial release
  - Allow users to add/destroy Player Characters and Monsters/NPCs to the app drawer
  - Can add actors to the initiative tracker, instigate initiative, and enter players roll results
  - Tracker is automatically re-arranged based on initiative result, and can add more actors mid-initiative 
- **v1.1** 
  - Added ability to roll initiative for players
  - Set focus to 'name' input when adding new actors
    

### Issues
Please report any bugs/issues or suggestions via the [github issues tab](https://github.com/mattkatt/roll-for-initiative/issues)

---

<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Chat"></a>
  <br>
  <a href="https://app.saucelabs.com/builds/50f8372d79f743a3b25fb6ca4851ca4c"><img src="https://app.saucelabs.com/buildstatus/vuejs" alt="Build Status"></a>
</p>

<h2 align="center">Supporting Vue.js</h2>

Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome [backers](https://github.com/vuejs/vue/blob/dev/BACKERS.md). 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
