const fs = require('fs');
const path = require('path');

const coreDir = path.join(__dirname, '../RTRP-project/securepro-releases-main');
const indexFile = path.join(coreDir, 'index.html');
const styleFile = path.join(coreDir, 'css/style.css');

let indexHtml = fs.readFileSync(indexFile, 'utf8');
let styleCss = fs.readFileSync(styleFile, 'utf8');

const screens = [
    { dir: 'auth_vault_secure_entry', id: 'auth-screen' },
    { dir: 'admin_intelligence_dashboard_calm_edition', id: 'admin-screen' },
    { dir: 'student_dashboard', id: 'student-screen' },
    { dir: 'proctoring_command_center_calm_edition', id: 'exam-interface' },
    { dir: 'eye_gaze_calibration', id: 'gaze-calibration-screen' },
    { dir: 'submission_receipt', id: 'receipt-screen' }
];

let appendedStyles = "\n/* --- CALM & FOCUSED INJECTED STYLES --- */\n";

screens.forEach(screen => {
    const codeFile = path.join(__dirname, screen.dir, 'code.html');
    if (!fs.existsSync(codeFile)) return;
    
    const content = fs.readFileSync(codeFile, 'utf8');
    
    // Extract style
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
    if (styleMatch) {
        // Remove :root and body to avoid duplicating globals, keep the rest
        let css = styleMatch[1];
        css = css.replace(/:root\s*{[^}]*}/g, '');
        css = css.replace(/body\s*{[^}]*}/g, '');
        appendedStyles += `\n/* ${screen.dir} */\n` + css;
    }
    
    // Extract body content (the main div)
    // We assume the main div has the id matching screen.id
    const divRegex = new RegExp(`<div id="${screen.id}"[^>]*>([\\s\\S]*?)<\\/div>\\s*<\\/body>`);
    let bodyMatch = content.match(divRegex);
    let innerHtml = '';
    
    if (bodyMatch) {
        innerHtml = bodyMatch[1];
    } else {
        // Fallback: extract everything inside body
        const bodyTagMatch = content.match(/<body>([\s\S]*?)<\/body>/);
        if (bodyTagMatch) {
            innerHtml = bodyTagMatch[1];
        }
    }
    
    // Replace in indexHtml
    // We need to find the matching div in indexHtml
    // This is tricky with regex because of nested divs, so we use string manipulation
    const startTag = `<div id="${screen.id}"`;
    const startIndex = indexHtml.indexOf(startTag);
    if (startIndex !== -1) {
        // Find the end of the start tag
        const tagEndIndex = indexHtml.indexOf('>', startIndex) + 1;
        
        // Find the matching closing div
        let depth = 1;
        let currentIndex = tagEndIndex;
        while (depth > 0 && currentIndex < indexHtml.length) {
            const nextDivOpen = indexHtml.indexOf('<div', currentIndex);
            const nextDivClose = indexHtml.indexOf('</div', currentIndex);
            
            if (nextDivClose === -1) break;
            
            if (nextDivOpen !== -1 && nextDivOpen < nextDivClose) {
                depth++;
                currentIndex = nextDivOpen + 4;
            } else {
                depth--;
                currentIndex = nextDivClose + 6;
            }
        }
        
        if (depth === 0) {
            const closingTagIndex = currentIndex - 6;
            // Get original classes/styles to keep them
            const originalTag = indexHtml.substring(startIndex, tagEndIndex);
            
            // Reconstruct
            // If the new content already has the wrapper, we just replace it entirely.
            // But if we extracted innerHtml, we keep the original tag.
            // Wait, our new files define their own layout for the wrapper. 
            // Let's just extract the full wrapper from the code.html!
            
            const fullWrapperRegex = new RegExp(`<div id="${screen.id}"[^>]*>[\\s\\S]*?<\\/div>\\s*(?=<script|<\\/body)`);
            const wrapperMatch = content.match(fullWrapperRegex);
            
            if (wrapperMatch) {
                 indexHtml = indexHtml.substring(0, startIndex) + wrapperMatch[0] + indexHtml.substring(currentIndex);
            } else {
                 indexHtml = indexHtml.substring(0, tagEndIndex) + "\n" + innerHtml + "\n" + indexHtml.substring(closingTagIndex);
            }
        }
    }
});

fs.writeFileSync(indexFile, indexHtml);
fs.writeFileSync(styleFile, styleCss + appendedStyles);

console.log("Stitching complete!");
