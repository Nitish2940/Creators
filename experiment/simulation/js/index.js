let ak=0;
let a1, a2, a3, a4;
let avg;







  function mfunction() {
    document.getElementById("m").innerHTML="<b>Your answer is right.Now proceed!</b>";
  
}
  function myfunction() {
  document.getElementById("m").innerHTML="<b>Your answer is wrong .Try another one!</b>";
   
}

 function mfunction2() {
    document.getElementById("m2").innerHTML="<b>Your answer is right.Now proceed!</b>";
  
}
  function myfunction2() {
  document.getElementById("m2").innerHTML="<b>Your answer is wrong .Try another one!</b>";
   
}

 function mfunction3() {
    document.getElementById("m3").innerHTML="<b>Your answer is right.Now proceed!</b>";
  
}
  function myfunction3() {
  document.getElementById("m3").innerHTML="<b>Your answer is wrong .Try another one!</b>";
   
}
 function mfunction5() {
    document.getElementById("m5").innerHTML="<b>Your answer is right.Now proceed!</b>";
  
}
  function myfunction5() {
  document.getElementById("m5").innerHTML="<b>Your answer is wrong .Try another one!</b>";
}

 function mfunction4() {
    document.getElementById("m4").innerHTML="<b>Your answer is right.Now proceed!</b>";
  
}
  function myfunction4() {
  document.getElementById("m4").innerHTML="<b>Your answer is wrong .Try another one!</b>";
}







