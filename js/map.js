            // svg path for target icon
            var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

            var map = AmCharts.makeChart("mapdiv", {
                type: "map",

                dataProvider: {
                    map: "worldLow",
                    images: [{
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "London",
                    latitude: 51.51,
                    longitude: 0.12
              }, {
                    svgPath:targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Giverny",
                    latitude: 49.01,
                    longitude: 1.53
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Konstanz",
                    latitude: 47.68,
                    longitude: 9.4
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Zurich",
                    latitude: 47.38,
                    longitude: 8.54
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Luzern",
                    latitude: 47.05,
                    longitude: 8.31
              }, {     
                    svgPath:targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Paris",
                    latitude: 48.85,
                    longitude: 2.35
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Orlando",
                    latitude: 28.54,
                    longitude: -81.38
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Chattanooga",
                    latitude: 35.05,
                    longitude: -85.31
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Bellingham",
                    latitude: 48.75,
                    longitude: -122.48
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Helen",
                    latitude: 34.70,
                    longitude: -83.73
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Atlanta",
                    latitude: 33.74,
                    longitude: -84.39
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Vancouver",
                    latitude: 49.28,
                    longitude: -123.12
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Calcutta",
                    latitude: 22.57,
                    longitude: 88.37
              }, {
                    svgPath: targetSVG, 
                    zoomLevel:5, 
                    scale:0.5, 
                    title: "Dhaka",
                    latitude: 23.8,
                    longitude: 90
              }]
                },

                areasSettings: {
                    unlistedAreasColor: "#c9d4f9"
                },

                imagesSettings: {
                    color: "#585869",
                    rollOverColor: "#585869",
                    selectedColor: "#585869",
                    pauseDuration: 0.2,
                    animationDuration: 2.5,
                    adjustAnimationSpeed: true
                }
            });