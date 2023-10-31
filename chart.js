let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const select_month = 5
// set the dimensions and margins of the graph
const margin = {top: 100, right: 20, bottom: 100, left: 20},
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom,
    innerRadius = 60,
    outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContentText");// Clear previous SVG content
modalContent.innerHTML += '<svg id="circleSvg" ></svg>';
const modalWidth = modalContent.offsetWidth;
const modalHeight = modalContent.offsetHeight;
const svg = d3.select("#circleSvg");
const svgX = (modalWidth - (width + margin.left + margin.right)) / 2;
const svgY = (modalHeight - (height + margin.top + margin.bottom)) / 2;


// append the svg object to the body of the page
svg.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", `translate(${svgX},${svgY})`)
  .append("g")
    .attr("transform", `translate(${width/2},${height/2+100})`); // Add 100 on Y translation, cause upper bars are longer

const margin1 = {top: 0, right: 0, bottom: 0, left: 0},
    width1 = 600 - margin1.left - margin1.right,
    height1 = 800 - margin1.top - margin1.bottom

const svg1 = d3.select("#rosa_chart")
.append("svg")
  .attr("width", width1 + margin1.left + margin1.right)
  .attr("height", height1 + margin1.top + margin1.bottom)
.append("g")
  .attr("transform", `translate(${margin1.left},${margin1.top})`);
// Create a new image element
const img1 = new Image();
const imageUrl1 = "example.png"
img1.src = imageUrl1;
const imageWidth1 = img1.width;
const imageHeight1 = img1.height;
const imageRatio1 = imageWidth1 / imageHeight1;
// Define the pattern for the image background
const pattern1 = svg1.append("defs")
    .append("pattern")
    .attr("id", "background-pattern1")
    .attr("width", "100%")
    .attr("height", "100%");

// Add the image to the pattern
pattern1.append("image")
    .attr("xlink:href", imageUrl1)
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", (width1 + margin1.left + margin1.right)/imageRatio1)
    .attr("preserveAspectRatio", "none"); // Adjust according to your image aspect ratio

// Create a rectangle with the pattern as its fill
svg1.append("rect")
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", (width1 + margin1.left + margin1.right)/imageRatio1)
    .attr("fill", "url(#background-pattern1)")
    .attr("y",0)


// set the dimensions and margins of the graph
const margin2 = {top: 50, right: 30, bottom: 40, left: 45},
    width2 = d3.select("#line_chart").node().clientWidth - margin2.left - margin2.right,
    height2 = 800 - margin2.top - margin2.bottom;


const svg2 = d3.select("#line_chart")
.append("svg")
  .attr("width", width2 + margin2.left + margin2.right)
  .attr("height", height2 + margin2.top + margin2.bottom)
.append("g")
  .attr("transform", `translate(${margin2.left},${margin2.top})`);

// Create a new image element
const img = new Image();
const imageUrl = "bg.png"
img.src = imageUrl;
const imageWidth = img.width;
const imageHeight = img.height;
const imageRatio = imageWidth / imageHeight;
// Define the pattern for the image background
const pattern = svg2.append("defs")
    .append("pattern")
    .attr("id", "background-pattern")
    .attr("width", "100%")
    .attr("height", "100%");

// Add the image to the pattern
pattern.append("image")
    .attr("xlink:href", imageUrl)
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", (width2 + margin2.left + margin2.right)/imageRatio)
    .attr("preserveAspectRatio", "none"); // Adjust according to your image aspect ratio

// Create a rectangle with the pattern as its fill
svg2.append("rect")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", (width2 + margin2.left + margin2.right)/imageRatio)
    .attr("fill", "url(#background-pattern)")
    .attr("y", 180)
    .attr("opacity",0.2)

// set the dimensions and margins of the graph
const margin3 = {top: 50, right: 30, bottom: 40, left: 45},
    width3= d3.select("#line_chart").node().clientWidth - margin3.left - margin3.right,
    height3 = 800 - margin3.top - margin3.bottom;

