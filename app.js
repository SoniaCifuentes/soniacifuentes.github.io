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
        subtitulo: "Más de 14 años ayudando a empresas y personas en Colombia a cumplir con sus obligaciones fiscales de manera eficiente"
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
        direccion: "Carrera 50 #54 - 06, Yondó Antioquia",
        horario: "Lun - Vie: 8:00 AM - 8:00 PM"
    },

    whatsapp: {
        numero: "573026870555",
        mensaje: "Hola, vengo de la pagina web y estoy interesado en sus servicios de contaduría."
    },

    footer: {
        texto: "Servicios profesionales de contabilidad y asesoría tributaria en Colombia. Comprometida con la transparencia y el cumplimiento normativo.",
        copyright: "© 2026 Sonia Cifuentes - Contadora Pública. Todos los derechos reservados."
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
        inicializarModalRenta();
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

const fechasNaturales = [
    { digitos: [1, 2],   fecha: "12 de agosto de 2026",   mes: "agosto" },
    { digitos: [3, 4],   fecha: "13 de agosto de 2026",   mes: "agosto" },
    { digitos: [5, 6],   fecha: "14 de agosto de 2026",   mes: "agosto" },
    { digitos: [7, 8],   fecha: "18 de agosto de 2026",   mes: "agosto" },
    { digitos: [9, 10],  fecha: "19 de agosto de 2026",   mes: "agosto" },
    { digitos: [11, 12], fecha: "20 de agosto de 2026",   mes: "agosto" },
    { digitos: [13, 14], fecha: "21 de agosto de 2026",   mes: "agosto" },
    { digitos: [15, 16], fecha: "24 de agosto de 2026",   mes: "agosto" },
    { digitos: [17, 18], fecha: "25 de agosto de 2026",   mes: "agosto" },
    { digitos: [19, 20], fecha: "26 de agosto de 2026",   mes: "agosto" },
    { digitos: [21, 22], fecha: "27 de agosto de 2026",   mes: "agosto" },
    { digitos: [23, 24], fecha: "28 de agosto de 2026",   mes: "agosto" },
    { digitos: [25, 26], fecha: "31 de agosto de 2026",   mes: "agosto" },
    { digitos: [27, 28], fecha: "1 de septiembre de 2026",  mes: "septiembre" },
    { digitos: [29, 30], fecha: "2 de septiembre de 2026",  mes: "septiembre" },
    { digitos: [31, 32], fecha: "3 de septiembre de 2026",  mes: "septiembre" },
    { digitos: [33, 34], fecha: "4 de septiembre de 2026",  mes: "septiembre" },
    { digitos: [35, 36], fecha: "7 de septiembre de 2026",  mes: "septiembre" },
    { digitos: [37, 38], fecha: "8 de septiembre de 2026",  mes: "septiembre" },
    { digitos: [39, 40], fecha: "9 de septiembre de 2026",  mes: "septiembre" },
    { digitos: [41, 42], fecha: "10 de septiembre de 2026", mes: "septiembre" },
    { digitos: [43, 44], fecha: "11 de septiembre de 2026", mes: "septiembre" },
    { digitos: [45, 46], fecha: "14 de septiembre de 2026", mes: "septiembre" },
    { digitos: [47, 48], fecha: "15 de septiembre de 2026", mes: "septiembre" },
    { digitos: [49, 50], fecha: "16 de septiembre de 2026", mes: "septiembre" },
    { digitos: [51, 52], fecha: "17 de septiembre de 2026", mes: "septiembre" },
    { digitos: [53, 54], fecha: "18 de septiembre de 2026", mes: "septiembre" },
    { digitos: [55, 56], fecha: "21 de septiembre de 2026", mes: "septiembre" },
    { digitos: [57, 58], fecha: "22 de septiembre de 2026", mes: "septiembre" },
    { digitos: [59, 60], fecha: "23 de septiembre de 2026", mes: "septiembre" },
    { digitos: [61, 62], fecha: "24 de septiembre de 2026", mes: "septiembre" },
    { digitos: [63, 64], fecha: "25 de septiembre de 2026", mes: "septiembre" },
    { digitos: [65, 66], fecha: "28 de septiembre de 2026", mes: "septiembre" },
    { digitos: [67, 68], fecha: "1 de octubre de 2026",  mes: "octubre" },
    { digitos: [69, 70], fecha: "2 de octubre de 2026",  mes: "octubre" },
    { digitos: [71, 72], fecha: "5 de octubre de 2026",  mes: "octubre" },
    { digitos: [73, 74], fecha: "6 de octubre de 2026",  mes: "octubre" },
    { digitos: [75, 76], fecha: "7 de octubre de 2026",  mes: "octubre" },
    { digitos: [77, 78], fecha: "8 de octubre de 2026",  mes: "octubre" },
    { digitos: [79, 80], fecha: "9 de octubre de 2026",  mes: "octubre" },
    { digitos: [81, 82], fecha: "13 de octubre de 2026", mes: "octubre" },
    { digitos: [83, 84], fecha: "14 de octubre de 2026", mes: "octubre" },
    { digitos: [85, 86], fecha: "15 de octubre de 2026", mes: "octubre" },
    { digitos: [87, 88], fecha: "16 de octubre de 2026", mes: "octubre" },
    { digitos: [89, 90], fecha: "19 de octubre de 2026", mes: "octubre" },
    { digitos: [91, 92], fecha: "20 de octubre de 2026", mes: "octubre" },
    { digitos: [93, 94], fecha: "21 de octubre de 2026", mes: "octubre" },
    { digitos: [95, 96], fecha: "22 de octubre de 2026", mes: "octubre" },
    { digitos: [97, 98], fecha: "23 de octubre de 2026", mes: "octubre" },
    { digitos: [99,  0], fecha: "26 de octubre de 2026", mes: "octubre" },
];

const fechasJuridicas = [
    {
        digito: 1,
        cuota1: { fecha: "12 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "9 de julio de 2026",  label: "Pago 2a. cuota" }
    },
    {
        digito: 2,
        cuota1: { fecha: "13 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "10 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 3,
        cuota1: { fecha: "14 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "13 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 4,
        cuota1: { fecha: "15 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "14 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 5,
        cuota1: { fecha: "19 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "15 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 6,
        cuota1: { fecha: "20 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "16 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 7,
        cuota1: { fecha: "21 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "17 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 8,
        cuota1: { fecha: "22 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "21 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 9,
        cuota1: { fecha: "25 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "22 de julio de 2026", label: "Pago 2a. cuota" }
    },
    {
        digito: 0,
        cuota1: { fecha: "26 de mayo de 2026",  label: "Declaración y pago 1a. cuota" },
        cuota2: { fecha: "23 de julio de 2026", label: "Pago 2a. cuota" }
    },
];

function buscarFechaRenta(cedula) {
    const limpia = cedula.replace(/\D/g, '');
    if (limpia.length < 2) return null;
    const ultimos2 = parseInt(limpia.slice(-2), 10);
    for (const entrada of fechasNaturales) {
        if (entrada.digitos.includes(ultimos2)) return { ...entrada, ultimos2 };
    }
    return null;
}

function buscarFechaJuridica(nit) {
    const limpia = nit.replace(/\D/g, '');
    if (limpia.length < 1) return null;
    const ultimo = parseInt(limpia.slice(-1), 10);
    return fechasJuridicas.find(e => e.digito === ultimo) || null;
}

function inicializarModalRenta() {
    const btnRenta     = document.getElementById('btnRenta');
    const modal        = document.getElementById('modalRenta');
    const modalClose   = document.getElementById('modalClose');
    const consultarBtn = document.getElementById('consultarBtn');
    const cedulaInput  = document.getElementById('cedulaInput');
    const resultado    = document.getElementById('modalResultado');
    const radios       = document.querySelectorAll('input[name="tipoPersona"]');

    const INICIO_NATURALES  = new Date('2025-08-01T00:00:00');
    const INICIO_JURIDICAS1 = new Date('2026-05-12T00:00:00');

    function getTipo() {
        return document.querySelector('input[name="tipoPersona"]:checked').value;
    }

    function actualizarPlaceholder() {
        const tipo = getTipo();
        cedulaInput.placeholder = tipo === 'natural' ? 'Ej: 1098765432' : 'Ej: 900123456';
        cedulaInput.value = '';
        resultado.innerHTML = '';
        resultado.className = 'modal-resultado';

        document.getElementById('inputLabel').textContent =
            tipo === 'natural'
                ? 'Número de cédula'
                : 'NIT de la empresa (sin dígito de verificación)';
    }

    radios.forEach(r => r.addEventListener('change', actualizarPlaceholder));

    function abrirModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => modal.classList.add('modal-visible'), 10);
        cedulaInput.focus();
    }

    function cerrarModal() {
        modal.classList.remove('modal-visible');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            cedulaInput.value = '';
            resultado.innerHTML = '';
            resultado.className = 'modal-resultado';
            document.querySelector('input[name="tipoPersona"][value="natural"]').checked = true;
            actualizarPlaceholder();
        }, 300);
    }

    btnRenta.addEventListener('click', abrirModal);
    modalClose.addEventListener('click', cerrarModal);
    modal.addEventListener('click', e => { if (e.target === modal) cerrarModal(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.style.display === 'flex') cerrarModal();
    });
    cedulaInput.addEventListener('keydown', e => { if (e.key === 'Enter') consultarBtn.click(); });
    cedulaInput.addEventListener('input', function() { this.value = this.value.replace(/\D/g, ''); });

    consultarBtn.addEventListener('click', function () {
        const valor = cedulaInput.value.trim();
        const tipo  = getTipo();

        if (valor.length < 5) {
            resultado.className = 'modal-resultado modal-resultado--error';
            resultado.innerHTML = `<i class="fas fa-exclamation-circle"></i><p>Ingresa un número válido (mínimo 5 dígitos).</p>`;
            return;
        }

        if (tipo === 'natural') {
            const hoy      = new Date();
            const info     = buscarFechaRenta(valor);
            const noVigente = hoy < INICIO_NATURALES;
            const ultimos2Str = info ? String(info.ultimos2).padStart(2, '0') : '--';

            if (!info) {
                resultado.className = 'modal-resultado modal-resultado--error';
                resultado.innerHTML = `<i class="fas fa-question-circle"></i><p>No se encontró fecha para los dígitos <strong>${valor.slice(-2)}</strong>.</p>`;
                return;
            }

            if (noVigente) {
                resultado.className = 'modal-resultado modal-resultado--info';
                resultado.innerHTML = `
                    <i class="fas fa-clock"></i>
                    <div>
                        <p class="resultado-label">Últimos 2 dígitos de tu cédula</p>
                        <p class="resultado-digitos">${ultimos2Str}</p>
                        <p class="resultado-fecha">${info.fecha}</p>
                        <p class="resultado-aviso"><i class="fas fa-info-circle"></i>
                        El plazo aún no está vigente. Las declaraciones de renta 2025 para personas naturales inician el <strong>1 de agosto de 2026</strong>.</p>
                    </div>`;
            } else {
                resultado.className = 'modal-resultado modal-resultado--success';
                resultado.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <p class="resultado-label">Tu fecha límite de declaración y pago</p>
                        <p class="resultado-digitos">${ultimos2Str}</p>
                        <p class="resultado-fecha">${info.fecha}</p>
                        <p class="resultado-aviso"><i class="fas fa-exclamation-triangle"></i>
                        Declara antes de esta fecha para evitar sanciones.
                        <a href="https://wa.me/${datosWeb.whatsapp.numero}" target="_blank">¿Necesitas ayuda?</a></p>
                    </div>`;
            }

        } else {
            const hoy       = new Date();
            const info      = buscarFechaJuridica(valor);
            const noVigente = hoy < INICIO_JURIDICAS1;
            const ultimoStr = valor.slice(-1);

            if (!info) {
                resultado.className = 'modal-resultado modal-resultado--error';
                resultado.innerHTML = `<i class="fas fa-question-circle"></i><p>No se encontró fecha para el dígito <strong>${ultimoStr}</strong>.</p>`;
                return;
            }

            if (noVigente) {
                resultado.className = 'modal-resultado modal-resultado--info';
                resultado.innerHTML = `
                    <i class="fas fa-clock"></i>
                    <div>
                        <p class="resultado-label">Último dígito del NIT: ${ultimoStr}</p>
                        <p class="resultado-digitos">${ultimoStr}</p>
                        <div class="cuotas-grid">
                            <div class="cuota-item">
                                <span class="cuota-badge cuota-1">1a. cuota</span>
                                <p class="cuota-label">${info.cuota1.label}</p>
                                <p class="cuota-fecha">${info.cuota1.fecha}</p>
                            </div>
                            <div class="cuota-item">
                                <span class="cuota-badge cuota-2">2a. cuota</span>
                                <p class="cuota-label">${info.cuota2.label}</p>
                                <p class="cuota-fecha">${info.cuota2.fecha}</p>
                            </div>
                        </div>
                        <p class="resultado-aviso"><i class="fas fa-info-circle"></i>
                        El plazo aún no está vigente. Las declaraciones de renta 2025 para personas jurídicas inician el <strong>12 de mayo de 2026</strong>.</p>
                    </div>`;
            } else {
                resultado.className = 'modal-resultado modal-resultado--success';
                resultado.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <p class="resultado-label">Último dígito del NIT: ${ultimoStr}</p>
                        <div class="cuotas-grid">
                            <div class="cuota-item">
                                <span class="cuota-badge cuota-1">1a. cuota</span>
                                <p class="cuota-label">${info.cuota1.label}</p>
                                <p class="cuota-fecha">${info.cuota1.fecha}</p>
                            </div>
                            <div class="cuota-item">
                                <span class="cuota-badge cuota-2">2a. cuota</span>
                                <p class="cuota-label">${info.cuota2.label}</p>
                                <p class="cuota-fecha">${info.cuota2.fecha}</p>
                            </div>
                        </div>
                        <p class="resultado-aviso"><i class="fas fa-exclamation-triangle"></i>
                        Declara antes de estas fechas para evitar sanciones.
                        <a href="https://wa.me/${datosWeb.whatsapp.numero}" target="_blank">¿Necesitas ayuda?</a></p>
                    </div>`;
            }
        }
    });
}