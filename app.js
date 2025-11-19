const datosWeb = {
    nombreNegocio: "Sonia Cifuentes",

    menu: [
        { texto: "Inicio", link: "#inicio", icono: "fa-home" },
        { texto: "Servicios", link: "#servicios", icono: "fa-briefcase" },
        { texto: "Experiencia", link: "#experiencia", icono: "fa-clock" },
        { texto: "Sobre Mí", link: "#sobre", icono: "fa-user" },
        { texto: "Contacto", link: "#contacto", icono: "fa-envelope" }
    ],

    hero: {
        badge: "Contadora Pública Certificada",
        badgeIcono: "fa-certificate",
        titulo: "Optimiza tu contabilidad con asesoría profesional",
        subtitulo: "Más de 10 años ayudando a empresas y personas en Colombia a cumplir con sus obligaciones fiscales de manera eficiente"
    },

    servicios: [
        {
            icono: "fa-calculator",
            titulo: "Contabilidad",
            descripcion: "Llevanza de libros contables, estados financieros y reportes para empresas de todos los tamaños."
        },
        {
            icono: "fa-file-invoice-dollar",
            titulo: "Declaración de Renta",
            descripcion: "Asesoría y elaboración de declaraciones de renta para personas naturales y jurídicas."
        },
        {
            icono: "fa-chart-line",
            titulo: "Asesoría Tributaria",
            descripcion: "Consultoría en temas tributarios, IVA, retención en la fuente y optimización fiscal."
        },
        {
            icono: "fa-money-check-alt",
            titulo: "Nómina",
            descripcion: "Liquidación de nómina, aportes parafiscales."
        },
        {
            icono: "fa-building",
            titulo: "Constitución de Empresas",
            descripcion: "Asesoría en la creación y registro de empresas ante Cámara de Comercio y DIAN."
        },
        {
            icono: "fa-clipboard-check",
            titulo: "Revisoría Fiscal",
            descripcion: "Servicios de revisoría fiscal para empresas que lo requieran por ley."
        }
    ],

    experiencia: [
        {
            "año": "2010 - Presente",
            "cargo": "Contadora Independiente",
            "empresa": "Consultora Propia",
            "descripcion": "Asesoría contable, financiera y tributaria a más de 100 clientes entre personas naturales, microempresas y PYMES. Diseño de estrategias de optimización fiscal, preparación de estados financieros y acompañamiento en procesos de auditoría bajo normativas vigentes."
        },
        {
            "año": "2010 - Presente",
            "cargo": "Revisora Fiscal",
            "empresa": "Cuerpo de bomberos voluntarios de Yondó",
            "descripcion": "Supervisión del área contable, verificación del cumplimiento normativo y fiscal, implementación de NIIF y elaboración de informes financieros. Coordinación de auditorías y liderazgo."
        },
        {
            "año": "2012 - Presente",
            "cargo": "Contadora - Revisora Fiscal",
            "empresa": "Funderprocar",
            "descripcion": "Revisión y validación de información contable, elaboración de estados financieros, manejo de obligaciones tributarias y conciliaciones bancarias. Generación de reportes financieros para la toma de decisiones."
        },
        {
            "año": "2023 - Presente",
            "cargo": "Contadora",
            "empresa": "Multiservicios R&D S.A.S",
            "descripcion": "Gestión contable completa, registro de operaciones, análisis financiero y elaboración de estados financieros. Presentación de declaraciones tributarias, manejo de nómina y conciliaciones bancarias. Apoyo en auditorías internas y mejora de procesos contables."
        },
        {
            "año": "2025 - Presente",
            "cargo": "Contadora",
            "empresa": "F&F Logistica de transportes S.A.S",
            "descripcion": "Administración contable enfocada en el sector logístico. Control de costos operativos, facturación, análisis de cuentas por cobrar y pagar, elaboración de informes financieros y gestión tributaria. Optimización de procesos y conciliaciones bancarias."
        },
        {
            "año": "2025 - Presente",
            "cargo": "Contadora",
            "empresa": "Servicios integrales RMG S.A.S",
            "descripcion": "Registro y control de operaciones contables, elaboración de estados financieros, gestión tributaria y conciliaciones. Optimización de procesos contables y apoyo en planificación financiera y presupuestal."
        }
    ],
    sobre: {
        nombre: "Sonia Cifuentes",
        titulo: "Lic. Contadora Pública",
        descripcion: "Profesional comprometida con la excelencia y el cumplimiento de las obligaciones fiscales. Mi experiencia abarca desde la implementación de NIIF hasta la optimización tributaria para empresas de diversos sectores. Me apasiona ayudar a mis clientes a tomar decisiones financieras informadas.",
        añosExperiencia: "14+",
        clientesSatisfechos: "100+"
    },

    contacto: {
        telefono: "+57 302 6870555",
        email: "soniacifuentes1974@gmail.com",
        direccion: "Yondó, Colombia",
        horario: "Lun - Vie: 8:00 AM - 8:00 PM"
    },

    whatsapp: {
        numero: "573026870555",
        mensaje: "Hola, vengo de la pagina web y estoy interesado en sus servicios de contaduría."
    },

    footer: {
        texto: "Servicios profesionales de contabilidad y asesoría tributaria en Colombia. Comprometida con la transparencia y el cumplimiento normativo.",
        copyright: "© 2025 Sonia Cifuentes - Contadora Pública. Todos los derechos reservados."
    }
};

