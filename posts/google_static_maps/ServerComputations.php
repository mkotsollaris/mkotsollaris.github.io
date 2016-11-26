<?php
/* set some options */
//echo "<script type='text/javascript'>alert('rofl');</script>";
$mapLat = filter_input(INPUT_POST, 'lat1'); // latitude for map's and circle's center
$mapLng = filter_input(INPUT_POST, 'lon1'); // longitude for map's and circle's center
$mapRadius1 = 0.5; // the radius of the first circle (in Kilometres)
$mapRadius2 = 5; // the radius of the second circle (in Kilometres)
$mapFill_first = '330000'; // fill colour of the first circle
$mapFill_second = 'FF99FF'; // fill colour of the second circle
$map1Border1 = '91A93A'; // border colour of the first circle
$map1Border2 = '0000CC'; // border colour of the second circle
$mapWidth = 450; // map image width (max 640px)
$mapHeight = 450; // map image height (max 640px)
$zoom = 11;
$scale = 1;
/** create our encoded polyline string for the first circle*/
$EncString1 = GMapCircle($mapLat, $mapLng, $mapRadius1);
/** create our encoded polyline string for the second circle*/
$EncString2 = GMapCircle($mapLat, $mapLng, $mapRadius2);
/** put together the static map URL */
$MapAPI = 'http://maps.google.com.au/maps/api/staticmap?';
$MapURL = $MapAPI . 'center=' . $mapLat . ',' . $mapLng . '&zoom=' . $zoom . '&size=' .
    $mapWidth . 'x' . $mapHeight . '&scale=' . $scale . '&markers=color:red%7Clabel:S%7C'.$mapLat.','.$mapLng .
    '&maptype=roadmap&path=fillcolor:0x' . $mapFill_first .
    '33%7Ccolor:0x' . $map1Border1 . '00%7Cenc:' . $EncString1 . '&path=fillcolor:0x' .
    $mapFill_second . '33%7Ccolor:0x' . $map1Border2 . '00%7Cenc:' . $EncString2;

/* output an image tag with our map as the source */
//echo '<img src="' . $MapURL . '" />';
echo json_encode($MapURL);

/** Used to generate a pseudo-circle since Google Static Maps don't offer any
 * build-in function for circle representation*/
function GMapCircle($Lat, $Lng, $Rad, $Detail = 8)
{
    $R = 6371;
    $pi = pi();
    $Lat = ($Lat * $pi) / 180;
    $Lng = ($Lng * $pi) / 180;
    $d = $Rad / $R;
    $points = array();
    for ($i = 0; $i <= 360; $i += $Detail)
    {
        $brng = $i * $pi / 180;
        $pLat = asin(sin($Lat) * cos($d) + cos($Lat) * sin($d) * cos($brng));
        $pLng = (($Lng + atan2(sin($brng) * sin($d) * cos($Lat), cos($d) - sin($Lat) * sin($pLat))) * 180) / $pi;
        $pLat = ($pLat * 180) / $pi;
        $points[] = array($pLat, $pLng);
    }

    require_once('PolylineEncoder.php');
    $PolyEnc = new PolylineEncoder($points);
    $EncString = $PolyEnc->dpEncode();

    return $EncString['Points'];
}