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
        if ($this->type == Constant::CERT_MARKSHEETFULL) {
            $this->css_marks();
        } else if ($this->type == Constant::CERT_MARK) {
            $this->css_marks();
        } else if ($this->type == Constant::USER_RESET_FORM) {
            $this->css_userResetForm();
        } else if ($this->type == Constant::CERT_REGISTRATION) {
        } else if ($this->type == Constant::CERT_ARCHIEVEMENT) {
        } else if ($this->type == Constant::CERT_SELECTION_AND_ORIENTATION) {
        } else if ($this->type == Constant::CERT_LEVEL) {
            $this->css_marks();
        } else if ($this->type == Constant::REGISTRATION_BILL) {
            $this->css_bill();
        } else if ($this->type == Constant::LIST_ANNUAL_RESULT) {
            $this->css_annual_result();
        } else if (
            $this->type == Constant::LIST_RAPPORT_ANNUAL_RESULT || $this->type == Constant::LIST_RAPPORT_SEMESTER_RESULT || $this->type == Constant::LIST_RAPPORT_ANNUAL_ADMITTED_RESULT || $this->type == Constant::LIST_RAPPORT_SEMESTER_ADMITTED_RESULT
            || $this->type == Constant::LIST_RAPPORT_SEMESTER_FAILLED_SCHEDULLED_RESULT
        ) {
            $this->css_annual_result();
        } else if ($this->type == Constant::ID_CARD) {
            $this->css_id_card();
        }
        //End CSS Loading

        $this->html .= '<div class="body">';
        if ($this->showRef_) {
            $this->ref($this->ref_line_br);
        }

        /*if ($this->letter_head) {
        if ($this->showTitle) {
        $this->html .= '<span class="header">' . $this->title . '</span>';
        }
        }*/

        if ($this->type == Constant::CERT_MARK) {
            $this->marks();
        } else if ($this->type == Constant::CERT_REGISTRATION) {
            $this->regitration();
        } else if ($this->type == Constant::CERT_ARCHIEVEMENT) {
            $this->archievement();
        } else if ($this->type == Constant::CERT_SELECTION_AND_ORIENTATION) {
            $this->selectionAndOrientation();
        } else if ($this->type == Constant::CERT_LEVEL) {
            $this->level();
        } else if ($this->type == Constant::CERT_SCOLARITY) {
            $this->scolarity();
        } else if ($this->type == Constant::REGISTRATION_FORM) {
            $this->registrationForm();
        } else if ($this->type == Constant::USER_RESET_FORM) {
            $this->userResetForm();
        } else if ($this->type == Constant::REGISTRATION_BILL) {
            $this->reg_billing();
        } else if ($this->type == Constant::LIST_COURSES) {
            $this->listCourses(false);
        } else if ($this->type == Constant::LIST_COURSES_LABELED) {
            $this->listCourses(true);
        } else if ($this->type == Constant::MARK_SHEET_COURSE) {
            $this->markCourse();
        } else if ($this->type == Constant::STUDENTS_LIST) {
            $this->studentsList();
        } else if ($this->type == Constant::TEACHERS_LIST) {
            $this->teachersList();
        } else if ($this->type == Constant::TEACHERS_LIST_LABELED) {
            $this->teachersList(true);
        } else if ($this->type == Constant::CERT_END_OF_CYCLE) {
            $this->endOfCycle();
        } else if ($this->type == Constant::ID_CARD) {
            $this->idCard();
        } else if ($this->type == Constant::LIST_ANNUAL_RESULT) {
            $this->annualResult();
        } else if ($this->type == Constant::LIST_RAPPORT_ANNUAL_RESULT) {
            $this->repportAnnualResult();
        } else if ($this->type == Constant::LIST_RAPPORT_ANNUAL_ADMITTED_RESULT) {
            $this->repportAdmittedAnnualResult();
        } else if ($this->type == Constant::LIST_RAPPORT_SEMESTER_ADMITTED_RESULT) {
            $this->repportAdmittedSemesterResult();
        } else if ($this->type == Constant::LIST_RAPPORT_SEMESTER_RESULT) {
            $this->repportSemesterResult();
        } else if ($this->type == Constant::LIST_RAPPORT_ANNUAL_FAILLED_SCHEDULLED_RESULT) {
            $this->repportFailledAnnualSchedulledResult();
        } else if ($this->type == Constant::LIST_RAPPORT_SEMESTER_FAILLED_SCHEDULLED_RESULT) {
            $this->repportFailledSemesterSchedulledResult();
        } else if ($this->type == Constant::CERT_MAIN) {
            $this->mainCertificate();
        } else if ($this->type == Constant::LIST_VALIDATE_LICENCE) {
            $this->repportValidateLicence();
        } else if ($this->type == Constant::CERT_MARKSHEETFULL) {
            $this->repportMarhsheetFull();
        }
    }
    private function userResetForm()
    {
        $this->html .= '<p></p>';
        $this->html .= '<p></p>';
        $this->html .= '<table class=""><tr><th width="260" align="right" style="background-color:DodgerBlue;color:#FFF">';

        $this->html .= '<table class="table padding">
        <tr><th align="left"><h2 class="bold fs-20 ff-times">CREATIVE</h2></th></tr>
        <tr><th align="left"><h2 class="bold fs-20 ff-times">IT</h2></th></tr>
        <tr><th align="left"><h2 class="bold fs-20 ff-times">SOLUTION</h2></th></tr>
        <tr><th align="left" class="ff-times"><h4>DELIVERING DIGITAL SUCCESS</h4></th></tr>
        </table>';
        $this->html .= '<p></p>';
        $this->html .= '<table class="table padding"><tr><th align="left"><h1 class="ff-times">AGIES - ENT </h1></th></tr></table>';
        $this->html .= '<p></p>';
        $this->html .= '<table class="table padding"><tr><th align="left"><h3 class="ff-times">AUTHENTIFICATION </h3></th></tr></table>';
        $this->html .= '<p></p>';
        $this->html .= '<table class="table padding"><tr><th align="left"><p class="bold ff-times">Support :  +224 623 90 25 28</p></th></tr></table>';
        $this->html .= '</th>';
        $this->html .= '<th width="300" align="right">';

        $this->html .= '<p></p>';
        $this->html .= '<h3 class="bold fs-14 text-center ff-times">LOGIN : ' . $this->data['username_users'] . ' </h3>';
        $this->html .= '<p></p>';
        $this->html .= '<p></p>';
        $this->html .= '<h3 class="bold fs-14 text-center ff-times">MOT DE PASS : ' . $this->data['pwd_users'] . '</h3>';
        $this->html .= '<p></p>';
        $this->html .= '<p></p>';
        $this->html .= '<table class="table padding">
                         <tr><th align="left"><img src="../public/images/branding.png"></th>
                          <th align="right"><img src="../public/images/logo-retina.png"></th></tr>
                       </table>';
        $this->html .= '</th></tr>';

        $this->html .= '</table>';
    }

    private function ref($line)
    {
        if ($this->ref_num) {
            $this->html .= '<table><tr><th width="290" align="left">No Réf. ' . $this->ref_num . '/SCOLARITE/UGLCS-SC</th><th width="250" align="right">Conakry, le ' . date('d-m-Y') . '</th></tr></table>' . str_repeat('<br/>', $line);
        } else {
            $this->html .= '<table><tr><th width="120" align="left">No Réf. ' . date('Y') . '/</th><th>/SCOLARITE/UGLCS-SC</th><th width="250" align="right">Conakry, le ' . date('d-m-Y') . '</th></tr></table>' . str_repeat('<br/>', $line);
        }
    }

    private function studentsList()
    {

        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Departement :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['department']) . '</th></tr></table>';
        if ($this->data['programm']) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Programme :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['programm']) . '</th></tr></table>';
        }

        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Niveau :</th><th  width="445" align="left">' . ucfirst($this->data['level']) . '</th></tr></table>';
        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Session :</th><th  width="445" align="left">' . $this->data['session'] . '</th></tr></table>';

        $this->html .= '<br/><br/><br/><table class="table table_bordered"><tr><th width="51" align="left">N<sup>o</sup></th><th width="92" align="center">Matricule</th><th width="324" align="center">Nom & Prénom</th><th width="73" align="center">Sexe</th></tr>';

        foreach ($this->data['data'] as $i => $data) {
            $this->html .= "<tr><td>" . ($i + 1) . "</td><td align=\"center\">{$data['matricule_students']}</td><td>{$data['lname_students']} {$data['fname_students']}</td><td align=\"center\">" . ucfirst($data['sex_students']) . "</td></tr>";
        }

        $this->html .= '</table>';
    }

    private function qrPhotoHead()
    {

        $photo = '../public/images/photos/' . $this->data['matricule_students'] . '.jpg';
        if (!is_file($photo)) {
            $photo = '../public/images/avatar/avatar.png';
        }

        if ($this->ref_num) {
            Helpers::qr_code('https://scolarite-uglcs.com/verif/' . $this->ref_num . '/document', $this->pathTmp . "/" . $this->ref_num . '.png');
            $qrPath = $this->pathTmp . "/" . $this->ref_num . '.png';
        } else {
            $qrPath = '../public/images/qr/' . $this->data['id_students'] . '.png';
        }

        $this->html .= '<table><tr><th width="65"><img src="' . $qrPath . '" /></th>';
        $this->html .= '<td width="425">';
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '</td>';
        $this->html .= '<th width="50"><img src="' . $photo . '" /></th>';
        $this->html .= '</tr></table>';
    }

    private function idCard()
    {

        if ($this->data['current_level_students'] == 'licence_1') {
            $validCard = 3;
        } else if ($this->data['current_level_students'] == 'licence_2') {
            $validCard = 2;
        } else {
            $validCard = 1;
        }

        $y = explode('/', $this->data['date_born_students']);
        $date_born = count($y) > 1 ? $y[2] : $y[0];
        $this->pdf->Image("../public/images/icons/pattern.png", 10, 10, 81, 53, '', '', '', false, 300, '', false, false, 0);
        $this->pdf->Image("../public/images/icons/pattern.png", 91, 10, 81, 53, '', '', '', false, 300, '', false, false, 0);
        $this->html .= '<table class="boxcard"><tr>';

        $this->html .= '<td class="face"><table><tr><td style="width:38px"><img src="../public/images/logo-retina.png" /></td><td style="width:155px" class="text-center bold fs-7">Republique de Guinée<div class="fs-5"><span style="color:red">Travail</span>-<span style="color:yellow">Justice</span>-<span style="color:green">Solidarité</span></div><div class="fs-6" style="line-height:5px;">M.E.S.R.S</div><div style="color:#3306d6" class="fs-8">UNIVERSITE GENERAL LANSANA CONTE DE SONFONIA (UGLCS)</div><div style="line-height:9px;" class="ff-times bold fs-12">CARTE D\'ETUDIANT<br/></div><div class="ff-courier bold fs-8">' . Helpers::ucwords($this->data['name_faculties']) . '<br/><br/></div></td><td style="width:50px;"><br/><br/><br/><img src="../public/images/photos/' . $this->data['matricule_students'] . '.jpg" /></td></tr>';
        $this->html .= '<tr><td><table class="fs-8 bold" cellspacing="5"><tr><th class="noborder" width="62" align="left">MATRICULE </th><th width="165"><table class="matricule2"><tr>';

        foreach (Helpers::split_matricule($this->data['matricule_students']) as $n) {
            $this->html .= '<th  width="12.6" class="editField-2" align="center">' . $n . '</th>';
        }
        $this->html .= '</tr></table></th></tr>';

        $this->html .= '<tr><th class="noborder fs-8" width="62" align="left">DEPARTEMENT </th><th width="165" class="editField-2" align="center">' . Helpers::ucwords($this->data['name_departments']) . '</th></tr><tr><th class="noborder" width="62" align="left">PROGRAMME </th><th width="165" class="editField-2" align="center">' . Helpers::ucwords($this->data['name_programmes']) . '</th></tr></table></td></tr>';
        $this->html .= '</table></td>';

        $this->html .= '<td class="face"><table class="fs-6" cellspacing="5">';
        $this->html .= '<tr><th class="noborder bold fs-8" width="54" align="left">Nom </th><th width="178" class="editField-2" align="center">' . $this->data['lname_students'] . '</th></tr>';
        $this->html .= '<tr><th class="noborder bold fs-8" width="54" align="left">Prénom </th><th width="178" class="editField-2" align="center">' . $this->data['fname_students'] . '</th></tr>';
        $this->html .= '<tr><th class="noborder bold fs-8" width="54" align="left">Né(e) en </th><th width="25" class="editField-2" align="center">' . $date_born . '</th><th class="noborder fs-7" width="4" align="left">à </th><th width="139" class="editField-2" align="center">' . $this->data['place_birth_students'] . '</th></tr>';
        $this->html .= '<tr><th class="noborder bold fs-8" width="54" align="left">Père </th><th width="178" class="editField-2" align="center">' . $this->data['father_students'] . '</th></tr>';
        $this->html .= '<tr><th class="noborder bold fs-8" width="54" align="left">Mère </th><th width="178" class="editField-2" align="center">' . $this->data['mother_students'] . '</th></tr>';
        $this->html .= '<tr><th class="noborder bold fs-8" width="67" align="left">Adresse Tuteur </th><th width="165" class="editField-2" align="center">' . $this->data['address_tutors_students'] . '</th></tr>';
        $this->html .= '<tr><th class="noborder bold fs-8" width="54" align="left">Tél </th><th width="178" class="editField-2" align="center">' . $this->data['phone_tutors_students'] . '</th></tr>';
        $this->html .= '<tr><th width="60"><br/><br/><br/><br/><span class="fs-10">Validité</span><br/><span class="fs-8">' . date("Y") . '-' . ((date("Y") + $validCard)) . '</span></th><th width="70"><br/><br/><img style="width:40px" src="../public/images/qr/' . $this->data['id_students'] . '.png" /></th><th width="100" class="fs-8"><br/><span>Chef service Scolarité</span><div style="text-align:center"><img width="45" src="../public/signatures/chef_scolarite_cachet_signature.png" /></div> </th></tr>';
        $this->html .= '</table></td></tr>';
        $this->html .= '</table>';
        $this->html .= '';
    }

    private function annualResult()
    {

        // var_dump($this->data);
        $colsize = 280 / (count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<p></p>';
        $this->html .= '<div class="header3">Departement: ' . $this->data['details']['programm'] . '</div>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '<br/><br/><table class="bold" align="center"><tr><th>' . $this->data['details']['sem1Text'] . '</th><th>' . $this->data['details']['sem2Text'] . '</th></tr></table>';
        $this->html .= '<br/><table cellpadding="2"><tr>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td></tr></table>';

        $this->html .= '<hr/><table>
        <tr><th>MG: Moyenne Génerale</th><th>MC: Moyenne Cumulative</th><th width="240">NL: Notation Littéral correspondant à la moyenne cumulative</th><th>C1 à c10: Les cours des 2 semestres</th></tr>
        </table>';

        $this->html .= '<br/><br/><br/><table class="annual_result">
        <tr class="annual_header"><th width="30">N<sup>o</sup></th><th width="80">Matricule</th><th align="left" width="80">Nom</th><th align="left" width="165">Prénom</th>';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        $this->html .= '<th width="28">MG</th><th width="28">MC</th><th width="28">NL</th><th width="70">Mention</th></tr>';

        foreach ($this->data['marksheets'] as $k => $m) {
            $this->html .= '<tr class="annual_data"><th>' . ($k + 1) . '</th><th>' . $m['matricule'] . '</th><th align="left">' . $m['lname'] . '</th><th align="left">' . $m['fname'] . '</th>';
            foreach ($m['marks'] as $ms) {
                $this->html .= '<th>' .  Helpers::markSheetDecrypt(($ms['average'])) . '</th>';
            }
            $this->html .= '<th>' .  Helpers::markSheetDecrypt(($m['average'])). '</th><th>' . $m['mc'] . '</th><th>' . $m['nl']['letter'] . '</th><th>' . $m['nl']['obs'] . '</th></tr>';
        }

        $this->html .= '</table>';
        $this->html .= '<div class="fs-12">';
        $this->signatoriesResult($this->data['details']['nameDoyenFaculte']);
        $this->html .= '</div>';
    }
    private function repportAnnualResult()
    {

        // var_dump(count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $colsize = 280 / (count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<p></p>';
        $this->html .= '<div class="header3">Département : ' . $this->data['details']['department'] . '</div>';
        $this->html .= '<div class="header2">Programme : ' . $this->data['details']['programm'] . '</div>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '<br/><br/><table class="bold" align="center"><tr><th>' . $this->data['details']['sem1Text'] . '</th><th>' . $this->data['details']['sem2Text'] . '</th></tr></table>';
        $this->html .= '<br/><table cellpadding="2"><tr>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td></tr></table>';

        $this->html .= '<hr/><table>
        <tr><th>MC: Moyenne Cumulative</th><th width="240">NL: Notation Littéral correspondant à la moyenne cumulative</th><th>C1 à c10: Les cours des 2 semestres</th></tr>
        </table>';

        $this->html .= '<br/><br/><br/><table class="annual_result">
        <tr class="annual_header"><th width="30">N<sup>o</sup></th><th width="80">Matricule</th><th align="left" width="80">Nom</th><th align="left" width="165">Prénom</th>';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        $this->html .= '<th width="28">MC</th><th width="28">NL</th><th width="70">Mention</th></tr>';

        foreach ($this->data['marksheets'] as $k => $m) {
            $this->html .= '<tr class="annual_data"><th>' . ($k + 1) . '</th><th>' . $m['matricule'] . '</th><th align="left">' . $m['lname'] . '</th><th align="left">' . $m['fname'] . '</th>';
            foreach ($m['marks'] as $ms) {
                $this->html .= '<th>' .  Helpers::markSheetDecrypt($ms['average']) . '</th>';
            }
            $this->html .= '<th>' . Helpers::numberPrecision($m['mc']) . '</th><th>' . $m['nl']['letter'] . '</th><th>' . $m['nl']['obs'] . '</th></tr>';
        }

        $this->html .= '</table>';

        $this->html .= '<div class="fs-12">';
        $this->signatoriesResult($this->data['details']['nameDoyenFaculte']);
        $this->html .= '</div>';
    }/*

    private function mainCertificate()
    {
        $style="font-style:italic;font-family:times new roman;font-weight:bolder;font-size:16pt;text-align:center";
        $this->html .= '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>';
        $this->html .= '<table><tr>';
        $this->html .= '<td style="width:12%"></td>';
        $this->html .= '<td style="width:82%;font-size:15pt">';
        $this->html .= '<div class="text-center" style="'.$style.'">N° BT/L/DAP/XXX/153 du 09/12/2010 </div>';
        $this->html .= '<p style="font-style:italic;border-bottom: 1px dashed #000" >-Vu l’Arrêté N°2005/104/MESRS/CAB, du 26 janvier 2005, portant création de l’Université des Sciences Humaines, Juridiques et Economiques de Sonfonia-Conakry.</p>';
        $this->html .= '<p style="font-style:italic">-Vu l’Arrêté N° 2007/3475/MESRS/CAB du 11 Octobre 2007, portant réglementation des études de premier cycle de l’Enseignement Supérieur en République de Guinée.</p>';
        $this->html .= '<p><table><tr><td><p  style="border-bottom: 1px dashed #000" >Mme/M. :</p></td> <td colspan="5" style="'.$style.'"><p  style="border-bottom: 1px dashed #000" > CHERIF MOHAMED </p></td></tr>';
        $this->html .= '<tr ><td><p  style="border-bottom: 1px dashed #000" >Né(e) en :</p></td>  <td style="'.$style.'"><p  style="border-bottom: 1px dashed #000" >2000</p></td><td><p  style="border-bottom: 1px dashed #000" >à (Ville)</p></td>  <td style="'.$style.'"><p  style="border-bottom: 1px dashed #000" >FRIA</p></td><td><p  style="border-bottom: 1px dashed #000" >Nationalité :</p></td>  <td style="'.$style.'"><p  style="border-bottom: 1px dashed #000" >GUINEENNE</p></td></tr>';
        $this->html .= '<tr><td><p  style="border-bottom: 1px dashed #000" >De :</p></td>  <td colspan="2" style="'.$style.'"><p  style="border-bottom: 1px dashed #000" >ABDOULAYE</p></td><td><p  style="border-bottom: 1px dashed #000" >et de</p></td>  <td colspan="2" style="'.$style.'"><p  style="border-bottom: 1px dashed #000" >BALDE KADIATOU</p></td></tr>';
        $this->html .= '<tr><td style="font-style:italic" colspan="4">A satisfait aux exigences du programme de Licence:</td colspan="2"><td style="'.$style.'">GEOGRAPHIE</td></tr>';
        $this->html .= '<tr><td style="font-style:italic" colspan="6">Nous Recteur, par décision du Conseil de l’Université et en vertu de notre autorité, lui conférons le grade de Licencié : <p style="'.$style.'" >ES ARTS GEOGRAPHIE </p> </td> </tr></table></p>';
        $this->html .= '<p class="text-right" > Conakry, le <span style="height:30px;border:1px solid #000000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>';
        $this->html .= '<p><table class="text-center" style="font-style:italic;font-weight:bold"><tr><th style="width:50%">Le Doyen</th>  <th style="width:50%" colspan="5">Le Recteur</th></tr></table></p>';
        $this->html .= '</td>';
        $this->html .= '<td style="width:10%"></td>';
        $this->html .= '</tr></table>';
    }*/


    private function mainCertificate()
    {

        $style = "font-style:italic;font-family:times new roman;font-weight:bolder;font-size:16pt;text-align:center";
        /*  
        $this->html .= '<table><tr>';
        $this->html .= '<td style="width:100%">REPUBLIQUE DE GUINEE</td>';
        $this->html .= '<td style="width:100%">Travail-Justice-Solidarité</td>';
        $this->html .= '<td style="width:100%">UNIVERSITE GENERAL LANSANA CONTE DE SONFONIA-CONAKRY</td>';
        $this->html .= '<td style="width:100%">FACULTE DES LETTRES ET SCIENCES DU LANGAGE</td>';
        $this->html .= '<td style="width:100%">DIPLOME DE LICENCE</td>';*/
        $this->html .= '</tr></table>';

        $this->html .= '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>';
        $this->html .= '<table><tr>';
        $this->html .= '<td style="width:10%"></td>';
        $this->html .= '<td style="width:82%;font-size:15pt">';
        $this->html .= '<div class="text-center" style="' . $style . '">N° ' . $this->data[0]['reference'] . ' </div>';
        $this->html .= '<p style="font-style:italic;" >-Vu l’Arrêté N°2005/104/MESRS/CAB, du 26 janvier 2005, portant création de l’Université des Sciences Humaines, Juridiques et Economiques de Sonfonia-Conakry.</p>';
        $this->html .= '<p style="font-style:italic">-Vu l’Arrêté N° 2007/3475/MESRS/CAB du 11 Octobre 2007, portant réglementation des études de premier cycle de l’Enseignement Supérieur en République de Guinée.</p>';
        $this->html .= '<p><table><tr><td><p  style="" >Mme/M. :</p></td> <td colspan="5" style="' . $style . '"><p  style="" >' . $this->data[0]['name'] . '</p></td></tr>';
        $this->html .= '<tr ><td><p  style="" >Né(e) en :</p></td>  <td style="' . $style . '"><p  style="" >' . $this->data[0]['dateBorn'] . '</p></td><td><p  style="" >à (Ville)</p></td>  <td style="' . $style . '"><p  style="" >' . $this->data[0]['placeBorn'] . '</p></td><td><p  style=0"" >Nationalité :</p></td>  <td style="' . $style . '"><p  style="" >' . $this->data[0]['nationnality'] . '</p></td></tr>';
        $this->html .= '<tr><td><p  style="" >De :</p></td>  <td colspan="2" style="' . $style . '"><p  style="" >' . $this->data[0]['father'] . '</p></td><td><p  style="" >et de</p></td>  <td colspan="2" style="' . $style . '"><p  style="" >' . $this->data[0]['mother'] . '</p></td></tr>';

        $this->html .= '<tr><td style="font-style:italic" colspan="3">A satisfait aux exigences du programme de Licence:</td><td style="' . $style . '" colspan="3">' . $this->data[0]['programme'] . '</td></tr>';

        $this->html .= '<tr><td style="font-style:italic" colspan="6">Nous Recteur, par décision du Conseil de l’Université et en vertu de notre autorité, lui conférons le grade de Licencié : <p style="' . $style . '" >' . strtoupper($this->data[0]['diplome']) . '</p> </td> </tr></table></p>';
        $this->html .= '<p class="text-right" > Conakry, le <span style="height:30px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>';
        $this->html .= '<p><table class="text-center" style="font-style:italic;font-weight:bold"><tr><th style="width:50%">Le Doyen</th>  <th style="width:50%" colspan="5">Le Recteur</th></tr></table></p>';
        $this->html .= '</td>';
        $this->html .= '<td style="width:10%"></td>';
        $this->html .= '</tr></table>';
    }


    private function repportSemesterResult()
    {

        // var_dump(count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $colsize = 280 / (count($this->data['courses']['first']));
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<p></p>';
        $this->html .= '<div class="header3">Département : ' . $this->data['details']['department'] . '</div>';
        $this->html .= '<div class="header2">Programme : ' . $this->data['details']['programm'] . '</div>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '<br/><table cellpadding="2"><tr>';

        $this->html .= '<td style="width:100%"><table class="table_header">';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td></tr></table>';

        $this->html .= '<hr/><table>
        <tr><th>MC: Moyenne Cumulative</th><th width="240">NL: Notation Littéral correspondant à la moyenne cumulative</th><th>C1 à C' . count($this->data['courses']['first']) . ': Les cours du semestre</th></tr>
        </table>';

        $this->html .= '<br/><br/><br/><table class="annual_result">
        <tr class="annual_header"><th width="30">N<sup>o</sup></th><th width="80">Matricule</th><th align="left" width="80">Nom</th><th align="left" width="165">Prénom</th>';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }

        $this->html .= '<th width="28">MC</th><th width="28">NL</th><th width="70">Mention</th></tr>';

        foreach ($this->data['marksheets'] as $k => $m) {
            $this->html .= '<tr class="annual_data"><th>' . ($k + 1) . '</th><th>' . $m['matricule'] . '</th><th align="left">' . $m['lname'] . '</th><th align="left">' . $m['fname'] . '</th>';
            foreach ($m['marks'] as $ms) {
                $this->html .= '<th>' .  Helpers::markSheetDecrypt($ms['average']) . '</th>';
            }
            $this->html .= '<th>' . Helpers::numberPrecision($m['mc']) . '</th><th>' . $m['nl']['letter'] . '</th><th>' . $m['nl']['obs'] . '</th></tr>';
        }

        $this->html .= '</table>';
        $this->html .= '<div class="fs-12">';
        $this->signatoriesResult($this->data['details']['nameDoyenFaculte']);
        $this->html .= '</div>';
    }
    private function repportAdmittedAnnualResult()
    {

        $colsize = 280 / (count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<p></p>';
        $this->html .= '<div class="header3">Département : ' . $this->data['details']['department'] . '</div>';
        $this->html .= '<div class="header2">Programme : ' . $this->data['details']['programm'] . '</div>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '<br/><br/><table class="bold" align="center"><tr><th>' . $this->data['details']['sem1Text'] . '</th><th>' . $this->data['details']['sem2Text'] . '</th></tr></table>';
        $this->html .= '<br/><table cellpadding="2"><tr>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td></tr></table>';

        $this->html .= '<hr/><table>
        <tr><th>MC: Moyenne Cumulative</th><th width="240">NL: Notation Littéral correspondant à la moyenne cumulative</th><th>C1 à c10: Les cours des 2 semestres</th></tr>
        </table>';

        $this->html .= '<br/><br/><br/><table class="annual_result">
        <tr class="annual_header"><th width="30">N<sup>o</sup></th><th width="80">Matricule</th><th align="left" width="80">Nom</th><th align="left" width="165">Prénom</th>';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        $this->html .= '<th width="28">MC</th><th width="28">NL</th><th width="70">Mention</th></tr>';
        $i = 0;
        foreach ($this->data['marksheets'] as $k => $m) {

            $cpt = 0;
            foreach ($m['marks'] as $ms) {
                if ($ms['average'] < 5) {
                    $cpt++;
                }
            }
            if ($cpt == 0) {
                $this->html .= '<tr class="annual_data"><th>' . ($i + 1) . '</th><th>' . $m['matricule'] . '</th><th align="left">' . $m['lname'] . '</th><th align="left">' . $m['fname'] . '</th>';
                foreach ($m['marks'] as $ms) {
                    $this->html .= '<th>' .  Helpers::markSheetDecrypt($ms['average']) . '</th>';
                }
                $this->html .= '<th>' . Helpers::numberPrecision($m['mc']) . '</th><th>' . $m['nl']['letter'] . '</th><th>' . $m['nl']['obs'] . '</th></tr>';
                $i++;
            }
        }

        $this->html .= '</table>';
        $this->html .= '<div class="fs-12">';
        $this->signatories(Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME,5);
        $this->html .= '</div>';
    }
    private function repportFailledAnnualSchedulledResult()
    {

        // var_dump(count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $schedulledFailled = $this->data['nbr_cour_failled'];

        $colsize = 280 / (count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<p></p>';
        $this->html .= '<div class="header3">Département : ' . $this->data['details']['department'] . '</div>';
        $this->html .= '<div class="header2">Programme : ' . $this->data['details']['programm'] . '</div>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '<br/><br/><table class="bold" align="center"><tr><th>' . $this->data['details']['sem1Text'] . '</th><th>' . $this->data['details']['sem2Text'] . '</th></tr></table>';
        $this->html .= '<br/><table cellpadding="2"><tr>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td>';

        $this->html .= '<td style="width:50%"><table class="table_header">';
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td></tr></table>';

        $this->html .= '<hr/><table>
        <tr><th>MC: Moyenne Cumulative</th><th width="240">NL: Notation Littéral correspondant à la moyenne cumulative</th><th>C1 à c10: Les cours des 2 semestres</th></tr>
        </table>';

        $this->html .= '<br/><br/><br/><table class="annual_result">
        <tr class="annual_header"><th width="30">N<sup>o</sup></th><th width="80">Matricule</th><th align="left" width="80">Nom</th><th align="left" width="165">Prénom</th>';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        foreach ($this->data['courses']['second'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }
        $this->html .= '<th width="28">MC</th><th width="28">NL</th><th width="70">Mention</th></tr>';
        $i = 0;
        foreach ($this->data['marksheets'] as $k => $m) {

            $cpt = 0;
            foreach ($m['marks'] as $ms) {
                if ($ms['average'] < 5) {
                    $cpt++;
                }
            }

            if ($cpt >= $schedulledFailled) {
                $this->html .= '<tr class="annual_data"><th>' . ($i + 1) . '</th><th>' . $m['matricule'] . '</th><th align="left">' . $m['lname'] . '</th><th align="left">' . $m['fname'] . '</th>';
                foreach ($m['marks'] as $ms) {
                    ($ms['average'] < 5) ? $this->html .= '<th><b>' .  Helpers::markSheetDecrypt($ms['average']) . '</b></th>' : $this->html .= '<th>' .  Helpers::markSheetDecrypt($ms['average']) . '</th>';
                }
                $this->html .= '<th>' . Helpers::numberPrecision($m['mc']) . '</th><th>' . $m['nl']['letter'] . '</th><th>' . $m['nl']['obs'] . '</th></tr>';
                $i++;
            }
        }

        $this->html .= '</table>';
        $this->html .= '<div class="fs-12">';
        $this->signatoriesResult($this->data['details']['nameDoyenFaculte']);
        $this->html .= '</div>';
    }
    private function repportFailledSemesterSchedulledResult()
    {

        // var_dump(count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $schedulledFailled = $this->data['nbr_cour_failled'];
        $colsize = 280 / (count($this->data['courses']['first']));
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<p></p>';
        $this->html .= '<div class="header3">Département : ' . $this->data['details']['department'] . '</div>';
        $this->html .= '<div class="header2">Programme : ' . $this->data['details']['programm'] . '</div>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '<br/><br/><table class="bold" align="center"><tr><th>' . $this->data['details']['sem1Text'] . '</th></tr></table>';
        $this->html .= '<br/><table cellpadding="2"><tr>';

        $this->html .= '<td style="width:100%"><table class="table_header">';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td>';

        $this->html .= '<hr/><table>
        <tr><th>MC: Moyenne Cumulative</th><th width="240">NL: Notation Littéral correspondant à la moyenne cumulative</th><th>C1 à c10: Les cours des 2 semestres</th></tr>
        </table>';

        $this->html .= '<br/><br/><br/><table class="annual_result">
        <tr class="annual_header"><th width="30">N<sup>o</sup></th><th width="80">Matricule</th><th align="left" width="80">Nom</th><th align="left" width="165">Prénom</th>';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }

        $this->html .= '<th width="28">MC</th><th width="28">NL</th><th width="70">Mention</th></tr>';
        $i = 0;
        foreach ($this->data['marksheets'] as $k => $m) {

            $cpt = 0;
            foreach ($m['marks'] as $ms) {
                if ($ms['average'] < 5) {
                    $cpt++;
                }
            }

            if ($cpt == $schedulledFailled) {
                $this->html .= '<tr class="annual_data"><th>' . ($i + 1) . '</th><th>' . $m['matricule'] . '</th><th align="left">' . $m['lname'] . '</th><th align="left">' . $m['fname'] . '</th>';
                foreach ($m['marks'] as $ms) {
                    ($ms['average'] < 5) ? $this->html .= '<th><b>' .  Helpers::markSheetDecrypt($ms['average']) . '</b></th>' : $this->html .= '<th>' .  Helpers::markSheetDecrypt($ms['average']) . '</th>';
                }
                $this->html .= '<th>' . Helpers::numberPrecision($m['mc']) . '</th><th>' . $m['nl']['letter'] . '</th><th>' . $m['nl']['obs'] . '</th></tr>';
                $i++;
            }
        }

        $this->html .= '</table>';
        $this->html .= '<div class="fs-12">';
        $this->signatoriesResult($this->data['details']['nameDoyenFaculte']);
        $this->html .= '</div>';
    }
    private function repportValidateLicence()
    {

       //var_dump();
       $failleOrValidate=array_pop($this->data);
       $this->data = array_slice($this->data,0,count($this->data)-1);
        $this->html .= '<br/>';
        $this->html .= '<span class="header">' . $this->title . '</span>';
        if ($this->data[0]['faculties']) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Faculté :</th><th  width="445" align="left">' . Helpers::ucwords($this->data[0]['faculties']) . '</th></tr></table>';
        } 
        if ($this->data[0]['department']) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Departement :</th><th  width="445" align="left">' . Helpers::ucwords($this->data[0]['department']) . '</th></tr></table>';
        }
        if ($this->data[0]['programme']) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Programme :</th><th  width="445" align="left">' . Helpers::ucwords($this->data[0]['programme']) . '</th></tr></table>';
        }
        if (isset($this->data[0]["level"])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Niveau :</th><th  width="445" align="left">' . Helpers::ucwords($this->data[0]['level']) . '</th></tr></table>';
        }
        $this->html .= '<br/><br/><br/><table class="table table_bordered"><tr><th width="30" align="left">N<sup>o</sup></th><th width="80" align="center">Matricule</th><th width="180" align="center">Nom & Prénom</th>
        <th width="40" align="center">NC.C</th> <th width="40" align="center">NC.R</th>  <th width="50" align="center">T.Crédit</th><th width="30" align="center">MC</th><th width="30" align="center">E.L</th><th width="60" align="center">OBS</th></tr>';
        $i = 1;
        foreach ($this->data as  $data) {
           $this->html .= "<tr><td>" . ($i) . "</td><td align=\"center\">{$data['matricule']}</td><td>{$data['lname']} {$data['fname']}</td>
           <td align=\"center\">" . ucfirst($data["marks"]["totalCourses"]) . "</td>
           <td align=\"center\">" . ucfirst($data["marks"]["validatedCoures"]) . "</td>
           <td align=\"center\">" . ucfirst($data["marks"]["totalCredit"]) . "</td>
            <td align=\"center\"><b>" . ucfirst($data["marks"]["cumulativeAvg"]) . "</b></td>
            <td align=\"center\"><b>" . ucfirst($data["marks"]["letterCumulativeAvg"]["letter"]) . "</b></td>
             <td align=\"center\"><b>" . ucfirst($data["marks"]["letterCumulativeAvg"]["obs"]) . "</b></td>
            </tr>";
            $i++;
        }
        $this->html .= '</table> <br/>';

        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="445" align="left">Total Etudiant :</th><th  width="95" align="right">' . Helpers::ucwords($i) . '</th></tr></table>';
        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="445" align="left">Etudiant ayant validé l\'ensemble des cours :</th><th  width="95" align="right">' . Helpers::ucwords($failleOrValidate[0]) . '</th></tr></table>';
        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="445" align="left">Etudiant ayant échoué au minimum (Un) cours :</th><th  width="95" align="right">' . Helpers::ucwords($failleOrValidate[1]) . '</th></tr></table>';
        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="445" align="left">Taux de Reussite :</th><th  width="95" align="right">' . Helpers::ucwords(Helpers::numberPrecision((($failleOrValidate[0]*100)/$i))) . '%</th></tr></table>';
        $this->html .= '<br/><br/><div class="fs-10">';
        $this->signatories(Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME,5);
        $this->html .= '</div>';
    }
    private function repportAdmittedSemesterResult()
    {

        // var_dump(count($this->data['courses']['first']) + count($this->data['courses']['second']));
        $colsize = 280 / (count($this->data['courses']['first']));
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<p></p>';
        $this->html .= '<div class="header3">Département : ' . $this->data['details']['department'] . '</div>';
        $this->html .= '<div class="header2">Programme : ' . $this->data['details']['programm'] . '</div>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '<br/><table cellpadding="2"><tr>';

        $this->html .= '<td style="width:100%"><table class="table_header">';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<tr><th>' . $ms['code'] . ': ' . $ms['name'] . '</th></tr>';
        }

        $this->html .= '</table></td></tr></table>';

        $this->html .= '<hr/><table>
        <tr><th>MC: Moyenne Cumulative</th><th width="240">NL: Notation Littéral correspondant à la moyenne cumulative</th><th>C1 à C' . count($this->data['courses']['first']) . ': Les cours du semestre</th></tr>
        </table>';

        $this->html .= '<br/><br/><br/><table class="annual_result">
        <tr class="annual_header"><th width="30">N<sup>o</sup></th><th width="80">Matricule</th><th align="left" width="80">Nom</th><th align="left" width="165">Prénom</th>';
        foreach ($this->data['courses']['first'] as $ms) {
            $this->html .= '<th width="' . $colsize . '">' . $ms['code'] . '</th>';
        }

        $this->html .= '<th width="28">MC</th><th width="28">NL</th><th width="70">Mention</th></tr>';

        $i = 0;
        foreach ($this->data['marksheets'] as $k => $m) {

            $cpt = 0;
            foreach ($m['marks'] as $ms) {
                if ($ms['average'] < 5) {
                    $cpt++;
                }
            }
            if ($cpt == 0) {
                $this->html .= '<tr class="annual_data"><th>' . ($i + 1) . '</th><th>' . $m['matricule'] . '</th><th align="left">' . $m['lname'] . '</th><th align="left">' . $m['fname'] . '</th>';
                foreach ($m['marks'] as $ms) {
                    $this->html .= '<th>' .  Helpers::markSheetDecrypt($ms['average']) . '</th>';
                }
                $this->html .= '<th>' . Helpers::numberPrecision($m['mc']) . '</th><th>' . $m['nl']['letter'] . '</th><th>' . $m['nl']['obs'] . '</th></tr>';
                $i++;
            }
        }

        $this->html .= '</table>';
        $this->html .= '<div class="fs-12">';
        $this->signatoriesResult($this->data['details']['nameDoyenFaculte']);
        $this->html .= '</div>';
    }
    private function teachersList($is_labeled = false)
    {

        if (isset($this->data['faculty'])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Faculté :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['faculty']) . '</th></tr></table>';
        }
        if (isset($this->data['department'])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Departement :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['department']) . '</th></tr></table>';
        }
        if (isset($this->data['programm'])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Programme :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['programm']) . '</th></tr></table>';
        }
        if (isset($this->data['level'])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Niveau :</th><th  width="445" align="left">' . ucfirst($this->data['level']) . '</th></tr></table>';
        }
        if (isset($this->data['session'])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Session :</th><th  width="445" align="left">' . $this->data['session'] . '</th></tr></table>';
        }

        if ($is_labeled) {

            foreach ($this->data['data'] as $data) {
                $this->html .= '<br/><h3 class="uppercase no-padding">' . $data['label'] . '</h3><table class="table table_bordered"><tr><th width="51" align="left">N<sup>o</sup></th><th width="232" align="center">Nom & Prénom</th><th width="92" align="center">Dîplome</th><th width="82" align="center">Grade</th><th width="83" align="center">Téléphone</th></tr>';
                foreach ($data['teachers'] as $i => $data) {
                    $this->html .= "<tr><td>" . ($i + 1) . "</td><td>{$data['lname_teachers']} {$data['fname_teachers']}</td><td align=\"center\">{$data['diplome_teachers']}</td><td align=\"center\">{$data['grade_teachers']}</td><td align=\"center\">" . ucfirst($data['phone_teachers']) . "</td></tr>";
                }
                $this->html .= '</table>';
            }
        } else {

            $this->html .= '<br/><br/><br/><table class="table table_bordered"><tr><th width="51" align="left">N<sup>o</sup></th><th width="232" align="center">Nom & Prénom</th><th width="92" align="center">Dîplome</th><th width="82" align="center">Grade</th><th width="83" align="center">Téléphone</th></tr>';
            foreach ($this->data['data'] as $i => $data) {
                //var_dump($data);
                $this->html .= "<tr><td>" . ($i + 1) . "</td><td>{$data['lname_teachers']} {$data['fname_teachers']}</td><td align=\"center\">{$data['diplome_teachers']}</td><td align=\"center\">{$data['grade_teachers']}</td><td align=\"center\">" . ucfirst($data['phone_teachers']) . "</td></tr>";
            }
            $this->html .= '</table>';
        }
    }
    private function markCourse()
    {
        // $AES_Cipher= new AES_Cipher();
        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Departement :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['department']) . '</th></tr></table>';

        if (isset($this->data['programm'])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="95" align="left">Programme :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['programm']) . '</th></tr></table>';
        }

        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="115" align="left">Titre du Cours :</th><th  width="425" align="left">' . Helpers::ucwords($this->data['course_name']) . '</th></tr></table>';

        $this->html .= '<br/><br/><table class="table_header"><tr><th class="bold" width="105" align="left">Code du Cours :</th><th  width="150" align="left">' . $this->data['course_code'] . '</th><th class="bold" width="95" align="right">Session :</th><th  width="190" align="left">' . $this->data['session'] . '</th></tr></table>';

        $this->html .= '<br/><br/><br/><table class="table table_bordered"><tr><th width="51" align="left">N<sup>o</sup></th><th width="95" align="center">Matricule</th><th width="265" align="center">Nom & Prénom</th><th width="44" align="center">COURS</th><th width="45" align="center">COMPO</th><th width="40" align="center">MOYN</th></tr>';

        foreach ($this->data['data'] as $i => $data) {
             $data['class_marksheet'] = Helpers::markSheetDecrypt($data['class_marksheet']);
            $data['exam_marksheet'] = Helpers::markSheetDecrypt($data['exam_marksheet']);
            $data['average_marksheet'] = Helpers::markSheetDecrypt($data['average_marksheet']);

            $this->html .= "<tr><td>" . ($i + 1) . "</td><td align=\"center\">{$data['matricule_students']}</td><td>{$data['lname_students']} {$data['fname_students']}</td><td align=\"center\">{$data['class_marksheet']}</td><td align=\"center\">{$data['exam_marksheet']}</td><td class=\"bold\" align=\"center\">{$data['average_marksheet']}</td></tr>";
        }
        $this->html .= '</table>';
    }

    private function listCourses($is_labeled = false)
    {
        //var_dump($this->data['session']);exit();
        $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Faculté :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['faculty']) . '</th></tr></table>';
        $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Departement :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['department']) . '</th></tr></table>';
        $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Session :</th><th  width="445" align="left"><b>' . Helpers::ucwords($this->data['session']) . '</b></th></tr></table>';
        if (isset($this->data['programm'])) {
            $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Programme :</th><th  width="445" align="left">' . Helpers::ucwords($this->data['programm']) . '</th></tr></table>';
        }

        if (!$is_labeled) {
            $this->html .= '<br/><br/><br/><table class="table table_bordered"><tr><th width="58" align="left">Code</th><th width="286" align="center">Nom</th><th width="68" align="center">Niveau</th><th width="50" align="center">Crédit</th><th width="74" align="center">Semestre</th></tr>';

            foreach ($this->data['data'] as $data) {
                $this->html .= '<tr><td>' . $data['code_courses'] . '</td><td align="left">' . $data['name_courses'] . '</td><td align="left">' . Helpers::getLevel()[$data['level_schedulles']] . '</td><td align="center">' . $data['credit_schedulles'] . '</td><td align="center">' . Helpers::getSemester()[$data['semester_schedulles']] . '</td></tr>';
            }
            $this->html .= '</table>';
        } else {
            foreach ($this->data['data'] as $data) {
                $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Programme :</th><th  width="445" align="left">' . Helpers::ucwords($data['label']) . '</th></tr></table>';
                $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Niveaux :</th><th  width="445" align="left">' . Helpers::ucwords($data["courses"][0]['level_schedulles']) . '</th></tr></table>';
                $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Session :</th><th  width="445" align="left">' . Helpers::ucwords($data["courses"][0]['session_schedulles']) . '</th></tr></table>';
                $this->html .= '<br/><br/><table class="table_header"><tr><th width="92" align="left">Crédit :</th><th  width="445" align="left">' . Helpers::ucwords($data["courses"][0]['credit_schedulles']) . '</th></tr></table>';
                $this->html .= '<br/><br/><table class="table table_bordered"><tr><th width="58" align="left">Code</th><th width="286" align="center">Matiére</th><th width="118" align="center">Enseignant</th><th width="74" align="center">Semestre</th></tr>';
                foreach ($data['courses'] as $course) {
                    $this->html .= '<tr><td>' . $course['code_courses'] . '</td><td align="left">' . $course['name_courses'] . '</td><td align="center">' . $course['fname_teachers'] . ' ' . $course['lname_teachers'] . '</td><td align="center">' . Helpers::getSemester()[$course['semester_schedulles']] . '</td></tr>';
                }
                $this->html .= '</table>';
            }
        }
    }

    private function reg_billing()
    {
        $this->reg_billing_();
        $this->html .= '<br/>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _<br/>';
        $this->reg_billing_();
        $this->html .= '<br/>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _<br/>';
        $this->reg_billing_();
    }

    private function reg_billing_()
    {

        if ($this->data['type_fees'] == 'reinscription') {
            $desc = '<span class="fs-11">' . Helpers::ucwords($this->data['name_departments']) . '</span><br/><br/>Frais de reinscription<br/> Niveau: ' . $this->data['current_level_students'];
        } else if ($this->data['type_fees'] == 'inscription') {
            $desc = '<span class="fs-11">' . Helpers::ucwords($this->data['name_departments']) . '</span><br/><br/>Frais d\'inscription<br/> Niveau: ' . $this->data['current_level_students'];
        }

        $this->html .= '<p style="text-align:center"><img style="height:40px" src="images/logo2x.png" /></p><div class="header-invoice">Reçu de Paiement</div>';
        $this->html .= '<table class="invoice meta">
                    <tr>
                        <td class="no-bg no-border" width="300" rowspan="4"><h1>' . ucwords($this->data['fname_students'] . ' ' . $this->data['lname_students']) . '<br/><span class="fs-11">' . $this->data['matricule_students'] . '</span></h1></td>
                        <th width="100">Numéro #</th>
                        <td width="128">' . $this->data['bill_num_registration'] . '</td>
                    </tr>
                    <tr>
                        <th>Date</th>
                        <td>' . date('M d, Y') . '</td>
                    </tr>
                    <tr>
                        <th>Montant à Payer</th>
                        <td><span>GNF</span><span>' . $this->data['montant_fees'] . '</span></td>
                    </tr>
                    </table>';

        $this->html .= '<br/><table class="invoice inventory">
                    <thead>
                    <tr>
                    <th width="223"><span class="fs-12">Description</span></th>
                    <th align="center"><span>Prix</span></th>
                    <th align="center" width="40"><span>Qté</span></th>
                    <th align="center"><span>Total</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td class="bold fs-12" width="223"><span>' . $desc . '</span></td>
                    <td align="center"><span>GNF</span><span>' . $this->data['montant_fees'] . '</span></td>
                    <td align="center" width="40"><span>1</span></td>
                    <td align="center"><span>GNF</span><span>' . $this->data['montant_fees'] . '</span></td>
                    </tr>
                    </tbody>
                    </table>';

        $this->html .= '<br/><table class="invoice balance">
                    <tr>
                    <th width="300" class="no-bg no-border"></th>
                    <th width="100" ><span>Total</span></th>
                    <td width="128"><span>GNF</span><span>' . $this->data['montant_fees'] . '</span></td>
                    </tr>
                    <tr>
                    <th width="300" class="no-bg no-border"></th>
                    <th width="100"><span>Montant Payé</span></th>
                    <td width="128"><span>GNF</span> <span>' . $this->data['montant_fees'] . '</span></td>
                    </tr>
                    </table>';
    }
    private function registrationForm()
    {
        $this->Registration_marks_head();
        if ($this->data['level_registration'] == 'licence_1') {
            $this->html .= '<p style="padding" class="">3. Liste des Cours :</p>';
            $this->html .= '<table class="table_header" border="1"><tr><th width="50" align="left">N° ord </th>
        <th  width="50" align="left">code</th>
        <th  width="50" align="left">Crédit</th>
        <th width="160" align="left">cours</th>
        <th width="160" align="left">Enseignant</th>
        <th width="70" align="left">Téléphone</th></tr></table>';
            if (isset($this->data[0])) {
                foreach ($this->data[0] as $key => $courses) {
                    $this->html .= '<table class="table_header" border="1"><tr><th width="50" align="left">' . ($key + 1) . '</th>
                   <th  width="50" align="left">' . Helpers::ucwords($courses['code_courses']) . '</th>
                   <th  width="50" align="left">' . Helpers::ucwords($courses['credit_schedulles']) . '</th>
                   <th width="160" align="left">' . Helpers::ucwords($courses['name_courses']) . '</th>
                   <th width="160" align="left">' . Helpers::ucwords($courses['fname_teachers']) . ' ' . Helpers::ucwords($courses['lname_teachers']) . '</th>
                   <th width="70" align="left">' . Helpers::ucwords($courses['phone_teachers']) . '</th></tr>
                  </table>';
                }
            }
        } else {
            if (isset($this->data[0])) {
                $this->html .= '<br/><p style="padding" class="">3-1. Liste des Cours :</p>';
                $this->html .= '<br/><table class="table_header" border="1"><tr><th width="50" align="left">N° ord </th>
                <th  width="50" align="left">code</th>
                <th  width="50" align="left">Crédit</th>
                <th width="160" align="left">cours</th>
                <th width="160" align="left">Enseignant</th>
                <th width="70" align="left">Téléphone</th></tr></table>';
                foreach ($this->data[0] as $key => $courses) {
                    $this->html .= '<table class="table_header" border="1"><tr><th width="50" align="left">' . ($key + 1) . '</th>
                    <th  width="50" align="left">' . Helpers::ucwords($courses['code_courses']) . '</th>
                    <th  width="50" align="left">' . Helpers::ucwords($courses['credit_schedulles']) . '</th>
                    <th width="160" align="left">' . Helpers::ucwords($courses['name_courses']) . '</th>
                    <th width="160" align="left">' . Helpers::ucwords($courses['fname_teachers']) . ' ' . Helpers::ucwords($courses['lname_teachers']) . '</th>
                    <th width="70" align="left">' . Helpers::ucwords($courses['phone_teachers']) . '</th></tr></table>';
                }
            }
            if (isset($this->data[1]) && !empty($this->data[1])) {

                $this->html .= '<br/>';
                $this->html .= '<br/><p style="padding" class="">3-2. Liste des Cours (Dettes Académique) : ' . Helpers::getSemester()[$this->data[1][0]['semester_schedulles']] . '</p>';
                $this->html .= '<br/><table class="table_header" border="1"><tr><th width="50" align="left">N° ord </th>
                <th  width="50" align="left">code</th>
                <th  width="50" align="left">Crédit</th>
                <th width="160" align="left">cours</th>
                <th width="160" align="left">Enseignant</th>
                <th width="70" align="left">Session</th>
       </tr></table>';
                foreach ($this->data[1] as $key => $cour) {
                    $this->html .= '<table class="table_header" border="1"><tr><th width="50" align="left">' . ($key + 1) . '</th>
                    <th  width="50" align="left">' . Helpers::ucwords($cour['code_courses']) . '</th>
                    <th  width="50" align="left">' . Helpers::ucwords($cour['credit_schedulles']) . '</th>
                    <th width="160" align="left">' . Helpers::ucwords($cour['name_courses']) . '</th>
                    <th width="160" align="left">' . Helpers::ucwords(isset($cour['fname_teachers']) ? $cour['fname_teachers'] : '') . ' ' . Helpers::ucwords(isset($cour['lname_teachers']) ? $cour['lname_teachers'] : '') . '</th>

           <th width="70" align="left">' . Helpers::ucwords($cour['session_schedulles']) . '</th>
           </tr></table>';
                }
            }
        }
        $this->html .= '<p></p>';
        $this->html .= '<br/>';
        $this->html .= '<p style="padding" class="">4. Nom et adresse de la personne à prévenir à Conakry en cas de besoin :</p>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Nom et Prénoms :</th><th  width="445" align="left">' . $this->data['fname_lname_tutors_students'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Adresse :</th><th  width="220" align="left">' . ucfirst(isset($this->data['address_tutors_students']) ? $this->data['address_tutors_students'] : '') . '</th><th align="rigth">Numéro de télephone :</th><th width="90">' . ucfirst(isset($this->data['phone_tutors_students']) ? $this->data['phone_tutors_students'] : '') . '</th></tr></table>';
        $this->html .= '<br/><br/><div class="bold text-right"> Fait à Sonfonia, le ' . date('d/m/Y') . '</div>';
        $this->html .= '<br/><table class="bold"><tr><th width="100">L\'Etudiant</th><th width="260" align="center">Le chargé d\'admission et Inscriptions </th><th width="200" align="right">Le Directeur de Programme </th></tr></table>';
    }

    /*
    private function userResetForm(){
    $this->html .= '<br/>';
    $this->html .= '<table><tr><th width="65"><img src="" /></th>';
    $this->html .= '<td width="425">';
    $this->html .= '<span class="header">' . $this->title . '</span>';
    $this->html .= '<br/>_ _ _ _ _ _ _ _ _ _ _ ___ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _<br/>';
    $this->html .= '</td>';
    $this->html .= '<th width="50"><img src="" /></th>';
    $this->html .= '</tr></table> ';
    if ($this->data['teacher_users'] == "NA") {
    $this->html .= '<p style="padding" class=""><h2>1. Information Sur l\'utilisateur :</h2></p>';
    $this->html .= '<br/><table class="table_header"><tr><th  width="255" align="left"><h3>' . ucfirst($this->data['fname_users']) . ' ' . ucfirst($this->data['lname_users']) . '</h3></th><th width="255" align="right"><h3>' . $this->data['type_users'] . '</h3></th></tr></table><br/>';
    $this->html .= '<br/><table class="table_header"><tr><th  width="255" align="left"><h3>' . ucfirst(isset($this->data['phone_users']) ? $this->data['phone_users'] : '') . '</h3></th><th width="255"  align="right"><h3>' . ucfirst(isset($this->data['email_users']) ? $this->data['email_users'] : '') . '</h3></th></tr></table>';
    } else {
    $this->html .= '<p style="padding" class=""><h2>1. Information Sur l\'utilisateur :</h2></p>';
    $this->html .= '<br/><table class="table_header"><tr><th  width="255" align="left"><h3>' . ucfirst($this->data['fname_teachers']) . ' ' . ucfirst($this->data['lname_teachers']) . '</h3></th><th width="255" align="right"><h3>' . $this->data['type_users'] . '</h3></th></tr></table><br/>';

    /*    
            private function userResetForm(){
                $this->html .= '<br/>';
                $this->html .= '<table><tr><th width="65"><img src="" /></th>';
                $this->html .= '<td width="425">';
                $this->html .= '<span class="header">' . $this->title . '</span>';
                $this->html .= '<br/>_ _ _ _ _ _ _ _ _ _ _ ___ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _<br/>';
                $this->html .= '</td>';
                $this->html .= '<th width="50"><img src="" /></th>';
                $this->html .= '</tr></table> ';
                if ($this->data['teacher_users'] == "NA") {
                    $this->html .= '<p style="padding" class=""><h2>1. Information Sur l\'utilisateur :</h2></p>';
                    $this->html .= '<br/><table class="table_header"><tr><th  width="255" align="left"><h3>' . ucfirst($this->data['fname_users']) . ' ' . ucfirst($this->data['lname_users']) . '</h3></th><th width="255" align="right"><h3>' . $this->data['type_users'] . '</h3></th></tr></table><br/>';
                    $this->html .= '<br/><table class="table_header"><tr><th  width="255" align="left"><h3>' . ucfirst(isset($this->data['phone_users']) ? $this->data['phone_users'] : '') . '</h3></th><th width="255"  align="right"><h3>' . ucfirst(isset($this->data['email_users']) ? $this->data['email_users'] : '') . '</h3></th></tr></table>';
                } else {
                    $this->html .= '<p style="padding" class=""><h2>1. Information Sur l\'utilisateur :</h2></p>';
                    $this->html .= '<br/><table class="table_header"><tr><th  width="255" align="left"><h3>' . ucfirst($this->data['fname_teachers']) . ' ' . ucfirst($this->data['lname_teachers']) . '</h3></th><th width="255" align="right"><h3>' . $this->data['type_users'] . '</h3></th></tr></table><br/>';
                    $this->html .= '<br/><table class="table_header"><tr><th  width="255" align="left"><h3>' . ucfirst(isset($this->data['phone_teachers']) ? $this->data['phone_teachers'] : '') . '</h3></th><th width="255"  align="right"><h3>' . ucfirst(isset($this->data['email_teachers']) ? $this->data['email_teachers'] : '') . '</h3></th></tr></table>';

                }
                $this->html .= '<p style="padding" class=""><h2>2. Paramétre de Connexion :</h2></p>';
                $this->html .= '<br/><table class="table_header"><tr><th width="255" align="left"><h2>LOGIN :</h2></th><th  width="255" align="left"><h2>' . $this->data['username_users'] . '</h2></th></tr></table><br/>';
                $this->html .= '<br/><table class="table_header"><tr><th width="255" align="left"><h2>MOT DE PASS  :</h2></th><th  width="255" align="left"><h2>' . $this->data['pwd_users'] . '</h2></th></tr></table><br/>';

                $this->html .= '<br/>';

            }

            private function registrationForm()
            {
            $photo = '../public/images/photos/' . $this->data['matricule_students'] . '.jpg';
            if (!is_file($photo)) {
            $photo = '../public/images/avatar/avatar_no_photo.jpg';
            }

            $this->html .= '<p><table><tr><th width="65"><img src="../public/images/qr/' . $this->data['id_students'] . '.png" /></th><td width="430">';
            $this->html .= '<span class="header">' . $this->title . '</span>';
            $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';

            $this->html .= '<br/><table class="matricule"><tr><th class="noborder"></th><th class="noborder" width="25" align="left">N<sup>o</sup> :</th>';
            foreach (Helpers::split_matricule($this->data['matricule_students']) as $n) {
            $this->html .= '<th width="26" class="editField" align="center">' . $n . '</th>';
            }
            $this->html .= '</tr></table>';

            $this->html .= '</td>';
            $this->html .= '<th width="50"><img src="' . $photo . '" /></th>';
            $this->html .= '</tr></table></p>';

            $this->html .= '<br/><p style="padding" class="bold fs-italic">1. &nbsp; &nbsp; &nbsp;Etat Civil :</p>';
            $this->html .= '<br/><table><tr><th class="noborder" width="55" align="left">Nom :</th><th width="485" class="editField" align="center">' . ucfirst($this->data['lname_students']) . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="55" align="left">Prénom :</th><th width="485" class="editField" align="center">' . ucwords($this->data['fname_students']) . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="115" align="left">Année de naissance :</th><th width="200" class="editField" align="center">' . ucfirst(isset($this->data['date_born_students']) ? $this->data['date_born_students'] : '') . '</th><th class="noborder" width="55" align="center">Lieu :</th><th width="170" class="editField" align="center">' . ucfirst(isset($this->data['place_birth_students']) ? $this->data['place_birth_students'] : '') . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="115" align="left">Nationalité :</th><th width="200" class="editField" align="center">' . ucfirst(($this->data['country_students'] == 'GN') ? 'GUINENNE' : $this->data['country_students']) . '</th><th class="noborder" width="55" align="center">Sexe :</th><th width="170" class="editField" align="center">' . ucfirst($this->data['sex_students']) . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="55" align="left">Père :</th><th width="485" class="editField" align="center">' . ucfirst(isset($this->data['father_students']) ? $this->data['father_students'] : '') . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="55" align="left">Mère :</th><th width="485" class="editField" align="center">' . ucfirst(isset($this->data['mother_students']) ? $this->data['mother_students'] : '') . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="115" align="left">Situation Matrimoniale :</th><th class="noborder" width="100" align="center">Marié(e):</th> <th width="45" class="editField" align="center"> ' . (isset($this->data['marital_status_students']) && 'Marié' == $this->data['marital_status_students'] ? '&nbsp;<input type="checkbox" name="agree" value="1" checked="checked" />' : '') . '</th>  <th class="noborder" width="100" align="center">Célibataire :</th> <th width="40" class="editField" align="center">' . (isset($this->data['marital_status_students']) && 'Célibataire' == $this->data['marital_status_students'] ? '&nbsp;<input type="checkbox" name="agree" value="1" checked="checked" />' : '') . '</th>  <th class="noborder" width="100" align="center">Divorcé(e) :</th> <th width="40" class="editField" align="center">' . (isset($this->data['marital_status_students']) && 'Divorcé' == $this->data['marital_status_students'] ? '&nbsp;<input type="checkbox" name="agree" value="1" checked="checked" />' : '') . '</th> </tr></table>';
            $this->html .= '<br/><br/><br/><p class="bold fs-italic">2. &nbsp; &nbsp; &nbsp;Etudes Précédentes :</p>';
            $this->html .= '<br/><table><tr><th class="noborder" width="50" align="left">Lycée : </th><th width="288" class="editField" align="center">' . ucfirst($this->data['lycee_bac_students']) . '</th><th class="noborder" width="60" align="center">Profil :</th><th width="35" class="editField" align="center">' . Helpers::getAcronym($this->data['profile_bac_students'], 2) . '</th><th class="noborder" width="60" align="center">PV :</th><th width="46" class="editField" align="center">' . ucfirst($this->data['pv_bac_students']) . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="50" align="left">Session : </th><th width="70" class="editField" align="center">' . ucfirst($this->data['session_bac_students']) . '</th><th class="noborder" width="60" align="center">Centre : </th><th width="360" class="editField" align="center">' . ucfirst($this->data['center_bac_students']) . '</th></tr></table>';
            $this->html .= '<br/><br/><br/><p class="bold fs-italic">3. &nbsp; &nbsp; &nbsp;Inscription Demandée :</p>';
            $this->html .= '<br/><table><tr><th class="noborder" width="50" align="left">Faculté :</th><th width="150" class="editField" align="center">' . ucfirst(isset($this->data['name_faculties']) ? $this->data['name_faculties'] : '') . '</th><th class="noborder" width="80" align="center">Département : </th><th width="260" class="editField" align="center">' . ucfirst(isset($this->data['name_departments']) ? $this->data['name_departments'] : '') . ' </th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="75" align="left">Programme :</th><th width="465" class="editField" align="center">' . ucfirst(isset($this->data['name_programmes']) ? $this->data['name_programmes'] : '') . '</th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="115" align="left">Niveau :</th><th class="noborder" width="100" align="center">Licence 1:</th><th width="45" class="editField" align="center">' . (isset($this->data['current_level_students']) && 'licence_1' == $this->data['current_level_students'] ? '&nbsp;<input type="checkbox" name="agree" value="1" checked="checked" />' : '') . '</th><th class="noborder" width="100" align="center">Licence 2 :</th><th width="40" class="editField" align="center">' . (isset($this->data['current_level_students']) && 'licence_2' == $this->data['current_level_students'] ? '&nbsp;<input type="checkbox" name="agree" value="1" checked="checked" />' : '') . '</th><th class="noborder" width="100" align="center">Licence 3 :</th><th width="40" class="editField" align="center">' . (isset($this->data['current_level_students']) && 'licence_3' == $this->data['current_level_students'] ? '&nbsp;<input type="checkbox" name="agree" value="1" checked="checked" />' : '') . '</th></tr></table>';
            $this->html .= '<br/><br/><br/><p class="bold fs-italic">4. &nbsp; &nbsp; &nbsp;Renseignements Divers :</p>';
            $this->html .= '<div class="bold"> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nom et adresse de la personne à prévenir à Conakry en cas de besoin</div>';
            $this->html .= '<br/><table><tr><th class="noborder" width="105" align="left">Nom et Prénoms :</th><th width="435" class="editField" align="center"> ' . ucfirst(isset($this->data['fname_lname_tutors_students']) ? $this->data['fname_lname_tutors_students'] : '') . ' </th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="105" align="left">Adresse :</th><th width="435" class="editField" align="center">' . ucfirst(isset($this->data['address_tutors_students']) ? $this->data['address_tutors_students'] : '') . '  </th></tr></table>';
            $this->html .= '<br/><br/><table><tr><th class="noborder" width="115" align="left">Numéro de télephone :</th><th width="200" class="editField" align="center">' . ucfirst(isset($this->data['phone_tutors_students']) ? $this->data['phone_tutors_students'] : '') . ' </th><th class="noborder" width="55" align="center">BP :</th><th width="170" class="editField" align="center"> </th></tr></table>';
            $this->html .= '<br/><br/><div class="bold text-right"> Fait à Sonfonia, le ' . date('d/m/Y') . '</div>';
            $this->html .= '<br/><table class="bold"><tr><th>L\'Etudiant</th><th align="right">Le chargé des Inscriptions et réinscriptions</th></tr></table>';
            }*/
    function archievement()
    {
        $this->qrPhotoHead();
        $this->html .= '<br/><br/><p class="fs-14">Le chef Service et le Chef Section suivi du cheminement de la Scolarité soussignés, Attestent que:</p>';
        $this->html .= '<p class="fs-14">';
        $this->studentInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">s\'est effectivement inscrit(e) en ' . $this->data['year_number'] . ' Année du Premier cycle universitaire (Licence) de notre Institution sous le numéro ' . $this->data['matricule_students'] . ' au titre de l\'année universitaire ' . $this->data['session_registration'] . ';</p>';
        $this->html .= '<p class="fs-14">';
        $this->facultiesInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">';
        $this->marks_appreciation2('Avec les appréciations suivantes :');
        $this->html .= '</p>';
        $this->html .= '<div class="fs-14">En foi de quoi la présente attestation a été délivrée pour servir et valoir ce que de droit.</div><br/><br/>';
        $this->html .= '<div class="fs-14">';
        $this->signatories(Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME, 5);
        $this->html .= '</div>';
    }
    function endOfCycle()
    {
        $this->qrPhotoHead();
        $this->html .= '<br/><br/><p class="fs-14">Le chef Service et le Chef Section suivi du cheminement de la Scolarité soussignés, Certifient que:</p>';
        $this->html .= '<p class="fs-14">';
        $this->studentInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">inscrit(e) sous le numéro ' . $this->data['matricule_students'] . ' est effectivement en fin d\'études du Premier cycle universitaire (Licence) de notre Institution au titre de l\'année universitaire ' . $this->data['session_registration'] . ';</p>';
        $this->html .= '<p class="fs-14">';
        $this->facultiesInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">';
        $this->marks_appreciation2('Avec les appréciations suivantes :');
        $this->html .= '</p>';
        $this->html .= '<div class="fs-14">En foi de quoi le présent certificat a été délivré pour servir et valoir ce que de droit.</div><br/><br/>';
        $this->html .= '<div class="fs-14">';
        $this->signatories(Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME, 5);
        $this->html .= ' <br/><hr/><br/><p align="center" class="fs-12"><i>Cette attestation ne tient pas lieu de diplôme <br/> Toute rature ou surcharge entraîne la nullité de la présente attestation</i></p>';
        $this->html .= '</div>';
    }
    function selectionAndOrientation()
    {
        $this->qrPhotoHead();
        $this->html .= '<br/><br/><br/><p class="fs-14">Le chef Service et le Chef Section chargé d\'admission,Inscription et Réinscription de la Scolarité soussignés, <br/> Attestent que Mr (Mme ou Mlle) : </p>';
        $this->html .= '<p class="fs-14">';
        $this->studentInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">est admis(e) à la sélection et est orienté(e) à l\'Université General Lansana Conté de Sonfonia, Session ' . $this->data['session_bac_students'] . ' au programme du premier cycle universitaire de notre Institution.</p>';
        $this->html .= '<p class="fs-14">';
        $this->facultiesInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">Sous le PV : <span class="bold">' . $this->data['pv_bac_students'] . '</span> au Baccalauréat et PV select/INE: <span class="bold">' . $this->data['ine_students'] . '</span> à la sélection du Profil Bac ' . $this->data['profile_bac_students'] . '</p>';
        $this->html .= '<div class="fs-14">En foi de quoi la présente attestation a été délivrée pour servir et valoir ce que de droit.</div><br/><br/>';
        $this->html .= '<div class="fs-14">';
        $this->signatories(Constant::CERT_CHEF_SECTION_INSCRIPTION, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME, 4);
        $this->html .= '</div>';
    }
    function scolarity()
    {

        $this->qrPhotoHead();
        $this->html .= '<br/><br/><p class="fs-14">Le chef Service et le Chef Section chargé d\'admission,Inscription et Réinscription de la Scolarité soussignés, Certifient que Mr (Mme ou Mlle):</p>';
        $this->html .= '<p class="fs-12">';
        $this->studentInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">est inscrit(e) dans nos registres d\'incription sous le numéro ' . $this->data['matricule_students'] . ' et a effectivement suivi de ' . $this->data['session_registration'] . ' les etudes du premier cycle universitaire de notre Institution;</p>';
        $this->html .= '<p class="fs-14">';
        $this->html .= '<br/><table><tr><th width="175"  class="underline" align="left">Dernier niveau d\'inscription:</th><th class="bold" align="left">' . $this->data['current_level_students'] . ' Année Licence</th></tr></table>';
        $this->facultiesInfos();
        $this->html .= '</p>';
        $this->html .= '<div class="fs-14">En foi de quoi la présente attestation a été délivrée pour servir et valoir ce que de droit.</div><br/><br/><br/>';
        $this->html .= '<div class="fs-14">';
        $this->signatories(Constant::CERT_CHEF_SECTION_INSCRIPTION, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME, 5);
        $this->html .= '</div>';
    }
    function level()
    {

        $this->qrPhotoHead();
        $this->html .= '<br/><br/><p class="fs-14">Le chef Service et le Chef Section  suivi du cheminement de la Scolarité soussignés, Attestent que:</p>';
        $this->html .= '<p class="fs-14">';
        $this->studentInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">s\'est effectivement inscrit(e) en ' . $this->data['year_number'] . ' Année du Premier cycle universitaire (Licence) de notre Institution sous le N° matricule ' . $this->data['matricule_students'] . ' au titre de l\'année universitaire ' . $this->data['session_registration'] . ';</p>';
        $this->html .= '<p class="fs-14">';
        $this->facultiesInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">';
        $this->marks_appreciation('Avec les appréciations suivantes :');
        $this->html .= '</p>';
        $this->html .= '<div class="fs-14">En foi de quoi la présente attestation a été délivrée pour servir et valoir ce que de droit.</div>';
        $this->html .= '<div class="fs-14">';
        $this->signatories(Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME);
        $this->html .= '</div>';
    }
    function regitration()
    {
        $this->qrPhotoHead();
        $this->html .= '<br/><br/><br/><p class="fs-14">Le chef Service et le Chef Section chargé d\'admission,Inscription et Réinscription de la Scolarité soussignés,<br/>Attestent que:</p>';
        $this->html .= '<p class="fs-14">';
        $this->studentInfos();
        $this->html .= '</p>';
        $this->html .= '<p class="fs-14">est effectivement inscrit(e) en ' . $this->data['year_number'] . ' Année du Premier cycle universitaire (Licence) de notre Institution sous le numero ' . $this->data['matricule_students'] . ' au titre de l\'année universitaire ' . $this->data['session_registration'] . ';</p>';
        $this->html .= '<p class="fs-14">';
        $this->facultiesInfos();
        $this->html .= '</p>';
        $this->html .= '<div class="fs-14">En foi de quoi la présente attestation a été délivrée pour servir et valoir ce que de droit.</div><br/>';
        $this->html .= '<div class="fs-14">';
        $this->signatories(Constant::CERT_CHEF_SECTION_INSCRIPTION, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME, 5);
        $this->html .= '</div>';
    }
    function studentInfos()
    {
        $this->html .= '<br/><table class="padding gray-border">
        <tr><th width="77" align="left">Nom :</th><th class="bold" width="198" align="left">' . $this->data['lname_students'] . '</th><th width="75" align="rigth">Prénom(s) :</th><th class="bold" width="190">' . $this->data['fname_students'] . '</th></tr>
        <tr><th width="75" align="left">Né(e) ' . Helpers::dateFormatDetected($this->data['date_born_students']) . ' :</th><th class="bold" width="200" align="left">' . $this->data['date_born_students'] . '</th><th width="75" align="rigth">à :</th><th class="bold"  width="190">' . $this->data['place_birth_students'] . '</th></tr>
        <tr><th width="75" align="left">Fils(le) de :</th><th class="bold" width="200" align="left">' . ucfirst(isset($this->data['father_students']) ? $this->data['father_students'] : '') . '</th><th width="75" align="rigth">et de :</th><th class="bold"  width="190">' . ucfirst(isset($this->data['mother_students']) ? $this->data['mother_students'] : '') . '</th></tr>
        </table>';
    }
    function facultiesInfos()
    {
        $this->html .= '<br/><table>
        <tr><th width="95"  class="underline" align="left">Programme :</th><th class="bold" align="left">' . Helpers::ucwords($this->data['name_programmes']) . '</th></tr>

        <tr><th width="95" class="underline" align="left">Département :</th><th class="bold" align="left">' . Helpers::ucwords($this->data['name_departments']) . '</th></tr>

        <tr><th width="95" class="underline" align="left">Faculté :</th><th class="bold" align="left">' . Helpers::ucwords($this->data['name_faculties']) . '</th></tr>
        </table>';
    }
    function marks()
    {
        $this->marks_head();
        $this->marks_body();
        $this->marks_foot();
    }
    /**
     * MARKSHEET FULL
     */
    function repportMarhsheetFull()
    {
        $this->marksFull_head();
        $this->marksFull_body();
        $this->marks_foot();
    }
    function marksFull_head()
    {

        $this->qrPhotoHead();
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Etudiant :</th><th  width="220" align="left">' . $this->data['fname_students'] . ' ' . $this->data['lname_students'] . '</th><th align="rigth">Matricule :</th><th width="90">' . $this->data['matricule_students'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Faculté :</th><th  width="445" align="left">' . $this->data['name_faculties'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Departement :</th><th  width="445" align="left">' . $this->data['name_departments'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Programme :</th><th  width="445" align="left">' . $this->data['name_programmes'] . '</th></tr></table>';
        $this->html .= '<br/>';
    }
    function marksFull_body()
    {

        foreach ($this->data['courses_items'] as $items) {
            $this->marksFull_table($items);
        }
    }
    function marksFull_table($items)
    {

       // $this->html .= '<p class="marks_sem_title">' . $items['title'] . '</p>';
        $this->html .= '<table cellpadding="2" class="table_marks">
        <tr><th width="30" rowspan="2">N<sup>o</sup> Ord</th><th width="32" rowspan="2"><div class="vl">&nbsp;</div>Session</th><th width="272" rowspan="2"><div class="vl">&nbsp;</div>Cours</th><th width="42" rowspan="2"><div class="vl">&nbsp;</div>NbCredits</th><th width="67" colspan="2">Note</th><th width="42" rowspan="2">Valeur numerique</th><th width="55" rowspan="2">Moyenne du groupe</th></tr>
        <tr><th>Chiffré</th><th>Littérale</th></tr>';
        // var_dump($items);exit();
        foreach ($items['courses'] as $i => $course) {
            // var_dump($course);
            $this->html .= '<tr><th>' . ($i + 1) . '</th><th>' . $course['session'] . '</th><th align="left">' . ucfirst($course['cours']) . '</th><th>' . $course['credits'] . '</th><th>' .  Helpers::markSheetDecrypt(($course['mark'])) . '</th><th>' . $course['letter']['letter'] . '</th><th>' . $course['num_val'] . '</th><th>' . $course['fullAvgSchedulle'] . '</th></tr>';
        }
        $this->html .= '</table><br/>';
    }
    /**
     * END 
     */
    function Registration_marks_head()
    {

        $photo = '../public/images/photos/' . $this->data['matricule_students'] . '.jpg';
        if (!is_file($photo)) {
            $photo = '../public/images/avatar/avatar_no_photo.jpg';
        }
        if ($this->ref_num) {
            Helpers::qr_code('https://scolarite-uglcs.com/verif/' . $this->ref_num . '/document', $this->pathTmp . "/" . $this->ref_num . '.png');
            $qrPath = $this->pathTmp . "/" . $this->ref_num . '.png';
        } else {
            $qrPath = '../public/images/qr/' . $this->data['id_students'] . '.png';
        }
        $this->html .= '<table><tr><th width="65"><img src="' . $qrPath . '" /></th>';
        $this->html .= '<td width="425">';
        $this->html .= '<span class="header">' . $this->title . '</span>';
        $this->html .= '<div class="header2">' . $this->titleDescription . '</div>';
        $this->html .= '</td>';
        $this->html .= '<th width="50"><img src="' . $photo . '" /></th>';
        $this->html .= '</tr></table>';
        $this->html .= '<br/><p style="padding" class="">1. Etat Civil :</p>';
        $this->html .= '<br/><table class="table_header"><tr><th width="85" align="left">Etudiant :</th><th  width="170" align="left">' . ucfirst($this->data['fname_students']) . ' ' . ucfirst($this->data['lname_students']) . '</th><th align="rigth">Matricule :</th><th width="150" align="left">' . $this->data['matricule_students'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="85" align="left">Né(e) en :</th><th  width="170" align="left">' . ucfirst(isset($this->data['date_born_students']) ? $this->data['date_born_students'] : '') . '</th><th align="rigth"> à :</th><th width="150">' . ucfirst(isset($this->data['place_birth_students']) ? $this->data['place_birth_students'] : '') . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="85" align="left">Père :</th><th  width="170" align="left">' . ucfirst(isset($this->data['father_students']) ? $this->data['father_students'] : '') . '</th><th align="rigth"> Mère :</th><th width="150">' . ucfirst(isset($this->data['mother_students']) ? $this->data['mother_students'] : '') . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="85" align="left">Nationnalité :</th><th  width="170" align="left">' . ucfirst(($this->data['country_students'] == 'GN') ? 'GUINEENNE' : $this->data['country_students']) . '</th><th align="rigth"> Sexe :</th><th width="150">' . ucfirst($this->data['sex_students']) . '</th></tr></table>';
        $this->html .= '<br/><p style="padding" class=""></p>';
        $this->html .= '<p style="padding" class="">2. Inscription Demandée :</p>';
        $this->html .= '<br/><table class="table_header"><tr><th width="95" align="left">Faculté :</th><th  width="445" align="left">' . $this->data['name_faculties'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Departement :</th><th  width="445" align="left">' . $this->data['name_departments'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="80" align="left">Programme :</th><th  width="150" align="left">' . $this->data['name_programmes'] . '</th><th align="rigth">Niveaux :</th><th width="70">' . $this->data['level_registration'] . '</th> <th align="rigth">' . Helpers::getSemester()[$this->data['semester_registration']] . '</th><th width="60"></th></tr></table>';

        $this->html .= '<br/>';
    }
    function marks_head()
    {

        $this->qrPhotoHead();
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Etudiant :</th><th  width="220" align="left">' . $this->data['fname_students'] . ' ' . $this->data['lname_students'] . '</th><th align="rigth">Matricule :</th><th width="90">' . $this->data['matricule_students'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Faculté :</th><th  width="445" align="left">' . $this->data['name_faculties'] . '</th></tr></table>';
        $this->html .= '<table class="table_header"><tr><th width="95" align="left">Departement :</th><th  width="445" align="left">' . $this->data['name_departments'] . '</th></tr></table>';
        $this->html .= '<br/>';
    }
    function marks_foot()
    {
        $this->marks_appreciation();
        // var_dump($this->data['lname_students']);
        if (isset($this->data['type_reglement_students'])) {
            if ($this->data['type_reglement_students'] == constant::OLD_YEAR_REGLEMENT_2007) {
                $this->marks_appreciation_old();
            } else {
                $this->marks_appreciation_();
            }
        } else {
            $this->marks_appreciation_();
        }
        $this->html .= '<div class="fs-10">';
        $this->signatories(Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS, Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME);
        $this->html .= '</div>';
    }
    /*
    private function marks_appreciation($title = 'Appreciation générale :')
    {
    $this->html .= '<div class="no-padding">' . $title . '</div>';
    $this->html .= '<table class="table_header">
    <tr><th width="195">Nombre de Cours total  :</th><td>' . Constant::NBR_COURSES_CERTIFICATE_LEVEL . '</td><th align="center">Crédits validés</th><th align="center" width="65">Moyenne</th><th align="center" width="65">Mention</th></tr>
    <tr><th width="195">Nombre de Cours reussi :</th><td>' . $this->data['validatedCoures'] . '</td><th align="center">' . $this->data['creditValidated'] . '/' . Constant::NBR_CREDIT_CERTIFICATE_LEVEL . '</th><th align="center" width="65">' . $this->data['cumulativeAvg'] . '</th align="center"><th align="center" width="65">' . $this->data['letterCumulativeAvg']['letter'] . '</th></tr>
    <tr><th width="195">Nombre de Cours échoué :</th><td>' . $this->data['faildCourses'] . '</td><th></th><th></th><th></th></tr>
    <tr><th width="195">Nombre de Cours Non evalué :</th><td>' . $this->data['notEvaluatedCourses'] . '</td><th></th><th></th><th></th></tr>
    </table>';
    }*/

    function marks_appreciation($title = 'Appreciation générale :')
    {
        $this->html .= '<div>' . $title . '</div>';
        $this->html .= '<table class="table_header">
        <tr><th width="195">Nombre de Cours total du Programme :</th><td>' . $this->data['totalCourses'] . '</td><th align="center">Crédits validés</th><th align="center" width="65">Moyenne</th><th align="center" width="65">Mention</th></tr>
        <tr><th width="195">Nombre de Cours reussi:</th><td>' . $this->data['validatedCoures'] . '</td><th align="center">' . $this->data['creditValidated'] . '/' . $this->data['totalCredit'] . '</th><th align="center" width="65">' . $this->data['cumulativeAvg'] . '</th align="center"><th align="center" width="65">' . $this->data['letterCumulativeAvg']['letter'] . '</th></tr>
        <tr><th width="195">Nombre de Cours échoué:</th><td>' . $this->data['faildCourses'] . '</td><th></th><th></th><th></th></tr>
        <tr><th width="195">Nombre de Cours Non evalué:</th><td>' . $this->data['notEvaluatedCourses'] . '</td><th></th><th></th><th></th></tr>
        </table>';
    }
    function marks_appreciation2($title = 'Appreciation générale :')
    {
        $this->html .= '<div class="no-padding">' . $title . '</div>';
        $this->html .= '<table class="padding gray-border">
        <tr><th>Credit reussi</th><th align="center">Moyenne cumulative</th><th align="center" >Mention</th><th align="center" >Session de validation</th></tr>
        
        <tr><th>' . $this->data['creditValidated'] . '/' . $this->data['totalCredit'] . '</th><th align="center">' . $this->data['cumulativeAvg'] . '</th><th align="center" >' . $this->data['letterCumulativeAvg']['obs'] . '</th><th align="center" >' . $this->data['validation_session'] . '</th></tr>
        </table>';
    }
    function marks_appreciation_old()
    {
        $this->html .= '<table class="table_appreciation_">
        <tr><th>A &nbsp;&nbsp; : &nbsp;&nbsp; Excelent</th><th>E &nbsp;&nbsp; : &nbsp;&nbsp; Faible</th><th>S &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Exigence satisfaite</th></tr>
        <tr><th>B &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Très bien</th><th>F &nbsp;&nbsp; : &nbsp;&nbsp; Echec</th><th>R &nbsp;&nbsp; : &nbsp;&nbsp; Remise des resultats differée</th></tr>
        <tr><th>C &nbsp;&nbsp; : &nbsp;&nbsp;  Bien</th><th>H &nbsp; : &nbsp;&nbsp; Hors programme</th><th>F &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Annulation non autoriséę</th></tr>
        <tr><th>D &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; Passable</th><th>K &nbsp; : &nbsp;&nbsp; Exemption</th> <th>P &nbsp; : &nbsp;&nbsp; Cours d\' appoint</th><th></th></tr>
        <tr><th align="center" colspan="3">NB : La moyenne cumulative varie de 0 à 4</th></tr>
        </table>';
    }
    function marks_appreciation_()
    {
        $this->html .= '<table class="table_appreciation_">
        <tr><th>A+, A, A- &nbsp;&nbsp; : &nbsp;&nbsp; Très bien</th><th>E &nbsp;&nbsp; : &nbsp;&nbsp; Dette academique</th><th>S &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Exigence satisfaite</th></tr>
        <tr><th>B+, B, B- &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Bien</th><th>F &nbsp;&nbsp; : &nbsp;&nbsp; Annulation non Autorisé</th><th>R &nbsp;&nbsp; : &nbsp;&nbsp; Remise des resultats differée</th></tr>
        <tr><th>C+, C, C- &nbsp;&nbsp; : &nbsp;&nbsp; Assez Bien</th><th>H &nbsp; : &nbsp;&nbsp; Hors programme</th><th>F &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp; Annulation non autoriséę</th></tr>
        <tr><th>D+, D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; Passable</th><th>K &nbsp; : &nbsp;&nbsp; Exemption</th> <th>P &nbsp; : &nbsp;&nbsp; Cours d\' appoint</th><th></th></tr>
        <tr><th align="center" colspan="3">NB : La moyenne cumulative varie de 0 à 4</th></tr>
        </table>';
    }
    function qr_code($line = 5)
    {
        if ($this->ref_num) {
            Helpers::qr_code('https://scolarite-uglcs.com/verif/' . $this->ref_num . '/document', $this->pathTmp . "/" . $this->ref_num . '.png');
            $this->html .= '<div style="text-align: center;">' . str_repeat('<br/>', $line) . '<img style="width:80px;" src="' . $this->pathTmp . "/" . $this->ref_num . '.png" /></div>';
        } else {
            $this->html .= '<div style="text-align: center;">' . str_repeat('<br/>', $line) . '<img style="width:80px;" src="../public/images/qr/' . $this->data['id_students'] . '.png" /></div>';
        }
    }
    function signatories($label, $ss_name, $line = 3)
    {
        $fs_name = Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS_NAME;
        if (Constant::CERT_CHEF_SECTION_INSCRIPTION == $label) {
            $fs_name = Constant::CERT_CHEF_SECTION_INSCRIPTION_NAME;
        }

        $this->html .= '<table class="table_signatories bold">
        <tr><th align="center">' . $label . '</th><th align="center">Chef Service Scolarité</th></tr>
        <tr><th align="center" class="underline">' . str_repeat('<br/>', $line) . $fs_name . '</th><th align="center" class="underline">' . str_repeat('<br/>', $line) . $ss_name . '</th></tr>
        </table>';
    }
    function signatoriesResult($doyen_faculte_name, $line = 5)
    {

        $fs_name = Constant::CERT_CHEF_SERVICE_SCOLARITÉ_NAME;
        $this->html .= '<br/><br/> <table class="table_signatories bold">
        <tr><th align="center">' . constant::CERT_CHEF_SERVICE_SCOLARITÉ . '</th><th align="center">Doyen de Faculté</th></tr>
        <tr><th align="center" class="underline">' . str_repeat('<br/>', $line) . $fs_name . '</th>
        <th align="center" class="underline">' . str_repeat('<br/>', $line) . $doyen_faculte_name . '</th></tr>
        </table>';
    }
    function signatoriesResult2($line = 5)
    {

        $fs_name = Constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS_NAME;
        $this->html .= '<br/><br/> <table class="table_signatories bold">
        <tr><th align="center">' . constant::CERT_CHEF_SECTION_SUIVI_CHEMINEMENTS . '</th><th align="center">Doyen de Faculté</th></tr>
        <tr><th align="right" class="underline">' . str_repeat('<br/>', $line) . $fs_name . '</th>
        </table>';
    }
    function marks_body()
    {

        foreach ($this->data['courses_items'] as $items) {
            $this->marks_table($items);
        }
    }
    function marks_table($items)
    {

        $this->html .= '<br/><p class="marks_sem_title">' . $items['title'] . '</p>';
        $this->html .= '<table cellpadding="2" class="table_marks">
        <tr><th width="30" rowspan="2">N<sup>o</sup> Ord</th><th width="32" rowspan="2"><div class="vl">&nbsp;</div>Session</th><th width="327" rowspan="2"><div class="vl">&nbsp;</div>Cours</th><th width="42" rowspan="2"><div class="vl">&nbsp;</div>NbCredits</th><th width="67" colspan="2">Note</th><th width="42" rowspan="2">Valeur numerique</th></tr>
        <tr><th>Chiffré</th><th>Littérale</th></tr>';
        foreach ($items['courses'] as $i => $course) {
            $this->html .= '<tr><th>' . ($i + 1) . '</th><th>' . $course['session'] . '</th><th align="left">' . ucfirst($course['cours']) . '</th><th>' . $course['credits'] . '</th><th>' .  $course['mark'] . '</th><th>' . $course['letter']['letter'] . '</th><th>' . $course['num_val'] . '</th></tr>';
        }
        $this->html .= '</table><br/>';
    }
    function setInfo()
    {
        $this->pdf->SetCreator('UGLCS Gest');
        $this->pdf->SetAuthor('Creative IT Solution Guinea');
        $this->pdf->SetTitle('Note');
        $this->pdf->SetSubject('3eme Annee');
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
                        font-size: 14pt;
                        text-align: center;
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

    function css_annual_result()
    {
        $this->html .= <<<EOF
        <style>
        .annual_result .annual_header th { font-weight:bold;border-bottom:1px solid black;font-size:10pt}
        .annual_result .annual_data th {border-bottom:1px solid gray;}
        .annual_result{font-size:9pt;text-align:center}

        </style>
        EOF;
    }
    function css_bill()
    {
        $this->html .= <<<EOF
        <style>
        table.invoice { border-collapse: separate; border-spacing: 2px; }
        table.meta, table.balance {width: 36%; }
        table.invoice th { border-width: 1px; text-align: left; background-color: #EEE; border-color: #BBB; border-radius: 0.25em; border-style: solid;}
        table.invoice td { border-width: 1px; text-align: left; border-color: #DDD; border-radius: 0.25em; border-style: solid;}
        table.invoice th.no-bg{background-color: #FFF;}
        table.invoice th.no-border{border-color: #FFF;}
        .header-invoice{ font-size:15pt; background-color: #000; border-radius: 0.25em; color: #FFF;text-align:center;height:50px }
        table.inventory th { font-weight: bold; text-align: center; }
        table.balance th, table.balance td { width: 50%; }
        table.balance td { text-align: right; }
        table.balance td { text-align: right; }
        </style>
        EOF;
    }
    function css_id_card()
    {
        $w = 789;
        $hw = $w / 2;
        $this->html .= <<<EOF
            <style>
                .face{width:88mm;border:1px solid #ccc;}
                .editField-2{
                    border-bottom: 1px solid #ccc;
                    border-right: 1px solid #ccc;
                    border-left: 1px solid #ccc;
                    font-size: 9px;
                }
            </style>

        EOF;
    }
    function css_marks()
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

            table.table_header {
                        font-size: 10pt;
                        padding-top:3px;
                        padding-bottom:3px;
                        padding-left:7px;
                        padding-right:7px;
                        border: 1px solid gray;
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
    function css_userResetForm()
    {
        $this->html .= <<<EOF
            <style>
            .h2{
                font-size: 25pt;
            }
             .row {
                 width:100%;
                 height:500px;
                 margin:0px;
                 padding:0px;
            }
            .col-4{
                background-color:DodgerBlue;
                color:#FFF;
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
}
