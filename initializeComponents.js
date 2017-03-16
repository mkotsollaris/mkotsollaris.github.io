/**
 * Created by DELL on 1/6/2016.
 */
$(document).ready(
    function ()
    {
        $(
            '<a class="blog-nav-item" id="homeMenuID" href="http://mkotsollaris.com">Home</a>' +
            '<a class="blog-nav-item" id="aboutMenuID" href="http://mkotsollaris.com/about">About</a>' +
            '<a class="blog-nav-item" id="CVMenuID" href="http://stackoverflow.com/cv/mkotsollaris">CV</a>' +
            '<a class="blog-nav-item" id="contactMenuID" href="http://mkotsollaris.com/contact">Contact</a>').appendTo('#blogNavID');

        //sidebar
        $(
            '<div class="sidebar-module sidebar-module-inset"> ' +
            '<h4>Menelaos Kotsollaris</h4> ' +
            '<img width="auto" height="160" src="http://mkotsollaris.com/pictures/ic_meqc.JPG"/> ' +
            '<p>Full Stack Software Engineer ' +
            '<br>Computer Science Passionate & OOP Enthusiast' +
            '<br><br> <a href="http://stackexchange.com/users/1458483"> ' +
            '<img src="http://stackexchange.com/users/flair/1458483.png" width="208" height="58"' +
            'alt="profile for Menelaos Kotsollaris on Stack Exchange, a network of free, community-driven Q&amp;A sites"' +
            'title="profile for Menelaos Kotsollaris on Stack Exchange, a network of free, community-driven Q&amp;A sites"> ' +
            '</a><br><br><a href="http://info.flagcounter.com/SeyD"><img ' +
            'src="http://s01.flagcounter.com/count2/SeyD/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/">'+
            '</a><br>'+
            '<br> <a class="twitter-timeline" data-dnt="true" href="https://twitter.com/mkotsollaris"' +
            'data-widget-id="691627422937190401">Tweets by @mkotsollaris</a> </div>' +
            '<div class="sidebar-module"> ' +
            '<a href="http://stackoverflow.com/users/1373465/menelaos-kotsollaris?tab=profile"> ' +
            '<img width="auto" height="40px" src="http://mkotsollaris.com/pictures/ic_stackoverflow.png"/> </a> ' +
            '<a href="https://github.com/mkotsollaris"><img width="auto" height="40px" src="http://mkotsollaris.com/pictures/ic_github.png"/></a> ' +
            '<a href="https://ca.linkedin.com/pub/menelaos-kotsollaris/7b/6a7/bb9"> ' +
            '<img width="auto" height="40px" src="http://mkotsollaris.com/pictures/ic_linkedIn.png"/></a> ' +
            '<a href="https://plus.google.com/u/0/+MenelaosKotsollaris34/posts"> ' +
            '<img width="auto" height="40px" src="http://mkotsollaris.com/pictures/ic_gplus.png"/></a> ' +
            '<a href="https://twitter.com/mkotsollaris"><img width="auto" height="40px" src="http://mkotsollaris.com/pictures/ic_twitter.png"/></a> ' +
            '<a href="https://www.youtube.com/channel/UCFfm76gx1mxdbE7tE5X_aWA/videos"> ' +
            '<img width="auto" height="40px" src="http://mkotsollaris.com/pictures/ic_youtube.png"/></a><br> ' +
        '</div>').appendTo('#sideBarMenuID');

        //twitter feed injection
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],
            p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
        {js=d.createElement(s);js.id=id;js.src=p+
            "://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
        //footer
        $(
            ' <p>Developed by <a href="http://mkotsollaris.com/">Menelaos Kotsollaris</a> ' +
            '- All rights reserved © 2015-2016</p>').appendTo('#footerID');
    });