// append the svg object to the body of the page
const svg3 = d3.select("#seperate_chart")
  .append("svg")
    .attr("width", width3 + margin3.left + margin3.right)
    .attr("height", height3 + margin3.top + margin3.bottom)
  .append("g")
    .attr("transform",
          `translate(${margin3.left}, ${margin3.top})`);


// set the dimensions and margins of the graph
const margin4 = {top: 60, right: 30, bottom: 20, left:60},
    width4 = d3.select("#line_chart").node().clientWidth - margin4.left - margin4.right,
    height4 = 600 - margin4.top - margin4.bottom;

// append the svg object to the body of the page
const svg4 = d3.select("#bump_chart")
  .append("svg")
    .attr("width", width4 + margin4.left + margin4.right)
    .attr("height", height4 + margin3.top + margin4.bottom)
  .append("g")
    .attr("transform",
          `translate(${margin4.left}, ${margin4.top})`);

function color(d){
  if(d<51){
    return '#34B274';}
  else if (d<101){return '#FDD000';}
  else if (d<151){return '#F4681A';}
  else if (d<201){return '#D3112E';}
  else if (d<301){return '#8854D0';}
}

function cal_opacity(d){
  if(d<51){
    return d/50;}
  else if (d<101){return d/100;}
  else if (d<151){return d/150;}
  else if (d<201){return d/200;}
  else if (d<301){return d/300;}
}


