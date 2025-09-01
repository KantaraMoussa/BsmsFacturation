<?php

namespace App\Utils;

use App\Config\Constant;
use App\Utils\Helpers;
use App\Utils\_Pdf;
use App\Utils\_Pdf_;
use App\Utils\Pdf_MC;
use TCPDF;

class Certificate
{
    private $pdf;
    protected $title;
    protected $type;
    protected $data;
    protected $titleDescription;
    private $pathCertificates;
    private $html = '';
    private $showRef_ = false;
    private $ref_num;
    private $ref_line_br;
    private $showTitle = true;
    private $autoBreakPage = true;

    private $fontFamilly = 'twcenmt';
    private $letter_head;
    private $fontStyle = 'normal';
    private $fontSize = 11;
    private $titleFontFamilly = 'lucidacalligraphyi';
    private $titleFontStyle;
    private $pathTmp;
    private $titleFontSize = 18;
    private $main_cert_type;

    public function __construct($header_footer = false, $letter_head = true, $orientation = 'P', $main_cert_type = 0)
    {

        $this->pathTmp = realpath('../public/tmp');
        $this->pathTmp = realpath('../public/tmp');
        $this->main_cert_type = $main_cert_type;

        if ($letter_head) {

            $this->pathCertificates = realpath('certificates/') . DS;
            if ($main_cert_type != 0) {
                $this->pdf = new Pdf_MC($main_cert_type);
            } else {
                if ($header_footer) {
                    $this->pdf = new _Pdf_($orientation);
                } else {
                    $this->pdf = new _Pdf($orientation);
                }
            }

            $tagvs = array('p' => array(0 => array('h' => 0, 'n' => 0), 1 => array('h' => 0, 'n' => 0)));
            $this->pdf->setHtmlVSpace($tagvs);
            $this->pdf->setTopMargin(36);
        } else {
            $this->pdf = new TCPDF();
            // remove default header/footer
            $this->pdf->setPrintHeader(false);
            $this->pdf->setPrintFooter(false);
        }

        $this->pdf->AddPage();
    }

    private function init()
    {
        //CSS Loading
        $this->css();
        if ($this->type == Constant::FEES_PRINT) {
            $this->css_fees();
        }
        //End CSS Loading
        $this->html .= '<div class="body">';
        if ($this->showRef_) {
            $this->ref($this->ref_line_br);
        }
        if ($this->type == Constant::FEES_PRINT) {
            $this->fees();
        }
    }



