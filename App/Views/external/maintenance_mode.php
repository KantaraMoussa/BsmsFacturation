<!DOCTYPE html>
<html lang="zxx">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Art Sound Group">
	
	<!--Title-->
    <title>UGLCS Sonfonia</title>
	
	<!--Seo Tags-->
	<meta name="description" content="Your page description here" />
	<meta name="keywords" content="Your meta keywords, here"/>
	<meta name="robots" content="index, follow"> 

	<!--Favicon-->
	<link rel="shortcut icon" href="{{base_url()}}images/favicon.png" type="image/x-icon">
	
	<!--Fonts-->
	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
	
	<!--General Style-->
    <link rel="stylesheet" href="{{base_url()}}fonts/fontawesome/css/all.css">
	<link rel="stylesheet" href="{{base_url()}}css/uglcs.css">
    <link rel="stylesheet" href="{{base_url()}}css/coming_soon/magnific-popup.css" type="text/css">
    <link rel="stylesheet" href="{{base_url()}}css/coming_soon/trackpad-scroll-emulator.css" type="text/css">
    <link rel="stylesheet" href="{{base_url()}}css/coming_soon/style.css" type="text/css">
	<link rel="stylesheet" href="{{base_url()}}css/coming_soon/vegas.min.css" type="text/css">
	<link rel="stylesheet" href="{{base_url()}}css/coming_soon/mailform.css" type="text/css">

</head>

<body>

<!-- Loading -->
	<div id="preload">
		<div id="preload-content">
			<div class="preload-spinner">
			<div class="loading-logo-wraper">
			<img src="{{base_url()}}images/logo-dark-small.png" alt="">
			</div>
				<div class="tp-loader spinner"></div>
			</div>
		</div>
	</div>

<!-- Content -->	
<div id="outer-wrapper" class="animate translate-z-in">
    <div id="inner-wrapper">
        <div id="table-wrapper" class="d-flex align-items-center">
            <div class="container d-flex flex-column align-items-center center">
                <div id="row-content">
                    <div id="content-wrapper">
                        <div id="content" class="animate translate-z-in animation-time-2s delay-1-5s text-white">
						  <header><img src="{{base_url()}}images/logo-dark2x.png" class="animate animate fade-in animation-time-3s" alt=""></header>
                            <h1>Maintenance!</h1>
							<h2>Désolé pour le dérangement. Nous effectuons une maintenance en ce moment.!<br/><br/> Nous serons prêts dans:</h2>
                            <div class="center count-down animate small" data-countdown-year="2017" data-countdown-month="6" data-countdown-day="21"></div>
								<a href="#modal-subscribe" class="button-xs" data-toggle="modal" data-target="#modal-subscribe">Subscribe</a>
                                <a href="#about-us" class="button-xs open-side-panel"><span>About Us</span></a>
                                <a href="#contact" class="button-xs open-side-panel"><span>Contact</span></a>
                        </div>
                    </div>
                </div>
                <div id="row-footer">
                    <footer>
                        <div class="social animate translate-z-in delay-2s">
                            <a href="#"><span class="fa-solid fa-envelope" title="Email"></span></a>
							<a href="#"><span class="fa-brands fa-facebook" title="Facebook"></span></a>
                            <a href="#"><span class="fa-brands fa-twitter" title="Twitter"></span></a>
                            <a href="#"><span class="fa-brands fa-instagram" title="Instagram"></span></a>
                            <a href="#"><span class="fa-brands fa-google-plus" title="Google Plus"></span></a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>

		<!-- Background -->
        <div class="background-wrapper overlay">
            <div class="slider opacity-50"></div>
        </div>
    </div>
</div>

<!-- Subscribe -->
<div class="modal fade" id="modal-subscribe">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h2 id="modal-subscribe-label">Subscribe</h2>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
				et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
				aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
				deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="modal-body">
                   <div id="subscribe" class="form-wrap">
						<form action="subscribe.php" method="post" id="subscribe-form">
							<p class="form-field">
								<input type="text" name="subscribe_email" id="subscribe_email" value="" placeholder="Your email" />
							</p>
							<p class="form-submit">
								<input type="submit" name="subscribe_submit" id="subscribe_submit" value="Send"/>
							</p>
						</form>
					</div>
            </div>
        </div>
    </div>
</div>

