This is an example project that is explained in these the blogpost <a href="http://www.christianengvall.se/phonegap-and-google-maps/">Phonegap and Google maps</a> and an example off how to share the www folder between platforms explained in <a href="http://www.christianengvall.se/phonegap-and-multiple-platforms/">Phonegap and multiple platforms</a>.

After cloning this repository you must link the www folder to the assets folder (create assets if it doesn't exist) for the android project with one of these commands:


go to the assets folder in the terminal and type: ln -s ../../www/ www

And to do this on windows for the android project:

open a console and type: mklink /D c:\pathtoproject\Android\assets\www c:\pathtoproject\www
