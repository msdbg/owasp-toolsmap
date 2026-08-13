(function () {
    'use strict';

    const CENTER_R = 52;
    const TACTIC_W = 165, TACTIC_H = 32;
    const TECH_W = 210, TECH_H = 24;
    const SUB_W = 195, SUB_H = 22;
    const TOOL_W = 165, TOOL_H = 22;

    const GAP_C2T = 130;
    const GAP_T2TE = 55;
    const GAP_TE2SUB = 40;
    const GAP_TE2TO = 45;
    const TOOL_STEP = 26;
    const TECH_GAP = 8;
    const SUB_GAP = 6;
    const TACTIC_GAP = 26;
    const PAD = 100;
    const COLORS = { center: '#00f0ff', tactic: '#ff3b5c', technique: '#ff8c42', subtechnique: '#e07838' };

    const CATEGORY_PALETTE = {
        'Network Scanner': '#00e676', 'High-speed Scanner': '#00c853', 'Fast Port Scanner': '#69f0ae',
        'Port Scanner': '#4caf50', 'Vulnerability Scanner': '#f44336', 'Web Server Scanner': '#ef5350',
        'Web Fuzzer': '#ab47bc', 'Web Application Fuzzer': '#9c27b0', 'Recursive Content Discovery': '#ba68c8',
        'Directory/DNS Scanner': '#ce93d8', 'Web Path Scanner': '#e040fb', 'Device Search CLI': '#29b6f6',
        'Attack Surface Discovery': '#0288d1', 'Cyberspace Asset Search': '#4fc3f7', 'Network Utility': '#26a69a',
        'Cyberspace Search CLI': '#00acc1', 'SNMP Query Tool': '#80cbc4', 'SNMP Scanner': '#4db6ac',
        'ARP Scanner': '#66bb6a', 'Tech Stack Analyzer': '#ffa726', 'HTTP Toolkit': '#ff9800',
        'Web Scanner': '#ffb74d', 'CMS Detection': '#ffcc80', 'Firmware Analysis Tool': '#8d6e63',
        'Firmware Analyzer': '#a1887f', 'Firmware Analysis Engine': '#795548', 'OSINT Framework': '#fdd835',
        'OSINT Automation': '#ffee58', 'OSINT Enumerator': '#fff176', 'OSINT Tool': '#fff59d',
        'Username OSINT Recon': '#ffeb3b', 'Breached Data CLI': '#ff1744', 'Breach Hunting Tool': '#d50000',
        'Credential Extraction': '#b71c1c', 'Breached Data API': '#c62828', 'Credential Leak API': '#e53935',
        'Email Discovery': '#42a5f5', 'Email Search Engine': '#1e88e5', 'Email OSINT': '#64b5f6',
        'Data Search API': '#90caf9', 'LinkedIn Scraper': '#1565c0', 'OSINT Scraper': '#1976d2',
        'Social Media Recon': '#7e57c2', 'Subdomain Discovery': '#26c6da', 'DNS Toolkit': '#00bcd4',
        'BGP Routing Utility': '#009688', 'Command Line Utility': '#78909c', 'Domain Squatting Detector': '#ef6c00',
        'Domain Discovery': '#fb8c00', 'OSINT Analyzer': '#f9a825', 'DNS Lookup Utility': '#00838f',
        'DNS Enumeration Tool': '#006064', 'DNS Recon Scanner': '#0097a7', 'Subdomain Scanner': '#00bfa5',
        'Routing CLI': '#607d8b', 'PeeringDB API Client': '#546e7a', 'ASN Enumeration': '#455a64',
        'Network Diagnostic': '#81d4fa', 'Firewall Bypass Traceroute': '#b3e5fc', 'IP CLI Toolkit': '#e1f5fe',
        'Geolocation Utility': '#b2ebf2', 'DNS Resolver': '#80deea', 'IP Subnet Calculator': '#4dd0e1',
        'WAF Fingerprinter': '#ec407a', 'WAF Fingerprint & Bypass': '#f06292', 'Load Balancing Detector': '#f48fb1',
        'Phishing Framework': '#e91e63', 'Phishing Attack Suite': '#c2185b', 'AiTM Phishing Proxy': '#ad1457',
        'AiTM Proxy': '#ad1457', 'Phishing Campaign Architecture': '#880e4f', 'Security Awareness Platform': '#d81b60',
        'Phishing Tool': '#f50057', 'Phishing Campaign Tool': '#e91e63', 'Payload Generator': '#ff5252',
        'Macro Generator': '#ff1744', 'Malicious Document Generator': '#d50000', 'Evasion Payload Generator': '#ff6e40',
        'VBA Purging Tool': '#ff3d00', 'Reverse HTTP Proxy': '#8e24aa', 'Reverse Proxy Architecture': '#7b1fa2',
        'Telephony Automation': '#00bfa5', 'Caller ID Spoofing': '#1de9b6', 'IP PBX Software': '#64ffda',
        'AI Voice Cloning': '#a7ffeb', 'LLM CLI Client': '#7c4dff', 'LLM Integration': '#651fff',
        'AI Workflow Tool': '#6200ea', 'Shell-GPT': '#b388ff', 'CLI AI Chat': '#d1c4e9',
        'Threat Intelligence CLI': '#ffab00', 'Deep/Dark Web Intel API': '#ff6d00', 'Dark Web Client': '#dd2c00',
        'Anonymous Communication': '#37474f', 'Threat Intelligence API': '#ff9100', 'Threat Intel Platform': '#ffab40',
        'Passive DNS API': '#18ffff', 'Passive DNS CLI': '#84ffff', 'Passive DNS Query Tool': '#a7ffeb',
        'Passive DNS Tool': '#b2dfdb', 'Certificate Transparency Search': '#80d8ff', 'CT Log Monitor': '#40c4ff',
        'CDN Bypass Utility': '#00b0ff', 'TLS Toolkit': '#0091ea', 'TLS Scanner': '#01579b',
        'Cloud Enumeration': '#2962ff', 'DNS Tool': '#2979ff', 'CDN Identification': '#448aff',
        'Internet Scanner Telemetry': '#82b1ff', 'Internet Scanner Database': '#536dfe', 'Cyber Defense Search Engine': '#304ffe',
        'Search Technique': '#b9f6ca', 'Privacy Search': '#69f0ae', 'Web Archive Tool': '#a5d6a7',
        'Web Crawler': '#81c784', 'Web Crawler/OSINT': '#66bb6a', 'Instagram OSINT': '#e040fb',
        'Twitter Scraper': '#ea80fc', 'Google Dork Automation': '#c6ff00', 'Search Dorking Tool': '#aeea00',
        'Python Module': '#64dd17', 'Google Hacking Tool': '#76ff03', 'Secret Scanner': '#ff6e40',
        'Repository Recon': '#ff3d00', 'Threat Intelligence Platform': '#ffab00', 'Custom Wordlist Generator': '#8bc34a',
        'Windows Built-in': '#4fc3f7', 'Linux Built-in': '#a5d6a7', 'macOS Built-in': '#ce93d8',
        'Command Interpreter': '#90a4ae', 'C# Execution Tool': '#7986cb', 'Cloud Admin Tool': '#64b5f6',
        'Cloud Administration Tool': '#42a5f5', 'Cloud Exploitation Framework': '#1e88e5',
        'PowerShell Evasion Tool': '#5c6bc0', 'LOLBin Execution': '#9fa8da', 'macOS Payload Generator': '#ab47bc',
        'Terminal Emulator': '#78909c', 'Python Packager': '#66bb6a', 'Windows DLL Component': '#4dd0e1',
        'Python Network Library': '#26a69a', 'Python SSH Library': '#009688', 'Command Line SSH Client': '#00897b',
        'Python AWS SDK': '#ff8a65', 'Scripting Engine': '#bcaaa4', 'AutoIT Compiler': '#a1887f',
        'JIT Compiler': '#8d6e63', 'ESXi Management CLI': '#ef5350', 'Hypervisor Admin Tool': '#e57373',
        'vSphere CLI': '#ef9a9a', 'KVM Management CLI': '#ffcdd2', 'Container Engine': '#4dd0e1',
        'K8s CLI': '#26c6da', 'API Client': '#1e88e5', 'Kubernetes Exploitation': '#00acc1',
        'K8s Package Manager': '#0097a7', 'K8s Pentesting': '#00838f', 'Browser Exploitation Framework': '#f44336',
        'Social Engineering Tool': '#e91e63', 'DNS Proxy': '#9c27b0', 'SQL Injection Automation': '#d32f2f',
        'WordPress Scanner': '#c62828', 'Command Injection Tool': '#b71c1c', 'Deserialization Tool': '#880e4f',
        'Network Logon Cracker': '#ff5722', 'Brute Forcer': '#e64a19', 'Network Authentication Cracker': '#bf360c',
        'VPN Client': '#33691e', 'Keystroke Injection Tool': '#ff6f00', 'Malicious USB': '#e65100',
        'Malicious Cable': '#bf360c', 'Network Tap': '#3e2723', 'Covert Network Implant': '#4e342e',
        'Sysinternals': '#1565c0', 'UAC Bypass Toolkit': '#ff1744', 'Privilege Escalation Script': '#f50057',
        'Privilege Escalation Scanner': '#ff4081', 'Privilege Escalation Tool': '#d500f9',
        'DLL Hijacking Finder': '#aa00ff', 'Vulnerability Auditor': '#6200ea', 'macOS Auditor': '#304ffe',
        'Environment Variable': '#00bfa5', 'Linux Configuration File': '#00c853', 'GNU Compiler': '#64dd17',
        'PowerShell Framework': '#1a237e', 'Linux Execution Monitor': '#006064', 'C# Enumeration Tool': '#7c4dff',
        'Malware Component': '#ff1744', 'Kernel Debugger': '#f50057', 'Windows API': '#c51162',
        'C# Compiler': '#6a1b9a', 'Direct Syscall Generator': '#4a148c', 'C# API Framework': '#311b92',
        'GitHub Actions CLI': '#263238', 'CI/CD CLI': '#37474f', 'Jenkins CLI': '#455a64',
        'Windows Persistence Tool': '#e65100', 'Cloud Deployment Tool': '#1565c0',
        'Multi-Cloud Deployment Tool': '#0d47a1', 'Protocol Toolkit': '#00695c', 'System Administration': '#1b5e20',
        'macOS Analysis Tool': '#4a148c', 'Reverse Engineering': '#311b92', 'Network MitM Tool': '#b71c1c',
        'Network Proxy': '#880e4f', 'File Format': '#616161', 'Development Utility': '#757575',
        'Security Tool': '#9e9e9e', 'IDE': '#bdbdbd', 'Payload Language': '#ff6f00',
        'Malicious USB Framework': '#e65100', 'Linux Automation Tool': '#2e7d32', 'Network Client': '#558b2f',
        'Network Request Utility': '#827717', 'Infrastructure as Code': '#0277bd',
        'Configuration Management': '#01579b', 'Cloud CLI': '#006064', 'Domain Registrar CLI': '#004d40',
        'DNS Manipulation CLI': '#1b5e20', 'DNS Server': '#33691e', 'Cloud-Native DNS': '#1a237e',
        'DNS Forwarder/Server': '#0d47a1', 'PowerDNS Server': '#283593', 'DigitalOcean CLI': '#1565c0',
        'Linode CLI': '#0277bd', 'Vultr CLI': '#00838f', 'Hetzner Cloud CLI': '#00695c',
        'Private Cloud Admin': '#4527a0', 'Static Web Hosting CLI': '#2e7d32', 'Serverless Platform CLI': '#558b2f',
        'Serverless Function Platform': '#689f38', 'Cloud Storage CLI': '#ef6c00', 'Code Signing Tool': '#f9a825',
        'Certificate Utility': '#f57f17', 'Key Signing Utility': '#ffab00', 'Proxy Chain Manager': '#455a64',
        'Network Proxy Tool': '#546e7a', 'Tor Wrapper': '#37474f', 'Messaging Client': '#263238',
        'Messaging Protocol': '#212121', 'I2P Router': '#424242', 'Business Intelligence': '#6d4c41',
        'Deception Tool': '#d84315', 'Tracking Link Generator': '#bf360c', 'Browser Fingerprinting Library': '#e64a19',
        'Browser Auditing Tool': '#ff5722', 'Geolocation OSINT': '#ff6e40', 'Metadata Extractor': '#8d6e63',
        'Cellular Tower Database': '#6d4c41', 'Python Finance Module': '#4e342e', 'SEC Filing Scraper': '#3e2723',
        'Relationship Database API': '#5d4037', 'Get All Urls': '#7cb342', 'Search Analytics API': '#9ccc65',
        'Job Posting Scraper': '#c0ca33', 'Review Scraper': '#cddc39', 'Wireless Mapping Database': '#afb42b',
        'Corporate Database API': '#827717', 'AD Admin Tool': '#3949ab', 'Cloud Admin CLI': '#1a237e',
        'Standalone Token Tool': '#7b1fa2', 'Token Manipulation Tool': '#6a1b9a', 'UAC Bypass Utility': '#d500f9',
        'Linux PrivEsc Tool': '#aa00ff', 'Exploitation Tool': '#ff1744', 'Exploitation Framework': '#d50000',
        'Enterprise Administration': '#1b5e20', 'Steganography Tool': '#00695c', 'PowerShell Tool': '#004d40',
        'Steganography Framework': '#1a237e', 'Linux Clipboard Tool': '#0d47a1', 'Word Feature': '#283593',
        'Office Application': '#303f9f',
    };

    let _hueIdx = 0;
    function catColor(c) {
        if (CATEGORY_PALETTE[c]) return CATEGORY_PALETTE[c];
        _hueIdx++;
        const h = (_hueIdx * 137.508) % 360;
        const col = `hsl(${h},65%,55%)`;
        CATEGORY_PALETTE[c] = col;
        return col;
    }

    const SVG_CLIPBOARD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    const SVG_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><polyline points="20 6 9 17 4 12"/></svg>';
    let hierarchy = {};
    let toolLookup = {};
    let nodes = {};
    let lineGroups = {};
    let canvasW = 0, canvasH = 0;
    let vx = 0, vy = 0, vs = 1;
    let dragging = false, dragX0 = 0, dragY0 = 0, dragDist = 0;
    let selEl = null;
    let viewport, canvas;
    let _rafPending = false;
    let _zoomActiveTimer = null;
    let cweLinks = {};
    async function loadData() {
        const [rData, rLinks] = await Promise.all([
            fetch('./data.json'),
            fetch('./cwe-links.csv').catch(() => null)
        ]);
        if (!rData.ok) throw new Error('Failed to load data.json: ' + rData.status);
        const data = await rData.json();
        
        if (rLinks && rLinks.ok) {
            const csvText = await rLinks.text();
            const lines = csvText.split('\n');
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;
                
                const row = [];
                let inQuotes = false;
                let current = "";
                for (let j = 0; j < line.length; j++) {
                    const char = line[j];
                    if (char === '"') {
                        inQuotes = !inQuotes;
                    } else if (char === ',' && !inQuotes) {
                        row.push(current);
                        current = "";
                    } else {
                        current += char;
                    }
                }
                row.push(current);
                if (row.length >= 4) {
                    cweLinks[row[1]] = row[3];
                }
            }
        }
        return data;
    }

    function isSubTechnique(id) {
        return id && id.includes('.');
    }

    function parentId(id) {
        return id.split('.')[0];
    }

    function buildHierarchy(data) {
        const tacS = new Set(), teS = new Set(), toS = new Set(), caS = new Set();

        const rawByTactic = {};

        data.forEach(row => {
            const { Tactic: tac, ID: tid, Name: tn, ToolName: tool, Category: cat } = row;
            tacS.add(tac); teS.add(tid); toS.add(tool); caS.add(cat);

            if (!rawByTactic[tac]) rawByTactic[tac] = {};
            const rk = tac + '__' + tid;
            if (!rawByTactic[tac][rk]) rawByTactic[tac][rk] = { id: tid, name: tn, tactic: tac, tools: [], _seen: new Set() };

            const entry = rawByTactic[tac][rk];
            if (!entry._seen.has(tool)) {
                entry._seen.add(tool);
                entry.tools.push(row);
            }
        });
        Object.keys(rawByTactic).forEach(tac => {
            hierarchy[tac] = { parentTechniques: {} };

            const allTechs = rawByTactic[tac];
            const parentEntries = {};
            const subEntries = {};

            Object.entries(allTechs).forEach(([rk, entry]) => {
                if (isSubTechnique(entry.id)) {
                    subEntries[rk] = entry;
                } else {
                    parentEntries[rk] = entry;
                }
            });

            Object.entries(parentEntries).forEach(([rk, entry]) => {
                hierarchy[tac].parentTechniques[entry.id] = {
                    id: entry.id,
                    name: entry.name,
                    tactic: tac,
                    tools: entry.tools,
                    subs: {},
                    _rk: rk,
                };
            });

            Object.entries(subEntries).forEach(([rk, entry]) => {
                const pid = parentId(entry.id);
                if (!hierarchy[tac].parentTechniques[pid]) {
                    hierarchy[tac].parentTechniques[pid] = {
                        id: pid,
                        name: '(Parent)',
                        tactic: tac,
                        tools: [],
                        subs: {},
                        _rk: tac + '__' + pid,
                    };
                }
                hierarchy[tac].parentTechniques[pid].subs[entry.id] = {
                    id: entry.id,
                    name: entry.name,
                    tactic: tac,
                    tools: entry.tools,
                    _rk: rk,
                };
            });

            Object.values(hierarchy[tac].parentTechniques).forEach(pt => {
                pt.tools.forEach(row => {
                    toolLookup[pt._rk + '__' + row.ToolName] = row;
                });
                Object.values(pt.subs).forEach(sub => {
                    sub.tools.forEach(row => {
                        toolLookup[sub._rk + '__' + row.ToolName] = row;
                    });
                });
            });
        });

        document.getElementById('stat-tactics').textContent = tacS.size;
        document.getElementById('stat-techniques').textContent = teS.size;
        document.getElementById('stat-tools').textContent = toS.size;
        document.getElementById('stat-categories').textContent = caS.size;
    }
    function toolsColH(tools) {
        const n = tools.length;
        return n > 0 ? (n - 1) * TOOL_STEP + TOOL_H : 0;
    }
    function subBlockH(sub) {
        return Math.max(SUB_H, toolsColH(sub.tools));
    }

    function parentBlockH(pt) {
        let h = 0;
        const ptToolsH = toolsColH(pt.tools);
        h = Math.max(TECH_H, ptToolsH);
        const subs = Object.values(pt.subs);
        if (subs.length > 0) {
            subs.forEach((sub, i) => {
                if (i === 0 && pt.tools.length === 0) {
                    h = TECH_H + SUB_GAP;
                } else if (i === 0) {
                    h += SUB_GAP;
                }
                h += subBlockH(sub);
                if (i < subs.length - 1) h += SUB_GAP;
            });
        }
        return h;
    }
    function tacticBlockH(tacName) {
        const parents = Object.values(hierarchy[tacName].parentTechniques);
        let h = 0;
        parents.forEach((pt, i) => { h += parentBlockH(pt); if (i < parents.length - 1) h += TECH_GAP; });
        return h;
    }


    function sideH(names) {
        let h = 0;
        names.forEach((n, i) => { h += tacticBlockH(n); if (i < names.length - 1) h += TACTIC_GAP; });
        return h;
    }
    function addLine(color, opacity, x1, y1, x2, y2) {
        const k = color + '|' + opacity;
        if (!lineGroups[k]) lineGroups[k] = { color, opacity, d: [] };
        const mx = (x1 + x2) / 2;
        lineGroups[k].d.push('M' + x1 + ',' + y1 + 'C' + mx + ',' + y1 + ' ' + mx + ',' + y2 + ' ' + x2 + ',' + y2);
    }

    function computeLayout() {
        const tactics = Object.keys(hierarchy).sort();
        const mid = Math.ceil(tactics.length / 2);
        const rTacs = tactics.slice(0, mid);
        const lTacs = tactics.slice(mid);

        const rH = sideH(rTacs);
        const lH = sideH(lTacs);
        const maxH = Math.max(rH, lH);


        const halfW = CENTER_R + GAP_C2T + TACTIC_W + GAP_T2TE + TECH_W + GAP_TE2SUB + SUB_W + GAP_TE2TO + TOOL_W;
        canvasW = halfW * 2 + PAD * 2;
        canvasH = maxH + PAD * 2;

        const cx = canvasW / 2;
        const cy = canvasH / 2;


        nodes['__center__'] = { type: 'center', x: cx - CENTER_R, y: cy - CENTER_R, w: CENTER_R * 2, h: CENTER_R * 2 };

        layoutSide(rTacs, 'right', cx, cy, rH);
        layoutSide(lTacs, 'left', cx, cy, lH);
    }

    function layoutSide(tacNames, side, cx, cy, totalH) {
        const R = side === 'right';
        let curY = cy - totalH / 2;

        tacNames.forEach(tacName => {
            const bh = tacticBlockH(tacName);
            const tactic = hierarchy[tacName];
            const pKeys = Object.keys(tactic.parentTechniques).sort();


            const tx = R ? cx + CENTER_R + GAP_C2T : cx - CENTER_R - GAP_C2T - TACTIC_W;
            const ty = curY + bh / 2 - TACTIC_H / 2;
            const tacKey = 'tactic__' + tacName;
            nodes[tacKey] = { type: 'tactic', name: tacName, x: tx, y: ty, w: TACTIC_W, h: TACTIC_H, side };

            addLine(COLORS.tactic, 0.3,
                R ? cx + CENTER_R : cx - CENTER_R, cy,
                R ? tx : tx + TACTIC_W, ty + TACTIC_H / 2);
            let teY = curY;
            pKeys.forEach(pid => {
                const pt = tactic.parentTechniques[pid];
                const pbh = parentBlockH(pt);

                const teX = R ? tx + TACTIC_W + GAP_T2TE : tx - GAP_T2TE - TECH_W;
                const teNodeY = teY + Math.max(TECH_H, toolsColH(pt.tools)) / 2 - TECH_H / 2;
                const ptNodeKey = pt._rk;
                nodes[ptNodeKey] = {
                    type: 'technique', techId: pt.id, techName: pt.name, tactic: tacName,
                    x: teX, y: teNodeY, w: TECH_W, h: TECH_H, side
                };

                addLine(COLORS.technique, 0.22,
                    R ? tx + TACTIC_W : tx, ty + TACTIC_H / 2,
                    R ? teX : teX + TECH_W, teNodeY + TECH_H / 2);
                const ptSorted = [...pt.tools].sort((a, b) => a.ToolName.localeCompare(b.ToolName));
                const toolBaseX = R ? teX + TECH_W + GAP_TE2TO : teX - GAP_TE2TO - TOOL_W;
                const hasSubsWithTools = Object.keys(pt.subs).length > 0;

                ptSorted.forEach((tool, i) => {
                    const toolKey = pt._rk + '__' + tool.ToolName;
                    const toX = toolBaseX;
                    const toY = teY + i * TOOL_STEP;
                    const cc = catColor(tool.Category);

                    nodes[toolKey] = { type: 'tool', record: tool, x: toX, y: toY, w: TOOL_W, h: TOOL_H, side };

                    addLine(cc, 0.2,
                        R ? teX + TECH_W : teX, teNodeY + TECH_H / 2,
                        R ? toX : toX + TOOL_W, toY + TOOL_H / 2);
                });

                const subs = Object.values(pt.subs).sort((a, b) => a.id.localeCompare(b.id));
                let subY = teY + Math.max(TECH_H, toolsColH(pt.tools));
                if (subs.length > 0 && pt.tools.length > 0) subY += SUB_GAP;
                if (subs.length > 0 && pt.tools.length === 0) subY = teY + TECH_H + SUB_GAP;

                subs.forEach((sub, si) => {
                    const sbh = subBlockH(sub);
                    const subX = R ? teX + TECH_W + GAP_TE2SUB : teX - GAP_TE2SUB - SUB_W;
                    const subNodeY = subY + sbh / 2 - SUB_H / 2;
                    const subNodeKey = sub._rk;
                    nodes[subNodeKey] = {
                        type: 'subtechnique', techId: sub.id, techName: sub.name, tactic: tacName,
                        parentTechId: pt.id, x: subX, y: subNodeY, w: SUB_W, h: SUB_H, side
                    };
                    addLine(COLORS.subtechnique, 0.18,
                        R ? teX + TECH_W : teX, teNodeY + TECH_H / 2,
                        R ? subX : subX + SUB_W, subNodeY + SUB_H / 2);
                    const subToolX = R ? subX + SUB_W + GAP_TE2TO : subX - GAP_TE2TO - TOOL_W;
                    const subSorted = [...sub.tools].sort((a, b) => a.ToolName.localeCompare(b.ToolName));
                    subSorted.forEach((tool, ti) => {
                        const toolKey = sub._rk + '__' + tool.ToolName;
                        const toX = subToolX;
                        const toY = subY + ti * TOOL_STEP;
                        const cc = catColor(tool.Category);

                        nodes[toolKey] = { type: 'tool', record: tool, x: toX, y: toY, w: TOOL_W, h: TOOL_H, side };

                        addLine(cc, 0.2,
                            R ? subX + SUB_W : subX, subNodeY + SUB_H / 2,
                            R ? toX : toX + TOOL_W, toY + TOOL_H / 2);
                    });

                    subY += sbh + SUB_GAP;
                });

                teY += pbh + TECH_GAP;
            });

            curY += bh + TACTIC_GAP;
        });
    }


    function render() {
        viewport = document.getElementById('mm-viewport');
        canvas = document.getElementById('mm-canvas');
        canvas.style.width = canvasW + 'px';
        canvas.style.height = canvasH + 'px';

        const NS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('width', canvasW);
        svg.setAttribute('height', canvasH);

        Object.values(lineGroups).forEach(g => {
            const p = document.createElementNS(NS, 'path');
            p.setAttribute('d', g.d.join(' '));
            p.setAttribute('fill', 'none');
            p.setAttribute('stroke', g.color);
            p.setAttribute('stroke-width', '1.5');
            p.setAttribute('opacity', g.opacity);
            svg.appendChild(p);
        });
        canvas.appendChild(svg);
        const frag = document.createDocumentFragment();
        Object.entries(nodes).forEach(([key, n]) => {
            frag.appendChild(makeNode(key, n));
        });
        canvas.appendChild(frag);
    }

    function makeNode(key, n) {
        const d = document.createElement('div');
        d.className = 'mm-node';
        d.dataset.nodeKey = key;
        d.style.cssText = 'left:' + n.x + 'px;top:' + n.y + 'px;width:' + n.w + 'px;height:' + n.h + 'px;';

        switch (n.type) {
            case 'center':
                d.classList.add('mm-center');
                d.innerHTML = '<span>OWASP<br>Top 10</span>';
                break;
            case 'tactic':
                d.classList.add('mm-tactic');
                d.innerHTML = '<div class="mm-dot" style="background:#ff3b5c;box-shadow:0 0 6px #ff3b5c66"></div><span>' + esc(n.name) + '</span>';
                break;
            case 'technique':
                d.classList.add('mm-technique');
                d.innerHTML = '<span class="mm-tech-id">' + esc(n.techId) + '</span><span class="mm-tech-name">' + esc(n.techName) + '</span>';
                let techUrl = cweLinks[n.techId];
                if (!techUrl && n.techId && n.techId.startsWith('CWE-')) {
                    techUrl = 'https://cwe.mitre.org/data/definitions/' + n.techId.substring(4) + '.html';
                }
                if (techUrl) {
                    d.innerHTML += '<a href="' + esc(techUrl) + '" target="_blank" class="mm-cwe-link" onclick="event.stopPropagation()" title="Open CWE definition"><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>';
                }
                break;
            case 'subtechnique':
                d.classList.add('mm-subtechnique');
                d.innerHTML = '<div class="mm-sub-marker"></div><span class="mm-tech-id">' + esc(n.techId) + '</span><span class="mm-tech-name">' + esc(n.techName) + '</span>';
                let subUrl = cweLinks[n.techId];
                if (!subUrl && n.techId && n.techId.startsWith('CWE-')) {
                    subUrl = 'https://cwe.mitre.org/data/definitions/' + n.techId.substring(4) + '.html';
                }
                if (subUrl) {
                    d.innerHTML += '<a href="' + esc(subUrl) + '" target="_blank" class="mm-cwe-link" onclick="event.stopPropagation()" title="Open CWE definition"><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>';
                }
                break;
            case 'tool': {
                const cc = catColor(n.record.Category);
                d.classList.add('mm-tool');
                d.innerHTML = '<div class="mm-dot" style="background:' + cc + '"></div><span>' + esc(n.record.ToolName) + '</span>';
                d.addEventListener('click', e => { e.stopPropagation(); openTool(key, d); });
                break;
            }
        }
        return d;
    }


    let _vpRect = null;
    let _vpRectStale = true;

    function applyView() {
        if (_rafPending) return;
        _rafPending = true;
        requestAnimationFrame(() => {
            canvas.style.transform = 'translate3d(' + vx + 'px,' + vy + 'px, 0) scale(' + vs + ')';
            _rafPending = false;
        });
    }

    function applyViewImmediate() {
        _rafPending = false;
        canvas.style.transform = 'translate3d(' + vx + 'px,' + vy + 'px, 0) scale(' + vs + ')';
    }

    function initPanZoom() {

        let _vpRect = viewport.getBoundingClientRect();
        let _vpRectStale = true;
        const refreshRect = () => { _vpRect = viewport.getBoundingClientRect(); _vpRectStale = false; };
        window.addEventListener('resize', () => { _vpRectStale = true; }, { passive: true });


        viewport.addEventListener('wheel', e => {
            e.preventDefault();
            if (_vpRectStale) refreshRect();

            const f = e.deltaY > 0 ? 0.92 : 1.08;
            const ns = Math.max(0.08, Math.min(2.5, vs * f));
            const mx = e.clientX - _vpRect.left;
            const my = e.clientY - _vpRect.top;
            const cx = (mx - vx) / vs;
            const cy = (my - vy) / vs;
            vs = ns;
            vx = mx - cx * ns;
            vy = my - cy * ns;
            applyView();
        }, { passive: false });


        viewport.addEventListener('mousedown', e => {
            if (e.button !== 0) return;
            if (e.target.closest('.mm-tool')) return;
            dragging = true;
            dragDist = 0;
            dragX0 = e.clientX - vx;
            dragY0 = e.clientY - vy;
            viewport.classList.add('panning');
            e.preventDefault();
        });

        window.addEventListener('mousemove', e => {
            if (!dragging) return;
            dragDist += Math.abs(e.movementX) + Math.abs(e.movementY);
            vx = e.clientX - dragX0;
            vy = e.clientY - dragY0;
            applyView();
        }, { passive: true });

        window.addEventListener('mouseup', () => {
            if (!dragging) return;
            dragging = false;
            viewport.classList.remove('panning');
        }, { passive: true });


        let _lastTouchDist = 0;
        let _lastTouchMid = null;
        let _touchDragging = false;

        viewport.addEventListener('touchstart', e => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                _lastTouchDist = Math.sqrt(dx * dx + dy * dy);
                _lastTouchMid = {
                    x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                    y: (e.touches[0].clientY + e.touches[1].clientY) / 2
                };
            } else if (e.touches.length === 1) {
                _touchDragging = true;
                dragDist = 0;
                dragX0 = e.touches[0].clientX - vx;
                dragY0 = e.touches[0].clientY - vy;
            }
        }, { passive: false });

        viewport.addEventListener('touchmove', e => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const mid = {
                    x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
                    y: (e.touches[0].clientY + e.touches[1].clientY) / 2
                };
                if (_vpRectStale) refreshRect();
                const f = dist / _lastTouchDist;
                const ns = Math.max(0.08, Math.min(2.5, vs * f));
                const mx = mid.x - _vpRect.left;
                const my = mid.y - _vpRect.top;
                const cx = (mx - vx) / vs;
                const cy = (my - vy) / vs;
                vs = ns;
                vx = mx - cx * ns + (mid.x - _lastTouchMid.x);
                vy = my - cy * ns + (mid.y - _lastTouchMid.y);
                _lastTouchDist = dist;
                _lastTouchMid = mid;
                applyView();
            } else if (e.touches.length === 1 && _touchDragging) {
                dragDist += 1;
                vx = e.touches[0].clientX - dragX0;
                vy = e.touches[0].clientY - dragY0;
                applyView();
            }
        }, { passive: false });

        viewport.addEventListener('touchend', () => {
            _touchDragging = false;
            _lastTouchDist = 0;
            _lastTouchMid = null;
        }, { passive: true });

        viewport.addEventListener('click', e => {
            if (dragDist > 5) return;
            if (e.target.closest('.mm-tool')) return;
            closePanel();
        });
    }

    function centerView() {
        const cn = nodes['__center__'];
        const cxn = cn.x + cn.w / 2;
        const cyn = cn.y + cn.h / 2;
        vs = 0.55;
        vx = viewport.clientWidth / 2 - cxn * vs;
        vy = viewport.clientHeight / 2 - cyn * vs;
        applyViewImmediate();
    }

    function fitAll() {
        const vw = viewport.clientWidth;
        const vh = viewport.clientHeight;
        const sx = vw / canvasW;
        const sy = vh / canvasH;
        vs = Math.min(sx, sy) * 0.95;
        vx = (vw - canvasW * vs) / 2;
        vy = (vh - canvasH * vs) / 2;
        applyViewImmediate();
    }

    function openTool(key, el) {
        const rec = toolLookup[key];
        if (!rec) { closePanel(); return; }

        if (selEl) selEl.classList.remove('mm-selected');
        selEl = el;
        el.classList.add('mm-selected');

        const cc = catColor(rec.Category);
        document.getElementById('panel-technique-id').textContent = rec.ID;
        document.getElementById('panel-technique-name').textContent = rec.Name;
        document.getElementById('panel-tool-name').textContent = rec.ToolName;

        const catEl = document.getElementById('panel-tool-category');
        catEl.textContent = rec.Category;
        catEl.style.color = cc;
        catEl.style.background = cc + '18';
        catEl.style.border = '1px solid ' + cc + '44';

        document.getElementById('panel-badges').innerHTML =
            '<span class="badge badge-tactic">' + esc(rec.Tactic) + '</span>' +
            '<span class="badge badge-confidence">Confidence: ' + rec.ConfidenceScore + '/10</span>';

        document.getElementById('panel-command').textContent = rec.ExampleCommands || 'No command available';
        resetCopy();
        document.getElementById('side-panel').classList.add('open');
    }

    function closePanel() {
        document.getElementById('side-panel').classList.remove('open');
        if (selEl) { selEl.classList.remove('mm-selected'); selEl = null; }
    }


    function initCopy() {
        document.getElementById('copy-cmd-btn').addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(document.getElementById('panel-command').textContent);
                document.getElementById('copy-cmd-btn').classList.add('copied');
                document.getElementById('copy-icon').innerHTML = SVG_CHECK;
                document.getElementById('copy-text').textContent = 'Copied!';
                setTimeout(resetCopy, 2000);
            } catch (_) { }
        });
    }
    function resetCopy() {
        document.getElementById('copy-cmd-btn').classList.remove('copied');
        document.getElementById('copy-icon').innerHTML = SVG_CLIPBOARD;
        document.getElementById('copy-text').textContent = 'Copy';
    }


    function initSearch() {
        const inp = document.getElementById('search-input');
        const box = document.getElementById('search-results');
        let timer;

        inp.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const q = inp.value.trim().toLowerCase();
                if (q.length < 2) { box.classList.remove('active'); box.innerHTML = ''; return; }
                doSearch(q);
            }, 200);
        });

        inp.addEventListener('keydown', e => {
            if (e.key === 'Escape') { inp.value = ''; box.classList.remove('active'); box.innerHTML = ''; }
        });

        document.addEventListener('click', e => {
            if (!e.target.closest('#search-wrapper')) box.classList.remove('active');
        });
    }

    function doSearch(q) {
        const box = document.getElementById('search-results');
        const hits = [];
        const seen = new Set();


        for (const [k, r] of Object.entries(toolLookup)) {
            if (hits.length >= 25) break;
            if (r.ToolName.toLowerCase().includes(q) || r.Category.toLowerCase().includes(q) ||
                r.ID.toLowerCase().includes(q) || r.Name.toLowerCase().includes(q) ||
                r.Tactic.toLowerCase().includes(q)) {
                if (!seen.has(k)) { seen.add(k); hits.push({ key: k, type: 'tool', rec: r }); }
            }
        }

        Object.entries(nodes).forEach(([k, n]) => {
            if (n.type === 'tactic' && n.name.toLowerCase().includes(q) && !seen.has(k)) {
                seen.add(k); hits.push({ key: k, type: 'tactic', label: n.name });
            }
            if ((n.type === 'technique' || n.type === 'subtechnique') &&
                (n.techId.toLowerCase().includes(q) || n.techName.toLowerCase().includes(q)) && !seen.has(k)) {
                const tag = n.type === 'subtechnique' ? 'Sub-technique' : 'Technique';
                seen.add(k); hits.push({ key: k, type: n.type, label: n.techId + ' -- ' + n.techName, meta: tag });
            }
        });

        if (!hits.length) {
            box.innerHTML = '<div class="search-result-item"><span class="search-result-name" style="color:var(--text-muted)">No results found</span></div>';
            box.classList.add('active');
            return;
        }

        box.innerHTML = hits.map(h => {
            let dot, name, meta;
            if (h.type === 'tool') { dot = catColor(h.rec.Category); name = h.rec.ToolName; meta = h.rec.ID + ' · ' + h.rec.Tactic; }
            else if (h.type === 'tactic') { dot = COLORS.tactic; name = h.label; meta = 'Tactic'; }
            else if (h.type === 'subtechnique') { dot = COLORS.subtechnique; name = h.label; meta = 'Sub-technique'; }
            else { dot = COLORS.technique; name = h.label; meta = 'Technique'; }
            return '<div class="search-result-item" data-key="' + esc(h.key) + '">' +
                '<div class="search-result-dot" style="background:' + dot + ';box-shadow:0 0 6px ' + dot + '"></div>' +
                '<span class="search-result-name">' + esc(name) + '</span>' +
                '<span class="search-result-meta">' + esc(meta) + '</span></div>';
        }).join('');

        box.classList.add('active');

        box.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                navigateTo(el.dataset.key);
                box.classList.remove('active');
                document.getElementById('search-input').value = '';
            });
        });
    }

    function navigateTo(key) {
        const n = nodes[key];
        if (!n) return;

        const tX = n.x + n.w / 2;
        const tY = n.y + n.h / 2;
        vs = Math.max(vs, 0.9);
        vx = viewport.clientWidth / 2 - tX * vs;
        vy = viewport.clientHeight / 2 - tY * vs;

        canvas.style.transition = 'transform .6s cubic-bezier(.4,0,.2,1)';
        applyViewImmediate();
        setTimeout(() => { canvas.style.transition = ''; }, 600);


        const el = canvas.querySelector('[data-node-key="' + CSS.escape(key) + '"]');
        if (el) {
            el.classList.add('mm-highlight');
            setTimeout(() => el.classList.remove('mm-highlight'), 2200);
            if (n.type === 'tool') openTool(key, el);
        }
    }


    function initControls() {
        document.getElementById('btn-zoom-in').addEventListener('click', () => {
            const r = viewport.getBoundingClientRect();
            const mx = r.width / 2, my = r.height / 2;
            const cx = (mx - vx) / vs, cy = (my - vy) / vs;
            vs = Math.min(2.5, vs * 1.3);
            vx = mx - cx * vs; vy = my - cy * vs;
            canvas.style.transition = 'transform .3s ease'; applyViewImmediate();
            setTimeout(() => { canvas.style.transition = ''; }, 300);
        });

        document.getElementById('btn-zoom-out').addEventListener('click', () => {
            const r = viewport.getBoundingClientRect();
            const mx = r.width / 2, my = r.height / 2;
            const cx = (mx - vx) / vs, cy = (my - vy) / vs;
            vs = Math.max(0.08, vs * 0.7);
            vx = mx - cx * vs; vy = my - cy * vs;
            canvas.style.transition = 'transform .3s ease'; applyViewImmediate();
            setTimeout(() => { canvas.style.transition = ''; }, 300);
        });

        document.getElementById('btn-fit').addEventListener('click', fitAll);
        document.getElementById('btn-center').addEventListener('click', centerView);
        document.getElementById('panel-close').addEventListener('click', closePanel);
    }


    function initThemeToggle() {
        const stored = localStorage.getItem('owasp-map-theme');
        const theme = stored || 'dark';
        document.documentElement.setAttribute('data-theme', theme);

        document.getElementById('theme-toggle').addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('owasp-map-theme', next);
        });
    }


    function initTacticIndex() {
        const body = document.getElementById('tactic-index-body');
        const header = document.getElementById('tactic-index-header');
        const panel = document.getElementById('tactic-index');


        const tactics = Object.keys(hierarchy).sort();
        const frag = document.createDocumentFragment();

        tactics.forEach(tacName => {
            const pt = hierarchy[tacName].parentTechniques;
            const techCount = Object.keys(pt).length;
            const el = document.createElement('div');
            el.className = 'tactic-index-item';
            el.innerHTML =
                '<div class="tactic-index-item-dot"></div>' +
                '<span class="tactic-index-item-name">' + esc(tacName) + '</span>' +
                '<span class="tactic-index-item-count">' + techCount + '</span>';

            el.addEventListener('click', () => {
                const nodeKey = 'tactic__' + tacName;
                navigateTo(nodeKey);
            });

            frag.appendChild(el);
        });

        body.appendChild(frag);


        header.addEventListener('click', () => {
            panel.classList.toggle('collapsed');
        });
    }

    const _escMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    const _escRe = /[&<>"']/g;
    function esc(s) {
        if (!s) return '';
        return s.replace(_escRe, c => _escMap[c]);
    }

    async function main() {
        try {
            initThemeToggle();

            const data = await loadData();
            buildHierarchy(data);
            computeLayout();
            render();
            initPanZoom();
            initSearch();
            initCopy();
            initControls();
            initTacticIndex();


            centerView();

            setTimeout(() => {
                document.getElementById('loading-overlay').classList.add('hidden');
            }, 250);
        } catch (err) {
            console.error('Init failed:', err);
            document.getElementById('loading-overlay').innerHTML =
                '<div style="color:var(--accent-red);font-size:16px;font-weight:600">Failed to Load</div>' +
                '<div style="color:var(--text-secondary);font-size:13px;max-width:400px;text-align:center;line-height:1.6;margin-top:8px">' +
                esc(err.message) + '<br><br>Make sure <code>data.json</code> is served via a local HTTP server.</div>';
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', main);
    else main();
})();
