# 前台逻辑
## 2018/8/9
### 创立项目结构(通过tree -e<导出路径> -i '忽略项目名称')
├─index.html
├─package-lock.json
├─package.json
├─README.md
├─static
|   └.gitkeep
├─src
|  ├─App.vue
|  ├─main.js
|  ├─router
|  |   └index.js
|  ├─components
|  |     ├─concat.vue
|  |     ├─education.vue
|  |     ├─experiences.vue
|  |     ├─home.vue
|  |     ├─login.vue
|  |     ├─portfolio.vue
|  |     ├─register.vue
|  |     ├─skills.vue
|  |     └testimonials.vue
|  ├─assets
|  |   ├─plugins
|  |   |    ├─back-to-top.js
|  |   |    ├─imagesloaded.pkgd.min.js
|  |   |    ├─isotope.pkgd.min.js
|  |   |    ├─jquery-1.12.4.min.js
|  |   |    ├─jquery-scrollTo
|  |   |    |        └jquery.scrollTo.min.js
|  |   |    ├─font-awesome
|  |   |    |      ├─fonts
|  |   |    |      |   ├─fontawesome-webfont.eot
|  |   |    |      |   ├─fontawesome-webfont.svg
|  |   |    |      |   ├─fontawesome-webfont.ttf
|  |   |    |      |   ├─fontawesome-webfont.woff
|  |   |    |      |   ├─fontawesome-webfont.woff2
|  |   |    |      |   └FontAwesome.otf
|  |   |    |      ├─css
|  |   |    |      |  ├─font-awesome.css
|  |   |    |      |  └font-awesome.min.css
|  |   |    ├─easy-pie-chart
|  |   |    |       ├─dist
|  |   |    |       |  └jquery.easypiechart.min.js
|  |   |    ├─bootstrap
|  |   |    |     ├─js
|  |   |    |     | ├─bootstrap.js
|  |   |    |     | ├─bootstrap.min.js
|  |   |    |     | └npm.js
|  |   |    |     ├─fonts
|  |   |    |     |   ├─glyphicons-halflings-regular.eot
|  |   |    |     |   ├─glyphicons-halflings-regular.svg
|  |   |    |     |   ├─glyphicons-halflings-regular.ttf
|  |   |    |     |   ├─glyphicons-halflings-regular.woff
|  |   |    |     |   └glyphicons-halflings-regular.woff2
|  |   |    |     ├─css
|  |   |    |     |  ├─bootstrap-theme.css
|  |   |    |     |  ├─bootstrap-theme.css.map
|  |   |    |     |  ├─bootstrap-theme.min.css
|  |   |    |     |  ├─bootstrap-theme.min.css.map
|  |   |    |     |  ├─bootstrap.css
|  |   |    |     |  ├─bootstrap.css.map
|  |   |    |     |  ├─bootstrap.min.css
|  |   |    |     |  └bootstrap.min.css.map
|  |   ├─js
|  |   | ├─main.js
|  |   | ├─demo
|  |   | |  └style-switcher.js
|  |   ├─images
|  |   |   ├─profile-image.png
|  |   |   ├─portfolio
|  |   |   |     ├─portfolio-1.jpg
|  |   |   |     ├─portfolio-2.jpg
|  |   |   |     ├─portfolio-3.jpg
|  |   |   |     ├─portfolio-4.jpg
|  |   |   |     ├─portfolio-5.jpg
|  |   |   |     ├─portfolio-6.jpg
|  |   |   |     ├─portfolio-7.jpg
|  |   |   |     └portfolio-8.jpg
|  |   ├─css
|  |   |  └styles.css
### 创建前端路由逻辑,书写各个组件,详细解决login子组件的逻辑
+ 涉及vue-resource module的http请求
+ 根据session决定是否进入login页面展示用户登录信息
+ 根据保存用户信息按钮决定是否开启session保存用户登录信息
+ 根据url地址path的值改变决定是否展示header和footer