<h3 align="center">@nick22985/mclogcleanup</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/nick22985/mclogcleanup.svg)](https://github.com/nick22985/mclogcleanup/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/nick22985/mclogcleanup.svg)](https://github.com/nick22985/mclogcleanup/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">CLI to clean up log files from minecraft java server.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## 🧐 About <a name = "about"></a>

This CLI takes minecraft log files and cleans them up. It removes all the error and leaves pure chat. It also get rid of all the annoying colour codes and hex codes in the text so it is readable to a human

## 🏁 Getting Started <a name = "getting_started"></a>

npm package https://www.npmjs.com/package/@nick22985/mclogcleanup

### Prerequisites

What things you need to install the software and how to install them.

```
nodeJs (https://nodejs.org/en/)
```

### Installing

A step by step series of examples that tell you how to get a development env running.

You can install the cli by doing npm i -g @nick22985/mclogcleanup. Then it will be accesable by doing mcmclogcleanup -p {logFile path}

```
mcmclogcleanup -p ./log.log
```

This will create a file in the same directory as the log file called name_cleanup.log.

```
mcmclogcleanup -p ./log.log

Will create a file called

./log_cleaned.log
```

### Command Alliases
mclog
mcCleanup


## 🎈 Usage <a name="usage"></a>

```
mcmclogcleanup -p {logFile path}
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@nick22985](https://github.com/nick22985) - Idea & Initial work
