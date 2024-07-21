<?PHP
/*
Write a class LetterCounter and implement a static method CountLettersAsString which receives a string parameter and returns a string that shows how many times each letter shows up in the string using an asterisk (*).
THe return string should include only the letters. There should be no spaces in the output and the letters must be separated by a comma (,) as shown in the example below.
The return string must list the letters in order of their first appearance in the original string. All letters in the return string must be lowercase.

Example:
LetterCounter::CountLettersAsString("INTERVIEW")
// "i:**,n:*,t:*,e:**,r:*,v:*,w:*"

<?php function letterCounterCheck( $string ) {
return LetterCounter::CountLettersAsString($string);
}
// DO NOT MODIFY THE CODE ABOVE

class LetterCounter {
// Write your code here
}
*/

class LetterCounter
{
    // Write your code here
    private static function charCounter($string)
    {
        $charArray = str_split($string);
        $charQueue = [];
        $charCount = [];
        
        $ptr = 0;
        foreach ($charArray as $i) {
            $count = 0;
            if (!in_array($i, $charQueue)) {
                foreach ($charArray as $j) {
                    if ($i === $j) {
                        $count++;
                    }
                }
                $charCount[$ptr]['char'] = $i;
                $charCount[$ptr]['n'] = $count;
                $ptr++;
            }
            array_push($charQueue, $i);
        }

        return $charCount;
    }

    private static function toAsterisk($number)
    {
        $buf = '';
        for ($i = 0; $i < $number; $i++) {
            $buf .= '*';
        }

        return $buf;
    }

    public static function CountLettersAsString($string)
    {
        $charCount = self::charCounter($string);

        $buf = '';
        foreach ($charCount as $arr) {
            $char = strtolower($arr['char']);
            $n = self::toAsterisk($arr['n']);
            $buf .= sprintf('%s:%s,', $char, $n);
        }
        $buf = rtrim($buf, ',');

        return $buf;
    }
}

function letterCounterCheck($string)
{
    return LetterCounter::CountLettersAsString($string);
}

var_dump(letterCounterCheck('INTERVIEW'));
