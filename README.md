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

Definition of columns on the the "Main" sheet on the spreadsheet, also the first sheet. NOTE that for the icons, if there isn't an applicable value, put "None":

<ul>
	<strong><li>Activate: </strong>This tells LegTracker to use the information contained on the row. </li>
	<strong><li>Origin: </strong>Tells LegTracker where the bill originated. Important that the value inputed here be the same value as what is inputed on the "Control" sheet under rows 10 and 11. 
		<ul>
			<li>For example: if you are tracking California legislation, you can use AB for bills that originated from the Assembly, and SB for the Senate. Make AB and SB are used both in this column and for rows 10 and 11 on the "Control" sheet.</li>
		</ul></li>
	<strong><li>Title: </strong>This is the official title of the bill, usually in the form of what kind of bill it is (AB) and a number (543). What is placed here will show up on the interactive as the larger title for the bill. It is also linked to whatever website address you put in the URL column (see more below).</li>
	<strong><li>Common: </strong>Use this space to briefly describe the bill. On the interactive, this is connected to the text underneath the title. NOTE that you are limited at this point to about 6-10 words depending on length of word. Very brief.	</li>
	<strong><li>URL: </strong>If you want to add a link to a page if someone clicks on the title of the bill on the interactive, you can add that link here (think bill summary page or a story on your website).</li>
	<strong><li>Bill Status: </strong>This column is used to show the overall status of the bill. You must use on of the following valid commands on the spreadsheet to summon the appropriate icon:</li>
		<ul>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/bill.png"> Play: </strong>This means the bill is in play: it has been introduced in one of the legislative chambers and a final decision hasn't been make about the bill.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/dead.png">Dead: </strong>The bill was either voted down in either legislative chamber, or the bill was vetoed by the executive.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/two-year.png">TY: </strong>In California, we have a two-year legislative cycle. Two-year bills are bills that get pushed to the next legislative year. If you have a relevant system in place, you could use this icon for that.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/signed.png">Signed: </strong>This bill survived the gauntlet, and the executive has signed it into law.</li>
		</ul></li>
	<strong><li>First House and Second House: </strong>These icons relate to the progress of a bill in both legislative chambers. The icons shown are for both an Assembly or House, and a Senate. The icon with three people is for the chamber with more people, the icon with two is for the Senate.</li>
		<ul>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/assembly.png"><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/senate.png"> Intro: </strong>The bill has been introduced into a chamber. This includes going through committee.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/assembly-pass.png"><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/senate-pass.png"> Pass: </strong>The bill has passed a chamber. This means it was brought to the floor and voted by the entire chamber, not just a committee.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/assembly-concur.png"><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/senate-concur.png"> Concur: </strong>When one chamber makes changes to the bill after the original chamber passed it, it must go back to the original chamber for a decision on the changes. This reflects that.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/assembly-fail.png"><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/senate-fail.png"> Fail: </strong>A chamber killed a bill by voting it down. Again, this is the whole chamber not just a committee.</li>
		</ul></li>
	<strong><li>Executive: </strong>This reflects the executive who signs or vetoes bills (Governor in states, and the president at federal level).</li>
		<ul>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/bill.png"> Enroll: </strong>This means the bill passed both chambers and is awaiting a decision by the executive on whether to veto or sign the bill.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/bill.png"> Veto: </strong>The executive has vetoed the bill.</li>
			<strong><li><img width="50" src="http://edsource.org/today/wp-content/iframe/topic-features/assets/bill.png"> Signed: </strong>The executive has signed the bill into law.</li>
		</ul></li>
</ul>

Under the "Control" sheet, each of the options do the following:

<ul>
	<li><strong>Activate Header</strong>: Selecting "Yes" will enable the header; selecting "No" will disable it.</li>
	<li><strong>Header Title</strong>: Connected to the large title on the interactive.</li>
	<li><strong>Header URL</strong>: If you want to link the title to a website, place it here.</li>
	<li><strong>Header Subtitle</strong>: Brief explanatory text underneath the title.</li>
	<li><strong>Header Update</strong>: This is an easy way to change when the interactive content was updated. Displays underneath subtitle.</li>
	<li><strong>Lower Chamber</strong>: Tooltip related - makes sure the tooltip relates the appropriate lower chamber (Assembly or House).</li>
	<li><strong>Upper Chamber</strong>: Tooltip related - makes sure the tooltip relates the appropriate upper chamber (Senate).</li>
	<li><strong>Executive</strong>: Tooltip related - makes sure the tooltip relates the right executive figure (e.g. Governor or President) </li>
	<li><strong>Lower Chamber Bills</strong>: This is important. What is entered here must connect to the "Origin" column of the "Main" spreadsheet (e.g. AB or House).</li>
	<li><strong>Upper Chamber Bills</strong>: This is important. What is entered here must connect to the "Origin" column of the "Main" spreadsheet (e.g. SB or Senate).</li>
</ul>	

Any questions or feedback can be directed to <a href="mailto:josborn@edsource.org">John C. Osborn</a>.


