<?php
  abstract class AbstractCipher
  {
      protected $record, $matrix;
      
      protected function __construct($record, $matrix)
      {
          $this->record = $record;
          $this->matrix = $matrix;
      }
  }

  class Cipher extends AbstractCipher
  {
      public function __construct($record, $matrix)
      {
          parent::__construct($record, $matrix);
      }

      public function __toString()
      {
          $numbEncode = '';          
          $numbArray = str_split($this->record);
          
          foreach ($numbArray as $n) {
              $numbEncode .= $this->matrix[$n];
          }

          return $numbEncode;
      }
  }

  $data = '2348169960927:a:b:c:d:e:f:g:h:i:j';
  $dataArray = explode(':', $data);

  $cipher = new Cipher(array_shift($dataArray), $dataArray);
  $result[(string) $cipher] = $cipher;

  var_dump($result);
?>