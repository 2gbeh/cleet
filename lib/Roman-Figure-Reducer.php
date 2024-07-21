<?php
// 'LLLXXXVVVV' => 200 => CC => C6Cwxurtg5c0
// 'XXXVVIIIIIIIIII' => 50 => L => L6pwxurtg5c0
// 'DDLL' => 1100 => MC => M6Cpwxurtg5c0

function display($arr, $sum, $ans)
{
  foreach ($arr as $key_1 => $val_1) {
    if ($sum >= $val_1) {
      $sum -= $val_1; // 100
      display($arr, $sum, $ans);
      $ans = $key_1;
    }
  }

  return $ans;

  // if ($number <= 5) {
  //   echo "$number <br/>";
  //   display($number + 1);
  // }
}

function getAlpha($arr, $sum)
{
  $ans = '';
  if (in_array($sum, array_values($arr))) {
    $ans = array_search($sum, $arr); // L
    return $ans;
  } else {
    arsort($arr);
    $ans .= display($arr, $sum, $ans); // C

    return $ans;
  }
}

function main($str = 'LLLXXXVVVV')
{
  $token = '6pwxurtg5c0';
  $arr = [
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000,
  ];

  $sum = 0;
  foreach (str_split($str) as $e) {
    $sum += $arr[$e]; // 50
  }

  // return getAlpha($arr, $sum);
}

var_dump(main('LLLXXXVVVV'), main('XXXVVIIIIIIIIII'), main('DDLL'));
