// -------------- GLOBAL VARIABLES -------------- // 

	var public_spreadsheet_url = "https://docs.google.com/spreadsheet/pub?key=0AnZDmytGK63SdGtkak9kc1BtYlZndWxmd0pIU3JVUFE&output=html";
	var billDatabase = [];
	var controlInfo = [];


// -------------- NO IMAGE DRAG -------------- // 
	$(document).ready(function($){
		$('img').on('dragstart', function(event) { event.preventDefault(); });
	});
	
		
// -------------- URLS OPEN IN ANOTHER TAB/WINDOW -------------- // 
	function linkToUrl(i){
		window.open(billDatabase[i][4]);
	}

			
// -------------- SUMMON TABLETOP -------------- // 
	$(document).ready(function($){
		Tabletop.init( { key: public_spreadsheet_url,
	                     callback: showInfo,
	                     wanted: ["Main", "Control"],
	                     debug: true } );
	});

	function showInfo(data, tabletop) {		
		$.each( tabletop.sheets("Main").all(), function(i, main) {
			var insertRow = [];
			insertRow[0] = main.activate;
			insertRow[1] = main.origin;
			insertRow[2] = main.number;
			insertRow[3] = main.common;
			insertRow[4] = main.url;
			insertRow[5] = main.billstatus;
			insertRow[6] = main.firsthouse;
			insertRow[7] = main.secondhouse;
			insertRow[8] = main.gov;
			billDatabase.push(insertRow);
		});
		
		$.each( tabletop.sheets("Control").all(), function(i, control) {
			var insertRow = [];
			insertRow[0] = control.title;
			insertRow[1] = control.option;
			controlInfo.push(insertRow);
		});
		
		populateTracker();
	}	
	

