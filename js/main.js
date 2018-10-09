(function($) {

	"use strict";

    // Preloader
    $(window).on('load', function() { 
      $('#preloader').delay(350).fadeOut('slow'); 
    })

    // Wow Animation
    new WOW().init();

    // Navbar animation on scroll
    $(window).scroll(function() {
      if ($(document).scrollTop() > 5) {
        $('.navbar').addClass('scrolling-header');
      } else {
        $('.navbar').removeClass('scrolling-header');
      }
    });

    // History carousel
    if($('.history-carousel').length){
        $('.history-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fas fa-long-arrow-alt-left"></i>',
              '<i class="fas fa-long-arrow-alt-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }



    // Speaker carousel
    if($('.speaker-carousel').length){
        $('.speaker-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 700,
            navText: [
              '<i class="fas fa-long-arrow-alt-left"></i>',
              '<i class="fas fa-long-arrow-alt-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    //speaker description modal

    var speaker_description = {
        "akshay": {
            name: "Akshay Bahadur",
            photo: "images/speaker/1.jpg",
            description: "Akshay is an alumni of Symbiosis Institute of Technology. \
            His interest towards computer science sparked when he was working on a \
            women's safety application aimed towards the women welfare in India \
            and since then he has been incessantly working on improving his skills. \
            He stumbled upon machine learning then. He has made several open-source \
            contributions in the field of ML and would continue to do so. \
            He has made successful prototypes like autonomous car, alphabet recognition, \
            cancer classification, gesture recognition using learning models. \
            His ambition is to make valuable contributions towards ML community and \
            leave a message of perseverance and tenacity. Currently, he is working \
            as a software engineer at Symantec, India. He is also deeply influenced by \
            literature especially Shakespeare's work. <br/><br/>\
            <b>Workshop Session Topic: Stacked Encoders/Generative Adversarial Networks</b>",
        },
        "kotecha": {
            name: "Dr Ketan Kotecha",
            photo: "images/speaker/2.jpg",
            description: "Dr Kotecha has a doctorate from IIT Bombay and a \
            very illustrious and path-breaking research activities under his belt. \
            A researcher- teacher of Deep learning, his interest areas are Artificial \
            Intelligence, Computer Algorithms, Machine Learning, Deep Learning Higher \
            Order Thinking Skills, Critical Thinking and Ethics & Values. Dr Kotecha is \
            a pioneer in Education Technology, and believes in drastic and needed \
            curriculum reforms and innovative teaching-learning practices as call \
            of the hour. A voracious reader, he is passionate about travelling and \
            indulging in good food. <br/><br/> \
            <b>Session Topic : CNN Theory</b>"
        },
        "saurabh": {
            name: "Saurabh Deshpande",
            photo: "images/speaker/3.jpg",
            description: "Saurabh is passionate about analytics, machine learning, \
            deep learning, Cloud Technologies. He is currently working as a Senior \
            Software engineer at SAS which is a top Research and Development Product \
            Company in Pune. He has more than 11 years of experience in architecture \
            and development of enterprise scale web applications, cloud technologies \
            such as AWS, OpenStack, CloudFoundry, server less and microservice based \
            architectures. Since past three years he has been exploring and \
            experimenting in the field of visual analytics, machine learning, \
            deep learning using python based libraries such as pandas, scikit learn, \
            pytorch and tensorflow. <br/>\
            He conducts internal company level training in cloud and python areas \
            spanning multiple days. <br/>\
            He have been presenting in the NLP, Cloud Computing, Machine learning area \
            in internal company conferences and local colleges for masters students \
            since 3 years. <br/><br/>\
            <b>Workshop Session Topic: Reinforcement Learning<b>"
        },
        "raghu": {
            name: "Dr. Raghu Santanam",
            photo: "images/speaker/4.jpg",
            description: "Dr. Santanam is a Professor of Information Systems at the \
            W. P. Carey School of Business, Arizona State University. Professor \
            Santanam’s research has focused on the impacts of technology and \
            technology strategies on businesses, society, and consumers. His research \
            areas of interest include, health information technology, digital platforms \
            and markets, services and business process design, and information assurance. \
            His research on digital platforms has explored emerging business strategies, \
            consumer preferences, and trends in software markets and platforms. He is an \
            active researcher in the health information technology area and has published \
            scholarly articles on electronic medical records impacts on hospitals, \
            personal health records adoption by consumers, and technology-based decision \
            support for public health. His work has been published in leading \
            peer-reviewed journals, including Management Science, Information \
            Systems Research, Journal of Management Information Systems, Journal \
            of the Association for Information Systems, and Decision Support Systems. <br/><br/> \
            <b>Workshop Session Topic: Skype Session on General Aspects of AI</b>"
        },
        "aniruddha": {
            name: "Aniruddha Pant",
            photo: "images/speaker/5.jpg",
            description: "Aniruddha has been head of data analytics and strategic \
            quantitative activities in large organizations as well as start-ups. \
            Worked extensively in data analytics and machine learning as applied \
            to various domains. Overall experience of 20+ years in application of \
            advanced mathematical techniques to various academic and enterprise problems. \
            15+ years experience in building and leading groups specializing in high-end \
            quantitative analysis work. <br/>\
            At AlgoAnalytics the work is focused in data science with application areas \
            like financial trading, BFSI, IoT, Healthcare, Retail and Legal. <br/><br/>\
            <b>Workshop Session Topic: NLP</b>"
        },
        "vishal": {
            name: "Vishal Gokhale",
            photo: "images/speaker/6.jpg",
            description: "Vishal is a programmer, consultant and a learning facilitator. \
            He has worked with enterprises, startups and NGO in various roles. During \
            his 14+ years in the industry, he has worked in diverse roles ranging from \
            programmer to wildlife research assistant to math facilitator. As a \
            full-stack developer he has delivered applications for a wide range of \
            domains like telecom, advertising, manufacturing, hospitality, home \
            automation, and wildlife conservation. He conducts math trainings at \
            various conferences and also teaches math at B-school's PG Program in \
            Data Science and Analytics. <br/><br/>\
            <b>Workshop session Topic: Mathematics for Deep Learning</b>"
        },
        "rahee": {
            name: "Rahee Walambe",
            photo: "images/speaker/7.jpg",
            description: "Rahee is an experienced Robotics and AI researcher with \
            a demonstrated ability of combining core research with cutting edge \
            technology to create unique products. She is passionate about applications \
            of Machine learning/Deep Learning for various domains including, multi-sensor \
            data fusion for defence solutions, medical imaging applications, assistive \
            technology and healthcare. <br/><br/>\
            <b>Session Topic : RNN and LSTM theory</b>"
        },
        "madhura": {
            name: "Madhura Ingalhalikar",
            photo: "images/speaker/8.png",
            description: "Madhura is Associate Professor and Head of Symbiosis Center \
            for medical Image Analysis (SCMAI). She is an expert in computational \
            neuroimaging and has published extensively including PNAS. Her earlier \
            work has used machine learning techniques for quantifying and analyzing \
            brain images and to predict the pathophysiology. Her recent work in tumor \
            classification using deep convolutional neural nets is under review, where \
            she demonstrates how discriminative localization is important to gain deeper \
            insights into the pathology of the tumor. <br/><br/>\
            <b>Session Topic: Case Study : CNN for Medical Imaging </b>"
        },
    };

    $('#speaker-description').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('speaker') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var speaker = speaker_description[recipient];
        var modal = $(this)
        modal.find('.modal-title').text(speaker.name);
        modal.find('.modal-body .description').html(speaker.description);
        modal.find('.modal-body .photo img').attr("src", speaker.photo);
    })
    
    // CounterUp
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      }); 


    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5
    });

    // Light box - Portfolio Gallery
    lightbox.option({
      'imageFadeDuration': 500,
      'resizeDuration': 500,
      'wrapAround': true
    })


    // YTPlayer for bg video
    $('.bg-video').mb_YTPlayer();

    // Water ripples animation
    $('#water-animation').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });

    //Scroll-Up
    dyscrollup.init({
        showafter : 500,
        scrolldelay : 1000,
        position : 'right',
        shape : 'squre',
        width : "20",
        height : "20"
    });



})(window.jQuery);