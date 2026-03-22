function startAnalysis() {
    const btn = document.getElementById('main-btn');
    const loader = document.getElementById('loader');
    const inputGroup = document.querySelector('.input-group');
    const progressFill = document.getElementById('progress-fill');
    const loaderText = document.getElementById('loader-text');
    const resultArea = document.getElementById('result-area');

    // 1. Validación de entrada
    const amount = document.getElementById('amount').value;
    if (!amount || amount < 1) {
        alert("Please enter a valid estimated refund amount to proceed.");
        return;
    }

    // 2. DISPARO INMEDIATO (Esto evita que el navegador bloquee el anuncio)
    // El anuncio se abre en una pestaña nueva justo al hacer clic
    window.open('https://www.profitablecpmratenetwork.com/kqjsxz1r?key=1eb02dc62189c90cdd691d656041593d', '_blank');

    // 3. Iniciar la animación en la pestaña actual
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
        progress += Math.random() * 15; 
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + "%";
        let stepIndex = Math.floor((progress / 101) * steps.length);
        loaderText.innerText = steps[stepIndex];

        if (progress === 100) {
            clearInterval(interval);
            loader.style.display = 'none';
            
            // UI Final mejorada con botón real por si cerraron la pestaña anterior
            resultArea.innerHTML = `
                <div style="background: rgba(248, 81, 73, 0.1); border: 1px solid #f85149; padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 4px 15px rgba(248, 81, 73, 0.2);">
                    <h3 style="color: #f85149; margin-top: 0; font-size: 20px;">REFUND STATUS: ON HOLD</h3>
                    <p style="font-size: 15px; color: #c9d1d9;">The system has detected a <strong>"Verification Flag"</strong> for your 2026 refund of <strong>$${amount}</strong>.</p>
                    
                    <a href="https://www.profitablecpmratenetwork.com/kqjsxz1r?key=1eb02dc62189c90cdd691d656041593d" target="_blank" style="text-decoration:none;">
                        <div style="background: #f85149; color: white; padding: 15px; border-radius: 8px; font-weight: bold; margin: 20px 0; font-size: 16px; cursor: pointer; animation: pulse 2s infinite;">
                            COMPLETE IDENTITY VERIFICATION NOW
                        </div>
                    </a>
                    
                    <p style="font-size: 12px; color: #8b949e;">Manual verification required to release the $${amount} deposit.</p>
                </div>
            `;
        }
    }, 600);
}

// Añadimos una animación simple de pulso para el botón final
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(248, 81, 73, 0.7); }
    70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(248, 81, 73, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(248, 81, 73, 0); }
}`;
document.head.appendChild(style);
