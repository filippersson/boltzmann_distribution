/**
 * Created by filip on 2014-04-14.
 */

$(document).ready(function() {

    window.onresize = function(event) {
        window.location.reload();
    };


    /* some initial vals*/
    var initialTemp = 1.0;
    var startVal = initialTemp;

    var minTemp = 0;
    var maxTemp = 500;

    var maxNumParticles = 100;

    var initialNumParticles = 1;
    var initialEDist = 10;
    var initialEsubDist = 2;
    var initialNumSubLevels = 5;

    /* create color map*/
    var colorMap = new Rainbow();

    var colour1 = "#0FDBFF";
    /* blue */
    var colour2 = "#0FFF1B";
    /* green*/
    var colour3 = "#FFEB0F";
    /* yellow*/
    var colour4 = "#FF170F";
    /* dark red*/


    colorMap.setSpectrum(colour1, colour3, colour4);

    colorMap.setNumberRange(minTemp, maxTemp);


    /* -----------------------------------------------
     * SPINNERS
     * -----------------------------------------------

     /* *************** */
    /* settings */
    /* *************** */

    /* LEFT
     * Temperature */
    var $spinnerLeft = $("#spinnerLeft");
    $spinnerLeft.spinner({
        min: 0,
        max: maxTemp,
        numberFormat: "n1",
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

            $("#sliderLeft").slider("value", ui.value)
        }
    });

    /*  E-level distance */
    var $spinnerEDistLeft = $("#spinnerEDistLeft");
    $spinnerEDistLeft.spinner({
        min: 0,
        max: maxTemp,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });

    /* E-level sub distance */
    var $spinnerSubEDistLeft = $("#spinnerSubEDistLeft");
    $spinnerSubEDistLeft.spinner({
        min: 0,
        max: maxTemp,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });

    /* number of sublevels */
    var $spinnerNumSubLevLeft = $("#spinnerNumSubLevLeft");
    $spinnerNumSubLevLeft.spinner({
        min: 0,
        max: maxTemp,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });


    /*  number of particles */
    var $spinnerNumParticlesLeft = $("#spinnerNumParticlesLeft");
    $spinnerNumParticlesLeft.spinner({
        min: 0,
        max: maxNumParticles,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });

    /* MID */
    var $spinnerETrans = $("#spinnerETrans");
    $spinnerETrans.spinner({
        min: 0,
        max: 10,
        step: 0.05,
        spin: function (event, ui) {

        }

    });

    /* RIGHT */
    /* temperature */
    var $spinnerRight = $("#spinnerRight");
    $spinnerRight.spinner({
        min: 0,
        max: maxTemp,
        numberFormat: "n1",
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

            $("#sliderRight").slider("value", ui.value)
        }
    });

    /*  E-level distance */
    var $spinnerEDistRight = $("#spinnerEDistRight");
    $spinnerEDistRight.spinner({
        min: 0,
        max: 1000,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });

    /* E-level sub distance */
    var $spinnerSubEDistRight = $("#spinnerSubEDistRight");
    $spinnerSubEDistRight.spinner({
        min: 0,
        max: maxTemp,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });

    /* number of sublevels */
    var $spinnerNumSubLevRight = $("#spinnerNumSubLevRight");
    $spinnerNumSubLevRight.spinner({
        min: 0,
        max: maxTemp,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });

    /*  number of particles */
    var $spinnerNumParticlesRight = $("#spinnerNumParticlesRight");
    $spinnerNumParticlesRight.spinner({
        min: 0,
        max: maxNumParticles,
        stop: function (event, ui) {
        },
        spin: function (event, ui) {

        }
    });

    /* *************** */
    /* event listener*/
    /* *************** */
    /* LEFT */
    $spinnerLeft.on("spinstop", function (event, ui) {
        plotLeft();

    });

    $spinnerLeft.on("spin", function (event, ui) {
        plotLeft();
        /* switch tab focus to data tab */
        $("#tabsLeft").tabs({
            active: 2
        });
    });

    $spinnerEDistLeft.on("spinstop", function (event, ui) {
        plotLeft()
    });

    $spinnerSubEDistLeft.on("spinstop", function (event, ui) {
        plotLeft()
    });

    $spinnerNumSubLevLeft.on("spinstop", function (event, ui) {
        plotLeft()
    });

    $spinnerNumParticlesLeft.on("spinstop", function (event, ui) {
        plotLeft()
    });

    $spinnerNumParticlesLeft.on("spinstop", function (event, ui) {
        plotLeft()
    });


    /* RIGHT*/
    $spinnerRight.on("spinstop", function (event, ui) {
        plotRight()
    });

    $spinnerRight.on("spin", function (event, ui) {
        plotRight();
        /* switch tab focus to data tab */
        $("#tabsLeft").tabs({
            active: 2
        });
    });

    $spinnerEDistRight.on("spin", function (event, ui) {
        plotRight()
    });

    $spinnerSubEDistRight.on("spin", function (event, ui) {
        plotRight()
    });

    $spinnerNumSubLevRight.on("spinstop", function (event, ui) {
        plotRight()
    });

    $spinnerNumParticlesRight.on("spin", function (event, ui) {
        plotRight()
    });

    $spinnerNumParticlesRight.on("spinstop", function (event, ui) {
        plotRight()
    });

    /* *************** */
    /* initial value*/
    /* *************** */
    /* LEFT */
    $spinnerLeft.spinner("value", initialTemp);
    $spinnerEDistLeft.spinner("value", initialEDist);
    $spinnerSubEDistLeft.spinner("value", initialEsubDist);
    $spinnerNumSubLevLeft.spinner("value", initialNumSubLevels);
    $spinnerNumParticlesLeft.spinner("value", initialNumParticles);


    /*  RIGHT */
    $spinnerRight.spinner("value", initialTemp);
    $spinnerEDistRight.spinner("value", initialEDist);
    $spinnerSubEDistRight.spinner("value", initialEsubDist);
    $spinnerNumSubLevRight.spinner("value", initialNumSubLevels);
    $spinnerNumParticlesRight.spinner("value", initialNumParticles);


    /* MID */
    $spinnerETrans.spinner("value", 0.05);

    /* --------------------------------------------- */


    /* -----------------------------------------------
     * CHECK BOXES
     * ----------------------------------------------- */

    /* LEFT */
    /* event listener*/
    $("input[name=plotRelLeft]").on("change", function () {
        plotLeft();
    });

    $("input[name=plotElevLeft]").on("change", function () {
        plotLeft();
    });


    /* RIGHT */
    /* event listener*/
    $("input[name=plotRelRight]").on("change", function () {
        plotRight();
    });

    $("input[name=plotElevRight]").on("change", function () {
        plotRight();
    });

    /* -----------------------------------------------*/

    /* -----------------------------------------------
     * TEXT FIELD
     * ----------------------------------------------- */

    /* LEFT*/
    /* event listener*/
    $("input[name=ymaxLeft]").on("change", function () {
        plotLeft();
    });

    $("input[name=xmaxLeft]").on("change", function () {
        plotLeft();
    });

    /* RIGHT*/
    /* event listener*/
    $("input[name=ymaxRight]").on("change", function () {
        plotRight();
    });

    $("input[name=xmaxRight]").on("change", function () {
        plotRight();
    });

    /* -----------------------------------------------*/

    /* -----------------------------------------------
     * SLIDERS
     * -----------------------------------------------
     * LEFT
     * ****************
     * settings */
    /* *************** */

    var $sliderLeft = $("#sliderLeft");
    $sliderLeft.slider({
        min: 0,
        max: maxTemp,
        range: "min",
        start: function (event, ui) {
        },
        slide: function (event, ui) {
            if (startVal < ui.value) {
                $spinnerLeft.spinner("value", (ui.value + 1))
            } else if (startVal > ui.value) {
                $spinnerLeft.spinner("value", (ui.value - 1))
            }
        },
        stop: function (event, ui) {
        }

    });

    /* event listeners */
    $sliderLeft.on("slidestop", function (event, ui) {
        plotLeft();
        /* switch tab focus to data tab */
        $("#tabsLeft").tabs({
            active: 2
        });
    });
    $sliderLeft.on("slidestart", function (event, ui) {
        startVal = ui.value;
    });

    /* initial value*/
    $sliderLeft.slider("value", initialTemp);

    /* RIGHT */
    var $sliderRight = $("#sliderRight");
    $sliderRight.slider({
        min: 0,
        max: maxTemp,
        range: "min",
        start: function (event, ui) {
        },
        slide: function (event, ui) {
            if (startVal < ui.value) {
                $spinnerRight.spinner("value", (ui.value + 1))
            } else if (startVal > ui.value) {
                $spinnerRight.spinner("value", (ui.value - 1))
            }
        },
        stop: function (event, ui) {
        }
    });

    /* event listeners */
    $sliderRight.on("slidestop", function (event, ui) {
        plotRight();
        /* switch tab focus to data tab */
        $("#tabsRight").tabs({
            active: 2
        });
    });
    $sliderRight.on("slidestart", function (event, ui) {
        startVal = ui.value;
    });

    /* initial value*/
    $sliderRight.slider("value", initialTemp);

    /* -----------------------------------------------*/

    /* ------------------------------------------------
     * TABS
     * -------------------------------------------------*/
    $("#tabsLeft").tabs({
        active: 0,
        collapsible: true,
        heightStyle: "conent"
    });

    $("#tabsRight").tabs({
        active: 0,
        collapsible: true,
        heightStyle: "auto"
    });

    /* ------------------------------------------------
     * MID PANEL
     * -------------------------------------------------*/
    var $midPanel = $("#midPanel");
    var $btnLeft = $("#btnLeft");
    var $btnRight = $("#btnRight");

    var $transE = $(".transE");

    var $btnEtransLeft = $("#btnTestLeft");
    var $btnEtransRight = $("#btnTestRight");

    /* initial state */
    $btnLeft.hide();
    $btnRight.hide();
    $spinnerETrans.hide();
    $transE.css("display", "none");

    /* cache */

    var $leftPanel = $("#leftPanel");
    var $rightPanel = $("#rightPanel");
    var $heatpipe = $("#heatpipe");


    var $conLeft = $("#conLeft");
    var $conRight = $("#conRight");

    $heatpipe.hide();


    /* midpanel event listener */
    $midPanel.on("mouseenter", function () {

        var Tleft = Number($("#spinnerLeft").spinner("value"));
        var Tright = Number($("#spinnerRight").spinner("value"));

        $(this).removeClass("midPanel").addClass("midPanelActive");

        $conLeft.removeClass("testLeft").addClass("conLeftActive");
        $conRight.removeClass("testRight").addClass("conRightActive");


        setTimeout(function () {


            $btnLeft.button("option", "disabled", false);
            $btnRight.button("option", "disabled", false);

            $btnRight.show();
            $btnLeft.show();
            $spinnerETrans.show();
            $transE.css("display", "inline-block");

            $btnEtransLeft.addClass("btnEtrans");
            $btnEtransRight.addClass("btnEtrans");

            $conLeft.css("border-right-color", ("#" + colorMap.colorAt(Tleft)));
            $conRight.css("border-left-color", ("#" + colorMap.colorAt(Tright)));

            $leftPanel.css("border-right", ("2px solid #" + colorMap.colorAt(Tleft)));
            $rightPanel.css("border-left", ("2px solid #" + colorMap.colorAt(Tright)));

            $heatpipe.show();
            $heatpipe.css("background", ("linear-gradient(to right, #" + colorMap.colorAt(Tleft) + ", #" + colorMap.colorAt(Tright) + ")"));


        }, 300);

    });

    $midPanel.on("mouseleave", function () {
        $(this).removeClass("midPanelActive").addClass("midPanel");

        $conLeft.removeClass("conLeftActive").addClass("testLeft");
        $conRight.removeClass("conRightActive").addClass("testRight");

        $conLeft.css("border-right-color", ("#dbdbdb"));
        $conRight.css("border-left-color", ("#dbdbdb"));

        $btnEtransLeft.removeClass("btnEtrans");
        $btnEtransRight.removeClass("btnEtrans");

        $heatpipe.hide();
        $heatpipe.css("background", ("linear-gradient(to right, #f6f6f6, #f6f6f6)"));



        $leftPanel.css("border-right", "1px solid #dddddd");
        $rightPanel.css("border-left", "1px solid #dddddd");

        setTimeout(function () {
            $btnLeft.button("option", "disabled", true);
            $btnRight.button("option", "disabled", true);

            $btnRight.hide();
            $btnLeft.hide();
            $spinnerETrans.hide();
            $transE.css("display", "none")
        }, 0);

    });

    /* event listener on heat transfer*/
    $btnEtransLeft.on("click", function () {

        pushDq("left");

        var Tleft = Number($("#spinnerLeft").spinner("value"));
        var Tright = Number($("#spinnerRight").spinner("value"));

        $leftPanel.css("border-right", ("2px solid #" + colorMap.colorAt(Tleft)));
        $rightPanel.css("border-left", "2px solid #" + colorMap.colorAt(Tright));

        $heatpipe.css("background", ("linear-gradient(to right, #" + colorMap.colorAt(Tleft) + ", #" + colorMap.colorAt(Tright) + ")"));

        $conLeftActive.css("border-right-color", ("#" + colorMap.colorAt(Tleft)));
        $conRightActive.css("border-left-color", ("#" + colorMap.colorAt(Tright)));
    });

    $btnEtransRight.on("click", function () {
        pushDq("right");

        var Tleft = Number($("#spinnerLeft").spinner("value"));
        var Tright = Number($("#spinnerRight").spinner("value"));

        $leftPanel.css("border-right", ("2px solid #" + colorMap.colorAt(Tleft)));
        $rightPanel.css("border-left", "2px solid #" + colorMap.colorAt(Tright));

        $heatpipe.css("background", ("linear-gradient(to right, #" + colorMap.colorAt(Tleft) + ", #" + colorMap.colorAt(Tright) + ")"));

        $conLeftActive.css("border-right-color", ("#" + colorMap.colorAt(Tleft)));
        $conRightActive.css("border-left-color", ("#" + colorMap.colorAt(Tright)));
    });

    /* -----------------------------------------------*/


    /* ------------------------------------------------
     * SELECTION E-level type
     * -------------------------------------------------
     /* ************** */
    /* event listener */
    /* ************** */
    $("#p-distSubLevLeft").hide();
    $("#s-distSubLevLeft").hide();

    $("#p-numSubLevLeft").hide();
    $("#s-numSubLevLeft").hide();

    $("#p-molLeft").hide();
    $("#s-molLeft").hide();

    $("#p-distSubLevRight").hide();
    $("#s-distSubLevRight").hide();

    $("#p-numSubLevRight").hide();
    $("#s-numSubLevRight").hide();

    $("#p-molRight").hide();
    $("#s-molRight").hide();

    $("#selectionELevLeft").on("change", function (event, ui) {

        var energyLevelMode = $("#selectionELevLeft").val();

        if (energyLevelMode == "equidistant") {

            $("#p-EDistLeft").show();
            $("#s-EDistLeft").show();

            $("#p-distSubLevLeft").css("display","none");
            $("#s-distSubLevLeft").css("display","none");

            $("#p-numSubLevLeft").css("display","none");
            $("#s-numSubLevLeft").css("display","none");

            $("#p-molLeft").css("display","none");
            $("#s-molLeft").css("display","none");

            $("#spinnerEDistLeft").spinner("value", 10);


        } else if (energyLevelMode == "sublevel") {

            $("#p-EDistLeft").show();
            $("#s-EDistLeft").show();

            $("#p-distSubLevLeft").show();
            $("#s-distSubLevLeft").show();

            $("#p-numSubLevLeft").show();
            $("#s-numSubLevLeft").show();

            $("#p-molLeft").hide();
            $("#s-molLeft").hide();

            $("#spinnerEDistLeft").spinner("value", 100);
            $("#spinnerSubEDistLeft").spinner("value", 10);


        } else if (energyLevelMode == "rotational") {
            $("#p-EDistLeft").hide();
            $("#s-EDistLeft").hide();

            $("#p-distSubLevLeft").hide();
            $("#s-distSubLevLeft").hide();

            $("#p-numSubLevLeft").hide();
            $("#s-numSubLevLeft").hide();

            $("#p-molLeft").show();
            $("#s-molLeft").show();

        }

        plotLeft()

    });

    $("#selectionELevRight").on("change", function (event, ui) {

        var energyLevelMode = $("#selectionELevRight").val();

        if (energyLevelMode == "equidistant") {

            $("#p-EDistRight").show();
            $("#s-EDistRight").show();

            $("#p-distSubLevRight").css("display","none");
            $("#s-distSubLevRight").css("display","none");

            $("#p-numSubLevRight").css("display","none");
            $("#s-numSubLevRight").css("display","none");

            $("#p-molRight").css("display","none");
            $("#s-molRight").css("display","none");

            $("#spinnerEDistRight").spinner("value", 10);


        } else if (energyLevelMode == "sublevel") {

            $("#p-EDistRight").show();
            $("#s-EDistRight").show();

            $("#p-distSubLevRight").show();
            $("#s-distSubLevRight").show();

            $("#p-numSubLevRight").show();
            $("#s-numSubLevRight").show();

            $("#p-molRight").hide();
            $("#s-molRight").hide();

            $("#spinnerEDistRight").spinner("value", 100);
            $("#spinnerSubEDistRight").spinner("value", 10);


        } else if (energyLevelMode == "rotational") {
            $("#p-EDistRight").hide();
            $("#s-EDistRight").hide();

            $("#p-distSubLevRight").hide();
            $("#s-distSubLevRight").hide();

            $("#p-numSubLevRight").hide();
            $("#s-numSubLevRight").hide();

            $("#p-molRight").show();
            $("#s-molRight").show();

        }

        plotRight()

    });

    /* Rotational E-levels*/
    $("#selectionMoleculeLeft").on("change", function(ui, event) {
       plotLeft();
    });

    $("#selectionMoleculeRight").on("change", function(ui, event) {
        plotRight();
    });


        /* -----------------------------------------------*/

        /* initialize plot*/
        var currentValue = 2;
        /*plotRight(currentValue);*/
        plotLeft();
        plotRight();


        /* *********************************** */
        /* --- ENERGY LEVEL DISTRIBUTION --- */
        /* *********************************** */

        function energyLevels(systemFlag) {

            var energyLevels = [];
            var degeneracy = [];

            var nElevels = 10000;

            /* get e-level mode from user */
            if (systemFlag == "left") {

                var energyLevelMode = $("#selectionELevLeft").val();

            } else if (systemFlag == "right") {

                var energyLevelMode = $("#selectionELevRight").val();

            }

            console.log("energy level mode chosen: " + energyLevelMode);

            /* EQUIDISTANT  */
            if (energyLevelMode == "equidistant") {

                if (systemFlag == "left") {

                    /* Get user defined E-level spacing*/
                    var dE = $("#spinnerEDistLeft").spinner().val();

                    console.log("----------------------------------");
                    console.log("ENERGY LEVELS:  LEFT");
                    console.log("----------------------------------");

                    console.log("energy level spacing: " + dE);


                } else if (systemFlag == "right") {
                    /* Get user defined E-level spacing*/
                    var dE = $("#spinnerEDistRight").spinner().val();

                    console.log("----------------------------------");
                    console.log("ENERGY LEVELS: RIGHT ");
                    console.log("----------------------------------");

                    console.log("energy level spacing: " + dE);

                }

                var dESub = 0;
                /* no sub levels */


                /* ****************************** */
                /* create energy level distribution */

                for (var i = 0; i < nElevels; i++) {
                    energyLevels.push((i * dE));
                    degeneracy.push(1);

                }
                /* ******************************* */

                console.log("number of E levels constructed: " + energyLevels.length);

            } /* SUB LEVELS */
            else if (energyLevelMode == "sublevel") {

                if (systemFlag == "left") {
                    /* Get user defined main E-level spacing */
                    var dEMain = $("#spinnerEDistLeft").spinner("value");

                    /* Get user defined sub E-level spacing */
                    var dESub = $("#spinnerSubEDistLeft").spinner("value");

                    /* Get user defined number of sub E-levels */
                    var dENum = $("#spinnerNumSubLevLeft").spinner("value");

                    console.log("----------------------------------");
                    console.log("ENERGY LEVELS:  LEFT");
                    console.log("----------------------------------");

                    console.log("dE main: " + dEMain + ". dESub: " + dESub + ". dENum: " + dENum);

                } else if (systemFlag == "right") {
                    /* Get user defined main E-level spacing */
                    var dEMain = $("#spinnerEDistRight").spinner("value");

                    /* Get user defined sub E-level spacing */
                    var dESub = $("#spinnerSubEDistRight").spinner("value");

                    /* Get user defined number of sub E-levels */
                    var dENum = $("#spinnerNumSubLevRight").spinner("value");

                    console.log("----------------------------------");
                    console.log("ENERGY LEVELS:  RIGHT");
                    console.log("----------------------------------");
                    console.log("dE main: " + dEMain + ". dESub: " + dESub + ". dENum: " + dENum);
                }

                /* ****************************** */
                /* create energy level distribution */

                var counterMainLevel = 0;

                var counterJ = 0;

                var elev  = [];


                for (var i = 0; i < nElevels; i += dENum) {

                    for (var j = 0; j < dENum; j++) {

                        counterJ++;

                        energyLevels.push( (counterMainLevel * dEMain) + (j * dESub) );
                        degeneracy.push(1);
                        elev.push((i * dEMain));

                    }

                    counterMainLevel++;
                }

                console.log(counterMainLevel );
                console.log(counterJ );



                console.log("energy levels created: " + energyLevels.length);
                /* ****************************** */

            } /* ROTATIONAL */
            else if (energyLevelMode == "rotational") {

                /* Get chosen molecule */
                if (systemFlag == "left") {
                    var molOption = Number($("#selectionMoleculeLeft").val());

                } else if (systemFlag == "right") {
                    var molOption = Number($("#selectionMoleculeRight").val());
                }

                console.log("Molecule chosen: " + molOption);
                var theta = 0;
                var sigma = 0;

                /* Set properties*/
                switch (molOption) {

                    case 1:
                        theta = 0.116;
                        /* Br2 */
                        sigma = 2;
                        break;

                    case 2:
                        theta = 2.07;
                        /* O2 */
                        sigma = 2;
                        break;

                    case 3:
                        theta = 15.02;
                        /* HCl */
                        sigma = 2;
                        break;

                    case 4:
                        theta = 85.3;
                        /* H2 */
                        sigma = 2;
                        break;
                }

                console.log("theta: " + theta  + ". sigma: " + sigma);

                /* ****************************** */
                /* create energy level distribution */
                for (var i = 0; i < nElevels; i++) {

                    energyLevels.push( (i * (i + 1) ) * theta);
                    degeneracy.push(((2 * i) + 1) / sigma);

                }


                var dE = theta;
                var dEsub = 0;
            }

            return {
                energyLevels: energyLevels,
                degeneracy: degeneracy,
                energyLevelMainDiff: dE,
                energyLevelSubDiff: dESub
            };

        }


        /* *********************************** */
        /* --- BOLTZMANN DISTRIBUTION and SYSTEM PROPERTIES --- */
        /* *********************************** */

        function boltzFun(systemFlag, newTguess) {

            var T = Number;

            if ((typeof newTguess == "number")) {
                /* new Temperature from guess given energy transfer*/
                T = newTguess;
                console.log("Temp guess is " + T);

                /* Get T and degeneracy gi*/
                if (systemFlag == "left") {

                    var plotRel = $('input[name=plotRelLeft]').is(':checked');
                    var EiSystem = energyLevels("left");
                    /* obtain energy level distribution */
                    console.log("T left = " + T)

                } else if (systemFlag == "right") {

                    var plotRel = $('input[name=plotRelRight]').is(':checked');
                    var EiSystem = energyLevels("right");
                    /* obtain energy level distribution */
                    console.log("T right = " + T);
                }

            } else {
                /* Temp defined from user*/

                /* Get T and degeneracy gi*/
                if (systemFlag == "left") {
                    T = $("#spinnerLeft").spinner("value");
                    var plotRel = $('input[name=plotRelLeft]').is(':checked');
                    var EiSystem = energyLevels("left");
                    /* obtain energy level distribution */
                    console.log("T left = " + T)

                } else if (systemFlag == "right") {
                    T = $("#spinnerRight").spinner("value");
                    var plotRel = $('input[name=plotRelRight]').is(':checked');
                    var EiSystem = energyLevels("right");
                    /* obtain energy level distribution */
                    console.log("T right = " + T);
                }

            }

            /* ***************************************** */
            /* B-weight and partition function*/

            var p = [];

            var pSum = 0;

            if (T == 0) {
                p.push([1, 0]);
                pSum = 1;
                for (var i = 1; i < EiSystem.energyLevels.length; i++) {
                    p.push([0, EiSystem.energyLevels[i] ]);
                    /* prob-energy pair array */
                }

            } else {

                for (var i = 0; i < EiSystem.energyLevels.length; i++) {
                    p.push([EiSystem.degeneracy[i] * Math.exp(-EiSystem.energyLevels[i] / T), EiSystem.energyLevels[i] ]);
                    /* prob-energy pair array */
                    pSum += p[i][0];
                }
            }


            /* ********************************************* */

            console.log("Partition function = " + pSum);

            /* ********************************************* */
            /* Calculate Probability distribution total energy */

            var energyParticle = 0;
            var entropyParticle = 0;

            console.log("length of p " + p.length);

            for (var i = 0; i < p.length; i++) {

                p[i][0] /= pSum;

                if (p[i][0] > 0) {
                    entropyParticle += -p[i][0] * Math.log(p[i][0]);

                    energyParticle += (p[i][0]) * EiSystem.energyLevels[i];

                }
            }

            if (plotRel) {

                var normalization = p[0][0];

                for (var i = 0; i < p.length; i++) {

                    if (p[i][0] > 0) {
                        p[i][0] /= normalization;

                    }

                }
            }


            /* ********************************************* */

            var numParticles = $("#spinnerNumParticlesLeft").spinner("value");

            return {
                energyLevelMainDiff: EiSystem.energyLevelMainDiff,
                energyLevelSubDiff: EiSystem.energyLevelSubDiff,
                probability: p,
                partitionFun: pSum,
                energyLevels: EiSystem.energyLevels,
                degeneracy: EiSystem.degeneracy,
                numParticles: numParticles,
                energyParticle: energyParticle,
                energyTotal: (energyParticle * 8.3145 * numParticles) / 1000,
                energyMolar: energyParticle * 8.3145 / 1000,
                entropyParticle: entropyParticle,
                entropyTotal: entropyParticle * 8.3145 * numParticles,
                entropyMolar: entropyParticle * 8.3145,
                temperature: T
            };

        }


        /* -----------------------------------------------*/


        /* *********************************** */
        /* --- PLOTTING --- */
        /* *********************************** */

        function plotLeft() {

            /* create system and properties*/
            var system = boltzFun("left");

            var energyLevelMode = $("#selectionELevLeft").val();

            var ymax = $("input[name=ymaxLeft]").val();
            var xmax = $("input[name=xmaxLeft]").val();

            if (energyLevelMode == "equidistant") {

                var dE = system.energyLevelMainDiff;
                var barSize =  dE / 2;

                var modulus = Math.round(ymax / (10 * dE));

                console.log("barsize: " + barSize);


            } else if (energyLevelMode == "sublevel") {

                var dE = system.energyLevelSubDiff;
                var barSize = dE/2;

                var modulus = Math.round(ymax / (10 * dE));

                console.log("barsize: " + barSize);


            } else if (energyLevelMode == "rotational") {

                var molOption = Number($("#selectionMoleculeLeft").val());
                console.log("moloption: " + molOption);
                var dE = system.energyLevelMainDiff;

                switch (molOption) {
                    case 1:
                        var modulus = Math.round(ymax / (500 * dE));
                        var barSize = dE *20 ;
                        ymax = 100;
                        $("input[name=ymaxLeft]").val(ymax);
                        break;
                    case 2:
                        var modulus = Math.round(ymax / (100 * dE));
                        var barSize = dE * 4;
                        ymax = 200;
                        $("input[name=ymaxLeft]").val(ymax);
                        break;
                    case 3:
                        var modulus = Math.round(ymax / (10 * dE));
                        var barSize = dE / 2;
                        ymax = 300;
                        $("input[name=ymaxLeft]").val(ymax);
                        break;
                    case 4:
                        var modulus = 1;
                        var barSize = dE / 2;
                        ymax = 300;
                        $("input[name=ymaxLeft]").val(ymax);
                        break;
                }

            }

            console.log("modulus: " + modulus);
            console.log("barsize: " + barSize);

            var plotElev = $('input[name=plotElevLeft]').is(':checked');

            /* create tick labels for energy levels*/
            tickELevels = function () {

                var ticks = [];

                for (var i = 0; i < (ymax/2 ); i++) {
                    if (i % modulus == 0) {
                        ticks.push([system.energyLevels[i], String(system.energyLevels[i].toFixed(0)), true ]);
                    } else {
                        ticks.push([system.energyLevels[i], " ", true])
                    }
                }

                return ticks;

            };

            if (plotElev) {

              var ticks = tickELevels();
                var tickLth = undefined;



            } else {

                var ticks = 10;
                var tickLth = 0;

            }

            /* plot options*/

            console.log("color " + colorMap.colourAt(system.temperature));

            var options = {
                series: {

                    bars: {show: true, fill: 0.7, fillColor: ("#" + colorMap.colorAt(system.temperature))
                    }
                },
                grid: {
                    hoverable: true,
                    show: true},
                yaxis: { min: 0, max: ymax,
                    ticks: ticks,
                    tickLength: tickLth
                },
                xaxis: {min: 0, max: xmax,
                    tickLength: 0
                },
                bars: {
                    horizontal: true,
                    barWidth: barSize,
                    lineWidth: 1
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Population at E-level %y.0 is %x.2",
                    shifts: {
                        x: -60,
                        y: 25
                    }
                }
            };


            /* plot boltzmann distributions */
            $.plot($("#flotLeftPlaceholder"), [
                {
                    data: system.probability

                }
            ], options);

            /* update data fields in data tab*/
            $("#UparticleLeft").text(system.energyParticle.toFixed(4));
            $("#UtotLeft").text(system.energyTotal.toFixed(4));
            $("#UMolarLeft").text(system.energyMolar.toFixed(4));

            $("#SparticleLeft").text(system.entropyParticle.toFixed(4));
            $("#StotLeft").text(system.entropyTotal.toFixed(4));
            $("#SMolarLeft").text(system.entropyMolar.toFixed(4));

            $("#qLeft").text(system.partitionFun.toFixed(4));

            var totalS = (Number($("#StotRight").text()) + Number($("#StotLeft").text()));

            $("#totEntropy").text(totalS.toFixed(4));


        }

        function plotRight() {

            /* create system and properties*/
            var system = boltzFun("right");

            var energyLevelMode = $("#selectionELevRight").val();

            var ymax = $("input[name=ymaxRight]").val();
            var xmax = $("input[name=xmaxRight]").val();

            if (energyLevelMode == "equidistant") {

                var dE = system.energyLevelMainDiff;
                var barSize =  dE / 2;
                var modulus = Math.round(ymax / (10 * dE));

                console.log("barsize: " + barSize);


            } else if (energyLevelMode == "sublevel") {

                var dE = system.energyLevelSubDiff;
                var barSize = dE/2;
                var modulus = Math.round(ymax / (10 * dE));

                console.log("barsize: " + barSize);

            } else if (energyLevelMode == "rotational") {
                var molOption = Number($("#selectionMoleculeRight").val());

                console.log("moloption: " + molOption);
                var dE = system.energyLevelMainDiff;

                switch (molOption) {
                    case 1:
                        var modulus = Math.round(ymax / (500 * dE));
                        var barSize = dE * 20;
                        ymax = 100;
                        $("input[name=ymaxRight]").val(ymax);
                        break;
                    case 2:
                        var modulus = Math.round(ymax / (100 * dE));
                        var barSize = dE * 4;
                        ymax = 200;
                        $("input[name=ymaxRight]").val(ymax);

                        break;
                    case 3:
                        var modulus = Math.round(ymax / (10 * dE));
                        var barSize = dE / 2;
                        ymax = 300;
                        $("input[name=ymaxRight]").val(ymax);
                        break;
                    case 4:
                        var modulus = 1;
                        var barSize = dE / 2;
                        ymax = 300;
                        $("input[name=ymaxRight]").val(ymax);
                        break;
                }
            }

            console.log("modulus: " + modulus);
            console.log("barsize: " + barSize);

            var plotElev = $('input[name=plotElevRight]').is(':checked');

            /* create tick labels for energy levels*/
            tickELevels = function () {

                console.log("modulus: " + modulus);
                var ticks = [];

                for (var i = 0; i < (ymax / 2); i++) {
                    if (i % modulus == 0) {
                        ticks.push([system.energyLevels[i], String(system.energyLevels[i].toFixed(0)), true ]);
                    } else {
                        ticks.push([system.energyLevels[i], " ", true])
                    }
                }

                return ticks;

            };

            if (plotElev) {

                var ticks = tickELevels();
                var tickLth = undefined;

            } else {

                var ticks = 10;
                var tickLth = 0;

            }

            /* plot options*/



            var options = {
                series: {
                    bars: {show: true, fill: 0.7, fillColor: ("#" + colorMap.colorAt(system.temperature))
                    }
                },
                grid: {
                    hoverable: true
                },
                yaxis: { min: 0, max: ymax,
                    ticks: ticks,
                    tickLength: tickLth
                },
                xaxis: {min: 0, max: xmax,
                    tickLength: 0},
                bars: {
                    horizontal: true,
                    barWidth: barSize,
                    lineWidth: 1
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Population at E-level %y.0 is %x.2",
                    shifts: {
                        x: -60,
                        y: 25
                    }
                }
            };

            /* plot boltzmann distributions */
            $.plot($("#flotRightPlaceholder"), [
                {
                    data: system.probability

                }
            ], options);

            /* update data fields in data tab*/
            $("#UparticleRight").text(system.energyParticle.toFixed(4));
            $("#UtotRight").text(system.energyTotal.toFixed(4));
            $("#UMolarRight").text(system.energyMolar.toFixed(4));

            $("#SparticleRight").text(system.entropyParticle.toFixed(4));
            $("#StotRight").text(system.entropyTotal.toFixed(4));
            $("#SMolarRight").text(system.entropyMolar.toFixed(4));

            $("#qRight").text(system.partitionFun.toFixed(4));

            var totalS = (Number($("#StotRight").text()) + Number($("#StotLeft").text()));

            $("#totEntropy").text(totalS.toFixed(4));


        }

        /* ------------------------------------- */

        function pushDq(direction) {

            /* get current system Energies and Temp */
            var dq = $(spinnerETrans).spinner("value");
            console.log("e trans amount: " + dq + " kJ");

            var energyAtot = Number($("#UtotLeft").text());
            var energyBtot = Number($("#UtotRight").text());

            var tempA = $("#spinnerLeft").spinner("value");
            var tempB = $("#spinnerRight").spinner("value");


            console.log("---------------------------------------------------");
            console.log(" HEAT FLOW operation ");
            console.log("---------------------------------------------------");
            console.log("");
            console.log("Total energy in A before E transfer: " + energyAtot);
            console.log("Total energy in B before E transfer: " + energyBtot);
            console.log("Temp in A before E transfer: " + tempA);
            console.log("Temp in B before E transfer: " + tempB);
            console.log("");



            var numParticlesA = $("#spinnerNumParticlesLeft").spinner("value");
            var numParticlesB = $("#spinnerNumParticlesRight").spinner("value");


            if (direction == "left") {
                console.log("left button clicked");
                if (energyBtot < dq) {
                    return alert("You tried to move " + dq + " kJ, but there is only " + energyBtot + " kJ in the system. Too large dq!");

                }
                energyAtot = energyAtot + dq;
                energyBtot -= dq;
                console.log("---------------------------------------------------");
                console.log("new energy in A:" + energyAtot);
                console.log("new energy in B:" + energyBtot);
                console.log("");

                var EiSystemA = energyLevels("left");
                var EiSystemB = energyLevels("right");

                console.log("dE main A: " + EiSystemA.energyLevelMainDiff);
                console.log("dE main B: " + EiSystemB.energyLevelMainDiff);


                /* Determine guess for T by assuming a Cv of R J/(K mol). */
                var TguessA = tempA + (dq * 1000) / (8.3145 * numParticlesA);
                var TguessB = tempB - (dq * 1000) / (8.3145 * numParticlesB);

                if (TguessA > 0) {
                    tempA = TguessA;
                }

                if (TguessB > 0) {
                    tempB = TguessB;
                }

                var newTA = newTFun(tempA, energyAtot, EiSystemA, numParticlesA);
                var newTB = newTFun(tempB, energyBtot, EiSystemB, numParticlesB);


                console.log("new T in A: " + newTA);
                console.log("new T in B: " + newTB);

                $spinnerLeft.spinner("value", newTA);
                $sliderLeft.slider("value", newTA);
                $spinnerRight.spinner("value", newTB);
                $sliderRight.slider("value", newTB);

                plotLeft();
                plotRight();

                return [newTA, newTB];

            } else if (direction == "right") {
                console.log("right button clicked");
                if (energyAtot < dq) {
                    return alert("You tried to move " + dq + " but there is only " + energyAtot + " kJ in the system. Too large dq!");

                }
                energyAtot -= dq;
                energyBtot += dq;
                console.log("---------------------------------------------------");
                console.log("new energy in A:" + energyAtot);
                console.log("new energy in B:" + energyBtot);
                console.log("");

                var EiSystemA = energyLevels("left");
                var EiSystemB = energyLevels("right");

                console.log("dE main A: " + EiSystemA.energyLevelMainDiff);
                console.log("dE main B: " + EiSystemB.energyLevelMainDiff);


                /* Determine guess for T by assuming a Cv of R J/(K mol). */
                var TguessA = tempA - (dq * 1000) / (8.3145 * numParticlesA);
                var TguessB = tempB + (dq * 1000) / (8.3145 * numParticlesB);

                if (TguessA > 0) {
                    tempA = TguessA;
                }

                if (TguessB > 0) {
                    tempB = TguessB;
                }

                var newTA = newTFun(tempA, energyAtot, EiSystemA, numParticlesA);
                var newTB = newTFun(tempB, energyBtot, EiSystemB, numParticlesB);

                console.log("new T in A: " + newTA);
                console.log("new T in B: " + newTB);

                $spinnerLeft.spinner("value", newTA,
                                        "numberFormat", "n1");
                $sliderLeft.slider("value", newTA);

                $spinnerRight.spinner("value", newTB);
                $sliderRight.slider("value", newTB);

                plotLeft();
                plotRight();


                return [newTA, newTB];
            }


            /* ********************************
            * find new T using binary search
            * ********************************
            *
            * find f(a) > 0 and f(b) < 0
            *
            * then calc f(c) using c = (a+b ) / 2
            *
            * If f (c) >  0, the procedure is repeated with the values  a; b  replaced by the values  c; b .
            * If f (c) < 0 , the procedure is repeated with the values  a; b  replaced by  a; c .
            * If f (c) = 0, the procedure terminates as c is the value we are looking for. */

            function newTFun(tempGuess, currentEnergy, EiSystem, numParticles) {

                var T = tempGuess;


                /* find bracket minimum

                e diff = current E - new E from T guess

                 if E diff > 0 =>  T is too low

                 if E diff < 0 => T is too high*/

                /* initial guesses for bracket */
                var Ta = 1.5 * T;
                var Tb = 0.5 * T;
                var Tc = (Ta + Tb) /2;

                console.log("bracket interval: " + "[" + Ta + " " + Tb + "]");

                var fa = newEdiff(Tb);
                var fb = newEdiff(Ta);
                var fc = newEdiff(Tc);

                console.log("fa: " + fa + " fb: " + fb + "fc: " + fc);

                if (  ( (fa > 0)  && (fb < 0) ) )  {
                    /* bracket found*/
                    console.log("bracket minimization found. Starting binary search.");

                    var counter = 0;
                    var maxIt = 1000;


                    while ((Math.abs(fc) > 0.000001) ) {

                        counter++;

                        if (fc > 0) {
                            Tb = Tc;
                            Tc = (Ta + Tb) /2;


                        } else {
                            Ta = Tc;
                            Tc = (Ta + Tb) /2;

                        }

                        fc = newEdiff(Tc);

                        if ((counter % 2) == 0) {
                            console.log("E diff: " + fc);
                            console.log("Temp: " + Tc);

                        }

                        if (counter == maxIt-1) {
                            return console.log("Temp search reached time out")

                        }
                    }

                    console.log("new T is  " +  Tc + ". Iterations: " + counter);

                } else {
                    console.log("bracket minimization not found - bug!");
                }

                return Tc;

                /* ******************************** */
                /* calculate energy diff from new T */
                /* ******************************** */

               function newEdiff(T) {

                   /* ***************************************** */
                   /* B-weight and partition function*/

                   var p = [];

                   var pSum = 0;

                   if (T == 0) {
                       p.push([1, 0]);
                       pSum = 1;
                       for (var i = 1; i < EiSystem.energyLevels.length; i++) {
                           p.push([0, EiSystem.energyLevels[i] ]);
                           /* prob-energy pair array */
                       }

                   } else {

                       for (var i = 0; i < EiSystem.energyLevels.length; i++) {
                           p.push([EiSystem.degeneracy[i] * Math.exp(-EiSystem.energyLevels[i] / T), EiSystem.energyLevels[i] ]);
                           /* prob-energy pair array */
                           pSum += p[i][0];
                       }
                   }

                   /* ********************************************* */
                   /* Calculate Probability distribution total energy */

                   var energyParticle = 0;

                   for (var i = 0; i < p.length; i++) {

                       p[i][0] /= pSum;

                       energyParticle += (p[i][0]) * EiSystem.energyLevels[i];

                   }

                   /* ********************************************* */


                   /* total energy*/
                   return Ediff = currentEnergy - ( (energyParticle * 8.3145 * numParticles) / 1000);


               }


            }

        }

    $('#clickme').on("click", function() {
        /* it -> implement toggle functionality*/
        console.log("slide");
        var it = $(this).data('it') || 1;
        switch ( it ) {
            case 1 :
                $(this).parent().animate({left:'0px'}, {queue:false, duration: 500});
                break;
            case 2 :
                $(this).parent().animate({left:'-280px'}, {queue: false, duration: 500});
                break;
        }
        it++;
        if(it > 2) it = 1;
        $(this).data('it', it);
    });

    /* -----------------------------------------------
     * INSTRUCTIONS
     * ----------------------------------------------- */
    var $prevBtn = $("#PrevInstr");
    var $nextBtn = $("#NextInstr");

    var numInstrSlides = 5;

    infoSlide = 1;


    $nextBtn.on("click", function() {
        console.log("Next btn clicked");


         infoSlide++;
         console.log(infoSlide);

         if (infoSlide > numInstrSlides) {
         infoSlide = numInstrSlides;

         }

        var $infoShow = $("#instr" + String(infoSlide));
        var $infoHide = $("#instr" + String((infoSlide-1)));

        console.log($infoHide);
        console.log($infoShow);


         $infoShow.show();
         $infoHide.hide();

    });

    $prevBtn.on("click", function() {
        console.log("Prev btn clicked");
        infoSlide--;

         if (infoSlide < 1) {
         infoSlide = 1;

         }

        var $infoShow = $("#instr" + String(infoSlide));
        var $infoHide = $("#instr" + String((infoSlide+1)));


        $infoShow.show();
         $infoHide.hide();


    });



    /* --------------------------------------------- */


});

