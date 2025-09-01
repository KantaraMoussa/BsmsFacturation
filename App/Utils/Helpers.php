<?php

namespace App\Utils;

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevelHigh;
use Endroid\QrCode\RoundBlockSizeMode\RoundBlockSizeModeMargin;
use Endroid\QrCode\Writer\PngWriter;
use App\Services\AppServices;
use Exception;
use NumberFormatter;

class Helpers
{

    public static function roleUser(): array
    {
        return array('administrateur', 'employé', 'client');
    }


    /*
     *
    */

    public static function notificationType(): array
    {

        return array('Confirmation de rendez vous', 'Rappel de rendez vous', 'Annulation de rendez vous');
    }

    public static function sendSms($dest, $msg)
    {
        $loop = \React\EventLoop\Loop::get();
        new \React\Promise\Promise(function ($resolve) use ($loop, $dest, $msg) {
            $loop->futureTick(function () use ($resolve, $dest, $msg) {
                $sms = new Sms();
                $resolve($sms->send($dest, $msg));
            });
        });
        $loop->run();
    }

    public static function refFacture($data): string
    {

        $orderNunber = intval(explode('/', $data['reference_facture_lignes'])[0] + 1);
        if ($orderNunber < 10) {
            $orderNunber = '00' . $orderNunber;
        } else if ($orderNunber >= 10 && $orderNunber < 100) {
            $orderNunber = '0' . $orderNunber;
        }
        return ($orderNunber . '/BSM/' . date('y'));
    }

    public static function information(): array
    {

        return array(
            'name' => '   <span class="text-warning">BOURSE SUPPLY</span>   <span class="text-dark">MINING SARLU</span>',
            'email' => 'bouresupplymining91@gmail.com',
            'telephone' => '(+224) 622397905/625333360',
            'ville' => 'Siguiri',
            'BP' => '10 BP ',
            'numerodeCompte' => 'N° Compte ECOBANK 010 017 7372000736 ',
        );
    }
    public static function ChiffreEnLettre($number)
    {
        if (!class_exists('NumberFormatter')) {
            die("L'extension intl n'est pas activée !");
        }
        $formatter = new NumberFormatter('fr', NumberFormatter::SPELLOUT);
        return  $formatter->format($number);
    }


    public static function numberPrecision($number, $precision = 2)
    {
        $number = (float) str_replace(',', '.', $number);
        return substr(number_format($number, $precision + 1, '.', ''), 0, -1);
    }
    public static function charAt($str, $pos)
    {
        return $str[$pos];
    }

    public static function formatMoney($number)
    {
        return '<span class="fw-bolder text-black">' . number_format($number) . ' GNF </span>';
    }

    public static function getAcronym($text, $minLength = 3): string
    {
        $text = explode(' ', trim($text));
        $accr = '';
        foreach ($text as $txt) {
            if (strlen($txt) <= $minLength) {
                continue;
            }
            $accr .= self::charAt($txt, 0);
        }
        if ($accr == 'é' || $accr == 'è' || $accr == 'ê' || $accr == 'ë' || $accr == 'ē' || $accr == 'ė' || $accr == 'ę') {
            $accr = 'e';
        } else if ($accr == 'à' || $accr == 'á' || $accr == 'â' || $accr == 'ä' || $accr == 'æ' || $accr == 'ã' || $accr == 'å' | $accr == 'ā') {
            $accr = 'a';
        }
        return strtoupper($accr);
    }
    public static function layoutState()
    {
        $appService = new AppServices();
        return $appService->getState();
    }
    public static function qr_code($data, $fileName)
    {
        if (is_file($fileName)) {
            return false;
        }

        $result = Builder::create()
            ->writer(new PngWriter())
            ->writerOptions([])
            ->data($data)
            ->encoding(new Encoding('UTF-8'))
            ->errorCorrectionLevel(new ErrorCorrectionLevelHigh())
            ->size(200)
            ->margin(5)
            ->roundBlockSizeMode(new RoundBlockSizeModeMargin())
            ->logoPath('../public/assets/img/logo-bsms/favicon.png')
            ->logoResizeToHeight(70)
            //->labelText('Télecharger UGLCS Verif sur Playstore')
            //->labelFont(new NotoSans(10))
            // ->labelAlignment(new LabelAlignmentCenter())
            ->validateResult(false)
            ->build();

        $result->saveToFile($fileName);
        return true;

        // UtilsHelpers::qr_code('https://scolarite-uglcs.com/verif/' . $student['matricule_students'] . '/student', "../public/images/qr/{$student['id_students']}.png");
    }
}
