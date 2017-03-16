<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 12/5/2015
 * Time: 10:45 PM
 */

//TODO return Datasets stock + Important ratios for security analysis per month in order to be added in the graph

//$wantedURL = filter_input(INPUT_POST, 'wantedURL');
$wantedURL = "http://ichart.finance.yahoo.com/table.csv?s=MSFT&d=3&e=23&f=2015&g=m&a=3&b=12&c=1996&ignore=.csv";
file_put_contents("dataset.txt", fopen($wantedURL, 'r'));
//$file = fopen("dataset.txt", "r") or die("Unable to open file!");
//$datasetFileText = fread($file, filesize("dataset.txt"));
///** subCore contains Optional parameters too.. */
//$explodePair = explode(',', $datasetFileText);

$txt_file = file_get_contents("dataset.txt");
$rows = explode("\n", $txt_file);
array_shift($rows);
$jsonArray = array();
foreach ($rows as $row => $data)
{
    //TODO create JSON string in order to send it back to JS
    //get row data
    $row_data = explode(',', $data);

    $info[$row]['Date'] = $row_data[0];
    $info[$row]['Open'] = $row_data[1];
    $info[$row]['High'] = $row_data[2];
    $info[$row]['Low'] = $row_data[3];
    $info[$row]['Close'] = $row_data[4];
    $info[$row]['Volume'] = $row_data[5];
    $info[$row]['Adj Close'] = $row_data[6];
    $tempArray = array($jsonArray, 'Date' => $row_data[0], 'Open' => $row_data[1], 'High' => $row_data[2], 'Low' => $row_data[3],
        'Close' => $row_data[4], 'Volume' => $row_data[5], 'Adj Close' => $row_data[6]);
    array_push($jsonArray, $tempArray);
    //display data
    echo 'Row ' . $row . ' Date: ' . $info[$row]['Date'] . '<br />';
    echo 'Row ' . $row . ' Open: ' . $info[$row]['Open'] . '<br />';
    echo 'Row ' . $row . ' High: ' . $info[$row]['High'] . '<br />';
    echo 'Row ' . $row . ' Low: ' . $info[$row]['Low'] . '<br />';
    echo 'Row ' . $row . ' Close: ' . $info[$row]['Close'] . '<br />';
    echo 'Row ' . $row . ' Volume: ' . $info[$row]['Volume'] . '<br />';
    echo 'Row ' . $row . ' Adj Close: ' . $info[$row]['Adj Close'] . '<br />';
    echo '<br />';
}