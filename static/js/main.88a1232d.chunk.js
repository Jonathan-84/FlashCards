(this.webpackJsonpnotecards=this.webpackJsonpnotecards||[]).push([[0],{50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(16),r=s.n(c),o=s(0);var i=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("h2",{className:"text-center",children:"FlashCards"}),Object(o.jsx)("div",{className:"col ",children:Object(o.jsx)("div",{className:"alert alert-primary text-center",role:"alert",children:"Updates: The app is now a PWA, so you can now download the app for offline use but the gifs will not appear. Future updates still include automatic grading (when possible), performance improvements, and eventually more topics."})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"d-flex mt-auto justify-content-center",children:Object(o.jsxs)("p",{children:[" ",function(){var e=(new Date).getHours();return console.log(e),e>=12&&e<=17?"Good Afternoon! ":e>=18?"Good Evening! ":"Good Morning! "}()," This simple to use site will help early learners practice their letters, numbers, and math. Following each answer attempt by your child, update the answer tracker above.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"If they answer correctly, click the [\u2714\ufe0f] and they will be rewarded with a fun gif. "}),Object(o.jsx)("li",{children:"For each incorrect answer, click the [\u2716\ufe0f] and they will slide back on the scale by 1."}),Object(o.jsx)("li",{children:"If they reach 10 points, they will unlock a special gif.  "})]})}),"The goal of this simple site was to give repeatable practice opportunities and make it fun."]})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"container-fluid col-7 border border-success rounded p-1 ",children:Object(o.jsxs)("div",{className:" row  d-flex flex-wrap justify-content-center align-items-center",children:[Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("img",{className:"align-left p-1",src:"https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/FlashCardsQR.png",alt:"QR code to site",height:200,width:200})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("p",{className:"text-center p-1",children:"Share This App: If you like the application, share it with others by letting them scan this QR code. "})})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{}),Object(o.jsx)("br",{})]})]})},l=s(2),d=s(3),b=s(5),j=s(4),h=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).randomUppercase=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s="",a=0;a<1;a++){var n=Math.floor(Math.random()*t.length);s+=t.substring(n,n+1),e.setState({uppercaseHolder:s})}console.log(s)},e.state={uppercaseHolder:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.uppercaseHolder;return Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Capital Letters"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"Can your child name the letter? "})}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",className:"",onClick:this.randomUppercase,children:"Press Me"})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("h2",{className:"text-center",children:e})})]})]})})})}}]),s}(a.Component),m=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).randomLowercase=function(){for(var t="abcdefghiklmnopqrstuvwxyz",s="",a=0;a<1;a++){var n=Math.floor(Math.random()*t.length);s+=t.substring(n,n+1),e.setState({lowercaseHolder:s})}console.log(s)},e.state={lowercaseHolder:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.lowercaseHolder;return Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Lowercase"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"Can your child name the letter? "})}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.randomLowercase,children:"Press Me"})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("h2",{className:"text-center",children:e})})]})]})})})}}]),s}(a.Component),u=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).generateRandomNumber=function(){var t=Math.floor(20*Math.random())+1;e.setState({numberHolder:t})},e.state={numberHolder:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.numberHolder;return Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-3 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Numbers"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"Can your child name the number? "})}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.generateRandomNumber,children:"Press Me"})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("h2",{className:"text-center",children:e})})]})]})})})}}]),s}(a.Component),x=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this)).addNumbers=function(){var e=a.props.first,t=a.props.second;console.log(e,t);var s=e+t;a.setState({result:s}),console.log(s)},a.state={result:[]},a}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.result;return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.addNumbers,children:"Check the Answer"}),Object(o.jsx)("h2",{className:"text-center",children:e})]})}}]),s}(a.Component),O=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).generateNumbers=function(){var t=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random())+1;e.setState({firstnumber:t,secondnumber:s})},e.state={firstnumber:[0],secondnumber:[0]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state,t=e.firstnumber,s=e.secondnumber;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Basic Addition"}),Object(o.jsxs)("div",{className:"card-body ",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"What is the sum? "})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.generateNumbers,children:"Random Numbers"})}),Object(o.jsxs)("h2",{className:"text-center",children:[t," + ",s]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(x,{first:this.state.firstnumber,second:this.state.secondnumber})})]})]})})})})}}]),s}(a.Component),f=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this)).minusNumbers=function(){var e=a.props.random1,t=a.props.random2;if(console.log(e,t),e>=t){var s=e-t;a.setState({minus:s}),console.log(s)}else{var n=t-e;a.setState({minus:n}),console.log(n)}},a.state={minus:[]},a}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.minus;return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.minusNumbers,children:"Check the Answer"}),Object(o.jsx)("h2",{className:"text-center",children:e})]})}}]),s}(a.Component),v=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).generateNumbers=function(){var t=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random())+1;e.setState({firstnumber:t,secondnumber:s})},e.state={firstnumber:[0],secondnumber:[0]},e}return Object(d.a)(s,[{key:"render",value:function(){var e,t=this.state,s=t.firstnumber,a=t.secondnumber;return console.log(s,a),e=s>=a?Object(o.jsxs)("h2",{className:"text-center",children:[s," - ",a]}):Object(o.jsxs)("h2",{className:"text-center",children:[a," - ",s]}),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Basic Subtraction"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"What is the difference? "})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.generateNumbers,children:"Press Me"})}),e,Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(f,{random1:this.state.firstnumber,random2:this.state.secondnumber})})]})]})})})})}}]),s}(a.Component),p=s(7),g=s.p+"static/media/Sight Words- full.55f1a155.jpg",w=s.p+"static/media/FullSightTest.e800cb84.jpg",N=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"mb-0",children:[Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsx)("h1",{className:"text-info",children:" Sight Words "})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"container-fluid col-7 p-1 ",children:Object(o.jsxs)("div",{className:" row d-flex justify-content-center align-items-center",children:[Object(o.jsxs)("div",{className:"col-md border bg-info rounded m-1",children:[Object(o.jsx)("h2",{className:"text-center text-white",children:"Study Cards"}),Object(o.jsx)(p.b,{to:"/sightcards",className:"nav-text",children:Object(o.jsx)("img",{alt:"screenshot of card format",src:g,className:"sightcard"})})]}),Object(o.jsxs)("div",{className:"col-md border bg-info rounded m-1",children:[Object(o.jsx)("h2",{className:"text-center text-white",children:"Sight Word Test"}),Object(o.jsx)(p.b,{to:"/sightrandom",className:"nav-text",children:Object(o.jsx)("img",{alt:"screenshot of random test",src:w,className:"sightcard"})})]})]})})]})})}}]),s}(a.Component);var y=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-container bg-light pt-3",children:[Object(o.jsx)("ul",{children:Object(o.jsxs)("a",{className:"footer-text text-dark font-weight-bold",href:"https://github.com/Jonathan-84",target:"_blank",rel:"noreferrer",children:["GitHub ",Object(o.jsx)("span",{className:"fa fa-github"})]})}),Object(o.jsx)("ul",{children:Object(o.jsxs)("a",{className:"footer-text text-dark font-weight-bold",href:"https://www.linkedin.com/in/jrob84",target:"_blank",rel:"noreferrer",children:["LinkedIn ",Object(o.jsx)("span",{className:"fa fa-linkedin-square"})]})})]})})]})},k=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).randomKudos=function(){var t=["https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/Blueyfloss.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGood.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGreat.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/PJMasks.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/animatedGB.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/minions.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/TMNT.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/kermit.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/olaf.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/stevie.gif"],s=t[Math.floor(Math.random()*t.length)];e.setState({gif:s}),console.log(s)},e.randomTryAgain=function(){var t=[""],s=t[Math.floor(Math.random()*t.length)];e.setState({gif:s}),console.log(s)},e.correct=function(){e.state.count<10&&(e.randomKudos(),e.setState({count:e.state.count+1}))},e.resetgif=function(){var t=[""],s=t[Math.floor(Math.random()*t.length)];e.setState({gif:s}),console.log(s)},e.reset=function(){e.resetgif(),e.setState({count:0})},e.wrong=function(){e.state.count>0&&(e.randomTryAgain(),e.setState({count:e.state.count-1}))},e.state={count:0,gif:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e,t,s=this.state,a=s.count,n=s.gif;return 10===a&&(alert("Congrats you've reached 10 points. Now click reset and do it again!"),e=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"text-center font-weight-bold Congrats-font",children:"You've Reached 10 Points!!!!"}),Object(o.jsx)("img",{src:"https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/genie.gif",className:"img-fluid",alt:"Genie Congratulations"})]})),a<10&&(e=Object(o.jsx)("img",{src:n,className:"img-fluid",alt:""})),1===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"10%"},"aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100",children:"01"})),2===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"20%"},"aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100",children:"02"})),3===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"30%"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100",children:"03"})),4===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"40%"},"aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100",children:"04"})),5===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100",children:"05"})),6===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"60%"},"aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",children:"06"})),7===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"70%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100",children:"07"})),8===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"80%"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",children:"08"})),9===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"90%"},"aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",children:"09"})),10===a&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:"10"})),Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-warning mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsxs)("p",{className:"text-center",children:["Correct = (",Object(o.jsx)("i",{className:"bi bi-check-lg"}),") Incorrect = (",Object(o.jsx)("i",{className:"bi bi-x-lg"}),") Reset = (",Object(o.jsx)("i",{className:"bi bi-trash"}),") "]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"progress",children:t}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"col d-flex justify-content-between flex-column flex-md-row",children:[Object(o.jsx)("button",{title:"Add Correct",onClick:this.correct,type:"button",className:"btn btn-secondary btn-lg m-1","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:Object(o.jsx)("i",{className:"bi bi-check-lg"})}),Object(o.jsx)("button",{title:"Subtract Incorrect",onClick:this.wrong,type:"button",className:"btn btn-secondary btn-lg m-1","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:Object(o.jsx)("i",{className:"bi bi-x-lg"})}),Object(o.jsx)("button",{title:"Reset",onClick:this.reset,type:"button",className:"btn btn-secondary btn-lg m-1","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:Object(o.jsx)("i",{className:"bi bi-trash"})})]})})}),Object(o.jsx)("br",{}),e,Object(o.jsx)("br",{})]})})})}}]),s}(a.Component);var C=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(o.jsx)("h2",{children:Object(o.jsx)(p.b,{to:"/Home",className:" font-weight-bold navbar-brand nav-text nav-link",children:" FlashCards"})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(p.b,{to:"/capital",className:"nav-text",children:"Capital Letter Test"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(p.b,{to:"/lowercase",className:"nav-text",children:"Lower Case Letter Test"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(p.b,{to:"/numbers",className:"nav-text",children:"Number Test"})}),Object(o.jsxs)("ul",{className:"nav-item dropdown",children:[Object(o.jsx)(p.b,{className:"nav-text dropdown-toggle",id:"navbarDropdownMenuLink",to:"/sightwords","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Sight Words"}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(p.b,{to:"/sightcards",className:"nav-text",children:"Study Cards"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(p.b,{to:"/sightrandom",className:"nav-text",children:"Test"})})]})]}),Object(o.jsxs)("ul",{className:"nav-item dropdown",children:[Object(o.jsx)(p.b,{className:"nav-text dropdown-toggle",id:"navbarDropdownMenuLink",to:"/#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Math"}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(p.b,{to:"/newaddition",className:"nav-text",children:"Beginner Addition"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(p.b,{to:"/newsubtraction",className:"nav-text",children:"Beginner Subtraction"})})]})]})]})})]})},M=[{word:"I",sentence:"I am Batman!"},{word:"to",sentence:"I want to eat!"},{word:"for",sentence:"I need pencils for school. "},{word:"they",sentence:"They played football."},{word:"or",sentence:"I want to fly."},{word:"can",sentence:"I can run fast."},{word:"here",sentence:"Is Mom here?"},{word:"see",sentence:"I see the dog. "},{word:"play",sentence:"I want to play baseball."},{word:"come",sentence:"Will Iron Man come?"},{word:"the",sentence:"Can I have the ball?"},{word:"is",sentence:"This is fun!"},{word:"are",sentence:"We are hungry."},{word:"be",sentence:"I will be a witch for Halloween."},{word:"one",sentence:"I have one wish."},{word:"said",sentence:"Dad said hi!"},{word:"like",sentence:"I like PJ Masks."},{word:"my",sentence:"Gecko is my favorite."},{word:"this",sentence:"This is Halloween!"},{word:"help",sentence:"I will help mom."},{word:"of",sentence:"I want a box of candy."},{word:"you",sentence:"Will you go with me?"},{word:"as",sentence:"I was dressed as a wolf."},{word:"does",sentence:"Mommy does yoga."},{word:"by",sentence:"I like videos by Miss Linky."},{word:"she",sentence:"She is happy."},{word:"has",sentence:"Dad has video games."},{word:"good",sentence:"We are good listeners."},{word:"little",sentence:"I am mommy's little man."},{word:"and",sentence:"Me and my brother love Halloween. "},{word:"he",sentence:"He said thank you."},{word:"with",sentence:"I like Peanut Butter with Jelly."},{word:"have",sentence:"I have fun toys."},{word:"what",sentence:"What are we having for dinner?"},{word:"do",sentence:"What do you like?"},{word:"look",sentence:"I look great."},{word:"where",sentence:"Where are we going?"},{word:"me",sentence:"Will you play with me?"},{word:"a",sentence:"I want a pony."},{word:"was",sentence:"I was hungry."},{word:"his",sentence:"We played with his toys."},{word:"from",sentence:"I am from Broomall."},{word:"we",sentence:"We played soccer."},{word:"want",sentence:"I want a bike."},{word:"go",sentence:"I will go to bed."},{word:"who",sentence:"Who is that?"},{word:"too",sentence:"I like witches too!"}],I=s(11),S=s.n(I);var F=function(e){var t=Object(a.useRef)();return Object(o.jsx)(S.a,{flipOnHover:!1,flipOnClick:!0,flipDirection:"horizontal",ref:t,children:Object(o.jsxs)("div",{className:" card text-info bg-white border-info",children:[Object(o.jsx)(I.FrontSide,{children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("div",{className:"card-title text-center font-weight-bold display-4",children:e.word})})}),Object(o.jsx)(I.BackSide,{children:Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsxs)("p",{children:[" ",e.sentence]})})})]})})},A=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"mb-0",children:[Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:"rounded text-white bg-info text-center sight-title",children:[Object(o.jsx)("h1",{className:"",children:" Sight Words "}),Object(o.jsx)("p",{children:"Click each card to flip them over and see a sample sentence. Before flipping it over, see if your child can recognize the word and provide their own sentence example. "})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"card-columns p-3",children:M.map((function(e){return Object(o.jsx)(F,{word:e.word,sentence:e.sentence})}))})]})})}}]),s}(a.Component),T=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).randomSightword=function(){var t=["I","to","for","they","or","can","here","see","play","come","the","is","are","be","one","said","like","my","this","help","of","you","as","does","by","she","has","good","little","and","he","with","have","what","do","look","where","me","a","was","his","from","we","want","go","who","too"],s=t[Math.floor(Math.random()*t.length)];e.setState({sightword:s}),console.log(s)},e.state={sightword:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.sightword;return Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Random Sight Word"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"Can your child name the sight word? "})}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",className:"",onClick:this.randomSightword,children:"Press Me"})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("h2",{className:"text-center",children:e})})]})]})})})}}]),s}(a.Component),W=s(6);s(50);var R=function(){return Object(o.jsx)(p.a,{basename:"/FlashCards",children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C,{}),Object(o.jsx)(k,{}),Object(o.jsxs)(W.d,{children:[Object(o.jsx)(W.b,{exact:!0,path:"/home",component:i}),Object(o.jsx)(W.b,{exact:!0,path:"/capital",component:h}),Object(o.jsx)(W.b,{exact:!0,path:"/lowercase",component:m}),Object(o.jsx)(W.b,{exact:!0,path:"/numbers",component:u}),Object(o.jsx)(W.b,{exact:!0,path:"/sightwords",component:N}),Object(o.jsx)(W.b,{exact:!0,path:"/sightcards",component:A}),Object(o.jsx)(W.b,{exact:!0,path:"/sightrandom",component:T}),Object(o.jsx)(W.b,{exact:!0,path:"/newaddition",component:O}),Object(o.jsx)(W.b,{exact:!0,path:"/newsubtraction",component:v}),Object(o.jsx)(W.b,{render:function(){return Object(o.jsx)(W.a,{to:"/home"})}})]}),Object(o.jsx)(y,{})]})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.88a1232d.chunk.js.map