<!--Side Panel About-->
<div class="side-panel" id="about-us">
    <div class="close-panel right right"><i class="fa fa-times"></i></div>
    <div class="wrapper">
        <div class="tse-scrollable">
            <div class="tse-content">
                <div class="wrapper">
                    <div class="container  flex-column center">
                        
						<!--Content-->
						<h2>About Us</h2>
                        <section>
                            <h3>About Company</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
								aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
								deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
								aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
								dolore eu fugiat nulla pariatur.
                            </p>
                        </section>
						
						<!--Content-->
						<h2>PORTFOLIO</h2>
                        <section class="w-100" >
						<h3>Photo</h3>
							<div class="gallery">
                                <div class="row">
									
									<!--Photo1-->
                                    <div class="col-md-6 col-sm-6">
                                        <a href="{{base_url()}}images/coming_soon/gallery-1.jpg" class="gallery-item image-popup">
											 <div class="description">
                                                <figure>
                                                    <h4>Loren Ipsum</h4>
                                                    <div class="meta">
                                                        <figure>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</figure>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div class="image"><div class="bg-transfer"><img src="{{base_url()}}images/coming_soon/gallery-1.jpg" alt=""></div></div>
                                        </a>
                                    </div>
									
									<!--Photo2-->
                                    <div class="col-md-6 col-sm-6">
                                        <a href="{{base_url()}}images/coming_soon/gallery-2.jpg" class="gallery-item image-popup">
                                            <div class="description">
                                                <figure>
                                                    <h4>Loren Ipsum</h4>
                                                    <div class="meta">
                                                        <figure>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</figure>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div class="image"><div class="bg-transfer"><img src="{{base_url()}}images/coming_soon/gallery-2.jpg" alt=""></div></div>
                                        </a>
                                    </div>
									
									<!--Photo3-->
                                    <div class="col-md-6 col-sm-6">
                                        <a href="{{base_url()}}images/coming_soon/gallery-3.jpg" class="gallery-item image-popup">
											 <div class="description">
                                                <figure>
                                                    <h4>Loren Ipsum</h4>
                                                    <div class="meta">
                                                        <figure>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</figure>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div class="image"><div class="bg-transfer"><img src="{{base_url()}}images/coming_soon/gallery-3.jpg" alt=""></div></div>
                                        </a>
                                    </div>
									
									<!--Photo4-->
                                    <div class="col-md-6 col-sm-6">
                                        <a href="{{base_url()}}images/coming_soon/gallery-4.jpg" class="gallery-item image-popup">
                                            <div class="description">
                                                <figure>
                                                    <h4>Loren Ipsum</h4>
                                                    <div class="meta">
                                                        <figure>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</figure>
                                                    </div>
                                                </figure>
                                            </div>
                                            <div class="image"><div class="bg-transfer"><img src="{{base_url()}}images/coming_soon/gallery-4.jpg" alt=""></div></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
						</section>
						
						<section class="w-100" >
							<!--Team-->
                            <h2>Our Team</h2>
							<p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
								aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
								dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
								deserunt mollit anim id est laborum.
                            </p>
                            <div class="row">
							
								<!--Member1-->
                                <div class="col-md-4 col-sm-4">
                                    <div class="person has-divider">
                                        <div class="image"><div class="bg-transfer"><img src="{{base_url()}}images/coming_soon/team-1.jpg" alt=""></div></div>
										<h4>Julien Miro</h4>
                                        <figure>Software Developer</figure>
                                        <div class="social center">
											<a href="#"><span class="fa fa-facebook" title="Facebook"></span></a>
											<a href="#"><span class="fa fa-twitter" title="Twitter"></span></a>
											<a href="#"><span class="fa fa-instagram" title="Instagram"></span></a>
											<a href="#"><span class="fa fa-google-plus" title="Google Plus"></span></a>
                                        </div>
                                    </div>
                                </div>
								
								<!--Member2-->
                                <div class="col-md-4 col-sm-4">
                                    <div class="person has-divider">
                                        <div class="image"><div class="bg-transfer"><img src="{{base_url()}}images/coming_soon/team-2.jpg" alt=""></div></div>
                                        <h4>Joan Williams</h4>
                                        <figure>Support Operator</figure>
                                        <div class="social center">
											<a href="#"><span class="fa fa-facebook" title="Facebook"></span></a>
											<a href="#"><span class="fa fa-twitter" title="Twitter"></span></a>
											<a href="#"><span class="fa fa-instagram" title="Instagram"></span></a>
											<a href="#"><span class="fa fa-google-plus" title="Google Plus"></span></a>
                                        </div>
                                    </div>
                                </div>
								
								<!--Member3-->
                                <div class="col-md-4 col-sm-4">
                                    <div class="person">
                                        <div class="image"><div class="bg-transfer"><img src="{{base_url()}}images/coming_soon/team-3.jpg" alt=""></div></div>
                                        <h4>Benedict Smith</h4>
                                        <figure>Sales Manager</figure>
                                       <div class="social center">
											<a href="#"><span class="fa fa-facebook" title="Facebook"></span></a>
											<a href="#"><span class="fa fa-twitter" title="Twitter"></span></a>
											<a href="#"><span class="fa fa-instagram" title="Instagram"></span></a>
											<a href="#"><span class="fa fa-google-plus" title="Google Plus"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--Side Panel Contacts-->
