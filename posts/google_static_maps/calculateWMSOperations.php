<?php

$lat1 = filter_input(INPUT_POST, 'lat1');
$lon1 = filter_input(INPUT_POST, 'lon1');
/** North Magnetic Pole position as per 2015: https://en.wikipedia.org/wiki/North_Magnetic_Pole */
$resultCalculation1 = computeHaversineDistance($lat1, $lon1, 83.3, 160);
/** South Magnetic Pole position as per 2015: https://en.wikipedia.org/wiki/South_Magnetic_Pole */
$resultCalculation2 = computeHaversineDistance($lat1, $lon1, -64, 139.59);
$resultCalculation = $resultCalculation1 . "," . $resultCalculation2;
echo json_encode($resultCalculation);

/**
 * @param $lat1 : the wanted latitude of the 1st point
 * @param $lon1 : the wanted longitude of the 1st point
 * @param $lat2 : the wanted latitude of the 2nd point
 * @param $lon2 : the wanted longitude of the 2nd point
 * @return number: the great circle distance in km
 *
 * Example page: http://www.movable-type.co.uk/scripts/latlong.html
 */
function computeHaversineDistance($lat1, $lon1, $lat2, $lon2)
{
    $lat1 = deg2rad($lat1);
    $lat2 = deg2rad($lat2);
    $lon1 = deg2rad($lon1);
    $lon2 = deg2rad($lon2);
    $dLon = abs($lon1 - $lon2);
    $dLat = abs($lat1 - $lat2);
    $a = pow(sin($dLat / 2), 2) + cos($lat1) * cos($lat2) * pow(sin($dLon / 2), 2);
    $c = 2 * atan2(sqrt($a), sqrt(1 - $a)); // great circle distance in radians
    $Rk = 6373; // mean radius of the earth (km) at 39 degrees from the equator
    return round($c * $Rk); // rounded great circle distance in km
}