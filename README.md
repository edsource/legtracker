LegTracker
==========

Hi! This is my first major Github project, so bare with me. Here at <a href="http://edsource.org">EdSource</a>, we cover the education scene in California from the classroom to the Capitol. We also track education bills making their way through the California legislature. The idea came up to build an interactive that could display the current status of bills we were tracking in a graphically way. This is how LegTracker was born (though we call it EdTracker).

As I built this project, I figured that LegTracker may be of use to other organizations and media outlets who may want to track bills at whatever political level they deal with. So I templatized the tool in a way where it requires only minimal technical expertise to get started, then any person could mess with what is displayed by using a Google Spreadsheet.

<a href="http://www.edsource.org/today/2013/37469/37469">A live example of the LegTracker.</a>

<h1>How it Works</h1>

LegTracker pulls in data from a Google Spreadsheet-based interface to populate the graphic. You input all the particulars of a bill, such as the name, description, and a URL for more information into the spreadhseet. Then, as the bill makes its way through a legislative body, you can indicate the status on the spreadsheet which will then translate into one of many icons I made from scratch, some using public domain svg files. LegTracker will then automatically sort the icons based on the status of the bill and the type of bill. A tooltip allows someone to hover over an icon to get more information about the status. And there you go.

You can customize LegTracker based on what legislative body you're tracking, or whether you want a header or just a display for the bills by simply indicating on the spreadsheet interface.

Currently, if you want to change the style, you'll have to go into the CSS to do so, though a future goal would be to allow you to do that from the spreadsheet.

<h1>Setting it Up</h1>

<ol>
<li>Download all the files located on this git</li>
<li><a href="https://docs.google.com/spreadsheet/ccc?key=0AnZDmytGK63SdGtkak9kc1BtYlZndWxmd0pIU3JVUFE#gid=0">Go to this spreadsheet and make a copy</a></li>
</ol>
<h1>Dependencies</h1>
<h1>To-Do</h1>

<h1>Documentation</h1>
