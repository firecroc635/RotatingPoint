window.addEventListener('load', () => {
    var canvas =document.querySelector('#canvas');
    var ML = canvas.getContext("2d");
    var canvas2 = document.querySelector('#canvas1');
    var minL = canvas2.getContext("2d")
    var canvas3 = document.querySelector('#canvas2');
    var mon3 = canvas3.getContext("2d")
    var canvas4 = document.querySelector('#canvas3');
    var mon4 = canvas4.getContext("2d")
    var canvas5 = document.querySelector('#canvas4');
    var mon5 = canvas5.getContext("2d")


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
    function linesss2(XoneXpositionX, YoneXpositionY, Xlim, Ylim, XoneXpositionX2, YoneXpositionY2, Xlim2, Ylim2, ColourX, ColourY, Withd, kik) {
        kik.beginPath();
        kik.lineWidth = Withd;
        kik.moveTo(XoneXpositionX, YoneXpositionY);
        kik.lineTo(Xlim, Ylim);
        kik.strokeStyle = ColourX;
        kik.stroke();

        kik.beginPath();
        kik.moveTo(XoneXpositionX2, YoneXpositionY2);
        kik.lineTo(Xlim2, Ylim2);
        kik.strokeStyle = ColourY;
        kik.stroke();
        kik.beginPath();
    }

    //size
    var CNwidth = canvas.width
    var CNheight = canvas.height

    //gridline colours
    var minorGLC = "rgb(255, 0, 255)";
    var majorGLC = "rgb(255, 23, 145)";
    var dotA = "rgb(255, 209, 102)";
    var dotB = "rgb(6, 214, 160))";
    var textCol = "rgb(245, 245, 245)";
    var textBack = 'rgba(53, 53, 53,.5)';
    MinorAdder = CNheight/10;

    //minor gridlines
    //X 
    for (let i=0; i <= CNwidth+0.5; i += MinorAdder) {
        ML.moveTo(i, 0)
        ML.lineTo(i, CNheight)
        ML.strokeStyle = minorGLC;
        ML.stroke();
    }
    //Y
    for (let i=0; i <= CNheight+0.5; i += MinorAdder) {
        ML.lineWidth = 2;
        ML.moveTo(0, i)
        ML.lineTo(CNwidth, i)
        ML.strokeStyle = minorGLC;
        ML.stroke();
    }

    //majore gridlines
    Axes(CNheight/2, CNheight/2, 0, 0, majorGLC, majorGLC, 6, ML)
    //Graph making end
    
    //Graph wit 2 dots
    // dot A
    ML.beginPath();
    ML.arc(140, 210, 4, 0, 2 * Math.PI);
    ML.strokeStyle = dotA;
    ML.fillStyle = dotA;
    ML.stroke();
    ML.fill();

    ML.beginPath();
    ML.rect(100,266-20, 50, 25)
    ML.fillStyle = textBack;
    ML.fill();
    ML.beginPath();

    ML.fillStyle = textCol;
    ML.font = "20px Mathfont";
    ML.fillText("c", 120, 235);
    ML.beginPath();
    ML.font = "22px Mathfont";
    ML.fillText("(cₓ,cᵧ)", 100, 266);

    //dot B
    ML.beginPath();
    ML.arc(245, 105, 4, 0, 2 * Math.PI);
    ML.strokeStyle = dotB;
    ML.fillStyle = dotB;
    ML.stroke();
    ML.fill();

    ML.beginPath();
    ML.rect(210-1,140-23, 55, 27)
    ML.fillStyle = textBack;
    ML.fill();
    ML.beginPath();

    ML.fillStyle = textCol;
    ML.font = "18px deja";
    ML.fillText("a", 265, 125);
    ML.font = "22px deja";
    ML.fillText("(aₓ,aᵧ)", 210, 140);

    //console log
    console.log(CNwidth, CNheight);


    //2nd graph
    var Cn2Height = CNwidth;
    var Cn2Width = CNheight;
    var Cn2PAX = 60;
    var Cn2PAY = 240;
    var Cn2PBX = 190;
    var Cn2PBY = 130;

    var Cn2MajorCol = 'rgb(252, 191, 73)';
    var Cn2DotA = '#a323d1';
    var Cn2DotB = '#ffd400';

    var Cn2PsGLYCol = '#0aff99E0';
    var Cn2PsGLXCol = '#ff0000E0';

    var Cn2PsGL2XCol = '#17ffc4E0';
    var Cn2PsGL2YCol = '#ff006dE0';

    var Cn2PsGLXYCol = '#A9D6E5';
    
    var xPos = 2.75;
    var yPos = 1.75;

    function SimplifiedGraphAxes(kik) {
        kik.moveTo(0, Cn2Height/yPos);
        kik.lineTo(Cn2Width,Cn2Height/yPos);
        kik.rect(Cn2Width-5, Cn2Height/yPos-10, 5, 20);
        kik.rect(0, Cn2Height/yPos-10, 5, 20);

        kik.moveTo(Cn2Width/xPos, 0);
        kik.lineTo(Cn2Width/xPos,Cn2Height);
        kik.rect(Cn2Width/xPos-10, Cn2Height-5, 20, 5);
        kik.rect(Cn2Width/xPos-10, 0, 20, 5);

        kik.strokeStyle = Cn2MajorCol;
        kik.fillStyle = Cn2MajorCol;
        kik.lineWidth = 5;

        kik.fill()
        kik.stroke()
    }
    function SimplifiedGraph(kik) {
        //Lines
        
        //lines end

        kik.beginPath();

        //dots
        kik.beginPath();
        kik.arc(Cn2PAX, Cn2PAY, 8, 0, 2*Math.PI);
        kik.fillStyle = Cn2DotA;

        kik.lineWidth = 0;
        kik.fill()

        kik.fillStyle = textCol;
        kik.font = "24px Mathfont";
        kik.fillText("c", Cn2PAX-25, Cn2PAY+25);
        kik.font = "22px Mathfont";
        kik.fillText("(cₓ,cᵧ)", Cn2PAX-18-40, Cn2PAY+22+25);


        kik.beginPath();
        kik.arc(Cn2PBX, Cn2PBY, 8, 0, 2*Math.PI);
        kik.fillStyle = Cn2DotB;

        kik.lineWidth = 0;
        kik.fill()

        kik.beginPath();
        kik.fillStyle = textCol;
        kik.font = "24px Mathfont";
        kik.fillText("a", Cn2PBX+5, Cn2PBY-27+12);
        kik.font = "22px Mathfont";
        kik.fillText("(aₓ,aᵧ)", Cn2PBX+22, Cn2PBY-27+12);
    }
    function HypoSimplifiedGraph(kik, withe) {
        
        kik.beginPath();
        kik.moveTo(Cn2PAX, Cn2PAY);
        kik.lineTo(Cn2PBX, Cn2PBY);
        kik.strokeStyle = Cn2PsGLXYCol;
        kik.lineWidth = 5;
        kik.stroke();
        kik.beginPath();
        SimplifiedGraph(kik);
    }
    function HypoPointAxesSimplifiedGraph(kik, withe) {
        SimplifiedGraphAxes(kik);
        Axes(Cn2PAX, Cn2PAY, 0, 0, Cn2PsGLYCol, Cn2PsGLXCol, withe, mon4);
        Axes(Cn2PBX, Cn2PBY, 0, 0, Cn2PsGL2XCol, Cn2PsGL2YCol, withe, mon4);
        HypoSimplifiedGraph(kik);
        console.log('hi');
    }
    function TriangleSimplifiedGraph(kik, withe) {
        HypoSimplifiedGraph(kik, withe);
        linesss2(Cn2PAX, Cn2PAY, Cn2PBX, Cn2PAY, Cn2PBX, Cn2PBY, Cn2PBX, Cn2PAY+withe/2, Cn2PsGLXCol, Cn2PsGLYCol, withe, kik)
        HypoSimplifiedGraph(kik);

        kik.beginPath();
        kik.fillStyle = textCol;
        kik.font = "24px Mathfont";
        kik.save();
        kik.translate( Cn2PBX+5+16, Cn2PAY-withe -37);
        kik.rotate(Math.PI*3 / 2);
        kik.fillText("Opp", 0, 0);
        kik.fill();
        kik.restore();
        kik.beginPath();

        kik.font = "24px Mathfont";
        kik.fillText("Adj", Cn2PAX+75, Cn2PAY+25);
        kik.fill();
        kik.beginPath();

    }
    
    SimplifiedGraph(minL);
    SimplifiedGraphAxes(minL);
    SimplifiedGraphAxes(mon3);
    HypoSimplifiedGraph(mon3, 6);
    SimplifiedGraphAxes(mon4);
    HypoPointAxesSimplifiedGraph(mon4, 3);
    SimplifiedGraphAxes(mon5); 
    TriangleSimplifiedGraph(mon5, 6);
});