    function fees()
    {

        $this->fees_head();
        $this->fees_info();
        $this->fees_body_table();
        $this->fees_body();
        //$this->fees_footer();
    }
    function fees_head()
    {

        $this->html .= '<table >
                            <tr>
                                <th width="200" align="left">  
                                 <img src="../public/assets/img/logo-bsms/logo-transparent.png">
                                 <h2 style="text-align:center">COMPTE BANCAIRE: ECOBANK  <br/>  N°010 017 7372000736 </h2> 
                                </th>  
                                 <th width="500" align="right">  
                                    <table class="table">
                                       <tr>
                                         <th width="100"><h5 class="bold header4-ffbc34">Facture</h5></th>
                                         <th  width="250"><h5 class="bold header4-cccccc">N°: ' . $this->data['reference_factures'] . '</h5></th>
                                        </tr>
                                        <tr>
                                           <th align="center" colspan="2"><h2 class="definitive">DEFINITIVE</h2></th>
                                        </tr>
                                         <tr>
                                         <th align="left" colspan="2"><p class="datefacture"> Date de facture : ' . $this->data['date_emission_factures'] . '</p></th>
                                        </tr>
                                    </table>
                                </th>  
                            </tr> 

                        </table>';
    }
    function fees_info()
    {

        $this->html .= '<table class="table">
                            <tr>
                            <th width="280" align="left" class="">  
                                    <p class="fs-10 line-height">
                                      <hr/>
                                    République de Guinée<hr/>
                                    Adresse   : Siguiri <hr/>
                                    FD   : N° ' . $this->data['reference_factures'] . ' <hr/>      
                                    Téléphone : (+224) 622397905 / 625333360  <hr/>         
                                    Email : <a href="#" style="text-decoration:none"> bouresupplymining91@gmail.com  </a>  <hr/>
                                    </p>
                                 </th>
                                   <th width="20"></th> 
                                 <th width="240"  align="right">  
                                  <p class="header3 fs-12">INFO CLIENT</p> 
                                     <p style="text-align:left" class="fs-10 line-height editField">
                                      Nom       : ' . $this->data['noms_clients'] . '    <br/>
                                       Adresse   : ' . $this->data['rue_addresses'] . ' , ' . $this->data['ville_addresses'] . '<br/>
                                       Téléphone : ' . $this->data['telephone_clients'] . '     <br/>         
                                       Email :<a href="#" style="text-decoration:none"> ' .     $this->data['email_clients'] . ' </a>  
                                     </p>
                                </th>  
                            </tr> 
                        </table>';
    }
    function fees_body_table()
    {
        // $this->html .= '<div class="table_header">'. $this->infoClient() .' '.$this->infoEntreprise().'</div>';

        $this->html .= '<table class="table_bordered padding" ><thead  class="table_header" ><tr style="background-color:#ffbc34;color:#000000;font-weight:bolder;" class="fs-12" align="center"><th width="30">No</th> <th width="250">Description</th><th width="65">'. $this->data['facturesLigneFacture'][0]['type_pointagefacture_lignes'].'</th><th  width="90">Prix unitaire</th><th width="110">Montant Total</th></tr></thead><br/>';
        $this->html .= '<tbody>';
        if (isset($this->data['facturesLigneFacture'])) {
            foreach ($this->data["facturesLigneFacture"] as $i => $data) {

                $this->html .= "<tr class=\"fs-12\" ><td width=\"30\" align=\"left\">1</td><td width=\"250\" align=\"left\" class=\"line-height\"><p>" . $data['description_facture_lignes'] . " </p></td> <td width=\"65\" align=\"center\">" . $data['SumIndex'] . " </td><td width=\"90\" align=\"center\">" . Helpers::formatMoney($data['prix_unitaire_facture_lignes']) . "</td><td width=\"110\" align=\"center\">" . Helpers::formatMoney($data['montantFacture']) . "</td></tr>";
            }
        } else {
            $this->html .= "<tr class=\"fs-12\" ><td width=\"30\" align=\"left\">1</td><td width=\"250\" align=\"left\" class=\"line-height\"><p>" . $this->data['description_facture_lignes'] . " </p></td> <td width=\"65\" align=\"center\">" . $this->data['SumIndex'] . " </td><td width=\"90\" align=\"center\">" . $this->data['prix_unitaire_facture_lignes'] . "</td><td width=\"110\" align=\"center\">" . Helpers::formatMoney($this->data['montantFacture']) . "</td></tr>";
        }

        $this->html .= '<tr>
        <th colspan="5">
        <table class="table"> 
    
             <tr class="fs-12 b-b"> <th width="100" align="left">TOTAL   : </th><th align="right" width="430">' . Helpers::formatMoney($this->data['montant_total_facture']) . ' </th>   </tr> 
             <tr class="fs-12 b-b"> <th width="100" align="left">TVA ' . $this->data['tva_factures'] . '%   :</th> <th align="right" width="430">' . Helpers::formatMoney($this->data['montant_tva']) . '</th>  </tr> 
              <tr class="fs-14 b-b" style="background-color:#ffbc34;Color:#000000"> <th width="100" align="left">TTC  :</th> <th align="right" width="430"><b>' . Helpers::formatMoney($this->data['montant_ttc_facture']) . '</b></th> </tr> 
        </table>
        </th></tr>
        ';
        $this->html .= '<br/><br/>';
        $this->html .= '</tbody></table>';
    }
    function fees_body()
    {
        // $this->html .= '<div class="table_header">'. $this->infoClient() .' '.$this->infoEntreprise().'</div>';
        $this->html .= '
        <table class="table"> 
             <tr> <th width="200" align="left"> 
             <p class="fs-10" style="text-align:center">   Nous apprécions votre clientèle.
                Si vous-avez des questions sur cette facture,
                n\'hésitez pas à nous contacter.  
                </p>
                   <img src="../public/assets/img/qr/' . $this->data['facture_id'] . '.png" style="width:100px;height:100px">
                
             </th> 
             <th align="right" width="340">
                <h2 style="text-align:right" >MONTANT EN LETTRES</h2>
                <p class="fs-12" style="text-align:right;font-style:italic">' . $this->data['montant_ttc_facture_lignes_en_lettre'] . '</p>
                <h2 class="fs-14"><i> P/Le Directeur Général/PO </i></h2>
                <h2 class="fs-14"><i>Le Procurement & Responsable Logistique </i></h2>
                 <p><img src="../public/assets/img/cachet.png" style="width:100px;height:100px"> </p>
                <h2>Ibrahima CAMARA </h2>
             </th></tr> 
        </table>
   
        ';
    }
    function fees_footer()
    {
        // $this->html .= '<div class="table_header">'. $this->infoClient() .' '.$this->infoEntreprise().'</div>';
        $this->html .= '
 
        <div style="width:100%;margin:0px;padding:px"> 
         <img src="../public/assets/img/' . $this->data['facture_id'] . '.png">
        </div>
   
        ';
    }
    function setInfo()
    {
        $this->pdf->SetCreator('BSMS group');
        $this->pdf->SetAuthor('Creative IT Solution Guinea');
        $this->pdf->SetTitle('Note');
        $this->pdf->SetSubject('Plateforme de facturation et de logistique');
    }
    function generate($fileName, $dest = 'F')
    {

        $this->pdf->SetAutoPageBreak($this->autoBreakPage, PDF_MARGIN_BOTTOM);
        $this->init();
        $this->html .= '</div>';
        $this->pdf->writeHTML($this->html, true, false, true, false, '');
        $this->pdf->Output($fileName, $dest);

        if ($this->ref_num) {
            if (file_exists($this->pathTmp . "/" . $this->ref_num . '.png')) {
                unlink($this->pathTmp . "/" . $this->ref_num . '.png');
            }
        }
    }