<div class="side-panel" id="contact">
    <div class="close-panel"><i class="fa fa-times"></i></div>
    <div class="wrapper">
        <div class="tse-scrollable">
            <div class="tse-content">
                <div class="wrapper">
                    <div class="container  flex-column center">
                       <section>
						<!--Content-->
						<h2>CONTACT US</h2>
                        
						<!--Mail Form-->
						
							<p>Want to say hello? Want to know more about us? Drop us an email and we will get back to you as soon as we can.</p>
                            <form class='mailform' method="post" action="bat/rd-mailform.php"> 
								<input type="hidden" name="form-type" value="contact"/> 
									<fieldset>
										<div class="row">
											<div class="col-md-6 col-sm-6"> 
												<label> 
													<input type="text" name="name" placeholder="Your Name" required> 
												</label> 
											</div>
											<div class="col-md-6 col-sm-6">
												<label> 
													<input type="text" name="email" placeholder="Your E-mail" required> 
												</label>
											</div> 
										
										<div class="col-md-12">
												<label> 
													<textarea name="message" placeholder="Your Message" required></textarea> 
												</label> 
										</div>		
										<div class="mfControls"> 
												<button class="button animate" type="submit">Send My Message</button> 
										</div> 
									</div>	
									</fieldset> 
							</form>
                        </section>
						
						<section>
						<h2>GET IN TOUCH</h2>
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <h3><i class="fa fa-map-marker"></i> Address</h3>
                                    <address>
                                        220020 Belarus, Minsk, Pobeditelei ave. 24
                                    </address>
                                </div>
								 <div class="col-md-4 col-sm-4">
                                    <h3><i class="fa fa-phone"></i> Phone</h3>
                                    <address>
                                       +1 384-384-3843<br>
									   +1 384-385-3853
                                    </address>
                                </div>
								 <div class="col-md-4 col-sm-4">
                                    <h3><i class="fa fa-envelope-o"></i> E-mail</h3>
                                    <address>
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </address>
                                </div>
                            </div>
                        </section>
                        
						<!--Google Map-->
						<section>
                            <h3>Map</h3>
                            <div class="map" id="map-contact"></div>
                        </section> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="backdrop"></div>

<!--Java Scripts-->
<script src="{{base_url()}}js/scripts/__jlive.js"></script>
<script src="{{base_url()}}js/bundle.js"></script>
<script type="text/javascript" src="{{base_url()}}js/coming_soon/jquery.plugin.min.js"></script>
<script type="text/javascript" src="{{base_url()}}js/coming_soon/custom.js"></script>

<!--Google Map API KEY-->
<script type="text/javascript">
    var latitude = 53.9339419;
    var longitude = 27.5048208;
    var markerImage = "{{base_url()}}images/coming_soon/map-marker-w.png";
    var mapTheme = "dark";
    var mapElement = "map-contact";
    //google.maps.event.addDomListener(window, 'load', simpleMap(latitude, longitude, markerImage, mapTheme, mapElement));
	
	$(".slider").vegas({
        timer: false,
        delay: 6000,
        transitionDuration: 2000,
		transition: "blur2",
		animation: "kenburns",
        slides: [
        {   src: '{{base_url()}}images/coming_soon/bg1.jpg',
            video: {
                src: [
                    '{{base_url()}}images/coming_soon/video4.mp4',
                ],
                loop: true,
                mute: true
            }
        }
    ]
    });
</script>


</body>