window.addEventListener('load', function () {
    setTimeout(() => {
        document.getElementById('skeleton').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('content').style.animation = 'fadeIn 0.5s ease';
        cargarDatos();
        inicializarMenu();
        inicializarScrollEffects();
    }, 500);
});

function cargarDatos() {
    document.getElementById('logo').textContent = datosWeb.nombreNegocio;

    const menuElement = document.getElementById('menu');
    datosWeb.menu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.innerHTML = `<i class="fas ${item.icono}"></i> <span>${item.texto}</span>`;
        li.appendChild(a);
        menuElement.appendChild(li);
    });

    const heroBadge = document.getElementById('heroBadge');
    heroBadge.innerHTML = `<i class="fas ${datosWeb.hero.badgeIcono}"></i> ${datosWeb.hero.badge}`;
    document.getElementById('heroTitulo').textContent = datosWeb.hero.titulo;
    document.getElementById('heroSubtitulo').textContent = datosWeb.hero.subtitulo;

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    const serviciosGrid = document.getElementById('serviciosGrid');
    datosWeb.servicios.forEach((servicio, index) => {
        const card = document.createElement('div');
        card.className = 'servicio-card';
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
        card.innerHTML = `
            <div class="servicio-icono">
                <i class="fas ${servicio.icono}"></i>
            </div>
            <h3>${servicio.titulo}</h3>
            <p>${servicio.descripcion}</p>
        `;
        serviciosGrid.appendChild(card);
    });

    const experienciaTimeline = document.getElementById('experienciaTimeline');
    datosWeb.experiencia.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'experiencia-item';
        item.style.animation = `fadeInUp 0.6s ease ${index * 0.2}s both`;
        item.innerHTML = `
            <div class="experiencia-date">
                <i class="fas fa-calendar-alt" style="margin-right: 0.5rem;"></i>
                ${exp.año}
            </div>
            <div class="experiencia-content">
                <h3>${exp.cargo}</h3>
                <span class="company"><i class="fas fa-building" style="margin-right: 0.5rem;"></i>${exp.empresa}</span>
                <p>${exp.descripcion}</p>
            </div>
        `;
        experienciaTimeline.appendChild(item);
    });

    document.getElementById('sobreNombre').textContent = datosWeb.sobre.nombre;
    document.getElementById('sobreTitulo').textContent = datosWeb.sobre.titulo;
    document.getElementById('sobreDescripcion').textContent = datosWeb.sobre.descripcion;
    document.getElementById('statsExperiencia').textContent = datosWeb.sobre.añosExperiencia;
    document.getElementById('statsClientes').textContent = datosWeb.sobre.clientesSatisfechos;

    const contactoInfo = document.getElementById('contactoInfo');
    contactoInfo.innerHTML = `
        <div class="contacto-item">
            <i class="fas fa-phone"></i>
            <strong>Teléfono</strong>
            <span>${datosWeb.contacto.telefono}</span>
        </div>
        <div class="contacto-item">
            <i class="fas fa-envelope"></i>
            <strong>Email</strong>
            <span>${datosWeb.contacto.email}</span>
        </div>
        <div class="contacto-item">
            <i class="fas fa-map-marker-alt"></i>
            <strong>Ubicación</strong>
            <span>${datosWeb.contacto.direccion}</span>
        </div>
        <div class="contacto-item">
            <i class="fas fa-clock"></i>
            <strong>Horario</strong>
            <span>${datosWeb.contacto.horario}</span>
        </div>
    `;

    const whatsappBtn = document.getElementById('whatsappBtn');
    const mensajeCodificado = encodeURIComponent(datosWeb.whatsapp.mensaje);
    whatsappBtn.href = `https://wa.me/${datosWeb.whatsapp.numero}?text=${mensajeCodificado}`;

    document.getElementById('footerNombre').textContent = datosWeb.nombreNegocio;
    document.getElementById('footerTexto').textContent = datosWeb.footer.texto;
    document.getElementById('footerCopyright').textContent = datosWeb.footer.copyright;
}

function inicializarMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const menuOverlay = document.getElementById('menuOverlay');
    const header = document.querySelector('header');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    menuOverlay.addEventListener('click', function () {
        menu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    });

    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            menu.classList.remove('active');
            menuOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function inicializarScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease both';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.servicio-card, .experiencia-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);