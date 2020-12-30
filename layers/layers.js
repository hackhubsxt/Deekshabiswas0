var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_SatelliteImagery_1 = new ol.layer.Tile({
            'title': 'Satellite Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Esri_topolayer_2 = new ol.layer.Tile({
            'title': 'Esri_topolayer',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_revenueboundary_3 = new ol.format.GeoJSON();
var features_revenueboundary_3 = format_revenueboundary_3.readFeatures(json_revenueboundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_revenueboundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_revenueboundary_3.addFeatures(features_revenueboundary_3);
var lyr_revenueboundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_revenueboundary_3, 
                style: style_revenueboundary_3,
                interactive: true,
                title: '<img src="styles/legend/revenueboundary_3.png" /> revenue boundary '
            });
var format_floodproneVillages_4 = new ol.format.GeoJSON();
var features_floodproneVillages_4 = format_floodproneVillages_4.readFeatures(json_floodproneVillages_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floodproneVillages_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_floodproneVillages_4.addFeatures(features_floodproneVillages_4);
var lyr_floodproneVillages_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_floodproneVillages_4, 
                style: style_floodproneVillages_4,
                interactive: true,
    title: 'flood prone Villages<br />\
    <img src="styles/legend/floodproneVillages_4_0.png" /> 16<br />\
    <img src="styles/legend/floodproneVillages_4_1.png" /> 17<br />\
    <img src="styles/legend/floodproneVillages_4_2.png" /> 18<br />\
    <img src="styles/legend/floodproneVillages_4_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_SatelliteImagery_1.setVisible(true);lyr_Esri_topolayer_2.setVisible(true);lyr_revenueboundary_3.setVisible(true);lyr_floodproneVillages_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SatelliteImagery_1,lyr_Esri_topolayer_2,lyr_revenueboundary_3,lyr_floodproneVillages_4];
lyr_revenueboundary_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Name': 'Name', 'HF': 'HF', 'VHF': 'VHF', 'TF': 'TF', 'Prone': 'Prone', });
lyr_floodproneVillages_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'flood_time': 'flood_time', });
lyr_revenueboundary_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Name': 'TextEdit', 'HF': 'Range', 'VHF': 'Range', 'TF': 'Range', 'Prone': 'TextEdit', });
lyr_floodproneVillages_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'flood_time': 'TextEdit', });
lyr_revenueboundary_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Name': 'inline label', 'HF': 'inline label', 'VHF': 'inline label', 'TF': 'inline label', 'Prone': 'inline label', });
lyr_floodproneVillages_4.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'flood_time': 'inline label', });
lyr_floodproneVillages_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});