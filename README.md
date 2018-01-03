# sitx

![license](https://img.shields.io/npm/l/sitx.svg) ![github-issues](https://img.shields.io/github/issues/mmcgraw73/sitx.svg)  

search directory for references to localhost:1111/sit and replaces existing sit(val) with new sit(val)

![nodei.co](https://nodei.co/npm/sitx.png?downloads=true&downloadRank=true&stars=true)

![version](https://img.shields.io/npm/v/npm.svg)
![stars](https://img.shields.io/github/stars/mmcgraw73/sitx.svg)
![forks](https://img.shields.io/github/forks/mmcgraw73/sitx.svg)

![](https://david-dm.org/mmcgraw73/sitx/status.svg)
![](https://david-dm.org/mmcgraw73/sitx/dev-status.svg)

## Features

to quickly update localhost URL to point at given API <br>
- navigate to root directory: `$ cd path/to/online---frontend`
- in terminal use command `sitx` + @argv, where @argv is the number for the API
- to update to sit1 API: `$ sitx 1` <br>
- to update to sit3 API: `$ sitx 3` <br>
- any single digit number can be used as @argv
- on success, 8 files will be updated to `localhost:1111/sit@argv`<br>
![successful update screenshot](/success.png?raw=true "Great Success!")


## Install

`npm install -g sitx`


## Dependencies

Package | Version | Dev
--- |:---:|:---:
[replace](https://www.npmjs.com/package/replace) | ^0.3.0 | ✖
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against master branch. Thanks!

## Author

michael mcgraw

## License

 - **ISC** : http://opensource.org/licenses/ISC
