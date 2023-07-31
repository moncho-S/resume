var language = {
    en: {
        resumeNav:"RESUME",
        contactNav:"CONTACT",

        profileSection:
        "<h2>Profile</h2>"+
        "<p>Electronic engineer with an "+
        "unwavering passion for software development and automation. "+
        "While I have a few years of professional experience, "+
        "I have had the privilege of working in various roles that "+
        "have enriched my skill set and provided me with a strong " +
        "foundation in electronics, programming. and designing "+
        "printed circuit boards for various applications. </p>"+
        "<p>One of my main goals is to continue learning "+
        "and growing in my current areas of expertise, "+
        "while acquiring new technologies and approaches "+
        "to become even more proficient in my work. ",
        EducationTitle: "Education",
        ExperienceTitle: "Professional Experience",
        EdBachelor:
        "<h4>Bachelor of Electronic Engineering</h4>"+
        "<h5>2014 - 2019</h5>"+
        "<p ><em >Arturo Prat University, Iquique, Chile</em></p>",

        EdPython:
        "<h4>python fullstack Trainee (462 hours)</h4>"+
        "<h5>2023</h5>"+
        "<p ><em >Edutecno (Digital talent for Chile), Santiago, Chile</em></p>",

        skillsSection:
        '<h3 class="resume-title" >Skills and competences</h3>'+
        '<li>Microcontrollers programming (Arduino, ESP32, STM32, IoT, etc...)</li>'+
        '<li>Python (Django, PyQt)</li>'+
        '<li>Programmable logic controller (PLC) in ladder language (Siemens)</li>'+
        '<li>Printed circuits boards design (PCB)</li>'+
        '<li>Web development (HTML, CSS, Bootstrap, Javascript)</li>'+
        '<li>Scrum</li>'+
        '<li>Team Work</li>'+
        '</ul>',

        experienceSection1:
        "<h4>Programmer Electronic</h4>"+
        "<h5>2021 - Present</h5>"+
        "<p><em>Nayeda Ltda.</em></p>"+
        "<ul>"+
        "<li>In charge of automating and connecting to a database a system that needed human interaction.</li>"+
        "<li>Creation of a friendly user interface focused on having the least possible interaction.</li>"+
        "<li>Implementation of continuous improvement to optimize processes in the shortest possible time</li>"+
        "</ul>",
        experienceSection2:
        "<h4>Engineering assistant</h4>"+
        "<h5>2020</h5>"+
        "<p><em>Electromining Ltda.</em></p>"+
        "<ul>"+
        "<li>Designer of electronic circuits based on sensors for use in test benches for three-phase motors to determine their longevity</li>"+
        "</ul>",
        contactSection:
        "<h2>Contact</h2>"+
        "<p>Please feel free to contact me for ongoing or future projects, "+
        "discuss potential collaborations, or just a talk, don't hesitate. "+
        "Just fill the form below and I will contact you as soon as posible.</p>",
        nameForm:"Your Name",
        emailForm:"Your Email",
        subjectForm:"Subject",
        messageForm:"Message",
        loadingForm:"Loading",
        successMessage:"Your message has been sent",
        buttonForm:"Send Message",
    },
    es: {
        resumeNav:"CURRICULUM",
        contactNav:"CONTACTO",

        profileSection:
        "<h2>Perfil Profesional</h2>"+
        "<p>Ingeniero electrónico con un "+
        "especial interes por el desarrollo de software y la automatización. "+
        "Si bien tengo pocos años de experiencia profesional, "+
        "He tenido el privilegio de trabajar en varios roles que "+
        "han enriquecido mi conjunto de habilidades y me han " +
        "proporcionado una fuerte"+
        "base en electrónica, programación, y diseño de "+
        "placas de circuito impreso para diversas aplicaciones.</p>"+
        "<p> Uno de mis principales objetivos es continuar "+
        "aprendiendo y especializarme es mis areas de mayor expertiz, mientras "+
        "utilizo nuevas tecnologias que me hagan mas "+
        "productivo en mi trabajo</p>",
        EducationTitle: "Educacion",
        ExperienceTitle: "Experiencia Profesional",
        EdBachelor:
        "<h4>Ingenieria Civil Electronica</h4>"+
        "<h5>2014 - 2019</h5>"+
        "<p ><em >Universidad Arturo Prat, Iquique, Chile</em></p>",

        EdPython:
        "<h4>python fullstack Trainee (462 horas)</h4>"+
        "<h5>2023</h5>"+
        "<p ><em >Edutecno (Talento digital para Chile), Santiago, Chile</em></p>",

        skillsSection:
        '<h3 class="resume-title" >Habilidades y competencias</h3>'+
        '<li>Programacion de microcontroladores (Arduino, ESP32, STM32, IoT, etc...)</li>'+
        '<li>Python (Django, PyQt)</li>'+
        '<li>Controladores logicos programables (PLC) en lenguaje Ladder (Siemens)</li>'+
        '<li>Diseño de placas de circuito impreso (PCB)</li>'+
        '<li>Desarrollo web (HTML, CSS, Bootstrap, Javascript)</li>'+
        '<li>Scrum</li>'+
        '<li>Trabajo en equipo</li>'+
        '</ul>',

        experienceSection1:
        "<h4>Electronico Programador</h4>"+
        "<h5>2021 - Presente</h5>"+
        "<p><em>Nayeda Ltda.</em></p>"+
        "<ul>"+
        "<li>A cargo de automatizar y conectar a una base de datos un sistema que necesitaba la intervencion humana</li>"+
        "<li>Creacion de una interfaz grafica de usuario intuitiva enfocada en la menor interaccion posible con el usuario</li>"+
        "<li>Implementacion del mejoramiento continuo del sistema al optimizar los procesos internos al menor tiempo posible</li>"+
        "</ul>",
        experienceSection2:
        "<h4>Asistente de Ingenieria</h4>"+
        "<h5>2020</h5>"+
        "<p><em>Electromining Ltda.</em></p>"+
        "<ul>"+
        "<li>Diseñador de circuitos electronicos en base a sensores para para bancos de pruebas para motores trifasicos para determinar su durabilidad</li>"+
        "</ul>",
        contactSection:
        "<h2>Contacto</h2>"+
        "<p>Sientase libre de contactarme para proyectos actuales o futuros, "+
        "hablar sobre posibles colaboraciones, etc."+
        "Llene el formulario con su informacion de contacto y contestaré tan pronto como pueda</p>",
        nameForm:"Nombre",
        emailForm:"Correo electronico",
        subjectForm:"Asunto",
        messageForm:"Mensaje",
        loadingForm:"Cargando",
        successMessage:"Su mensaje ha sido enviado con exito",
        buttonForm:"Enviar Mensaje",
    }
    };

