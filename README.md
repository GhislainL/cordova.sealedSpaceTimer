#Sealed space timer

This is a portage of the website to mobile device using Cordova. The solution was built with Visual Studio 2015 RC.
Continuing my discovery of AngularJS, this application compute the time left in a sealed space.
The hypothesis used for calculation are :
* the time left (in hour) in a sealed space while resting can be computed by dividing the room's volume (m3) by the number of people inside and multiplying it by 1.5 (1)
* the average human volume is about 75 liters : the human body is almost fully made of water, 1 liter of water weight 1kg, the average humain body weight 75kg. For practical purpose, i rounded it to 100 liters. (2)

##Dependencies :
* The timer used is Angular Timer by Siddique Hameed : http://siddii.github.io/angular-timer/
* Angular-UI : https://angular-ui.github.io/
* Bootstrap
* The Bootstrap theme used is United provided by Bootswatch : https://bootswatch.com/united/
* Angular-Translate : http://angular-translate.github.io/

**References:**
* (1) : http://www.phdnm.org/uploads/3/0/0/1/3001973/sonderkommandos.htm#_Toc309033238
* (2) : http://intra-science.anaisequey.com/mathematiques/mathematiques/141-volume-surface-population
