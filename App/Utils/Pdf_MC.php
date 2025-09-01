<?php

namespace App\Utils;

use setasign\Fpdi\PdfReader;
use setasign\Fpdi\Tcpdf\Fpdi;

class Pdf_MC extends Fpdi
{
    protected $tplId;
    protected $pathCertificates;
    protected $type;

    public function __construct($type = "C1")
    {
        $this->type = $type;
        parent::__construct("L");
    }

//Page header
    public function Header()
    {

        $this->pathCertificates = realpath('certificates/') . DS;

        // var_dump('$this->CurOrientation');
        //var_dump($this->type);

        if ($this->tplId === null) {
            $this->setSourceFile($this->pathCertificates . "templates/main_cert/mc_$this->type.pdf");
            $this->tplId = $this->importPage(1, PdfReader\PageBoundaries::MEDIA_BOX);
        }
        $this->useImportedPage($this->tplId);
    }

// Page footer
    public function Footer()
    {
        // Position at 15 mm from bottom
        $this->SetY(-15);
        // Set font
        $this->SetFont('helvetica', 'I', 8);
        // Page number
        $this->Cell(0, 10, 'Page ' . $this->getAliasNumPage() . '/' . $this->getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
    }

}