function changeLanguage(lang) {
    if (lang == "es") {
        document.getElementById("resumeNav").innerHTML = language.es.resumeNav;
        document.getElementById("contactNav").innerHTML = language.es.contactNav;
        document.getElementById("profileSection").innerHTML = language.es.profileSection;
        document.getElementById("EducationTitle").innerHTML = language.es.EducationTitle;
        document.getElementById("EdBachelor").innerHTML = language.es.EdBachelor;
        document.getElementById("EdPython").innerHTML = language.es.EdPython;
        document.getElementById("skillsSection").innerHTML = language.es.skillsSection;
        document.getElementById("experienceSection1").innerHTML = language.es.experienceSection1;
        document.getElementById("experienceSection2").innerHTML = language.es.experienceSection2;
        document.getElementById("ExperienceTitle").innerHTML = language.es.ExperienceTitle;
        document.getElementById("contactSection").innerHTML = language.es.contactSection;
        document.getElementById("nameForm").innerHTML = language.es.nameForm;
        document.getElementById("emailForm").innerHTML = language.es.emailForm;
        document.getElementById("subjectForm").innerHTML = language.es.subjectForm;
        document.getElementById("messageForm").innerHTML = language.es.messageForm;
        document.getElementById("loadingForm").innerHTML = language.es.loadingForm;
        document.getElementById("successMessage").innerHTML = language.es.successMessage;
        document.getElementById("buttonForm").innerHTML = language.es.buttonForm;

    }
    else if (lang == "en") {
        document.getElementById("resumeNav").innerHTML = language.en.resumeNav;
        document.getElementById("contactNav").innerHTML = language.en.contactNav;
        document.getElementById("profileSection").innerHTML = language.en.profileSection;
        document.getElementById("EducationTitle").innerHTML = language.en.EducationTitle;
        document.getElementById("EdBachelor").innerHTML = language.en.EdBachelor;
        document.getElementById("EdPython").innerHTML = language.en.EdPython;
        document.getElementById("skillsSection").innerHTML = language.en.skillsSection;
        document.getElementById("experienceSection1").innerHTML = language.en.experienceSection1;
        document.getElementById("experienceSection2").innerHTML = language.en.experienceSection2;
        document.getElementById("ExperienceTitle").innerHTML = language.en.ExperienceTitle;
        document.getElementById("contactSection").innerHTML = language.en.contactSection;
        document.getElementById("nameForm").innerHTML = language.en.nameForm;
        document.getElementById("emailForm").innerHTML = language.en.emailForm;
        document.getElementById("subjectForm").innerHTML = language.en.subjectForm;
        document.getElementById("messageForm").innerHTML = language.en.messageForm;
        document.getElementById("loadingForm").innerHTML = language.en.loadingForm;
        document.getElementById("successMessage").innerHTML = language.en.successMessage;
        document.getElementById("buttonForm").innerHTML = language.en.buttonForm;

    }
  }

