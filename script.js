        // ++ Execution Core: NucleusDojo DOM Manipulation ++
        // ++ Author: Arsalan A. Khan (@timedilationv2) ++
        // ++ Directive: Handle dynamic content rendering and user interactions. ++
        document.addEventListener('DOMContentLoaded', function () {
            // --- Mobile Menu Toggle ---
            const navToggleBtn = document.getElementById('nav-toggle-btn');
            const navMenuContent = document.getElementById('nav-menu-content');
            if(navToggleBtn && navMenuContent) {
                navToggleBtn.addEventListener('click', () => {
                    navMenuContent.classList.toggle('hidden');
                });
            }
            
            // --- Applications Tabs Logic ---
            // This isn't just a tab switcher. It's a dynamic content loader for industry-specific data trails.
            const industryTabsPayload = {
                textile: `
                    <h3 class="text-3xl font-semibold mb-4">The Textile Sector: Powering Pakistan's Largest Industry</h3>
                    <p class="text-secondary mb-3">As the backbone of Pakistan's economy, the textile industry was critically vulnerable to the 2017 energy crisis. A natural gas CHP plant is the perfect fit, providing reliable electricity for spinning and weaving machinery while the recovered heat generates essential steam and hot water for dyeing and finishing processes.</p>
                    <div class="mt-6 p-4 bg-secondary rounded-lg border border-default">
                        <p class="font-semibold text-brand">Typical Application:</p>
                        <p class="text-secondary">A 5 MW gas-fired CHP plant in a medium-sized mill can ensure 24/7 operation, meet 100% of thermal demand, and reduce total energy costs by up to 35%.</p>
                    </div>
                `,
                cement: `
                    <h3 class="text-3xl font-semibold mb-4">The Cement Sector: Maximizing Efficiency with WHR</h3>
                    <p class="text-secondary mb-3">As one of the most energy-intensive sectors, the cement industry pioneered Waste Heat Recovery (WHR), a form of CHP. Instead of new fuel, WHR captures immense heat from kiln and cooler exhausts to generate steam, which drives a turbine to produce electricity.</p>
                    <div class="mt-6 p-4 bg-secondary rounded-lg border border-default">
                        <p class="font-semibold text-brand">Landmark 2017 Case Study:</p>
                        <p class="text-secondary">In March 2017, Lucky Cement inaugurated its fifth WHR plant (10 MW) at its Pezu facility, generating over 30% of the plant's electricity with zero additional fuel or emissions, setting a new industry benchmark.</p>
                    </div>
                `,
                food: `
                    <h3 class="text-3xl font-semibold mb-4">The Food & Beverage Sector: Ensuring Quality</h3>
                    <p class="text-secondary mb-3">This sector demands uninterrupted power for refrigeration and processing, plus consistent thermal energy for pasteurization and sterilization. A gas-engine CHP plant delivers both, safeguarding product quality and preventing spoilage-related losses.</p>
                    <div class="mt-6 p-4 bg-secondary rounded-lg border border-default">
                        <p class="font-semibold text-brand">Circular Economy in Action:</p>
                        <p class="text-secondary">Under the 2013 Bagasse Co-Generation policy, sugar mills were incentivized to burn their waste bagasse to generate power for their own use and to sell surplus electricity to the grid, turning a waste product into a revenue stream.</p>
                    </div>
                `
            };
            const tabs = document.querySelectorAll('.tab');
            const tabContentContainer = document.getElementById('tab-content');
            function updateTabContent(tabName) {
                if(tabContentContainer) {
                    tabContentContainer.innerHTML = industryTabsPayload[tabName];
                    tabs.forEach(t => {
                        t.classList.toggle('active', t.dataset.tab === tabName);
                    });
                }
            }
            tabs.forEach(tab => tab.addEventListener('click', () => updateTabContent(tab.dataset.tab)));
            updateTabContent('textile'); // Set initial tab

            // --- Technology Selector Logic ---
            const engineSpecPayload = {
                "1.5": {
                    title: "1.5 MW Class Engine",
                    imageUrl: "https://raw.githubusercontent.com/timedilationv2/images/main/wartsila-31sg-gas-engine-for-power-plants.jpg.webp",
                    imageAlt: "Wärtsilä 31SG gas engine",
                    specs: [
                        { label: "Electrical Output", value: "1,540 kWe" },
                        { label: "Electrical Efficiency (LHV)", value: "42.5%" },
                        { label: "Recoverable Thermal Output", value: "~1,700 kWth" },
                        { label: "Total CHP Efficiency (LHV)", value: "~88%" }
                    ],
                    fuel: "Natural Gas / Dual-Fuel Option"
                },
                "4.0": {
                    title: "4.0 MW Class Engine",
                    imageUrl: "https://placehold.co/800x600/1f2937/9ca3af?text=Wärtsilä+34SG",
                    imageAlt: "Placeholder for Wärtsilä 34SG gas engine",
                    specs: [
                        { label: "Electrical Output", value: "4,400 kWe" },
                        { label: "Electrical Efficiency (LHV)", value: "44.0%" },
                        { label: "Recoverable Thermal Output", value: "~4,800 kWth" },
                        { label: "Total CHP Efficiency (LHV)", value: "~90%" }
                    ],
                    fuel: "Natural Gas"
                },
                "10.0": {
                    title: "10.0 MW Class Engine",
                    imageUrl: "https://raw.githubusercontent.com/timedilationv2/images/main/wartsila-50sg-gas-engine-for-power-plants.jpg.webp",
                    imageAlt: "Wärtsilä 50SG gas engine",
                    specs: [
                        { label: "Electrical Output", value: "10,600 kWe" },
                        { label: "Electrical Efficiency (LHV)", value: "48.7%" },
                        { label: "Recoverable Thermal Output", value: "~10,300 kWth" },
                        { label: "Total CHP Efficiency (LHV)", value: "~94%" }
                    ],
                    fuel: "Natural Gas"
                }
            };
            const techButtons = document.querySelectorAll('.tech-button');
            const techDisplayContainer = document.getElementById('tech-display');
            function updateTechDisplay(techName) {
                if(techDisplayContainer) {
                    const data = engineSpecPayload[techName];
                    let specsHtml = data.specs.map(spec => `
                        <div class="flex justify-between py-3 border-b border-default">
                            <span class="text-secondary">${spec.label}</span>
                            <span class="font-semibold text-primary">${spec.value}</span>
                        </div>
                    `).join('');
                    techDisplayContainer.innerHTML = `
                        <div class="mb-6">
                            <img src="${data.imageUrl}" alt="${data.imageAlt}" class="w-full h-48 object-cover rounded-lg shadow-md" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/800x600/e2e8f0/94a3b8?text=Image+Not+Found';">
                        </div>
                        <h3 class="text-3xl font-semibold mb-4">${data.title}</h3>
                        <div class="space-y-2 mb-6">${specsHtml}</div>
                        <div class="text-right">
                            <span class="text-sm font-semibold text-secondary">Fuel Type: ${data.fuel}</span>
                        </div>
                        <p class="text-xs text-secondary/70 mt-4">Note: Performance data is representative of technology available circa 2017. LHV = Lower Heating Value.</p>
                    `;
                    techButtons.forEach(b => b.classList.toggle('active', b.dataset.tech === techName));
                }
            }
            techButtons.forEach(button => button.addEventListener('click', () => updateTechDisplay(button.dataset.tech)));
            updateTechDisplay('1.5'); // Set initial tech display

            // --- Active Nav Link Scrolling ---
            const navLinks = document.querySelectorAll('header .nav-link');
            const sections = document.querySelectorAll('main section');
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 80) {
                        current = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        });

// FAQ toggle
    document.querySelectorAll(".toggle-btn").forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("hidden");
        button.querySelector("svg").classList.toggle("rotate-180");
      });
    });