d3.csv("Data2.csv").then( function(dataall) {


  // Custom parsing function for "M/D/Y" format
  function parseDate(dateString) {
    const [month, day,year] = dateString.split('/');
    const res  = new Date(year, month - 1, day)//.getDate()
    //const month1  = new Date(year, month - 1, day).getMonth()
    // JavaScript months are 0-based, so subtract 1 from the month
    return res;
  }

  // Parse the date strings and replace them with Date objects
  dataall.forEach(d => {

    d.Month = parseDate(d.Date).getMonth();
    d.Date = parseDate(d.Date).getDate();
    //d.Month = parseDate(d.Date).getDate();
  });

  const data = [];
  for(i in dataall){
    console.log(dataall[i].Month)
    if(dataall[i].Month == select_month){
      data.push(dataall[i]);
    }
  }
  var allGroup = [];
  for(i in data){
    if(!allGroup.includes(data[i].Date)){allGroup.push(data[i].Date);}
  }

  var data_select = [];
  var data_select1 = [];
  for(i in data){
    if(data[i].Date==allGroup[0]){
      data_select.push(data[i])
      data_select1.push({"Date":1, "Type":data[i].Type,"Value":1})
    }
  }
  // X scale
  var x = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
      .align(0)                  // This does nothing ?
      .domain( data.map(d => d.Type)); // The domain of the X axis is the list of states.

  // Y scale
  var y = d3.scaleLinear()
      .range([innerRadius, outerRadius])   // Domain will be define later.
      .domain([0, 300]); // Domain of Y is from 0 to the max seen in the data
  var max_y = 0;
  var max_value = 0;
  var color = function(d) {
      if(d<51){
        return '#34B274';}
      else if (d<101){return '#FDD000';}
      else if (d<151){return '#F4681A';}
      else if (d<201){return '#D3112E';}
      else if (d<301){return '#8854D0';}

  }




const sumstat = d3.group(data, d => d.Type); // nest function allows to group the calculation per level of a factor

const by_date = d3.group(data, d => d.Date);

var categories = [];
for(i in data){
  if(!categories.includes(data[i].Type)){categories.push(data[i].Type);}
}

const n = categories.length
categories = categories.slice(0,n-1)
categories.push('AQI')


const date_list = []
for(i in data){
  if(!date_list.includes(data[i].Date)){date_list.push(data[i].Date);}
}
var AQI_values = []
for (const [key, value] of by_date.entries()) {
  var max_val = 0
  var max_type = ''
  for (i in value){
    if(Number(value[i].Value)>Number(max_val)){
      max_val = Number(value[i].Value);
      max_type = value[i].Type;
    }
  }
  AQI_values.push({'Type':'AQI','Date': key, 'Value': max_val,'DFactor': max_type})
}

// Add X axis --> it is a date format
var x_line = d3.scaleLinear()
    .domain([0,d3.max(date_list)])
    .range([ 0, width2])


svg2.append("g")
.attr("transform", `translate(0, ${height2})`)
.call(d3.axisBottom(x_line).ticks(5))
.attr("class","x-axis");
 const y_domain = 300;//(Math.ceil((d3.max(data, function(d){ return +d.Value; }))/50))*50;
 console.log(y_domain)
// Add Y axis
var y_line = d3.scaleLinear()
    .domain([0, y_domain])
    .range([ height2,0 ]);
  svg2.append("g")
    .call(d3.axisLeft(y_line))
    .attr("class","axis");

for (let i = 1; i*50 <= y_domain; i++) {
  console.log(i*50)

svg2.append('rect')
  .attr('x', -2.5)
  .attr('y', y_line(i*50))
  .attr('width', 5)
  .attr('height', -y_line(50)+y_line(0))
  .attr('fill', color(i*50));}
// color palette
color_bar = d3.scaleOrdinal()
  .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33'])



var innerRadius_s = 5
var outerRadius_s = 35
// Y scale
var y_s = d3.scaleRadial()
    .range([innerRadius_s, outerRadius_s])   // Domain will be define later.
    .domain([0, Math.log(300)]); // Domain of Y is from 0 to the max seen in the data
svg2.append("text")
    .attr("text-anchor", "end")
    .attr("x", width2)
    .attr("y", height2+30)
    .text("Date")
    .style("font-size", "22px")
    .attr("font-weight", "bold");
svg2.append("text")
    .attr("text-anchor", "end")
    .attr("x", 0)
    .attr("y", -15)
    .text("AQI")
    .style("font-size", "22px")
     .attr("font-weight", "bold");// Add bars


var mouseclick = function(event,d) {
console.log("clicl")
  // Display modal when a circle is clicked
const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContentText");
modalContent.innerHTML = ``;
modal.style.display = "block";
// Clear previous SVG content
modalContent.innerHTML += '<svg id="circleSvg" ></svg>';
const groupName = "myGroup";
const svg = d3.select("#circleSvg");
// append the svg object to the body of the page
svg.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", `translate(${150},${0})`)
  .append("g")
  .attr("class", groupName)
    .attr("transform", `translate(${width/2},${height/2+100})`); // Add 100 on Y translation, cause upper bars are longer
const selectedGroup = d3.select(`.${groupName}`);
    max_y = 0
    max_value = 0
    // recover the option that has been chosen
    var selectedOption = d[0]
    data_select = [];
    for(i in data){
      if(data[i].Date==selectedOption){
        data_select.push(data[i])
      }
    }


    var layer1 = selectedGroup.append('g');
    var layer2 = selectedGroup.append('g');
    var layer3 = selectedGroup.append('g');
    // Add bars
  var bars = layer2
      .selectAll("path")
      .data(data_select1)
      .join("path")
      .attr("fill", d =>color(d.Value))
      .style("opacity", 0.7)
      .attr("d", d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(function(d){
            if(y(d['Value'])>max_y){
              max_y = y(d['Value']);
              max_value = d['Value'];
            }
            return y(d['Value']);})
          .startAngle(d => x(d.Type))
          .endAngle(d => x(d.Type) + x.bandwidth())
          .padAngle(0.05)
          .padRadius(innerRadius))

    bars.data(data_select).transition()
            .duration(2000)
        .attr("fill", d =>color(d.Value))
        .style("opacity", 0.7)
        .attr("d", d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(function(d){
              if(y(d['Value'])>max_y){
                max_y = y(d['Value']);
                max_value = d['Value'];
              }
              return y(d['Value']);})
            .startAngle(d => x(d.Type))
            .endAngle(d => x(d.Type) + x.bandwidth())
            .padAngle(0.05)
            .padRadius(innerRadius))


  var pointers = layer2.selectAll('.circle')
      .data(data_select)
      .enter()
      .append('circle')
      .transition()
      .duration(2000)
      .attr('cx', d => Math.cos((x(d.Type) + x.bandwidth() / 2) -Math.PI/2)*y(d.Value))
      .attr('cy', d => Math.sin((x(d.Type) + x.bandwidth() / 2) -Math.PI/2)*y(d.Value))
      .attr('r', 8)
      .attr("stroke-width", 2)
      .attr("stroke", '#526698')
      .attr("fill", function(d){
        if(y(d['Value'])==max_y){
          return color(d.Value);
        }
        else{
          return "none";
        }
      })

            // Add the labels
    layer2.append("g")
        .selectAll("g")
        .data(data_select)
        .join("g")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) { return "rotate(" + ((x(d.Type) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")translate(" + innerRadius + ",0)"; })
        .append("text")
          .text(function(d){return(d.Type)})
          .attr("transform", function(d) { return (x(d.Type) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)"; })
          .attr("class","axis")
          .attr("alignment-baseline", "middle")

    var AQI = layer1.append("g").append('circle')
    .transition()
    .duration(2000)
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', max_y)
      .attr("stroke-width", 3)
      .attr('stroke', color(max_value))
      .attr('fill', color(max_value))
      .style("opacity", 0.15)


      var yAxis = layer3
          .attr("text-anchor", "middle");

      var yTick = yAxis
        .selectAll("g")
        .data(y.ticks(5).slice(1))
        .enter().append("g");

      yTick.append("circle")
          .attr("fill", "none")
          .style("stroke-dasharray", ("1, 5"))
          .attr("stroke", "#000")
          .attr("r", y);

      yTick.append("text")
          .attr("y", function(d) { return -y(d); })
          .attr("dy", "0.35em")
          .attr("fill", "none")
          .attr("stroke", "#fff")
          .attr("stroke-width", 5)
          .text(y.tickFormat(5, "s"));

      yTick.append("text")
          .attr("y", function(d) { return -y(d); })
          .attr("dy", "0.35em")
          .text(y.tickFormat(5, "s"));

      var AQI_text = yAxis.append("text")
          .attr("y", 10)
          .attr("dy", "-1em")
          .text("AQI")
          .style("font-size", "26px")
          .attr("fill", color(max_value));

      var AQI_value = yAxis.append("text")
          .attr("y", 50)
          .attr("dy", "-1em")
          .text(max_value)
          .style("font-size", "26px")
          .attr("fill", color(max_value));

// Close the modal when the close button is clicked
const closeButton = document.querySelector(".close");
closeButton.onclick = function () {
    modal.style.display = "none";
};

// Close the modal when the user clicks outside the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
}

svg2.append('g')
  .selectAll("path")
  .data(by_date)
  .join("g")
  .attr("class","flowers")
  .on("click", mouseclick)
  .attr("transform", function(d){
    return `translate(${x_line(d[0])+0}, ${y_line(0)})`})
  .selectAll("path")
  .data(function(d) {
    return d[1];})
  .join("path")
  .attr("fill", d =>color(d.Value))
  .attr("d", d3.arc()     // imagine your doing a part of a donut plot
      .innerRadius(innerRadius_s)
      .outerRadius(function(d){
        if(y(d['Value'])>max_y){
          max_y = y_s(Math.log(d['Value']));
          max_value = d['Value'];
        }
        return y_s(Math.log(d['Value']));})
      .startAngle(d => x(d.Type))
      .endAngle(d => x(d.Type) + x.bandwidth())
      .padAngle(0.01)
      .padRadius(innerRadius))
  .attr("stroke", function(d){
    if( d.Type==AQI_values[d.Date-1]['DFactor']){
      return "#000000";
    }
    else{return "none"}
  })
  .style("opacity",function(d){
    if( d.Type==AQI_values[d.Date-1]['DFactor']){
      return 1;
    }
    else{return 0.4}
  })
  .attr("stroke-width","1.5px")





svg2.selectAll(".flowers").transition()
  .duration(2000)
  .attr("transform", function(d){
    return `translate(${x_line(d[0])+0}, ${y_line(AQI_values[d[0]-1].Value)})`})

svg2.selectAll()
  .data(AQI_values, function(d) {console.log(d)
    return d.Type+':'+d.Date;})
  .join("line")
  .attr("class","flowers-bar")
  .attr('x1', function(d) { return x_line(d.Date)+0 })
  .attr('y1', function(d) { return y_line(0)})
  .attr('x2', function(d) { return x_line(d.Date)+0})
  .attr('y2', function(d) { return y_line(0)})
  .transition()
    .duration(2000)
  .attr('y2', function(d) { return y_line(d.Value)})
  .attr('stroke', d => color(d.Value))
  .attr("stroke-width","5px")
// Create the line generator
var line = d3.line()
    .x(function(d) {
      return x_line(d.Date)+0})
    .y(function(d) { return  y_line(d.Value)})

const lines = svg2.append("path")
      .datum(AQI_values)
  .join("path")
  .attr("class","AQI_line")
  .attr("fill", "none")
  .attr("stroke", "#121212")
  .attr("opacity", 0.5)
  .attr("stroke-width", 1.5)
  .attr("d", line)
      // Calculate the total length of the path
const totalLength = lines.node().getTotalLength();

// Set initial styles for the path
lines.attr("stroke-dasharray", totalLength + " " + totalLength)
     .attr("stroke-dashoffset", totalLength)
     .transition()
    .delay(2000)
     .duration(2000) // Animation duration in milliseconds
     .ease(d3.easeLinear) // Use linear easing for constant speed
     .attr("stroke-dashoffset", 0);

// Enable zooming on the x-axis
var zoom = d3.zoom()
   .scaleExtent([1, 10]) // Set the zoom scale limits if necessary
   .on("zoom", function (event) {
       // Update the x-axis scale based on the zoom transform
       var x_line_new = event.transform.rescaleX(x_line);
       svg2.selectAll(".flowers")
       .attr("transform", function(d){
         return `translate(${x_line_new(d[0])+0}, ${y_line(AQI_values[d[0]-1].Value)})`})
      svg2.selectAll(".flowers-bar")
      .attr('x1', function(d) { return x_line_new(d.Date)+0 })
      .attr('x2', function(d) { return x_line_new(d.Date)+0 })
      svg2.selectAll(".AQI_line")
            .attr("d", line.x(function (d) {
            return x_line_new(d.Date)+0}) )
       svg2.selectAll(".x-axis").call(d3.axisBottom(x_line_new));

       svg3.selectAll(".factor-bar").attr("x", function(d) { return x_line_new(d.Date)-Math.sqrt(d.Value/300)*25 })
       svg3.selectAll(".AQIrect").attr("x", function(d) { return x_line_new(d.Date)-Math.sqrt(d.Value/300)*25 })
       svg3.selectAll(".Factorrect")
       .attr("x", function(d) { return x_line_new(d.Date)+5-(10+Math.sqrt(d.Value/300)*25 )})//x_line.bandwidth())/2 })
       sparklines.x(d => x_line_new(d.Date))//x_line.bandwidth()/2)
       svg3.selectAll(".sparks").attr("d", function(d){
         return sparklines(d[1])})

       svg3.selectAll(".x-axis").call(d3.axisBottom(x_line_new));

   });

// Add the path using this helper function
svg2.append('rect')
 .attr('x', 0)
 .attr('y', y_line(0))
 .attr('width', width2)
 .attr('height', 100)
 .attr('stroke', 'black')
 .attr('fill', '#69a3b2')
 .attr("opacity",0).call(zoom);
 // Add the path using this helper function
 svg3.append('rect')
  .attr('x', 0)
  .attr('y', y_line(0))
  .attr('width', width2)
  .attr('height', 100)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2')
  .attr("opacity",0).call(zoom);
/*
// Draw the line
svg2.selectAll(".line")
      .data(sumstat)
      .join("path")
        .attr("fill", "none")
        .attr("stroke", function(d){ return color_bar(d[0]) })
        .attr("stroke-width", 1.5)
        .attr("d", function(d){
          return d3.line()
            .x(function(d) {
              return x_line(d.Date); })
            .y(function(d) { return y_line(+d.Value); })
            (d[1])
        })
// Add the area
svg2.append("path")
  .datum(AQI_values)
  .attr("fill", "#cce5df")
  .style("opacity",0.4)
  .attr("stroke", "#69b3a2")
  .attr("stroke-width", 1.5)
  .attr("d", d3.area()
    .x(d => x_line(d.Date))
    .y0(y_line(0))
    .y1(d => y_line(d.Value))
      )
*/




// Add X axis
/*
const x_r = d3.scaleBand()
    .domain(date_list)
    .range([ 0, width3 ])
    .padding(0.1);
*/
svg3.append("g")
  .attr("transform", `translate(0, ${height3})`)
  .call(d3.axisBottom(x_line))
  .attr("class","x-axis");


// Create a Y scale for densities
const y_r = d3.scaleBand()
  .domain(['AQI','O3','PM2.5','PM10','CO','NO2','SO2'])
  .range([0, height3])
  .padding(0.2);


svg3.append("g")
  .call(d3.axisLeft(y_r))
  .attr("class","axis");

/*
svg3.append("g")
.attr("class", "x-axis")
  .attr("transform", `translate(0, ${y_r('O3')+34.5})`)
  .call(d3.axisBottom(x_r));

svg3.append("g")
.attr("class", "x-axis")
  .attr("transform", `translate(0, ${y_r('PM2.5')+34.5})`)
  .call(d3.axisBottom(x_r));

svg3.append("g")
.attr("class", "x-axis")
  .attr("transform", `translate(0, ${y_r('PM10')+34.5})`)
  .call(d3.axisBottom(x_r));

svg3.append("g")
.attr("class", "x-axis")
  .attr("transform", `translate(0, ${y_r('CO')+34.5})`)
  .call(d3.axisBottom(x_r));

svg3.append("g")
.attr("class", "x-axis")
  .attr("transform", `translate(0, ${y_r('NO2')+34.5})`)
  .call(d3.axisBottom(x_r));

svg3.append("g")
.attr("class", "x-axis")
  .attr("transform", `translate(0, ${y_r('SO2')+34.5})`)
  .call(d3.axisBottom(x_r));

svg3.selectAll(".x-axis")
   .selectAll("text")
   .remove();
*/
svg3.append("rect")
  .attr('x', 0 )
  .attr('y', y_r("AQI")-y_r.bandwidth()/2)
  .attr('width', width3)
  .attr('height', y_r.bandwidth())
  .attr("fill",'#BDBDBD')
  .style("opacity",'0.4')
/*
// Add areas
svg3.selectAll()
  .data(data, function(d) {return d.Type+':'+d.Date;})
  .join("rect")
  .style("anchor", "middle")
  .attr("x", function(d) { return x_r(d.Date)+x_r.bandwidth()/2-Math.sqrt(d.Value/300)*x_r.bandwidth()/2 })
  .attr("y", function(d) { return y_r(d.Type)+y_r.bandwidth()/2-Math.sqrt(d.Value/300)*y_r.bandwidth()/2})
  .attr("width", function(d) { return Math.sqrt(d.Value/300)*x_r.bandwidth()})
  .attr("height", function(d) { return Math.sqrt(d.Value/300)*y_r.bandwidth()})
  .style("fill", function(d) { return color(d.Value)} )
  .style("opacity", function(d){return 0.7})
*/
function cal_height(d){
  return (d/150)**(4/5)*y_r.bandwidth();
}
svg3.selectAll()
  .data(data, function(d) {return d.Type+':'+d.Date;})
  .join("rect")
  .style("anchor", "middle")
  .attr("class","factor-bar")
  .attr("x", function(d) { return x_line(d.Date)-Math.sqrt(d.Value/300)*25 })
  .attr("y", function(d) { return y_r(d.Type)+y_r.bandwidth()/2-cal_height(d.Value)})
  .attr("width", function(d) { return Math.sqrt(d.Value/300)*50})//x_line.bandwidth()})
  .attr("height", d => cal_height(d.Value))
  .style("fill", function(d) { return color(d.Value)} )
  .style("opacity", function(d){return cal_opacity(d.Value)})

// Define line generator
const sparklines = d3.line()
    .x(d => x_line(d.Date))//x_line.bandwidth()/2)
    .y(d => y_r(d.Type)+y_r.bandwidth()/2-cal_height(d.Value)+cal_height(d3.max(d.Value)))

// Draw lines for each category
svg3.selectAll(".line")
    .data(sumstat)
    .enter().append("path")
    .attr("class","sparks")
    //.attr("class", d => "line " + d.category)
    .attr("d", function(d){
      return sparklines(d[1])})
    .style("fill", "none")
    .style("stroke", "steelblue")

// Add areas
svg3.selectAll()
  .data(AQI_values, function(d) {console.log(d)
    return d.Type+':'+d.Date;})
  .join("rect")
  .attr("class","AQIrect")
  .attr("x", function(d) { return x_line(d.Date)-Math.sqrt(d.Value/300)*25})//x_line.bandwidth()/2 })
  .attr("y", function(d) { return y_r(d.DFactor)+y_r.bandwidth()/2-cal_height(d.Value)})
  .attr("width", function(d) { return Math.sqrt(d.Value/300)*50})//*x_line.bandwidth()})
  .attr("height", d => cal_height(d.Value))
  .style("fill", function(d) { return color(d.Value)} )
  .style("opacity", function(d){return cal_opacity(d.Value)})
svg3.selectAll()
  .data(AQI_values, function(d) {
    return d.Type+':'+d.Date;})
  .join("rect")
  .attr("class","Factorrect")
  .attr("x", function(d) { return x_line(d.Date)-5-Math.sqrt(d.Value/300)*25 })//x_line.bandwidth())/2 })
  .attr("y", function(d) { return y_r(d.DFactor)+y_r.bandwidth()/2})
  .attr("width", function(d) { return 10+Math.sqrt(d.Value/300)*50})//x_line.bandwidth()})
  .attr("height", 0)
  .style("fill", "none" )
  .style("stroke",'red')
function performTransition() {
  console.log("repeat")

svg3.selectAll(".AQIrect")
  .attr("y", function(d) { return y_r(d.DFactor)+y_r.bandwidth()/2-cal_height(d.Value)})

svg3.selectAll(".Factorrect")
  .attr("height", 0)
  .attr("y", function(d) { return y_r(d.DFactor)+y_r.bandwidth()/2})

svg3.selectAll(".AQIrect")
  .transition()
  .duration(2000)
  .attr("y", function(d) { return y_r(d.Type)+y_r.bandwidth()/2-cal_height(d.Value)})
  .delay(function(d,i){return(i*150)})
svg3.selectAll(".Factorrect")
.transition()
.duration(2000)
  .attr("height", function(d) { return 10+cal_height(d.Value)})
    .delay(function(d,i){return(i*150)})
  .attr("y", function(d) { return y_r(d.DFactor)+y_r.bandwidth()/2-(10+cal_height(d.Value))})
  }
  // Call the function initially
  performTransition();

  // Repeat the transition every 3000 milliseconds (3 seconds)
  setInterval(performTransition, 10000);

/*
// Draw lines for each category
svg3.append("path")
    .datum(AQI_values)
    //.attr("class", d => "line " + d.category)
    .attr("d", function(d){
      return sparklines(d)})
    .style("fill", "none")
    .style("stroke", "steelblue")
*/
/*
svg3.selectAll()
  .data(AQI_values, function(d) {
    return d.Type+':'+d.Date;})
  .join("line")
  .attr('x1', function(d) { return x_r(d.Date)+x_r.bandwidth()/2 })
  .attr('y1', function(d) { return y_r(d.Type)+y_r.bandwidth()/2})
  .attr('x2', function(d) { return x_r(d.Date)+x_r.bandwidth()/2})
  .attr('y2', function(d) { return -10+y_r(d.DFactor)+y_r.bandwidth()/2-cal_height(d.Value)})
  .attr('stroke', 'red')

*/



const data1=[]

const data2 = {'SO2':[],
               'NO2':[],
               'PM10':[],
               'PM2.5':[],
               'O3':[],
               'CO':[]
             }
console.log(sumstat)
for (const [key, value] of by_date.entries()) {
  name_list = []
  numbers = []
  values = []
  for(i in value){
    name_list.push(value[i].Type)
    numbers.push(value[i].Value)
  }
  // Create an array of objects with original values and indices
const indexedNumbers = numbers.map((value, index) => ({ value, index }));

// Sort the array of objects based on the 'value' property
indexedNumbers.sort((a, b) => a.value - b.value);
number_sort = numbers.sort(function(a, b) {
    return a - b;
});
// Extract the sorted indices
const sortedIndices = indexedNumbers.map(item => item.index);
for(i in sortedIndices){
  data2[name_list[sortedIndices[i]]].push({"rank":1+Number(i),"AQI":Number(number_sort[i])})
}
}
for(i in data2){
  values = []
  A = []
  for(j in data2[i]){
    values.push(data2[i][j].rank)
    A.push(data2[i][j].AQI)
  }
  data1.push({"category":i,"values":values,"AQI":A})
}
console.log(data2)
// Define scales
const xScale = d3.scaleLinear()
    .domain([-1, data1[0].values.length ]) // assuming all categories have the same number of values
    .range([0, width4]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data1, d => d3.max(d.values))])
    .nice()
    .range([height4, 0]);

// Define line generator
const line_G = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))

