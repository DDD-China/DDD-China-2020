# DDD China Conference 2019

## Brief 

This project is main to show some important brief messages of DDD China Conference 2019. We do not choose any fashion framework like React\Angular,  to avoid project being too heavy . Instead of this, we just choose traditional way: jQuery + Html + Less. This keeps project more simplify. Besides, we choose Gulp tool to package our code, even it not stronger than webpack, but it is great enough for this project.

## Remember to submit minimal size pdf

Before commit pdf, please use https://smallpdf.com/compress-pdf to compress and make sure size less than 10 MB.

## How to run this project

First of all,  you should make sure you have installed all dependencies. So please run:

```shell
yarn install 
```

After installing all dependencies. Please run:

```shell
yarn run start
```

This command will build new version code(development build) into `dist` folder with `gulp`, and it will also start `gulp` watch task and a dev server will run at port `8089`.

Gulp with continually build new version after you changing source code and your browser will refresh automatically.  


## How to build 

```shell
yarn run build
```

This will build source code into `dist` folder, you can use this folder to release.
