<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Backend Vilet</h3>

  <p align="center">
    backend for vilet-backend app
    <br />
    <a href="https://github.com/diegorambao/vilet-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/diegorambao/vilet-backend">Demo</a>
    ·
    <a href="https://github.com/diegorambao/vilet-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/diegorambao/vilet-backend/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The project is a backend that manages the endpoints necessary for the proper functioning of requesting a professional in the Vilet client, it has a `clean architecture` using `Nest as a framework`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Node][node]][node-url]
- [![TypeScript][typescript]][typescript-url]
- [![Nest][nest.js]][nest-url]
- [![Mysql][mysql]][mysql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To start you must have `MySQL` installed with a database called `vilet-backend`

### Prerequisites

It is recommended to install the nest js CLI

- npm
  ```sh
  npm i -g @nestjs/cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/diegorambao/vilet-backend.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. set your environment variables in `development.env`

   ```js
   DATABASE_HOST=YOUR HOST DATABASE
   DATABASE_PORT=3306
   DATABASE_USER=YOUR USER DATABASE
   DATABASE_PASSWORD=YOUR PASSWORD DATABASE
   DATABASE_NAME=YOUR NAME DATABASE
   DATABASE_SYNCHRONIZE=true
   JWT_SECRET=74YLbq4%c!wU
   JWT_EXPIRATION_TIME=1800
   JWT_REFRESH_TOKEN_SECRET=7jML9q4-c!s0
   JWT_REFRESH_TOKEN_EXPIRATION_TIME=86400
   PORT=3000
   ```

4. to start a development server

```sh
 npm run start:dev
```

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- USAGE EXAMPLES -->

<!-- ROADMAP -->

<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/diegorambao/vilet-backend/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

diegorambao - [@twitter_handle](https://twitter.com/diegorambao)

Project Link: [https://github.com/diegorambao/vilet-backend](https://github.com/diegorambao/vilet-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/diegorambao/vilet-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/diegorambao/vilet-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/diegorambao/vilet-backend.svg?style=for-the-badge
[forks-url]: https://github.com/diegorambao/vilet-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/diegorambao/vilet-backend.svg?style=for-the-badge
[stars-url]: https://github.com/diegorambao/vilet-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/diegorambao/vilet-backend.svg?style=for-the-badge
[issues-url]: https://github.com/diegorambao/vilet-backend/issues
[license-shield]: https://img.shields.io/github/license/diegorambao/vilet-backend.svg?style=for-the-badge
[license-url]: https://github.com/diegorambao/vilet-backend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[node]: https://img.shields.io/badge/Nodejs-green?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nestjs.com/
[nest.js]: https://img.shields.io/badge/nest.js-red?style=for-the-badge&logo=nextdotjs&logoColor=white
[nest-url]: https://nestjs.com/
[mysql]: https://img.shields.io/badge/MySql-blue?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]: https://www.mysql.com/
[typescript]: https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
