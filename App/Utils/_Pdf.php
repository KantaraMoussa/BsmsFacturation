<?php

namespace App\Utils;

use setasign\Fpdi\Tcpdf\Fpdi;
use setasign\Fpdi\PdfReader;

class _Pdf extends Fpdi
{
    protected $tplId;
    protected $pathCertificates;

//Page header
    public function Header()
    {

        $this->pathCertificates = realpath('certificates/').DS;

        if ($this->tplId === null) {
            if($this->CurOrientation == "L"){
                $this->setSourceFile($this->pathCertificates.'templates/letter_head_landscape_no_footer.pdf');
            }else{
            $this->setSourceFile($this->pathCertificates.'templates/letter_head_no_footer.pdf');
            }
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
