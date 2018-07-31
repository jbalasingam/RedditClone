document.body.onload = addElement;

function addElement() {
    // create a new container
    var newDiv = document.createElement("div")
    newDiv.setAttribute("class", "container");
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
};



// div(class="container")
//       div(class="row panel panel-default user-insert col-md-12")
//         div(class = "votes col-md-1") Votes
//         div(class = "post col-md-11")
//           div(class="panel-heading user-heading col-md-12")  We are a fairly small, flexible design studio that designs for print and web. We work flexibly with clients to fulfil their design needs. Whether you need to create a brand from scratch, including marketing materials and a beautiful and functional website or whether you are looking for a design refresh we are confident you will be pleased with the results

//           div(class = "user-comment row col-md-12")
//             div(class="part1 col-md-9") We are a fairly small, flexible design studio that designs for print and web. We work flexibly with clients to fulfil their design needs. Whether you need to create a brand from scratch, including marketing materials and a beautiful and functional website or whether you are looking for a design refresh we are confident you will be pleased with the results

//             div(class="part2 col-md-3") We are a fairly small, flexible design studio that designs for print and web. We work flexibly with clients to fulfil their design needs.