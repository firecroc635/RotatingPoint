window.addEventListener('load', function() {
    var canvas1 = document.querySelector("#PreSquare");
    var cbx = canvas1.getContext("2d");
    var canvas2 = document.querySelector("#DemoRot");
    var cbx2 = canvas2.getContext("2d");
    var canvas3 = document.querySelector("#Democot");
    var cbx3 = canvas3.getContext("2d");
    var CNwidth = canvas1.width
    var CNheight = canvas1.height
    var CNwidth2 = canvas2.width
    var CNheight2 = canvas2.height

    var ax = 100; //point a X
    var ay = 100; //point a Y
    var ax2 = CNwidth2/4; //point a X
    var ay2 = CNwidth2/4; //point a Y
    let cx = 225; //centre X
    let cy = 225; //centre y
    let cx2 = CNwidth2/2; //centre X
    let cy2 = CNheight2/2; //centre y

    var degree = 180
    var theta;
    var hyp;
    var alpha;
    var tempX;
    var tempy;
    var kiman = true
    var kiman2 = true
    var kiman3 = true

    var PAX = document.getElementById("apointX");
    var PAY = document.getElementById("apointY");
    var DEG = document.getElementById("Degree");
    console.log(document.getElementById("Degree"))

    PAX.addEventListener("input", function() {
        ax = PAX.value
        SliderUpd(ax, ay, cx, cy, degree, cbx, true)
        SliderUpd2(ax2, ay2, cx, cy, 90, cbx2, false);
        SliderUpd(ax2, ay2, cx2, cy2, 90, cbx3, false)
    });
    PAY.addEventListener("input", function() {
        ay = PAY.value
        SliderUpd(ax, ay, cx, cy, degree, cbx, true)
        SliderUpd2(ax2, ay2, cx, cy, 90, cbx2, false);
        SliderUpd(ax2, ay2, cx2, cy2, 90, cbx3, false)
    });
    DEG.addEventListener("input", function() {
        degree = DEG.value
        SliderUpd(ax, ay, cx, cy, degree, cbx, true)
        SliderUpd2(ax2, ay2, cx2, cy2, 90, cbx2, false);
        SliderUpd(ax2, ay2, cx2, cy2, 90, cbx3, false)
    });
        
        


    function animate() {
        if (kiman == 1) {
            cx += 0.25;
        } else if(kiman == 0) {
            cx -= 0.25;
        }
        if (cx > 250) {
            kiman = false
        } else if (cx < 200) {
            kiman = true
        }
        if (kiman2 == 1) {
            cy -= 0.25;
        } else if(kiman2 == 0) {
            cy += 0.25;
        }
        if (cy > 250) {
            kiman2 = true
        } else if (cy < 150) {
            kiman2 = false
        }

        if (kiman3 == 1) {
            ax2 += 0.75;
        } else if(kiman3 == 0) {
            ax2 -= 0.75;
        }
        if (ax2 > CNwidth2/2 + 85) {
            kiman3 = false
        } else if (ax2 < CNwidth2/2 - 85) {
            kiman3 = true
        }
        SliderUpd2(ax2, ay2, cx2, cy2, 90, cbx2, false);
        SliderUpd(ax2, ay2, cx2, cy2, 90, cbx3, false);
        SliderUpd(ax, ay, cx, cy, degree, cbx, true);
        requestAnimationFrame(animate);
    }
    animate();


    function dot(X, Y, r, Col, kik) {
        kik.beginPath();
        kik.arc(X, Y, r, 0, 2*Math.PI);
        kik.fillStyle = Col;
        kik.fill();
        kik.beginPath(); 
    }
    function Connector(kik, cx, cy, ax, ay) {
        kik.moveTo(ax,ay);
        kik.lineTo(tempX, tempy);
        kik.strokeStyle = '#ee9b00';
        kik.lineWidth = 4;
        kik.stroke();
        kik.beginPath();
        kik.moveTo(ax,ay);
        kik.lineTo(cx, cy);
        kik.strokeStyle = '#ee9b00';
        kik.lineWidth = 4;
        kik.stroke();
        kik.beginPath();
        kik.moveTo(cx,cy);
        kik.lineTo(tempX, tempy);
        kik.strokeStyle = '#ee9b00';
        kik.lineWidth = 4;
        kik.stroke();
        kik.beginPath();
    }
    function circl(cx, cy, hyp, Col, kik) {
        kik.beginPath();
        kik.setLineDash([10,20]);
        kik.arc(cx, cy, hyp, 0, 2 * Math.PI);
        kik.strokeStyle = Col;
        kik.stroke();
        kik.beginPath();
        kik.setLineDash([]);
    }
    function Axes(XoneXpositionX, YoneXpositionY, Xlim, Ylim, ColourX, ColourY, Withd, kik) {
        kik.beginPath();
        kik.lineWidth = Withd;
        kik.moveTo(XoneXpositionX, Ylim);
        kik.lineTo(XoneXpositionX, CNheight);
        kik.strokeStyle = ColourX;
        kik.stroke();

        kik.beginPath();
        kik.moveTo(Xlim, YoneXpositionY);
        kik.lineTo(CNwidth, YoneXpositionY);
        kik.strokeStyle = ColourY;
        kik.stroke();
        kik.beginPath();
    }
    function rotatedDot(ax, ay, cx, cy, r, Col, deg, kik, allow) {
        
        hyp = Math.hypot((ax - cx), (ay - cy))
        //console.log('rotated = ', cx, cy, hyp, ax, ay, " theta - ", theta)
        if (ax < cx) {
            theta = (Math.atan((ay - cy)/(ax - cx))) * (180/Math.PI);
        } else if(cx<=ax) {
            theta = (Math.atan((ay - cy)/(ax - cx))) * (180/Math.PI) + 180;
        }

        alpha = 1 * deg + 180;

        tempX = hyp * Math.cos((theta + alpha) * (Math.PI/180)) + cx;
        tempy = hyp * Math.sin((theta + alpha) * (Math.PI/180)) + cy;    
        
        //tempX = hyp * Math.cos((deg / 2) * (Math.PI/180)) + cx;
        //tempy = 2 * hyp * Math.sin((deg / 2) * (Math.PI/180)) + cy;
        
        //console.log("temp =", tempX, tempy)
        dot(tempX, tempy, r, Col, kik);
    }
    function rotatedDot2(ax, ay, cx, cy, r, Col, deg, kik, allow) {
        
        hyp = Math.hypot((ax - cx), (ay - cy))
        //console.log('rotated = ', cx, cy, hyp, ax, ay, " theta - ", theta)
        theta = (Math.atan((ay - cy)/(ax - cx))) * (180/Math.PI);

        alpha = 1 * deg + 180;

        tempX = hyp * Math.cos((theta + alpha) * (Math.PI/180)) + cx;
        tempy = hyp * Math.sin((theta + alpha) * (Math.PI/180)) + cy;    
        
        //tempX = hyp * Math.cos((deg / 2) * (Math.PI/180)) + cx;
        //tempy = 2 * hyp * Math.sin((deg / 2) * (Math.PI/180)) + cy;
        
        //console.log("temp =", tempX, tempy)
        dot(tempX, tempy, r, Col, kik);
    }
    function SliderUpd(ax, ay, cx, cy, degree, kik, allow) {
        kik.clearRect(0, 0, CNwidth, CNheight)
        rotatedDot(ax, ay, cx, cy, 8, '#ef233c', degree, kik);
        Axes(cx, cy, 0, 0, '#ff006e', '#3a86ff', 5, kik);
        Axes(ax, ay, 0, 0, '#e2957833', '#83c5be33', 2, kik);
        Axes(tempX, tempy, 0, 0, '#06d6a033', '#ffd16633', 2, kik);
        circl(cx, cy, hyp, '#edf2f4', kik);
        Connector(kik, cx, cy, ax, ay)
        rotatedDot(ax, ay, cx, cy, 8, '#ef233c', degree, kik, allow);
        dot(cx, cy, 8, "#ffd166", kik);
        dot(ax, ay, 8, "#90e0ef", kik);
    }
    function SliderUpd2(ax, ay, cx, cy, degree, kik, allow) {
        kik.clearRect(0, 0, CNwidth, CNheight)
        rotatedDot2(ax, ay, cx, cy, 8, '#ef233c', degree, kik);
        Axes(cx, cy, 0, 0, '#ff006e', '#3a86ff', 5, kik);
        Axes(ax, ay, 0, 0, '#e2957833', '#83c5be33', 2, kik);
        Axes(tempX, tempy, 0, 0, '#06d6a033', '#ffd16633', 2, kik);
        circl(cx, cy, hyp, '#edf2f4', kik);
        Connector(kik, cx, cy, ax, ay)
        rotatedDot2(ax, ay, cx, cy, 8, '#ef233c', degree, kik, allow);
        dot(cx, cy, 8, "#ffd166", kik);
        dot(ax, ay, 8, "#90e0ef", kik);
    }

    SliderUpd(ax, ay, cx, cy, degree, cbx, true);
    SliderUpd2(ax2, ay2, cx, cy, 90, cbx2, false);
    SliderUpd(ax2, ay2, cx2, cy2, 90, cbx3, false);




    


});