function queAns()
{
	$( () => {
    $( "#dialog1" ).dialog({
      autoOpen: true,
      
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
      $("#dialog1").dialog( "open" );
      $("#dialog1").css({'display':'block'});
    });
}
function queAns2(){
$( () => {
    $( "#dialog2" ).dialog({
      autoOpen:true,
      
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
     $("#dialog2").dialog( "open" );
      $("#dialog2").css({'display':'block'});
    });
}

function queAns3(){
$( () => {
    $( "#dialog3" ).dialog({
      autoOpen:true,
      
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
     $("#dialog3").dialog( "open" );
      $("#dialog3").css({'display':'block'});
    });
}

function queAns4(){
$( () => {
    $( "#dialog4" ).dialog({
      autoOpen:true,
      
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
     $("#dialog4").dialog( "open" );
      $("#dialog4").css({'display':'block'});
    });
}

function queAns5(){

 $( () => {
    $( "#dialog5" ).dialog({
      autoOpen:true,
      
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
     $("#dialog5").dialog( "open" );
      $("#dialog5").css({'display':'block'});
    });


}








function navNext()
{
	for(temp=0;temp<20;temp++)
	{
		document.getElementById(`frame${temp}`).style.display="none";
	}
	mainsubscreen+=1;
	document.getElementById(`frame${mainsubscreen}`).style.display="block";
	document.getElementById("nextButton").style.display="none";
	magic();
}


//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.display=="none")
         document.getElementById('arrow1').style.display="block";
     else
         document.getElementById('arrow1').style.display="none";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(arrow);
     document.getElementById('arrow1').style.display="none";
}



function magic()
{
	if(mainsubscreen==1)//display heading
	 {
		$("#Name").fadeIn(2000);
		setTimeout(() => {
			document.getElementById("nextButton").style.display="block";
		},2000);
	}

	if(mainsubscreen==2)//filling 100ml flask
	 {
		ak=22;
		step2();
	}
	if(mainsubscreen==3)//Prepare testtube Solution
	 {
		ak=32;
		step3();
	}

	if(mainsubscreen==4)//OPacity Calculation
	 {
		ak=42;
		step4();
	}

	if(mainsubscreen==5)//display heading
	 {
		$("#Namee").fadeIn(2000);
		setTimeout(() => {
			document.getElementById("nextButton").style.display="block";
		},2000);
	}

	if(mainsubscreen==6)//Soln Prep
	 {
		ak=23;
		step2();
	}
	if(mainsubscreen==7)//dropper movement
	 {
		ak=33;
		step3();
	}
	if(mainsubscreen==8)//Opcity new value
	 {
		ak=43;
		step4();
	}
	if(mainsubscreen==9)//heading
	 {
		$("#Namee2").fadeIn(2000);
		setTimeout(() => {
			document.getElementById("nextButton").style.display="block";
		},2000);
	}
	if(mainsubscreen==10)//Soln Prep
	 {
		ak=24;
		step2();
	}

	if(mainsubscreen==11)//dropper movement
	 {
		ak=34;
		step3();
	}
	if(mainsubscreen==12)//Opcity new value
		 {
			ak=44;
			step4();
		}

   if(mainsubscreen==13)//heading
	 {
		$("#Namee3").fadeIn(2000);
		setTimeout(() => {
			document.getElementById("nextButton").style.display="block";
		},2000);
	}
	if(mainsubscreen==14)//Soln Prep
	 {
		ak=25;
		step2();
	}

	if(mainsubscreen==15)//dropper movement
	 {
		ak=35;
		step3();
	}
	if(mainsubscreen==16)//Opcity new value
		 {
			ak=45;
			step4();
		} 

		if(mainsubscreen==17)//Opcity new value
		 {
			ak=55;
			step5();
		} 

		if(mainsubscreen==18)//Opcity new value
		 {
			ak=66;
			step6();
		} 
		if(mainsubscreen==19)//Opcity new value
		 {
			ak=68;
			step7();
		} 



}

function step2(){
	$(`#${ak}+2`).fadeIn(1500);
		setTimeout(() => {

		  arrow=setInterval(() => {animatearrow();},500);
			document.getElementById("arrow1").style="display:block; position:absolute; left:400px; top:270px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById(`${ak}+2`).onclick=() => {
				myStopFunction();
				document.getElementById(`${ak}+2`).onclick="";
				document.getElementById(`${ak}+2`).style.animation=" movebottleSolid2g 2s forwards";
				setTimeout(() => {
					document.getElementById(`${ak}+2`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: rotatebottleSolid2g 2s forwards; cursor: pointer;";
					setTimeout(() => {
						document.getElementById(`${ak}+3`).style="position:absolute; left:250px; top:130px; width:100px; display: block ; animation:movedrop 1.5s 4;";
						setTimeout(() => {
							document.getElementById(`${ak}+3drop1`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display: block;";
							setTimeout(() => {
								document.getElementById(`${ak}+3drop1`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:none;";
								document.getElementById(`${ak}+3drop2`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:block";
								setTimeout(() => {
								   document.getElementById(`${ak}+3drop2`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:none;";
								   document.getElementById(`${ak}+3drop3`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:block";
								   setTimeout(() => {
								     document.getElementById(`${ak}+3drop3`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:none;";
								     document.getElementById(`${ak}+3drop4`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:block";
								     document.getElementById(`${ak}+3`).style="position:absolute; left:250px; top:130px; width:100px; display:none;";
								     document.getElementById(`${ak}+2`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: rotatebottlebackSolid2g 1.5s forwards; cursor: pointer;";
								     setTimeout(() => {
								     	document.getElementById(`${ak}+2`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: movebottlebackSolid2g 2s forwards; cursor: pointer;"
								     	setTimeout(() => {
								     		document.getElementById(`${ak}+2`).style="position:absolute; left:450px; top:230px; height: 135.5px; width: 100px; display:none;"
                                            setTimeout(() => {
								     		document.getElementById(`${ak}+3W`).style="position:absolute; left:450px; top:230px; height: 135.5px; width: 100px; display:block; cursor: pointer;;"
                                            arrow=setInterval(() => {animatearrow();},500);
													document.getElementById("arrow1").style="display:block; position:absolute;  cursor: pointer; left:590px; top:270px; height:30px; z-index:10;";
													document.getElementById(`${ak}+3W`).onclick=() => {
													myStopFunction();
													document.getElementById(`${ak}+3W`).onclick="";
													document.getElementById(`${ak}+3W`).style.animation="movebottleSolid2g 2s forwards";
                                                    setTimeout(() => {
					                                    document.getElementById(`${ak}+3W`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: rotatebottleSolid2g 2s forwards; cursor: pointer;";
					                                    setTimeout(() => {
						                                   document.getElementById(`${ak}+3`).style="position:absolute; left:250px; top:130px; width:100px; display: block ; animation:movedropWater 1s 12;";
						                                    setTimeout(() => {
						                                   	  document.getElementById(`${ak}+3dropW1`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:block;";
                                                               setTimeout(() => {
                                                               	  document.getElementById(`${ak}+3dropW1`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:none;";
                                                                  document.getElementById(`${ak}+3dropW2`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:block;";
                                                                  setTimeout(() => {
                                                                      document.getElementById(`${ak}+3dropW2`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:none;";
                                                                      document.getElementById(`${ak}+3dropW3`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:block;";
                                                                       setTimeout(() => {
                                                                          document.getElementById(`${ak}+3dropW3`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:none;";
                                                                          document.getElementById(`${ak}+3dropW4`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1;display:block;";
                                                                          document.getElementById(`${ak}+3`).style="position:absolute; left:250px; top:130px; width:100px; display:none;";
								                                          document.getElementById(`${ak}+3W`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: rotatebottlebackSolid2g 1.5s forwards; cursor: pointer;";
								                                          setTimeout(() => {
								                                            document.getElementById(`${ak}+3W`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: movebottlebackSolid2g 2s forwards; cursor: pointer;"
								                                             setTimeout(() => {
								     	                 						document.getElementById(`${ak}+3W`).style="position:absolute; left:450px; top:230px; height: 135.5px; width: 100px; display:none;"
								     	                 						 setTimeout(() => {
								     		                                        document.getElementById(`${ak}+4H`).style="position:absolute; left:450px; top:230px; height: 135.5px; width: 100px; display:block; cursor: pointer;"
	                                                                                     arrow=setInterval(() => {animatearrow();},500);  
	                                                                                     document.getElementById("arrow1").style="display:block; position:absolute; left:400px; top:270px; height:30px; z-index:10;";
																						 document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
																						 document.getElementById("arrow1").style.msTransform="rotate(180deg)";
																						 document.getElementById("arrow1").style.transform="rotate(180deg)";

				                                                                         document.getElementById(`${ak}+4H`).onclick=() => {
				                                                                         myStopFunction();
														                                 document.getElementById(`${ak}+4H`).onclick="";
																						 document.getElementById(`${ak}+4H`).style.animation="movebottleSolid2g 2s forwards";
																						 if(mainsubscreen==2)
																							 {
																							 queAns();
																							}
	                                                                                     
	                                                                                     setTimeout(() => {
                                                                                              document.getElementById(`${ak}+4H`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: rotatebottleSolid2g 2s forwards; cursor: pointer;";  
                                                                                              setTimeout(() => {
                                                                                               document.getElementById(`${ak}+3`).style="position:absolute; left:250px; top:130px; width:100px; display: block ; animation:movedropWater 2s 2 ;";
                                                                                                setTimeout(() => {
                                                                                                 document.getElementById(`${ak}+3`).style="position:absolute; left:250px; top:130px; width:100px; display:none;";
								                                                                 document.getElementById(`${ak}+4H`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: rotatebottlebackSolid2g 1.5s forwards; cursor: pointer;";
								                                                                  setTimeout(() => {
                                                                                                   document.getElementById(`${ak}+4H`).style="position: absolute; left: 240px; top: 108px; height: 135.5px; width: 100px; animation: movebottlebackSolid2g 2s forwards; cursor: pointer;"
								                                                                    setTimeout(() => {
								                                                                      document.getElementById(`${ak}+4H`).style="position:absolute; left:450px; top:230px; height: 135.5px; width: 100px; display:none;cursor: pointer;"
								                                                                      setTimeout(() => {
                                                                                                        document.getElementById("nextButton").style.display="block";
								                                                                      },1000);
								                                                                    },2000);
								                                                                  },1500);
                                                                                                },4000);
                                                                                              },2100);
                                                                                    	 },2000);
			                                                                         }
                                                                                  },700);
                                                                            },2000);
								                                          },1500);
                                                                        },3000);
                                                                  },3000);
                                                               },3000);
						                                   },3000);
						                                },2000);
					                                 },2000);
												}
												
								     		},300);
								     	},2100);
								     },1500);
							      },1500);
							   },1500);
							},1500);
						},1500);
					},2000);
				},2000);
			}
		},1000);
}


function step3(){
	setTimeout(() => {
		document.getElementById(`${ak}+dropper`).style="position:absolute; left:670px; top:10px; width: 102px; display:block;cursor:pointer; ";
		 arrow=setInterval(() => {animatearrow();},500);
			document.getElementById("arrow1").style="display:block; position:absolute; left:630px; top:100px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById(`${ak}+dropper`).onclick=() => {
				myStopFunction();
				document.getElementById(`${ak}+dropper`).onclick="";
				document.getElementById(`${ak}+dropper`).style="position:absolute; left:670px; top:10px; width: 102px; display:block; animation:movedropper 2.5s forwards";
				setTimeout(() => {
                  document.getElementById(`${ak}+range`).style="position:absolute; font-size:12px;display:block;left:440px; top:90px;";
                   document.getElementById(`${ak}+dropperMLsetup`).onclick=() => {
                          let x;
					      x=document.getElementById(`${ak}+dropperMLrange`).value;
					      if((mainsubscreen==3&& x==2.5)|| (mainsubscreen==7&& x==5)||(mainsubscreen==11&& x==7.5)||(mainsubscreen==15&& x==10))
					        {
                               document.getElementById(`${ak}+dropperMLsetup`).onclick="";
                               document.getElementById(`${ak}+range`).style="position:absolute;font-size:12px; display:none;left:440px; top:90px;";
                               document.getElementById(`${ak}+dropperfill1`).style="display:block;fill:dodgerblue;stroke:dodgerblue;stroke-width:1";
                               document.getElementById(`${ak}+dropper`).style="position:absolute; left:460px; top:165px; width: 102px; display:block; animation:movedropper2 3.5s forwards";
                               setTimeout(() => {
                                   arrow=setInterval(() => {animatearrow();},500);
			                       document.getElementById("arrow1").style="display:block; position:absolute; left:270px; top:210px; height:30px; z-index:10;";
			                       document.getElementById(`${ak}+dropper`).onclick=() => {
										myStopFunction();
										document.getElementById(`${ak}+dropper`).onclick="";
										document.getElementById(`${ak}+3drop`).style="position:absolute; left:198.5px; top:370px; width: 10px; display:block; animation:movedropperDrop 2s 2";
										document.getElementById(`${ak}+dropperfill1`).style="display:none;fill:dodgerblue;stroke:dodgerblue;stroke-width:1"
										document.getElementById(`${ak}+dropperfill2`).style="display:block;fill:dodgerblue;stroke:dodgerblue;stroke-width:1"
										setTimeout(() => {
                                          document.getElementById(`${ak}+fill2`).style="fill:dodgerblue; stroke:dodgerblue; stroke-width:0.3; display:block;";
                                          document.getElementById(`${ak}+dropperfill2`).style="display:none;fill:dodgerblue;stroke:dodgerblue;stroke-width:1";
                                         
                                          setTimeout(() => {
                                               document.getElementById(`${ak}+fill1`).style="fill:dodgerblue; stroke:dodgerblue; stroke-width:0.3; display:block;";
                                               document.getElementById(`${ak}+3drop`).style="position:absolute; left:198.5px; top:370px; width: 10px; display:none;";
                                               setTimeout(() => {
                                                  document.getElementById(`${ak}+dropper`).style="position:absolute;  display:block; animation:movedropper2back 4s forwards;";
                                                   setTimeout(() => {
                                                      document.getElementById(`${ak}+dropper`).style="position:absolute; left:670px; top:10px; width: 10px; display:none;";
                                                       setTimeout(() => {
                                                           document.getElementById(`${ak}+flask100ml2`).style="display:none;";
                                                           setTimeout(() => {
                                                               document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:500px; top:333px; width: 100px;display:block;cursor:pointer";
                                                                arrow=setInterval(() => {animatearrow();},500);
			                                                         document.getElementById("arrow1").style="display:block; position:absolute; left:620px; top:380px; height:30px; z-index:10;";
			                                                         document.getElementById(`${ak}+bottleNH4`).onclick=() => {
			                                                         myStopFunction();
			                                                         document.getElementById(`${ak}+bottleNH4`).onclick="";
			                                                         document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:500px; top:333px; width: 100px;display:block;cursor:pointer; animation:movebottleNH4 2s forwards";
			                                                         setTimeout(() => {
                                                                         document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:210px; top:263px; width: 100px;display:block;cursor:pointer; animation:rotatebottleNH4 1.5s forwards";
                                                                         setTimeout(() => {
                                                                             document.getElementById(`${ak}+4drop`).style="position:absolute; left:199.5px; top:300px; width:100px; display: block; animation:moveNH4Drop 1.5s 2";
                                                                             setTimeout(() => {
                                                                                     document.getElementById(`${ak}+fill1`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1; display: none;";
                                                                                     document.getElementById(`${ak}+fill3`).style="fill:dodgerblue;stroke:dodgerblue;stroke-width:1; display: block;";
                                                                                     document.getElementById(`${ak}+4drop`).style="position:absolute; left:199.5px; top:300px; width:100px; display: none;";
                                                                                     
                                                                                         document.getElementById(`${ak}+5drop`).style="position:absolute; left:199.5px; top:300px; width:100px; display: block; animation:moveNH4Drop2 1.5s 6";
                                                                                         setTimeout(() => {
   																								document.getElementById(`${ak}+fill3`).style="display:none;";
   																								document.getElementById(`${ak}+fill4`).style="display:block;fill:dodgerblue;stroke:dodgerblue;stroke-width:0.3;";
   																								setTimeout(() => {
   																								  document.getElementById(`${ak}+fill4`).style="display:none;";
   																								  document.getElementById(`${ak}+fill5`).style="display:block;fill:dodgerblue;stroke:dodgerblue;stroke-width:0.3;";
   																								  document.getElementById(`${ak}+5drop`).style="position:absolute; left:199.5px; top:300px; width:100px; display: none;";
   																								  setTimeout(() => {
                                                                                                       document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:210px; top:263px; width: 100px;display:block;cursor:pointer; animation:rotatebottlebackNH4 1.5s forwards";
                                                                                                       setTimeout(() => {
                                                                                                           document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:210px; top:263px; width: 100px;display:block;cursor:pointer; animation:movebottlebackNH4 2s forwards";
                                                                                                           setTimeout(() => {
                                                                                                                document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:210px; top:263px; width: 100px;display:none;cursor:pointer;";
                                                                                                                setTimeout(() => {
                                                                                                                    document.getElementById(`${ak}+bottleFeCN`).style="position:absolute; left:500px; top:333px; width: 100px;display:block;cursor:pointer;";
                                                                                                                    arrow=setInterval(() => {animatearrow();},500);
																                                                         document.getElementById("arrow1").style="display:block; position:absolute; left:620px; top:380px; height:30px; z-index:10;";
																                                                         document.getElementById(`${ak}+bottleFeCN`).onclick=() => {
																                                                         myStopFunction();
																                                                         document.getElementById(`${ak}+bottleFeCN`).onclick="";
			                                                         													 document.getElementById(`${ak}+bottleFeCN`).style="position:absolute; left:500px; top:333px; width: 100px;display:block;cursor:pointer; animation:movebottleNH4 2s forwards";
			                                                                                                             setTimeout(() => {
			                                                                                                               document.getElementById(`${ak}+bottleFeCN`).style="position:absolute; left:210px; top:263px; width: 100px;display:block;cursor:pointer; animation:rotatebottleNH4 1.5s forwards";
			                                                                                                               setTimeout(() => {
			                                                                                                                 document.getElementById(`${ak}+4drop`).style="position:absolute; left:199.5px; top:300px; width:100px; display: block; animation:moveFeCNDrop 1.5s 2";
			                                                                                                                 setTimeout(() => {
			                                                                                                                     document.getElementById(`${ak}+4drop`).style="position:absolute; left:199.5px; top:300px; width:100px; display: none; ";
			                                                                                                                     document.getElementById(`${ak}+fill6`).style="display:block;fill:dodgerblue;stroke:dodgerblue;stroke-width:0.3;";
			                                                                                                                     setTimeout(() => {
			                                                                                                                       document.getElementById(`${ak}+bottleFeCN`).style="position:absolute; left:210px; top:263px; width: 100px;display:block;cursor:pointer; animation:rotatebottlebackNH4 1.5s forwards";
			                                                                                                                       setTimeout(() => {
			                                                                                                                           document.getElementById(`${ak}+bottleFeCN`).style="position:absolute; left:210px; top:263px; width: 100px;display:block;cursor:pointer; animation:movebottlebackNH4 2s forwards";
			                                                                                                                           setTimeout(() => {
			                                                                                                                               document.getElementById(`${ak}+bottleFeCN`).style="position:absolute; left:210px; top:263px; width: 100px;display:none;cursor:pointer; ";
			                                                                                                                               setTimeout(() => {
										                                                                                                        document.getElementById("nextButton").style.display="block";
																		                                                                     },1000);
			                                                                                                                           },2300);
			                                                                                                                       },1500);

			                                                                                                                     },500);
			                                                                                                                 },3000);
			                                                                                                               },1500);
			                                                                                                             },2000);
			                                                                                                         }
                                                                                                                },1000);
                                                                                                           },2200);
                                                                                                       },1500);
   																								   },800);
   																								},4500);				
                                                                                         },4500);
                                                                               
                                                                             },3000);
                                                                         },1500);
			                                                         },2000);	
			                                                         }
			
                                                             },1000);
                                                           },700);
                                                       },4100);
                                               },1000);
										   },2000);
										},2000);
				                    }
                               },3600);
					      	}
					      
					      	else if((mainsubscreen==3&& x!=2.5)){
					      		document.getElementById(`${ak}+notice`).style="position:absolute; display:block; top:90px; left:100px;";
					      		document.getElementById(`${ak}+notice`).innerHTML="Perform experiment for <br>2.5ml First"
					      		setTimeout(() => {
					      			document.getElementById(`${ak}+notice`).style="position:absolute; display:none; top:90px; left:100px;";
					      		},2000);}
					      
					      	else if((mainsubscreen==7&& x!=5)){
					      		document.getElementById(`${ak}+notice`).style="position:absolute; display:block; top:90px; left:100px;";
					      		document.getElementById(`${ak}+notice`).innerHTML="Perform experiment for 5ml <br> you already perform for 2.5ml<br> and next time perform for more than 5ml";
					      		setTimeout(() => {
					      			document.getElementById(`${ak}+notice`).style="position:absolute; display:none; top:90px; left:100px;";
					      		},2000); }   
					      	else if((mainsubscreen==11&& x!=7.5)){
					      		document.getElementById(`${ak}+notice`).style="position:absolute; display:block; top:90px; left:100px;";
					      		document.getElementById(`${ak}+notice`).innerHTML="Perform experiment for 7.5ml <br> you already perform for 2.5ml & 5ml<br> and next time perform for more than 7.5ml";
					      		setTimeout(() => {
					      			document.getElementById(`${ak}+notice`).style="position:absolute; display:none; top:90px; left:100px;";
					      		},2000); }
					      	 else if((mainsubscreen==15&& x!=10)){
					      		document.getElementById(`${ak}+notice`).style="position:absolute; display:block; top:90px; left:100px;";
					      		document.getElementById(`${ak}+notice`).innerHTML="Perform experiment for 10ml <br> you already perform for all other values ";
					      		setTimeout(() => {
					      			document.getElementById(`${ak}+notice`).style="position:absolute; display:none; top:90px; left:100px;";
					      		},2000); }
					      	else if(x==0){	} 
					      	}             
				},2500);			
			}
			
	},1000);
}

function step4(){

	    arrow=setInterval(() => {animatearrow();},500);
			document.getElementById("arrow1").style="display:block; position:absolute; left:530px; top:350px; height:30px; z-index:10;";
			document.getElementById("arrow1").style.WebkitTransform="rotate(180deg)";
			document.getElementById("arrow1").style.msTransform="rotate(180deg)";
			document.getElementById("arrow1").style.transform="rotate(180deg)";
			document.getElementById(`${ak}+testtube`).onclick=() => {
				myStopFunction();
				document.getElementById(`${ak}+testtube`).onclick="";
				document.getElementById(`${ak}+testtube`).style="position:absolute; left:590px; top:267px; width: 50px; animation:movetesttube 4s forwards;";
				setTimeout(() => {
                 document.getElementById(`${ak}+powerbutton`).style.display="block";
                  arrow=setInterval(() => {animatearrow();},500);
					document.getElementById("arrow1").style="display:block; position:absolute; left:385px; top:480px; height:30px; z-index:10;";
					document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
					document.getElementById("arrow1").style.msTransform="rotate(90deg)";
					document.getElementById("arrow1").style.transform="rotate(90deg)";
					document.getElementById(`${ak}+powerbutton`).onclick=() => {
						myStopFunction();
						document.getElementById(`${ak}+powerbutton`).onclick="";
						document.getElementById(`${ak}+power`).style.display="block";
						setTimeout(() => {
							document.getElementById(`${ak}+wavebutton`).style.display="block";
							 arrow=setInterval(() => {animatearrow();},500);
								document.getElementById("arrow1").style="display:block; position:absolute; left:260px; top:480px; height:30px; z-index:10;";
								document.getElementById("arrow1").style.WebkitTransform="rotate(90deg)";
								document.getElementById("arrow1").style.msTransform="rotate(90deg)";
								document.getElementById("arrow1").style.transform="rotate(90deg)";
								document.getElementById(`${ak}+wavebutton`).onclick=() => {
										myStopFunction();
										document.getElementById(`${ak}+wavebutton`).onclick="";
										setTimeout(() => {
							               document.getElementById(`${ak}+wavelenth`).style.display="block";
							               if(mainsubscreen==4)
							               {
							               queAns2();
							               }
                                            setTimeout(() => {
							                    document.getElementById(`${ak}+opacity`).style.display="block";
							                    document.getElementById("opacity").style.display="block";
							                    setTimeout(() => {
                                                   document.getElementById("opacity").style.display="none";
                                                   document.getElementById("nextButton").style.display="block";
							                    },4000);
                                              
                                            },1000);
										},700);
									}
						
						},650);
					}
				},4500);
			}
	
}


function step5(){


	 
  
 
    
    document.getElementById(`${55}+cal`).onclick=() => {
             a1 =Number(document.getElementById("A1").value);
             a2 =Number(document.getElementById("A2").value);
             a3 =Number(document.getElementById("A3").value);
             a4 =Number(document.getElementById("A4").value);
        if(a1!="" && a2!="" && a3!="" && a4!="")
        {
             avg=(a1+a2+a3+a4)/4;
             document.getElementById("B1").innerHTML =avg;
             setTimeout(() => {
                  document.getElementById("nextButton").style.display="block";
             },1000);
        }
        else{
            document.getElementById(`${55}+hint`).style="display:block; position:absolute; left:360px;top:580px; font-size: 15px; ";
            setTimeout(() => {
            document.getElementById(`${55}+hint`).style="display:none; position:absolute; left:360px;top:580px; font-size: 15px; ";
                
            },3000);
        }
        
    }

}
 function step6(){
    

     queAns3();
     document.getElementById("gr3").onclick=() => {
                console.log(a1);
                console.log(a2);
                console.log(a3);
                console.log(a4);
     	 const datapoints1 = [];
                datapoints1.push({ x: 0, y: 0 });
                datapoints1.push({ x: 2.5, y: a1 });
                datapoints1.push({ x: 5, y: a2 });
                datapoints1.push({ x: 7.5, y: a3 });
                datapoints1.push({ x: 10, y: a4 });
                graphline("gr", datapoints1, "concentration", "optical density(absorbance)");
                document.getElementById("gr3").onclick=""
                document.getElementById("gr3").style="display:none;";

                setTimeout(() => {
                	
                	 $("#dialog3").css({'display':'none'});

                	  queAns5();
                },3000);


               

                document.getElementById("ideal").style.display="block";
                document.getElementById("ideal").onclick=() => {
                	   document.getElementById("gr").style.display="none";
                	    const datapoints2 = [];
		                datapoints2.push({ x: 0, y: 0 });
		                datapoints2.push({ x: 2.5, y: 0.11 });
		                datapoints2.push({ x: 5, y: 0.22 });
		                datapoints2.push({ x: 6.25, y: 0.275 });
		                datapoints2.push({ x: 7.5, y: 0.33 });
		                datapoints2.push({ x: 10, y: 0.44 });
		                graphline("gr2", datapoints2, "concentration", "optical density(absorbance)");
                }
                setTimeout(() => {
                	document.getElementById("nextButton").style.display="block";
                },1000);
     }
 }

  

 function step7(){
    queAns4();

 
    document.getElementById("checkans").onclick=() => {
    	 const y=document.getElementById("ans").value;
    	console.log(y);
    	if(y==6.4)
    	{    document.getElementById("checkans").onclick="";
    	     document.getElementById("displayans").innerHTML='<strong>	CONGRATULATIONS !!!!You have successfully completed the experiment </strong>';
    	     setTimeout(() => {
    		document.getElementById("seesoln").style.display="block";
    		document.getElementById("seesoln").onclick=() => {
    			document.getElementById("seesoln").style.display="none";
    			document.getElementById("displaysoln").style.display="block";
    		}
    	},1000);
    	}
        else if(y==""){

        	 document.getElementById("displayans").innerHTML='<strong>Input Your Answer First...!</strong>';
        }

    	else{
    		 document.getElementById("displayans").innerHTML='<strong>Wrong Answer! Try again</strong>';
    		 setTimeout(() => {
    		document.getElementById("seesoln").style.display="block";
    		document.getElementById("seesoln").onclick=() => {
    			document.getElementById("seesoln").style.display="none";
    			document.getElementById("displaysoln").style.display="block";
    		}
    	},1000);
    		
    	}
    	
    }

 }
 	
 

/*      








	document.getElementById(`${ak}+5drop`).style="position:absolute; left:199.5px; top:300px; width:100px; display: none;";
 
                                                     
                                                      setTimeout(() => {
                                                               document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:430px; top:267px; width: 100px;display:block;cursor:pointer";
                                                                arrow=setInterval(() => {animatearrow();},500);
			                                                         document.getElementById("arrow1").style="display:block; position:absolute; left:550px; top:290px; height:30px; z-index:10;";
			                                                         document.getElementById(`${ak}+bottleNH4`).onclick=() => {
			                                                         myStopFunction();
			                                                         document.getElementById(`${ak}+bottleNH4`).onclick="";
			                                                         document.getElementById(`${ak}+bottleNH4`).style="position:absolute; left:430px; top:267px; width: 100px;display:block;cursor:pointer; animation:movebottleNH4 2s forwards";	
			                                                         }
			
                                                           },1000);
                                                      
                                                 
	*/