# Huntingdon Valley Chess Society Juniors

To make a change to the website
-------------------------------

1. Make sure you're on the master branch.

  ```
  git checkout master
  ```
2. Pull the latest code from GitHub.

  ```
  git pull origin master
  ```
3. If you'll be making changes to CSS/JavaScript, run ```gulp``` to automatically compile and minify the code. If you're making changes to CSS, make them in the LESS files, which will be compiled to CSS.

  If you won't be making changes to CSS or Javascript, don't worry about ```gulp```.
5. Make your changes.
6. Stage your changes.

  ```
  git add .
  ```
7. Commit your changes.

  ```
  git commit -m "<add descriptive message of your changes here>"
  ```
8. Push your changes to master.

  ```
  git push origin master
  ```
9. Checkout the gh-pages branch, from which the website will be published.

  ```
  git checkout gh-pages
  ```
10. Pull the latest code from GitHub.

  ```
  git pull origin gh-pages
  ```
11. Merge the master branch into the gh-pages branch. 

  ```
  git merge master
  ```
  
  Upon running this command, vim will open, showing you the automatic commit message. Type ```:q``` and press enter.
12. Push your changes to gh-pages.

  ```
  git push origin gh-pages
  ```
13. You can now see your changes at www.hvcsj.org!