    /**
     * @param mixed $title
     * @return Certificate
     */
    function setTitle($title): self
    {
        $this->title = $title;
        return $this;
    }
    /**
     * @param mixed $type
     * @return Certificate
     */
    function setType($type): self
    {
        $this->type = $type;
        return $this;
    }
    /**
     * @param bool $type
     * @return Certificate
     */
    function showRef($showRef, $line_br = 2): self
    {
        $this->showRef_ = $showRef;
        $this->ref_line_br = $line_br;
        return $this;
    }
    /**
     * @param mixed $titleDescription
     * @return Certificate
     */
    function setTitleDescription($titleDescription): self
    {
        $this->titleDescription = $titleDescription;
        return $this;
    }

    function css()
    {
        $this->html = <<<EOF
            <style>
            .body{
                font-size: {$this->fontSize}pt;
                font-family: $this->fontFamilly;
                font-style: $this->fontStyle;
            }

            .bold{
                font-weight: bold;
            }
            .text-center{
                text-align:center
            }
            .no-padding{
                padding:0;
                margin:0;
            }
            .ff-1{
                font-family: twcenmt;
            }
            .ff-b-2{
                font-family: helvetica;
                font-weight: bold;
            }
            .ff-2{
                font-family: helvetica;
            }

            .ff-times{
                font-family: times;
            }
            .ff-courier{
                font-family: courier;
            }
            .line-height{
               line-height: 1.6;
            }

            .header {
                        font-size: $this->titleFontSize.'pt';
                        font-family: $this->titleFontFamilly;
                        text-align: center;
                        font-weight: bold;
                    }

                    .header2 {
                        font-size: 14pt;
                        text-align: center;
                        font-weight: bold;
                        padding-top:20px;
                        font-family: $this->titleFontFamilly;
                    }

                    .header3 {
                        font-size: 12pt;
                        text-align: left;
                        font-weight: bold;
                        font-family: helvetica;
                        background-color: #ffbc34;
                        color:#FFFFFF;
                       
                    }
                    .header4-ffbc34 {
                        font-size: 14pt;
                        text-align: center;
                        font-weight: bold;
                        font-family: helvetica;
                         background-color: #ffbc34;
                    }
                         .header4-cccccc {
                        font-size: 12pt;
                        text-align: center;
                        font-weight: bold;
                        font-family: helvetica;
                         background-color: #cccccc;
                    }
                    .definitive {
                        font-size: 14pt;
                        text-align: center;
                        font-weight: bold;
                        font-family: helvetica;
                       border-bottom:1px solid #ccc;
                       margin-top:0px;
                       margin-bottom:0px;
                    }
                       .datefacture {
                        font-size: 15pt;
                        text-align: right;
                        font-weight: bold;
                        font-family: helvetica;
                    }

                    .gray-border {
                        border: 1px solid gray;
                    }

                    .fs-italic {
                        font-style: italic;
                    }
                    .fs-5 {
                        font-size: 5pt;
                    }
                    .fs-6 {
                        font-size: 6pt;
                    }
                    .fs-7 {
                        font-size: 7pt;
                    }
                    .fs-8 {
                        font-size: 8pt;
                    }
                    .fs-9 {
                        font-size: 9pt;
                    }
                    .fs-10 {
                        font-size: 10pt;
                    }
                    .fs-12 {
                        font-size: 12pt;
                    }
                    .fs-14 {
                        font-size: 14pt;
                    }
                    .fs-15 {
                        font-size: 15pt;
                    }
                    .fs-16 {
                        font-size: 16pt;
                    }
                    .fs-18 {
                        font-size: 18pt;
                    }
                    .fs-20 {
                        font-size: 20pt;
                    }

                    table.padding {
                        padding-top:3px;
                        padding-bottom:3px;
                        padding-left:7px;
                        padding-right:7px;
                    }
                    .text-right{
                        text-align:right;
                    }
                    .underline {
                        text-decoration: underline;
                    }
                    .no-bg {
                        background-color: #FFF;
                    }
                    .lowercase {
                        text-transform: lowercase;
                    }
                    .uppercase {
                        text-transform: uppercase;
                    }
                    .capitalize {
                        text-transform: capitalize;
                    }

                    .editField{
                        border-bottom: 1px solid #ccc;
                        border-right: 1px solid #ccc;
                        border-left: 1px solid #ccc;
                    }
                        .b-b{
                        border-bottom: 1px solid #000;
                      
                    }

                    .matricule th{
                        font-weight:bold;
                        width:29px
                    }
                    .matricule2 th{
                        font-weight:bold;
                        width:15px
                    }
                    .align-right{

                    }
                    table.table_bordered,table.table_bordered th, table.table_bordered td {
                        border: 1px solid #ccc;
                    }

                    table.table{
                        padding-top:3px;
                        padding-bottom:3px;
                        padding-left:7px;
                        padding-right:7px;
                    }

                    table.table th{
                        font-weight:bold;
                    }


                    table.table_header {
                        font-size: 10pt;
                        padding-top:3px;
                        padding-bottom:3px;
                        padding-left:7px;
                        padding-right:7px;
                        border: 1px solid gray;
            }

            </style>

        EOF;
    }
    /**
     * @param bool $autoBreakPage
     * @return Certificate
     */
    function setAutoBreakPage(bool $autoBreakPage): self
    {
        $this->autoBreakPage = $autoBreakPage;
        return $this;
    }
    /**
     * @param mixed $font
     * @return Certificate
     */
    function setFont($familly = 'twcenmt', $size = 12, $style = 'normal'): self
    {
        $this->fontFamilly = $familly;
        $this->fontStyle = $style;
        $this->fontSize = $size;
        return $this;
    }
    /**
     * @param mixed $titleFont
     * @return Certificate
     */
    function setTitleFont($familly = 'lucidacalligraphyi', $size = 18, $style = 'bold'): self
    {
        $this->titleFontFamilly = $familly;
        $this->titleFontSize = $size;
        $this->titleFontStyle = $style;
        return $this;
    }