// Draw lines for each category
svg4.selectAll(".line")
    .data(data1)
  .enter().append("path")
    //.attr("class", d => "line " + d.category)
    .attr("d", d => line_G(d.values))
    .style("fill", "none")
    .style("stroke", d =>color(d3.max(d.AQI)))
    .style("stroke-width",function(d){
      return (1+d3.mean(d.values))**2/2})
    .style("opacity",function(d){
      return d3.min(d.values)/6})

/*
for(j in data2){
  console.log(data2[j])
  // Add circles as marks

svg4.selectAll(".circle")
    .data(data2[j])
  .enter().append("circle")
    .attr("cx", function(d,i){
      console.log(d,i)
      return xScale(i)})
    .attr("cy", d => yScale(d.rank))
    .attr("r", d => 12) // Radius of the circle marks
    .attr("fill",d => color(d.AQI))
    .attr("opacity",0.7)
}
*/
// Add labels for categories
svg4.selectAll(".category-label")
    .data(data1)
  .enter().append("text")
    .attr("class", "category-label")
    .attr("x", d => xScale(Math.floor(d.values.length/2)))
    .attr("y", d => yScale(d.values[Math.floor(d.values.length/2) ]))
    .text(d => d.category)
    .attr("text-anchor", "middle")
    .style("fill", "steelblue")
    .style("font-size", "20px")
    .attr("dy", ".35em");

// Add x-axis
svg4.append("g")
    .attr("transform", "translate(0," + height4 + ")")
    .call(d3.axisBottom(xScale));

// Add y-axis
svg4.append("g")
    .call(d3.axisLeft(yScale));

});
