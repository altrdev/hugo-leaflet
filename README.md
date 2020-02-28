# Hugo Leaflet

Started from [simonfrey/hugo-leaflet](https://github.com/simonfrey/hugo-leaflet)

Shortcodes for inserting a OSM (Open Street Maps) Map, Marker or Track into your posts by using leaflet.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
    - [Map only](#map-only)
        - [Shortcut](#shortcut)
        - [Parameters `leaflet-map`](#parameters-leaflet-map)
    - [Map with one marker](#map-with-one-marker)
        - [Shortcut](#shortcut-1)
        - [Parameters `leaflet-marker`](#parameters-leaflet-marker)
    - [Map with multiple marker](#map-with-multiple-marker)
        - [Shortcut](#shortcut-2)
    - [Map with gpx track](#map-with-gpx-track)
        - [Shortcut](#shortcut-3)
        - [Parameters `leaflet-track`](#parameters-leaflet-track)
- [License](#license)

## Installation

[Download the project as ZIP](https://github.com/altrdev/hugo-leaflet/archive/master.zip)

1. Copy the layouts folder over (containing the shortcuts)
2. Copy the assets folder over (containing js)
3. Copy the static folder over (containing css and images)
4. Call the loader partial layout in every post or globally in the theme `{{ partial "leaflet-loader" . }}`

I recommend add it globally in your `<head>` and use a parameter to include or exclude like this:

```
{{ if .Params.maps }}
    {{ partial "leaflet-loader" . }}
{{ end }}
```

## Usage

### Map only

#### Shortcut
```
{{< leaflet-map mapHeight="500px" mapWidth="100%" mapLat="27.66995" mapLon="85.43249" >}}
```

#### Parameters `leaflet-map`

|    **Parameter**    |                                       **Description**                                       | **Mandatory** | **Default**            |        **Example**      |
|:-------------------:|:-------------------------------------------------------------------------------------------:|:-------------:|------------------------|:-----------------------:|
| mapHeight           | Map height size                                                                             |       no      |         "400px"        |        `"200px"`        |
| mapWidth            | Map width size                                                                              |       no      |         "100%"         |    `"50px" or "50%"`    |
| mapLat              | Latitude where to center the map                                                            |      yes      |           ""           |      `"27.66995"`       |
| mapLon              | Longitude where to center the map                                                           |      yes      |           ""           |      `"85.43249"`       |
| mapId               | Unique id. Useful for add multiple map in the post with same longitude and latitude         |       no      |   md5(mapLat,mapLon)   |     `"myLocation"`      |
| zoom                | The zoom level. If set, it must be parsable as int.                                         |       no      |          "13"          |          `"7"`          |
| scrollWheelZoom     | Enable or disable zoom with mouse scroll wheel                                              |       no      |         "true"         |   `"true" or "false"`   |


### Map with one marker

#### Shortcut
```
{{< leaflet-map ... >}}
    {{< leaflet-marker markerLat="27.66995" markerLon="85.43249" >}}
{{< /leaflet-map >}}
```

#### Parameters `leaflet-marker`

Coming soon ...

### Map with multiple marker

#### Shortcut

```
{{< leaflet-map ... >}}
    {{< leaflet-marker markerLat="27.66995" markerLon="85.43249" >}}
    {{< leaflet-marker markerLat="27.66995" markerLon="85.43255" >}}
    {{< leaflet-marker markerLat="27.66995" markerLon="85.43345" >}}
{{< /leaflet-map >}}
```

### Map with gpx track

#### Shortcut
```
{{< leaflet-map ... >}}
    {{< leaflet-track trackPath="track.gpx" lineColor="#3796bf" lineWeight="5" >}}
{{< /leaflet-map >}}
```

#### Parameters `leaflet-track`

Coming soon ...

## License
<p>
  <a href="./LICENSE"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/642px-MIT_logo.svg.png" height="60px"></a>
</p>
