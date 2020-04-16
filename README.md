# Waitr-Remove_Unavailable_Restaurants

If you live in a food desert and are tired of having half the Waitr results being populated with "Coming Soon" placards, and are frustrated about the inability to filter those out, then I have good news for you!

These userscripts will give those the boot, leaving you with only choices that you *can* have!

# Beginner Installation Instructions

Userscripts allow (as the name might suggest), users to allow their own scripts & content into websites they use. Tampermonkey and Greasemonkey are two script managers that allow you to use those userscripts on websites. Using Tampermonkey is preferred, as that supports the most platforms. 

- Go to http://www.tampermonkey.net/ and install the extension for your browser of choice.
- Once it is installed, go to the [Waitr Tampermonkey script](https://raw.githubusercontent.com/atlc/Waitr-Remove_Unavailable_Restaurants/master/Tampermonkey.js) and copy everything.
- Click on the Tampermonkey icon, which should've just appeared in your browser extensions, which should appear like one of these
  - ![](https://tampermonkey.freetls.fastly.net/v1.22/images/images.png)
- Click "Create a new script", paste the copied code into the editor making sure to **overwrite the default stuff that was previously there**, and save.
- Open Waitr or reload the page if you're already there, and revel in the new page that is free of clutter.

# How it works

Waitr's site is super sluggish under the current load of COVID-19 delivery demands (or maybe that's because I'm developing on a Laptop & WiFi currently), and I can't get DOM events timed reliably(??). When the script is loaded, it will wait 5 seconds, then run through the page to delete those restaurants.

If Waitr is still fetching information and the site hasn't fully loaded by then, whenever you click the `"See More Restaurants"` button on the main page, that deletion will fire again.

If you're using the search function (which I haven't implemented anything for yet), OR for any other page in the site that might display restaurants, you can also click the `Remove 'Coming Soon' Restaurants` button in the navbar (which hijacks the blog button, sorry Waitr blog writers) while on any page in the site to get rid of them too.

# Supported Platforms
- Firefox (Works with Tampermonkey and Greasemonkey)
- Chrome (Works with Tampermonkey)
- Edge (Untested, but should work with TM)
- Safari (Untested, but should work with TM)
- Firefox on Android (Untested, but possibly works)
