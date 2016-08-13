# Install With
---
```npm install burger-toolkit --save```

# Read This
---

[burger-toolkit on NPM](https://www.npmjs.com/package/burger-toolkit) \
burger-toolkit is a useful tool that I use when it comes to certain things, for example: \
[color.js](https://github.com/brehaut/color-js), the library burger-toolkit uses for coloring text can do this: \
```console.log('someString'.green)``` and will output "someString" in green. \
or ```console.log(colors.green('someString'))```  \
BUT, if you want to pass the color, background and or styling from the end-user to the program, you will need to do something like this: \
```if(color === "black") console.log("someString".black)``` for every possible color that you might want to support, but burger-toolkit allows you to do:\
```console.log(burger.colorString("someString", "black"))``` or \
```console.log(burger.colorString("someString", burger.c(0)))``` depending on your use, \
this allows you to pass any color, background, or styling information as a string or integer \
```burger.c(int)``` will return a color depending on the integer you give it. ```burger.c(0)``` returns "black" \
Also, there are similar functions for styling and background: \
```console.log(burger.colorStringBG("someString", "black")``` \
```console.log(burger.styleString("someString", "bold")``` \
(string only for styling)

# Other Features
---

```burger.log("log.txt", "append this to end of log.txt")``` \
```burger.logArray("log.txt", array)``` \
```burger.logArray("log.txt", array, "red", "black")``` \
The last one will log each element in array with a certain color and background.

# Useful Information
---

```burger.strip("someString")``` will strip any string of it's ANSI color information using [strip-ansi]()

#### Numbers and strings:

"black" or 0 \
"red" or 1 \
"green" or  2 \
"yellow" or 3 \
"blue" or 4 \
"magenta" or 5 \
"cyan" or 6 \
"white" or 7 \
"gray" or 8 \
"grey" or 9 \
you can use ```burger.c(int)``` for `burger.colorString(string, color)` \
or `burger.colorStringBG(string, bgColor)`
