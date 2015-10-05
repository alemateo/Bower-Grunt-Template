# BOWER & GRUNT TEMPLATE #


Template to start projects using BOWER and GRUNT.

**With tasks to:**

1. Minify and Concat .css & .js  files
3. Add dependencies tags "script" & "link" automatically into the base HTML
4. Listen updates to minify and concat files, and generate tags



## SETUP ##

Preparation:

1. ***$ npm install -g grunt-cli***  (if you don't have GRUNT installed)
2. ***$ npm install -g bower***  (if you don't have BOWER installed)

**Run(in project directory):**

1. ***$ grunt***
2. ***$ bower install bootstrap*** (for example)



note: if you have errors with the imagemin task run:

1. npm uninstall grunt-contrib-imagemin
2. npm install grunt-contrib-imagemin
