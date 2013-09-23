LegTracker
==========
<img width="200" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/edtrack.png">

Hi! This is my first major Github project, so bear with me. Here at <a href="http://edsource.org">EdSource</a>, we cover the California education scene from the classroom to the Capitol. We also track education bills making their way through the California legislature. The idea came up to build an interactive that could display the current status of bills we were tracking. This is how LegTracker was born (though we call it EdTracker).

As I built this project, I figured the LegTracker may be of use to other organizations and media outlets that may want to track bills at whatever political level they cover. So I templatized the tool in a way where it requires only minimal technical expertise to get started, then any person could mess with what is displayed in the interactive by using a Google Spreadsheet.

<a href="http://www.edsource.org/today/2013/37469/37469">A live example of the LegTracker.</a>

<h1>How it Works</h1>

LegTracker pulls in data from a Google Spreadsheet to populate the graphic. You input all the particulars of a bill, such as the name, description, and a URL for more information into the spreadsheet. Then, as the bill makes its way through the legislative labyrinth, you can indicate the status on the spreadsheet which will then translate into one of many icons I made, some using public domain svg files from <a href="http://thenounproject.com">Noun Project</a>. LegTracker will then automatically sort the icons based on the status of the bill and what legislative chamber originally proposed the bill. A tooltip allows someone to hover over an icon to get more information about the bill's status. And there you go.

You can customize LegTracker based on what legislative body you're tracking, and you can customize the actual interactive by choosing if you want a header displayed or just the status of bills.

Currently, if you want to change the style of the interactive (color, etc), you'll have to go into the CSS to do so, though a future goal will be to allow you to do that from the spreadsheet.

Mainly, this is meant to be accessible to anyone who doesn't have coding experience but wants to use this tool. The instruction are written assuming you're not entirely familiar with code. 

<h1>Setting it Up</h1>
Doing this step-by-step for those who aren't entirely familiar with code. 
<ol>
	<li>Download all the files located on this git</li>
	<li><a href="https://docs.google.com/spreadsheet/ccc?key=0AnZDmytGK63SdGtkak9kc1BtYlZndWxmd0pIU3JVUFE#gid=0">Go to this spreadsheet and make a copy.</a></li>
	<li>In the copied spreadsheet, replace the example bills on the spreadsheet with the ones you want to track. You can add as many as you like. Look at the <strong>DOCUMENTATION</strong> below for how the tracker works</li>
	<li>In the copied spreadsheet menu, go to <strong>FILE</strong> and click on <strong>PUBLISH TO WEB</strong>.</li>
	<li>Click on the button <strong>START PUBLISHING</strong>, and copy the link that appears underneath.</li>
	<li>Open the <strong>"legtracker.js"</strong> file located in the js folder.</li>
	<li>At the top look for <strong>"var public_spreadsheet_url"</strong>. Replace the code in quotes next to it with the code you copied from the Google Spreadsheet. Save the file.</li>
	<li>Upload all the files you downloaded from the git to your server. This may require the assistance of your tech people if you're not familiar how to do this.</li>
	<li>Two options at this point: you can embed the tracker into a page, or you can drop the code directly into a page. This really depends on your CMS (Wordpress eats some code, for example).</li>
	<li>If you want to embed, this template will work for you once the files are uploaded: <strong>"<iframe src"ENTER THE URL OF THE legtracker.html FILE" width="470" height="THIS DEPENDS ON NUMBER OF BILLS BEING TRACKED - YOU WILL HAVE TO PLAY WITH THIS" frameborder="0" scrolling="no"></iframe>"</strong></li>
	<li>Should be good to go!</li>
</ol>
<h1>Dependencies</h1>

The LegTracker relies the following javascript libraries. Each of these libraries are contained inside the js folder, though you may want to check for the latest version as the files in this folder may be out of date. 

<ul>
	<li><strong><a href="http://jquery.com/">jQuery</a></strong> Absolute must for both the code I wrote and the code for the other javascript libraries attached to this project.</li>
	<li><strong><a href="https://github.com/jsoma/tabletop">Tabletop.js:</a></strong> Jonathan Soma deserves a freaking medal for this beautiful assist. This library will take the data on a Google Spreadsheet and translate it into workable data within your project. This makes it where you don't have to go into the code every time you want to change your data. Totally time saver.</li>
	<li><strong><a href="https://github.com/jrue/CalTip">CalTip:</a></strong> Written by Jeremy Rue, CalTip is a simple tooltip that is highly customizable. I use this for the scroll over tooltips for the icons.</li>	
</ul>

If you want to go the extra mile to ensure there is full access to this interactive, you may want to use <strong><a href="https://github.com/jsoma/flatware">Flatware.js</a></strong>, a library Jonathan Soma created as a work around for the Google Spreadsheet glitch that breaks tabletop.js. In short, if someone has logged into their Google account on a browser and is then timed out due to inactivity, it breaks projects that are dependent on accessing a Google Spreadsheet. Google is in the process of fixing this, but you should be aware of this issue and a solution to it. Better safe than sorry. 

<h1>To-Do</h1>
A fluid list:
<ul>
	<li>Customize LegTracker style from Google Spreadsheet</li>
	<li>For those deeply obsessed with legislation, creating icons for tracking a bill through committees</li>
	<li>Making LegTracker mobile friendly</li>
</ul>

<h1>Documentation</h1>

Definition of columns on the the "Main" sheet on the spreadsheet, also the first sheet:

<ul>
	<strong><li>Activate: </strong> This tells LegTracker to use the information contained on the row. 
	<strong><li>Origin: </strong> Tells LegTracker where the bill originated. Important that the value inputed here be the same value as what is inputed on the "Control" sheet under rows 10 and 11. <li>
		<ul>
			<li>For example: if you are tracking California legislation, you can use AB for bills that originated from the Assembly, and SB for the Senate. Make AB and SB are used both in this column and for rows 10 and 11 on the "Control" sheet.</li>
		</ul>
	<strong><li>Title: </strong>This is the official title of the bill, usually in the form of what kind of bill it is (AB) and a number (543). What is placed here will show up on the interactive as the larger title for the bill. It is also linked to whatever website address you put in the URL column (see more below).</li>
	<strong><li>Common: </strong> Use this space to briefly describe the bill. On the interactive, this is connected to the text underneath the title. NOTE that you are limited at this point to about 6-10 words depending on length of word. Very brief.	</li>
	<strong><li>URL: </strong> <li>
	<strong><li>Bill Status: </strong> <li>
	<strong><li>First House: </strong> <li>
	<strong><li>Second House: </strong> <li>	
	<strong><li>Executive: </strong> <li>
</ul>





