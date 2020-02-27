let leafletMapsObj = {};
let leafletMarkersObj = {};

function drawTrack(mapId, trackId, trackPath, lineColor, lineOpacity, lineWeight) {
    var opts = {
        elevationControl: {
            options: {
                position: "topright",
                theme: "steelblue-theme", //default: lime-theme
                width: 350,
                height: 150,
                margins: {
                    top: 10,
                    right: 20,
                    bottom: 30,
                    left: 50
                },
                followMarker: false,
                collapsed: false,
                detached: false,
                legend: false,
                summary: false,
                downloadLink: '',
                gpxOptions: {
                    polyline_options: {
                        className: 'track-'+trackId+'-',
                        color: lineColor,
                        opacity: lineOpacity,
                        weight: lineWeight,
                    },
                    marker_options: {
                        startIcon: new L.ExtraMarkers.icon({
                            icon: 'fa-play',
                            markerColor: 'green-light',
                            shape: 'circle',
                            prefix: 'fa',
                            extraClasses: "fa-icon-marker fa-icon-start-stop"
                        }),
                        endIcon: new L.ExtraMarkers.icon({
                            icon: 'fa-flag-checkered',
                            markerColor: 'red',
                            shape: 'circle',
                            prefix: 'fa',
                            extraClasses: "fa-icon-marker fa-icon-start-stop"
                        }),
                        wptIcons: {
                            '': new L.ExtraMarkers.icon({
                                icon: 'fa-thumb-tack',
                                markerColor: 'cyan',
                                shape: 'penta',
                                prefix: 'fa',
                                extraClasses: "fa-icon-marker"
                            })
                        }
                    }
                },

            },
        },
    };

    L.control.elevation(opts.elevationControl.options).addTo(leafletMapsObj[mapId]).load(trackPath);

    /*map.on('eledata_loaded', function(e) {
        track = e.track_info;
    });*/
}

window.downloadFile = function (sUrl) {

    //iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
        alert('Your device does not support files downloading. Please try again in desktop browser.');
        return false;
    }

    //If in Chrome or Safari - download via virtual link click
    if (window.downloadFile.isChrome || window.downloadFile.isSafari) {
        //Creating new link node.
        var link = document.createElement('a');
        link.href = sUrl;

        if (link.download !== undefined) {
            //Set HTML5 download attribute. This will prevent file from opening if supported.
            var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
            link.download = fileName;
        }

        //Dispatching click event.
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }

    // Force file download (whether supported by server).
    if (sUrl.indexOf('?') === -1) {
        sUrl += '?download';
    }

    window.open(sUrl, '_self');
    return true;
};

window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