    /**
     * @param mixed $data
     * @return Certificate
     */
    function setData($data): self
    {
        $this->data = $data;
        return $this;
    }
    /**
     * @return mixed
     */
    function getShowTitle()
    {
        return $this->showTitle;
    }

    /**
     * @param mixed $showTitle
     * @return Certificate
     */
    function setShowTitle($showTitle): self
    {
        $this->showTitle = $showTitle;
        return $this;
    }

    /**
     * @param mixed $ref_num
     * @return self
     */
    function setnum_ref_request($ref_num): self
    {
        $this->ref_num = $ref_num;
        return $this;
    }
    function css_fees()
    {
        $this->html .= <<<EOF
            <style>

            .marks_sem_title {
                font-size: 10pt;
                padding:30px;
            }
            .vl{
                font-size: 5pt;
            }
            table.table_marks {
                font-size: 9pt;
                border: 1px solid gray;
            }

            table.table_marks td {
                line-height:50%;
                border: 1px solid black;
                text-align: center;
            }
            table.table_marks th {
                vertical-align: middle;
                text-align: center;
                border: 1px solid black;
            }

      
            table.table_appreciation_ {
                        font-size: 10pt;
                        padding-top:3px;
                        padding-bottom:3px;
                        padding-left:7px;
                        padding-right:7px;
            }
            table.table_signatories {
                        padding-top:15px;
                        padding-bottom:3px;
                        padding-left:7px;
                        padding-right:7px;
            }
            </style>

        EOF;
    }
}
