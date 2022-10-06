let leafletMapsObj = {};
let leafletMarkersObj = {};

function drawTrack(trackOpts, elevationOpts, markerOpts) {
    var opts = {
        elevationControl: {
            options: {
                position: elevationOpts.graphPosition,
                theme: elevationOpts.graphTheme,
                width: elevationOpts.graphWidth,
                height: elevationOpts.graphHeight,
                margins: {
                    top: 20,
                    right: 20,
                    bottom: 35,
                    left: 50
                },
                followMarker: elevationOpts.graphFollowMarker,
                collapsed: elevationOpts.graphCollapsed,
                detached: elevationOpts.graphDetached,
                legend: false,
                summary: false,
                downloadLink: '',
                gpxOptions: {
                    polyline_options: {
                        className: 'track-' + trackOpts.trackId + '-',
                        color: trackOpts.lineColor,
                        opacity: trackOpts.lineOpacity,
                        weight: trackOpts.lineWeight,
                    },
                    marker_options: {
                        startIcon: new L.ExtraMarkers.icon({
                            icon: markerOpts.iconStart,
                            markerColor: markerOpts.iconStartColor,
                            shape: markerOpts.iconStartShape,
                            prefix: 'fa',
                            extraClasses: markerOpts.iconStartClasses
                        }),
                        endIcon: new L.ExtraMarkers.icon({
                            icon: markerOpts.iconEnd,
                            markerColor: markerOpts.iconEndColor,
                            shape: markerOpts.iconEndShape,
                            prefix: 'fa',
                            extraClasses: markerOpts.iconEndClasses
                        }),
                        wptIcons: {
                            '': new L.ExtraMarkers.icon({
                                icon: markerOpts.icon,
                                markerColor: markerOpts.iconColor,
                                shape: markerOpts.iconShape,
                                prefix: 'fa',
                                extraClasses:  markerOpts.iconClasses,
                            })
                        }
                    }
                },

            },
        },
    };

    L.control.elevation(opts.elevationControl.options).addTo(leafletMapsObj[trackOpts.mapId]).load(trackOpts.trackPath);

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