// -------------- POPULATE TRACKER -------------- // 
	function populateTracker(){
		var icon1, icon2, icon3, icon4;
		
		//Everything Header Related//
		if (controlInfo[0][1] === "Yes"){
			$("#tracker-header h2").html(controlInfo[1][1]);
			$("#tracker-header a").attr("href", controlInfo[2][1]);
			$("#tracker-header p:eq(0)").html(controlInfo[3][1]);
			$("#tracker-header p:eq(1)").html("<em>" + controlInfo[4][1] + "</em>");
		}
		else if (controlInfo[0][1] !== "Yes") {
			$("#tracker-header").remove();
		}
				
		for (i = 0 ; i < billDatabase.length ; i++){
			
			//IE empty image fix the long way//
				if (billDatabase[i][6] === "None"){
					icon1 = false;
				}
				else if (billDatabase[i][6] !== "None"){
					icon1 = true;
				}
			
				if (billDatabase[i][7] === "None"){
					icon2 = false;
				}
				else if (billDatabase[i][7] !== "None"){
					icon2 = true;
				}
			
				if (billDatabase[i][8] === "None"){
					icon3 = false;
				}
				else if (billDatabase[i][8] !== "None"){
					icon3 = true;
				}
			
		


			//Everything bill related//
				if (billDatabase[i][0] === "Yes"){				
					// Bill Particulars //
						$("#tracker-content").append("<div class='law-row'><div class='law-name'><a href=''></a><p></p></div><div class='law-status'><img onclick='linkToUrl(" + i + ")' src=''><img onclick='linkToUrl(" + i + ")' src=''><img onclick='linkToUrl(" + i + ")' src=''><img onclick='linkToUrl(" + i + ")' src=''></div></div>");
						$(".law-row:eq(" + i + ") .law-name a").attr("href", billDatabase[i][4]).attr("target","_blank");
						$(".law-row:eq(" + i + ") .law-name a").html(billDatabase[i][2]);
						$(".law-row:eq(" + i + ") .law-name p").html(billDatabase[i][3]);
				
				
					switch(icon1){
						case true:
							// First House //
							if (billDatabase[i][1] === "AB"){
								if (billDatabase[i][6] === "Intro"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly.png']").caltip({title:"In " + controlInfo[5][1], content:"Bill is being debated in the " + controlInfo[5][1],font:"normal 12px/14px lato,helvetica,sans-serif",titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333', width:'400'});
								}
								else if (billDatabase[i][6] === "Pass"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly-pass.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly-pass.png']").caltip({title:"Passed " + controlInfo[5][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill has passed the " + controlInfo[5][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								else if (billDatabase[i][6] === "Fail"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly-fail.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly-fail.png']").caltip({title:"Dead in " + controlInfo[5][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill was shot down in the " + controlInfo[5][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								else if (billDatabase[i][6] === "Concur"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly-concur.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly-concur.png']").caltip({title:"Concurrence in " + controlInfo[5][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content: controlInfo[5][1] + " is deciding on " + controlInfo[6][1] + " amendments to bill.",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
							}
							else if (billDatabase[i][1] === "SB"){
								if (billDatabase[i][6] === "Intro"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate.png']").caltip({title:"In " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill is being debated in the " + controlInfo[6][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								else if (billDatabase[i][6] === "Pass"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate-pass.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate-pass.png']").caltip({title:"Passed " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill has passed the " + controlInfo[6][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								else if (billDatabase[i][6] === "Fail"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate-fail.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate-fail.png']").caltip({title:"Dead in " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill was shot down in the " + controlInfo[6][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								else if (billDatabase[i][6] === "Concur"){
									$(".law-row:eq(" + i + ") .law-status img:eq(0)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate-concur.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate-concur.png']").caltip({title:"Concurrence in " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content: controlInfo[6][1] + " is deciding on " + controlInfo[5][1] + " amendments to bill.",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
							}
							break;
					}
				
				
				
					// Second House //
						switch(icon2){
							case true:
								if (billDatabase[i][1] === "AB"){
									if (billDatabase[i][7] === "Intro"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate.png']").caltip({title:"In " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill is being debated in the " + controlInfo[6][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
									}
									else if (billDatabase[i][7] === "Pass"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate-pass.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate-pass.png']").caltip({title:"Passed " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill has passed the " + controlInfo[6][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
									}
									else if (billDatabase[i][7] === "Fail"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate-fail.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate-fail.png']").caltip({title:"Dead in " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill was shot down in the " + controlInfo[6][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
									}
									else if (billDatabase[i][7] === "Concur"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/senate-concur.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/senate-concur.png']").caltip({title:"Concurrence in " + controlInfo[6][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content: controlInfo[6][1] + " is deciding on " + controlInfo[5][1] + " amendments to bill.",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
									}
								}
								else if (billDatabase[i][1] === "SB"){
									if (billDatabase[i][7] === "Intro"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly.png']").caltip({title:"In " + controlInfo[5][1], content:"Bill is being debated in the Assembly",font:"normal 12px/14px lato,helvetica,sans-serif", content:"Bill is being debated in the " + controlInfo[5][1],font:"normal 12px/14px lato,helvetica,sans-serif",titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333', width:'400'});
									}
									else if (billDatabase[i][7] === "Pass"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly-pass.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly-pass.png']").caltip({title:"Passed " + controlInfo[5][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill has passed the " + controlInfo[5][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
									}
									else if (billDatabase[i][7] === "Fail"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly-fail.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly-fail.png']").caltip({title:"Dead in " + controlInfo[5][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill was shot down in the " + controlInfo[5][1],font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
									}
									else if (billDatabase[i][7] === "Concur"){
										$(".law-row:eq(" + i + ") .law-status img:eq(1)").attr("src", "http://www.edsource.org/today/wp-content/profiles/assembly-concur.png");
										$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/assembly-concur.png']").caltip({title:"Concurrence in " + controlInfo[5][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content: controlInfo[5][1] + " is deciding on " + controlInfo[6][1] + " amendments to bill.",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
									}
								}
								break;
						}
				
					// Executive //
						switch(icon3){
							case true:
								if (billDatabase[i][8] === "Signed"){
									$(".law-row:eq(" + i + ") .law-status img:eq(2)").attr("src", "http://www.edsource.org/today/wp-content/profiles/gov-signed.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/gov-signed.png']").caltip({title:"Signed by " + controlInfo[7][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content: controlInfo[7][1] + " has signed the bill into law",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								else if (billDatabase[i][8] === "Enroll"){
									$(".law-row:eq(" + i + ") .law-status img:eq(2)").attr("src", "http://www.edsource.org/today/wp-content/profiles/enroll.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/enroll.png']").caltip({title:"Waiting on " + controlInfo[7][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill has passed both chambers and is awaiting the " + controlInfo[7][1] + "'s decision",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								else if (billDatabase[i][8] === "Veto"){
									$(".law-row:eq(" + i + ") .law-status img:eq(2)").attr("src", "http://www.edsource.org/today/wp-content/profiles/veto.png");
									$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/veto.png']").caltip({title:"Vetoed by " + controlInfo[7][1],titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content: controlInfo[7][1] + " has vetoed the bill",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
								}
								break;
						}
				
				
				
					// Bill Status //
						if (icon1 === false){
							icon4 = 0;
							$(".law-row:eq(" + i + ") .law-status img:eq(1)").remove();
							$(".law-row:eq(" + i + ") .law-status img:eq(2)").remove();
							$(".law-row:eq(" + i + ") .law-status img:eq(3)").remove();
						}
						else if (icon2 === false){
							icon4 = 1;
							$(".law-row:eq(" + i + ") .law-status img:eq(2)").remove();
							$(".law-row:eq(" + i + ") .law-status img:eq(3)").remove();
						}
						else if (icon3 === false){
							icon4 = 2;
							$(".law-row:eq(" + i + ") .law-status img:eq(3)").remove();
						}
						else {
							icon4 = 3;
						}
					
						if (billDatabase[i][5] === "Play"){
							$(".law-row:eq(" + i + ") .law-status img:eq(" + icon4 + ")").attr("src", "http://www.edsource.org/today/wp-content/profiles/bill.png");
							$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/bill.png']").caltip({title:"Bill in Play",titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill is still being considered",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
						}
						else if (billDatabase[i][5] === "TY"){
							$(".law-row:eq(" + i + ") .law-status img:eq(" + icon4 + ")").attr("src", "http://www.edsource.org/today/wp-content/profiles/two-year.png");
							$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/two-year.png']").caltip({title:"Two-Year Bill",titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill will be considered in next year's Legislative session",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
						}
						else if (billDatabase[i][5] === "Signed"){
							$(".law-row:eq(" + i + ") .law-status img:eq(" + icon4 + ")").attr("src", "http://www.edsource.org/today/wp-content/profiles/signed.png");
							$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/signed.png']").caltip({title:"Signed into Law",titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill is now law",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
						}
						else if (billDatabase[i][5] === "Dead"){
							$(".law-row:eq(" + i + ") .law-status img:eq(" + icon4 + ")").attr("src", "http://www.edsource.org/today/wp-content/profiles/dead.png");
							$(".law-status img[src='http://www.edsource.org/today/wp-content/profiles/dead.png']").caltip({title:"Bill is Dead",titlefont: 'bold 14px/16px lato,Helvetica,sans-serif',titlecolor: '#333333',content:"Bill has been either vetoed or voted down.",font:"normal 12px/14px lato,helvetica,sans-serif",width:'400'});
						}
				}	
				else if (billDatabase[i][0] !== "Yes"){
					return;
				}	
		}
	}

window.onload = function(){
	//removes loading screen onload//
	$("#loading").remove();
	
	//bug fix//
	$(".law-status br").remove();
	
	
}