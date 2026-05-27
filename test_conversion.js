const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const dom = new JSDOM();
global.DOMParser = dom.window.DOMParser;
global.XMLSerializer = dom.window.XMLSerializer;

// SCALE_FACTOR removed - addCoordinate converts points to micrometers directly

    const LEGEND_RULES = {
        "f:null|s:#231f20|w:0.28": [
                "501.1"
        ],
        "f:null|s:#000000|w:0.28": [
                "501.1"
        ],
        "f:#939598|s:null|w:null": [
                "521"
        ],
        "f:null|s:#231f20|w:1.13": [
                "515"
        ],
        "f:null|s:#000000|w:1.13": [
                "515"
        ],
        "f:#ffdca3|s:null|w:null": [
                "403"
        ],
        "f:null|s:#bf4000|w:0.21": [
                "101.000",
                "101.001",
                "104.000",
                "104.005"
        ],
        "f:null|s:#bf4000|w:0.30": [
                "102.000"
        ],
        "f:#bf4000|s:#bf4000|w:null": [
                "102.003",
                "105.100",
                "105.200",
                "107.000",
                "108.000",
                "109.000",
                "110.000",
                "112.000",
                "113.000"
        ],
        "f:null|s:#bf4000|w:0.15": [
                "103.000",
                "103.001"
        ],
        "f:null|s:#bf4000|w:0.27": [
                "104.000",
                "105.100",
                "105.200"
        ],
        "f:null|s:#bf4000|w:0.37": [
                "104.005",
                "107.000"
        ],
        "f:null|s:#bf4000|w:0.25": [
                "111.000",
                "115.000"
        ],
        "f:null|s:#000000|w:0.50": [
                "201.000",
                "201.004"
        ],
        "f:null|s:#000000|w:0.18": [
                "201.000",
                "201.004",
                "202.000",
                "202.002",
                "301.000",
                "301.002",
                "301.004",
                "307.000"
        ],
        "f:null|s:#000000|w:0.30": [
                "202.000",
                "202.001",
                "202.002",
                "202.003"
        ],
        "f:#000000|s:#000000|w:null": [
                "203.000",
                "203.001",
                "204.000",
                "205.000",
                "206.000",
                "207.000",
                "208.000",
                "208.002",
                "208.004",
                "210.000",
                "210.001",
                "416.000",
                "512.100",
                "512.101",
                "513.100",
                "513.200",
                "522.100",
                "524.000",
                "526.000"
        ],
        "f:#ffdb99|s:#ffdb99|w:null": [
                "213.000",
                "403.000",
                "404.000",
                "404.001",
                "413.100",
                "414.100"
        ],
        "f:url(#p21300.0c35ang450dim0t0)|s:#000000|w:null": [
                "213.000"
        ],
        "f:#a6a6a6|s:#a6a6a6|w:null": [
                "214.000",
                "512.301"
        ],
        "f:#00ffff|s:#00ffff|w:null": [
                "301.000",
                "301.001",
                "303.000",
                "309.000",
                "512.302"
        ],
        "f:#4dffff|s:#4dffff|w:null": [
                "301.004",
                "301.005"
        ],
        "f:null|s:#00ffff|w:0.18": [
                "302.000",
                "302.004",
                "601.001"
        ],
        "f:#b3ffff|s:#b3ffff|w:null": [
                "302.000",
                "302.001"
        ],
        "f:null|s:#00ffff|w:0.21": [
                "305.000",
                "306.000"
        ],
        "f:url(#h30700.0c16ang0dim0t0)|s:#00ffff|w:null": [
                "307.000"
        ],
        "f:url(#h30700.0c2ang0dim0t0)|s:#000000|w:null": [
                "307.000"
        ],
        "f:url(#h30700.1c16ang0dim0t0)|s:#00ffff|w:null": [
                "307.001"
        ],
        "f:url(#h30800.0c16ang0dim0t0)|s:#00ffff|w:null": [
                "308.000"
        ],
        "f:null|s:#00ffff|w:0.12": [
                "308.001"
        ],
        "f:url(#p31000.0c16ang0dim0t0)|s:#00ffff|w:null": [
                "310.000"
        ],
        "f:null|s:#00ffff|w:0.25": [
                "311.000",
                "312.000",
                "313.000"
        ],
        "f:#ffba36|s:#ffba36|w:null": [
                "401.000",
                "402.000",
                "402.001",
                "412.000",
                "413.000",
                "414.000",
                "512.304"
        ],
        "f:#ffcc69|s:#ffcc69|w:null": [
                "401.001"
        ],
        "f:url(#p40200.0c31ang450dim0t0)|s:#ffffff|w:null": [
                "402.000"
        ],
        "f:url(#p40200.1c27ang450dim0t0)|s:#85ff66|w:null": [
                "402.001"
        ],
        "f:url(#p40400.0c31ang450dim0t0)|s:#ffffff|w:null": [
                "404.000"
        ],
        "f:url(#p40400.1c27ang450dim0t0)|s:#85ff66|w:null": [
                "404.001"
        ],
        "f:#ffffff|s:#ffffff|w:null": [
                "405.000",
                "417.000",
                "418.000"
        ],
        "f:#c2ffb3|s:#c2ffb3|w:null": [
                "406.000",
                "406.001"
        ],
        "f:#c3e3c6|s:null|w:null": [
                "406.000"
        ],
        "f:url(#h40600.1c23ang900dim0t0)|s:#ffffff|w:null": [
                "406.001"
        ],
        "f:null|s:#c2ffb3|w:0.40": [
                "406.002"
        ],
        "f:url(#h40700.0c29ang900dim0t0)|s:#33ff00|w:null": [
                "407.000"
        ],
        "f:#85ff66|s:#85ff66|w:null": [
                "408.000",
                "408.001",
                "512.307"
        ],
        "f:url(#h40800.1c23ang900dim0t0)|s:#ffffff|w:null": [
                "408.001"
        ],
        "f:null|s:#85ff66|w:0.40": [
                "408.002"
        ],
        "f:url(#h40900.0c29ang900dim0t0)|s:#33ff00|w:null": [
                "409.000"
        ],
        "f:#33ff00|s:#33ff00|w:null": [
                "410.000",
                "410.001",
                "413.001",
                "512.308"
        ],
        "f:url(#h41000.1c23ang900dim0t0)|s:#ffffff|w:null": [
                "410.001"
        ],
        "f:null|s:#33ff00|w:0.25": [
                "410.002",
                "417.000",
                "419.000"
        ],
        "f:#00b324|s:#00b324|w:null": [
                "411.000",
                "512.309"
        ],
        "f:null|s:#00b324|w:0.40": [
                "411.002"
        ],
        "f:url(#p41200.0c35ang0dim0t0)|s:#000000|w:null": [
                "412.000"
        ],
        "f:url(#p41300.0c29ang0dim0t0)|s:#33ff00|w:null": [
                "413.000"
        ],
        "f:url(#p41310.0c29ang0dim0t0)|s:#33ff00|w:null": [
                "413.100"
        ],
        "f:url(#p41400.0c29ang900dim0t0)|s:#33ff00|w:null": [
                "414.000"
        ],
        "f:url(#p41410.0c29ang900dim0t0)|s:#33ff00|w:null": [
                "414.100"
        ],
        "f:null|s:#000000|w:0.15": [
                "415.000"
        ],
        "f:null|s:#33ff00|w:0.30": [
                "418.000"
        ],
        "f:null|s:#ffffff|w:0.50": [
                "419.000"
        ],
        "f:null|s:#2db457|w:0.71": [
                "417.000"
        ],
        "f:null|s:#2db457|w:0.85": [
                "418.000"
        ],
        "f:null|s:#000000|w:0.10": [
                "501.000",
                "501.010",
                "501.011",
                "501.012",
                "501.013",
                "501.020",
                "501.030",
                "501.031",
                "501.032",
                "501.033",
                "501.100",
                "501.200",
                "520.000",
                "520.002",
                "522.000",
                "522.001",
                "532.000",
                "532.001",
                "532.002"
        ],
        "f:#f0c4ab|s:#f0c4ab|w:null": [
                "501.000",
                "501.001",
                "501.002",
                "501.300"
        ],
        "f:null|s:#f0c4ab|w:0.50": [
                "501.010",
                "501.011",
                "505.001"
        ],
        "f:null|s:#f0c4ab|w:0.40": [
                "501.010",
                "505.000",
                "532.000"
        ],
        "f:null|s:#f0c4ab|w:0.60": [
                "501.011"
        ],
        "f:null|s:#f0c4ab|w:0.85": [
                "501.012"
        ],
        "f:null|s:#f0c4ab|w:0.75": [
                "501.012",
                "505.002",
                "532.001"
        ],
        "f:null|s:#f0c4ab|w:1.10": [
                "501.013"
        ],
        "f:null|s:#f0c4ab|w:1.00": [
                "501.013",
                "505.003",
                "532.002"
        ],
        "f:#e5a67f|s:#e5a67f|w:null": [
                "501.020",
                "501.021",
                "501.301",
                "512.311"
        ],
        "f:null|s:#e5a67f|w:0.60": [
                "501.030"
        ],
        "f:null|s:#e5a67f|w:0.50": [
                "501.030"
        ],
        "f:null|s:#e5a67f|w:1.10": [
                "501.031"
        ],
        "f:null|s:#e5a67f|w:1.00": [
                "501.031"
        ],
        "f:null|s:#e5a67f|w:1.60": [
                "501.032"
        ],
        "f:null|s:#e5a67f|w:1.50": [
                "501.032"
        ],
        "f:null|s:#e5a67f|w:2.10": [
                "501.033"
        ],
        "f:null|s:#e5a67f|w:2.00": [
                "501.033"
        ],
        "f:url(#p50130.0c23ang450dim0t0)|s:#ffffff|w:null": [
                "501.300"
        ],
        "f:url(#p50130.1c23ang450dim0t0)|s:#ffffff|w:null": [
                "501.301"
        ],
        "f:null|s:#000000|w:0.12": [
                "505.000",
                "505.001",
                "505.002",
                "505.003",
                "505.004"
        ],
        "f:null|s:#f0c4ab|w:0.52": [
                "505.000"
        ],
        "f:null|s:#f0c4ab|w:0.62": [
                "505.001"
        ],
        "f:null|s:#f0c4ab|w:0.87": [
                "505.002"
        ],
        "f:null|s:#f0c4ab|w:1.12": [
                "505.003"
        ],
        "f:null|s:#000000|w:0.27": [
                "506.000",
                "507.000"
        ],
        "f:null|s:#000000|w:0.21": [
                "508.000",
                "513.100",
                "513.101",
                "513.200",
                "516.000",
                "528.000"
        ],
        "f:null|s:#000000|w:0.45": [
                "509.100"
        ],
        "f:null|s:#ffffff|w:0.25": [
                "509.100"
        ],
        "f:null|s:#9eba00|w:1.25": [
                "509.101"
        ],
        "f:null|s:#000000|w:0.08": [
                "509.200"
        ],
        "f:null|s:#000000|w:0.14": [
                "510.000",
                "511.000",
                "511.001",
                "516.000",
                "518.000",
                "521.000",
                "521.002",
                "521.003",
                "528.000",
                "529.000",
                "601.000"
        ],
        "f:null|s:#000000|w:0.20": [
                "512.200"
        ],
        "f:url(#h51230.0c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.300"
        ],
        "f:url(#h51230.1c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.301"
        ],
        "f:url(#h51230.2c9ang450dim0t0)|s:#ffffff|w:null": [
                "512.302"
        ],
        "f:url(#h51230.4c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.304"
        ],
        "f:url(#h51230.7c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.307"
        ],
        "f:url(#h51230.8c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.308"
        ],
        "f:url(#h51230.9c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.309"
        ],
        "f:url(#h51231.1c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.311"
        ],
        "f:#9eba00|s:#9eba00|w:null": [
                "512.312",
                "520.000",
                "520.001"
        ],
        "f:url(#h51231.2c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.312"
        ],
        "f:#7f7f7f|s:#7f7f7f|w:null": [
                "512.315",
                "521.000",
                "521.003"
        ],
        "f:url(#h51231.5c47ang450dim0t0)|s:#ffffff|w:null": [
                "512.315"
        ],
        "f:#cccccc|s:#cccccc|w:null": [
                "512.313",
                "522.000"
        ],
        "f:url(#h51231.3c45ang450dim0t0)|s:#ffffff|w:null": [
                "512.313"
        ],
        "f:#a626ff|s:#a626ff|w:null": [
                "512.314",
                "704.000"
        ],
        "f:url(#h51231.4c47ang450dim0t0)|s:#ffffff|w:null": [
                "512.314"
        ],
        "f:null|s:#000000|w:0.40": [
                "515.000",
                "518.000",
                "529.000"
        ],
        "f:null|s:#000000|w:0.25": [
                "519.000",
                "524.000"
        ],
        "f:null|s:#000000|w:0.22": [
                "525.000",
                "526.000",
                "527.000",
                "530.000",
                "531.000"
        ],
        "f:url(#p53300.0c11ang450dim0t0)|s:#7f7f7f|w:null": [
                "533.000"
        ],
        "f:url(#h60100.2c2ang900dim0t0)|s:#000000|w:null": [
                "601.002"
        ],
        "f:url(#h60100.3c14ang900dim0t0)|s:#00ffff|w:null": [
                "601.003"
        ],
        "f:null|s:#a626ff|w:0.35": [
                "701.000",
                "703.000",
                "705.000",
                "706.000",
                "707.000",
                "710.200",
                "715.000"
        ],
        "f:null|s:#a626ff|w:0.60": [
                "702.000"
        ],
        "f:null|s:#a626ff|w:1.00": [
                "708.000"
        ],
        "f:url(#h70900.0c50ang-450dim0t0)|s:#a626ff|w:null": [
                "709.000"
        ],
        "f:url(#h70900.0c50ang450dim0t0)|s:#a626ff|w:null": [
                "709.000"
        ],
        "f:null|s:#a626ff|w:0.40": [
                "709.001",
                "709.003",
                "709.004"
        ],
        "f:url(#h70900.1c50ang-450dim0t0)|s:#a626ff|w:null": [
                "709.001"
        ],
        "f:url(#h70900.1c50ang450dim0t0)|s:#a626ff|w:null": [
                "709.001"
        ],
        "f:url(#h70900.3c50ang-450dim0t0)|s:#a626ff|w:null": [
                "709.003"
        ],
        "f:url(#h70900.3c50ang450dim0t0)|s:#a626ff|w:null": [
                "709.003"
        ],
        "f:null|s:#a626ff|w:0.50": [
                "710.100"
        ],
        "f:null|s:#a626ff|w:0.10": [
                "714.000",
                "714.001"
        ],
        "f:#d191ff|s:#d191ff|w:null": [
                "714.000"
        ]
};

function codesMatch(c1, c2) {
    if (c1 === c2) return true;
    if (!c1 || !c2) return false;
    const parts1 = c1.split('.').map(Number);
    const parts2 = c2.split('.').map(Number);
    const maxLen = Math.max(parts1.length, parts2.length);
    for (let i = 0; i < maxLen; i++) {
        const p1 = parts1[i] || 0;
        const p2 = parts2[i] || 0;
        if (p1 !== p2) return false;
    }
    return true;
}

function getSymbolFromPatternId(fill) {
    if (!fill || !fill.startsWith('url(#')) return null;
    const match = fill.toLowerCase().match(/url\(#(p|h)(\d{3})(\d{2})/);
    if (match) {
        const main = match[2];
        const sub = match[3];
        return `${parseInt(main)}.${sub}`;
    }
    return null;
}

function findLegendRule(fill, stroke, strokeWidth) {
    let bestKey = null;
    let minWidthDiff = Infinity;
    const w = (strokeWidth && strokeWidth !== 'null') ? parseFloat(strokeWidth) : null;
    
    for (const key in LEGEND_RULES) {
        const m = key.match(/^f:([^|]+)\|s:([^|]+)\|w:(.+)$/);
        if (!m) continue;
        const rFill = m[1];
        const rStroke = m[2];
        const rWidthStr = m[3];
        const rWidth = rWidthStr !== 'null' ? parseFloat(rWidthStr) : null;
        
        if (rFill === fill && rStroke === stroke) {
            if (rWidth === null && w === null) {
                return key;
            }
            if (rWidth !== null && w !== null) {
                const diff = Math.abs(rWidth - w);
                if (diff < 0.08 && diff < minWidthDiff) {
                    minWidthDiff = diff;
                    bestKey = key;
                }
            }
        }
    }
    return bestKey;
}

const NAMED_COLORS = {
    black: '#000000', white: '#ffffff', red: '#ff0000', green: '#00ff00', blue: '#0000ff',
    yellow: '#ffff00', cyan: '#00ffff', magenta: '#ff00ff', gray: '#808080', grey: '#808080'
};

function debugLog(msg) {
    console.log('[DEBUG]', msg);
}

// Helper: Get inherited style or attribute (recursively traversing up the parent tree)
function getInheritedAttribute(el, attr) {
    let curr = el;
    while (curr && curr.tagName && (curr.localName || curr.tagName.split(':').pop().toLowerCase()) !== 'svg') {
        let v = curr.style ? curr.style[attr] : null;
        if (!v && curr.style && curr.style.getPropertyValue) {
            v = curr.style.getPropertyValue(attr);
        }
        if (!v) v = curr.getAttribute(attr);
        if (!v) {
            const s = curr.getAttribute('style');
            if (s) {
                const p = s.split(';').find(x => x.trim().startsWith(attr));
                if (p) v = p.split(':')[1].trim();
            }
        }
        if (v && v !== 'inherit') return v;
        curr = curr.parentElement;
    }
    return '';
}

// Helper: Normalize Colors
function getElementStyle(el, prop) {
    const val = getInheritedAttribute(el, prop);
    return normalizeColor(val || 'none');
}

function normalizeColor(c) {
    if (!c || c === 'none' || c === 'transparent') return 'null';
    c = c.trim().toLowerCase();
    if (NAMED_COLORS[c]) return NAMED_COLORS[c];
    if (c.startsWith('rgb')) {
        const m = c.match(/\d+/g);
        if (m) return "#" + m.slice(0,3).map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
    }
    if (c.startsWith('#') && c.length === 4) {
        return '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
    }
    return c;
}

function hexToRgb(hex) {
    if (!hex || hex === 'null' || hex === 'none') return {r:255,g:255,b:255};
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(x => x + x).join('');
    const num = parseInt(h, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function colorDist(c1, c2) { return Math.sqrt((c1.r-c2.r)**2 + (c1.g-c2.g)**2 + (c1.b-c2.b)**2); }

function multiplyMatrices(m1, m2) {
    return [
        m1[0]*m2[0] + m1[2]*m2[1],
        m1[1]*m2[0] + m1[3]*m2[1],
        m1[0]*m2[2] + m1[2]*m2[3],
        m1[1]*m2[2] + m1[3]*m2[3],
        m1[0]*m2[4] + m1[2]*m2[5] + m1[4],
        m1[1]*m2[4] + m1[3]*m2[5] + m1[5]
    ];
}

function parseSVGTransform(transformStr) {
    let m = [1, 0, 0, 1, 0, 0];
    if (!transformStr) return m;
    
    const regex = /([a-zA-Z]+)\(([^)]+)\)/g;
    let match;
    
    while ((match = regex.exec(transformStr)) !== null) {
        const type = match[1].toLowerCase();
        const args = match[2].split(/[\s,]+/).map(parseFloat);
        let cmdM = [1, 0, 0, 1, 0, 0];
        
        if (type === 'matrix' && args.length === 6) {
            cmdM = args;
        } else if (type === 'translate') {
            cmdM = [1, 0, 0, 1, args[0], args[1] || 0];
        } else if (type === 'scale') {
            cmdM = [args[0], 0, 0, args[1] !== undefined ? args[1] : args[0], 0, 0];
        } else if (type === 'rotate') {
            const angle = args[0] * Math.PI / 180;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            if (args.length >= 3) {
                const cx = args[1], cy = args[2];
                cmdM = multiplyMatrices([1, 0, 0, 1, cx, cy], multiplyMatrices([cos, sin, -sin, cos, 0, 0], [1, 0, 0, 1, -cx, -cy]));
            } else {
                cmdM = [cos, sin, -sin, cos, 0, 0];
            }
        }
        m = multiplyMatrices(m, cmdM);
    }
    return m;
}

function getGroupLabels(el) {
    const labels = [];
    let curr = el.parentElement;
    while (curr && curr.tagName && curr.tagName.toLowerCase() !== 'svg') {
        const id = curr.getAttribute('id');
        const label = curr.getAttribute('inkscape:label') || curr.getAttributeNS('http://www.inkscape.org/namespaces/inkscape','label');
        if (id && !/^(path|rect|g|line|circle|polygon|polyline)\d+/i.test(id)) labels.push(id.toLowerCase());
        if (label) labels.push(label.toLowerCase());
        curr = curr.parentElement;
    }
    return labels;
}

function isInsideDefs(el) {
    let curr = el.parentElement;
    while (curr && curr.tagName && curr.tagName.toLowerCase() !== 'svg') {
        if (curr.tagName.toLowerCase() === 'defs') return true;
        curr = curr.parentElement;
    }
    return false;
}

function getPageCenter(svgElement) {
    const viewBoxAttr = svgElement.getAttribute('viewBox');
    if (viewBoxAttr) {
        const vb = viewBoxAttr.trim().split(/[\s,]+/).map(parseFloat);
        if (vb.length === 4) {
            return { x: vb[0] + vb[2] / 2, y: vb[1] + vb[3] / 2 };
        }
    }
    const w = parseFloat(svgElement.getAttribute('width') || '842');
    const h = parseFloat(svgElement.getAttribute('height') || '595');
    return { x: w / 2, y: h / 2 };
}

function getElementBBoxAndCategory(el) {
    const tag = el.localName || el.tagName.split(':').pop().toLowerCase();
    const matrix = getCombinedElementMatrix(el);
    const scale = getMatrixScale(matrix);
    
    let w = 0, h = 0;
    
    if (tag === 'circle') {
        const r = parseFloat(el.getAttribute('r') || '0') * scale;
        w = 2 * r;
        h = 2 * r;
    } else if (tag === 'ellipse') {
        const rx = parseFloat(el.getAttribute('rx') || '0') * scale;
        const ry = parseFloat(el.getAttribute('ry') || '0') * scale;
        w = 2 * rx;
        h = 2 * ry;
    } else if (tag === 'rect') {
        w = parseFloat(el.getAttribute('width') || '0') * scale;
        h = parseFloat(el.getAttribute('height') || '0') * scale;
    } else if (tag === 'line') {
        const x1 = parseFloat(el.getAttribute('x1') || '0');
        const y1 = parseFloat(el.getAttribute('y1') || '0');
        const x2 = parseFloat(el.getAttribute('x2') || '0');
        const y2 = parseFloat(el.getAttribute('y2') || '0');
        w = Math.abs(x2 - x1) * scale;
        h = Math.abs(y2 - y1) * scale;
    } else if (tag === 'polygon' || tag === 'polyline') {
        const ptsAttr = el.getAttribute('points');
        if (ptsAttr) {
            const nums = ptsAttr.trim().split(/[\s,]+/).map(parseFloat).filter(x => !isNaN(x));
            let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
            for (let i = 0; i < nums.length; i += 2) {
                const x = nums[i];
                const y = nums[i+1];
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
            if (minX !== Infinity) {
                w = (maxX - minX) * scale;
                h = (maxY - minY) * scale;
            }
        }
    } else if (tag === 'path') {
        const d = el.getAttribute('d');
        if (d) {
            const nums = (d.match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/g) || []).map(parseFloat);
            let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
            let isX = true;
            for (let i = 0; i < nums.length; i++) {
                const val = nums[i];
                if (isX) {
                    if (val < minX) minX = val;
                    if (val > maxX) maxX = val;
                } else {
                    if (val < minY) minY = val;
                    if (val > maxY) maxY = val;
                }
                isX = !isX;
            }
            if (minX !== Infinity) {
                w = (maxX - minX) * scale;
                h = (maxY - minY) * scale;
            }
        }
    }
    
    const area = w * h;
    const fill = getElementStyle(el, 'fill');
    const hasFill = fill !== 'null';
    
    let category = 'line';
    if (tag === 'circle' || tag === 'ellipse') {
        category = 'point';
    } else if (w > 0 && h > 0 && w <= 12 && h <= 12) {
        category = 'point';
    } else if (tag === 'line' || tag === 'polyline') {
        category = 'line';
    } else if (tag === 'path') {
        const d = (el.getAttribute('d') || '').trim();
        const isClosed = d.endsWith('z') || d.endsWith('Z');
        if (isClosed || hasFill) {
            category = area < 1000 ? 'area-small' : 'area';
        } else {
            category = 'line';
        }
    } else if (hasFill) {
        category = area < 1000 ? 'area-small' : 'area';
    }
    
    return { width: w, height: h, area: area, category: category };
}

function getCombinedElementMatrix(el) {
    let m = [1, 0, 0, 1, 0, 0];
    let curr = el;
    while (curr && curr.tagName && curr.tagName.toLowerCase() !== 'svg') {
        const tAttr = curr.getAttribute('transform');
        if (tAttr) {
            const tm = parseSVGTransform(tAttr);
            m = multiplyMatrices(tm, m);
        }
        curr = curr.parentElement;
    }
    return m;
}

// Extract uniform scale factor from a 2D matrix [a,b,c,d,e,f]
// SVG stroke-width is scaled by this amount when transforms are applied
function getMatrixScale(matrix) {
    return Math.sqrt(matrix[0] * matrix[0] + matrix[1] * matrix[1]);
}

function addCoordinate(coords, x, y, flag, matrix, center) {
    const tx = x * matrix[0] + y * matrix[2] + matrix[4];
    const ty = x * matrix[1] + y * matrix[3] + matrix[5];
    
    // Both SVG and OMAP use Y-down, so no Y flip needed
    const xMm = (tx - center.x) * (25.4 / 72);
    const yMm = (ty - center.y) * (25.4 / 72);
    
    const xOmap = Math.round(xMm * 1000);
    const yOmap = Math.round(yMm * 1000);
    
    if (!isNaN(xOmap) && !isNaN(yOmap)) {
        coords.push(`${xOmap} ${yOmap}${flag ? ' ' + flag : ''}`);
    }
}

function convertShapeToPathString(el) {
    const tag = el.tagName.toLowerCase();
    if (tag === 'path') return el.getAttribute('d') || '';
    if (tag === 'polygon' || tag === 'polyline') {
        const ptsAttr = el.getAttribute('points');
        if (!ptsAttr) return '';
        const pts = ptsAttr.trim().split(/[\s,]+/);
        if (pts.length < 2) return '';
        let d = `M ${pts[0]} ${pts[1]}`;
        for (let i = 2; i < pts.length; i += 2) {
            if (pts[i] && pts[i+1]) d += ` L ${pts[i]} ${pts[i+1]}`;
        }
        if (tag === 'polygon') d += ' Z';
        return d;
    }
    if (tag === 'line') {
        return `M ${el.getAttribute('x1') || '0'} ${el.getAttribute('y1') || '0'} L ${el.getAttribute('x2') || '0'} ${el.getAttribute('y2') || '0'}`;
    }
    if (tag === 'rect') {
        const x = parseFloat(el.getAttribute('x') || '0'), y = parseFloat(el.getAttribute('y') || '0');
        const w = parseFloat(el.getAttribute('width') || '0'), h = parseFloat(el.getAttribute('height') || '0');
        return `M ${x} ${y} L ${x+w} ${y} L ${x+w} ${y+h} L ${x} ${y+h} Z`;
    }
    return '';
}

function parseSVGPath(d, matrix, center) {
    const matches = d.match(/([a-df-z])|(-?\d*\.?\d+(?:[eE][-+]?\d+)?)/gi);
    if (!matches) return [];
    
    const subpaths = [];
    let currentPath = [];
    let startPoint = { x: 0, y: 0 };
    let controlPoint = { x: 0, y: 0 };
    let cursor = { x: 0, y: 0 };
    
    let i = 0;
    let cmd = '';
    
    function getArgs(count) {
        const args = [];
        for (let j = 0; j < count; j++) {
            if (i < matches.length && !isNaN(parseFloat(matches[i]))) {
                args.push(parseFloat(matches[i++]));
            } else break;
        }
        return args;
    }
    
    while (i < matches.length) {
        const token = matches[i];
        if (/[a-df-z]/i.test(token)) {
            cmd = token;
            i++;
        }
        
        const isRel = cmd === cmd.toLowerCase();
        const type = cmd.toUpperCase();
        
        if (type === 'M') {
            const args = getArgs(2);
            if (args.length < 2) break;
            const targetX = isRel ? cursor.x + args[0] : args[0];
            const targetY = isRel ? cursor.y + args[1] : args[1];
            
            if (currentPath.length > 0) subpaths.push(currentPath);
            currentPath = [];
            cursor = { x: targetX, y: targetY };
            startPoint = { x: targetX, y: targetY };
            addCoordinate(currentPath, cursor.x, cursor.y, 0, matrix, center);
            
            while (i < matches.length && !isNaN(parseFloat(matches[i]))) {
                const nextArgs = getArgs(2);
                if (nextArgs.length < 2) break;
                const lx = isRel ? cursor.x + nextArgs[0] : nextArgs[0];
                const ly = isRel ? cursor.y + nextArgs[1] : nextArgs[1];
                cursor = { x: lx, y: ly };
                addCoordinate(currentPath, cursor.x, cursor.y, 0, matrix, center);
            }
        } else if (type === 'L') {
            const args = getArgs(2);
            if (args.length < 2) break;
            const targetX = isRel ? cursor.x + args[0] : args[0];
            const targetY = isRel ? cursor.y + args[1] : args[1];
            cursor = { x: targetX, y: targetY };
            addCoordinate(currentPath, cursor.x, cursor.y, 0, matrix, center);
        } else if (type === 'Z') {
            if (currentPath.length > 0) {
                const lastIdx = currentPath.length - 1;
                const lastParts = currentPath[lastIdx].split(' ');
                const flag = parseInt(lastParts[2] || '0');
                currentPath[lastIdx] = `${lastParts[0]} ${lastParts[1]} ${flag | 2}`;
            }
            cursor = startPoint;
            subpaths.push(currentPath);
            currentPath = [];
        } else {
            i++;
        }
    }
    
    if (currentPath.length > 0) subpaths.push(currentPath);
    return subpaths;
}

function compileSubpathsToCoords(subpaths) {
    if (subpaths.length === 0) return [];
    const combined = [];
    const outer = subpaths[0];
    for (let j = 0; j < outer.length; j++) {
        combined.push(outer[j]);
    }
    for (let k = 1; k < subpaths.length; k++) {
        const hole = subpaths[k];
        if (hole.length === 0) continue;
        for (let j = 0; j < hole.length; j++) {
            const parts = hole[j].split(' ');
            let flag = parseInt(parts[2] || '0');
            if (j === 0) flag = flag | 16;
            if (j === hole.length - 1) flag = flag | 18;
            combined.push(`${parts[0]} ${parts[1]} ${flag}`);
        }
    }
    return combined;
}

async function parseOOMPalette(oomText) {
    const doc = (new DOMParser()).parseFromString(oomText, 'application/xml');
    const colorMap = {};
    
    const colors = doc.getElementsByTagNameNS('*', 'color');
    for (let i = 0; i < colors.length; i++) {
        const c = colors[i];
        const rgbElements = c.getElementsByTagNameNS('*', 'rgb');
        if (rgbElements.length > 0) {
            const rgb = rgbElements[0];
            colorMap[c.getAttribute('priority')] = { 
                r: Math.round(parseFloat(rgb.getAttribute('r')) * 255), 
                g: Math.round(parseFloat(rgb.getAttribute('g')) * 255), 
                b: Math.round(parseFloat(rgb.getAttribute('b')) * 255) 
            };
        }
    }

    const palette = [];
    const symbols = doc.getElementsByTagNameNS('*', 'symbol');
    for (let i = 0; i < symbols.length; i++) {
        const s = symbols[i];
        const code = s.getAttribute('code'), id = s.getAttribute('id'), sType = s.getAttribute('type');
        if (!code || !id) continue;
        
        const areaElements = s.getElementsByTagNameNS('*', 'area_symbol');
        const lineElements = s.getElementsByTagNameNS('*', 'line_symbol');
        
        const area = areaElements.length > 0 ? areaElements[0] : null;
        const line = lineElements.length > 0 ? lineElements[0] : null;
        
        const colorId = area ? area.getAttribute('inner_color') : (line ? line.getAttribute('color') : null);
        
        let lineWidth = null;
        if (line) {
            lineWidth = parseFloat(line.getAttribute('line_width'));
        }
        
        if (colorId && colorMap[colorId]) {
            palette.push({ 
                code, 
                internalId: id, 
                rgb: colorMap[colorId], 
                name: s.getAttribute('name'), 
                symbolType: sType,
                objType: sType === "1" ? "0" : (sType === "8" ? "4" : "1"),
                lineWidth: isNaN(lineWidth) ? null : lineWidth
            });
        }
    }
    return palette;
}

// Run test simulation
async function run() {
    const svgPath = path.join(__dirname, 'Polaris.svg');
    const templatePath = path.join(__dirname, 'ISSprOM 2019_4000.omap');
    
    const svgText = fs.readFileSync(svgPath, 'utf8');
    const oomText = fs.readFileSync(templatePath, 'utf8');
    
    console.log('Loading oomPalette...');
    const oomPalette = await parseOOMPalette(oomText);
    console.log('Palette size:', oomPalette.length);
    
    console.log('Parsing SVG DOM...');
    const svgDoc = (new DOMParser()).parseFromString(svgText, 'image/svg+xml');
    const svgElement = svgDoc.documentElement;
    
    // Find supported elements
    const allElements = svgElement.querySelectorAll('path, polygon, polyline, line, rect, circle, ellipse');
    const supportedElements = Array.from(allElements).filter(el => {
        if (isInsideDefs(el)) return false;
        const fill = getElementStyle(el, 'fill');
        const stroke = getElementStyle(el, 'stroke');
        if (fill === 'null' && stroke === 'null') return false;
        return true;
    });
    console.log('Supported elements count:', supportedElements.length);
    
    const stylesMap = new Map();
    supportedElements.forEach(el => {
        const fill = getElementStyle(el, 'fill');
        const stroke = getElementStyle(el, 'stroke');
        const strokeWidth = getInheritedAttribute(el, 'stroke-width');
        
        // Compute effective stroke width, accounting for element's transform scale
        let effectiveStrokeWidth = strokeWidth;
        const matrix = getCombinedElementMatrix(el);
        if (strokeWidth && !isNaN(parseFloat(strokeWidth))) {
            const scale = getMatrixScale(matrix);
            effectiveStrokeWidth = (parseFloat(strokeWidth) * scale).toFixed(4);
        }
        
        // SVG Group Label Detection
        const groupLabels = getGroupLabels(el);
        const groupName = groupLabels.length > 0 ? groupLabels[0] : '';
        
        // Compute geometry Category and Bounding Box
        const bboxInfo = getElementBBoxAndCategory(el);
        const category = bboxInfo.category;
        
        const key = `f:${fill}|s:${stroke}|w:${effectiveStrokeWidth}|g:${groupName}|t:${category}`;
        
        if (!stylesMap.has(key)) {
            stylesMap.set(key, {
                count: 0,
                fill,
                stroke,
                strokeWidth: effectiveStrokeWidth,
                groupName
            });
        }
        stylesMap.get(key).count++;
    });
    
    const uniqueStyles = Array.from(stylesMap.entries()).map(([key, obj]) => {
        return {
            key,
            count: obj.count,
            fill: obj.fill,
            stroke: obj.stroke,
            strokeWidth: obj.strokeWidth,
            groupName: obj.groupName
        };
    });
    console.log('Unique styles count:', uniqueStyles.length);
    
    // Auto-map closest colors
    console.log('Auto-mapping styles to symbols...');
    const COMMON_KEYWORDS = ["contour", "building", "fence", "wall", "paved", "footpath", "track", "boundary", "bank", "cliff", "road", "canopy", "stairway"];
    const mapping = new Map();
    uniqueStyles.forEach((style, idx) => {
        const hasFill = style.fill !== 'null';
        const hasStroke = style.stroke !== 'null';
        const sampleColor = hasFill ? style.fill : style.stroke;
        const rgb = hexToRgb(sampleColor);
        
        // Extract category from key
        let category = 'area';
        const keyParts = style.key.split('|');
        const typePart = keyParts.find(p => p.startsWith('t:'));
        if (typePart) {
            category = typePart.substring(2);
        }

        let bestMatch = null;
        let minDist = Infinity;
        const strokeWidthVal = parseFloat(style.strokeWidth);

        // 1. Try to match pattern ID first
        const patternCode = getSymbolFromPatternId(style.fill);
        if (patternCode) {
            const sym = oomPalette.find(o => codesMatch(o.code, patternCode));
            if (sym) {
                bestMatch = sym;
                minDist = 0; // 100% confidence
            }
        }

        // 2. Try to match LEGEND_RULES next
        if (!bestMatch) {
            const ruleKey = findLegendRule(style.fill, style.stroke, style.strokeWidth);
            if (ruleKey) {
                const possibleCodes = LEGEND_RULES[ruleKey];
                if (possibleCodes && possibleCodes.length > 0) {
                    if (possibleCodes.length === 1) {
                        const sym = oomPalette.find(o => codesMatch(o.code, possibleCodes[0]));
                        if (sym) {
                            bestMatch = sym;
                            minDist = 0; // 100% confidence
                        }
                    } else {
                        // Multiple codes: disambiguate using group name keywords
                        let selectedCode = possibleCodes[0];
                        if (style.groupName) {
                            const groupLower = style.groupName.toLowerCase();
                            for (const code of possibleCodes) {
                                const sym = oomPalette.find(o => codesMatch(o.code, code));
                                if (sym && sym.name) {
                                    const nameLower = sym.name.toLowerCase();
                                    const keywords = ["contour", "building", "fence", "wall", "paved", "footpath", "track", "boundary", "bank", "cliff", "road", "canopy", "stairway", "vegetation", "water", "rock", "forest", "marsh", "meadow", "runway", "rough", "open", "land"];
                                    const matchesKeyword = keywords.some(kw => groupLower.includes(kw) && nameLower.includes(kw));
                                    if (matchesKeyword) {
                                        selectedCode = code;
                                        minDist = 0; // 100% confidence match
                                        break;
                                    }
                                }
                            }
                        }
                        const sym = oomPalette.find(o => codesMatch(o.code, selectedCode));
                        if (sym) {
                            bestMatch = sym;
                            if (minDist !== 0) minDist = 10; // Medium confidence
                        }
                    }
                }
            }
        }

        if (!bestMatch) {
            oomPalette.forEach(oomSymbol => {
                const dist = colorDist(rgb, oomSymbol.rgb);
                
                const oomType = oomSymbol.symbolType; // '1' point, '2' line, '4'/'16' area
                let typeBias = 50; // High penalty for incorrect geometry types
                if (category === 'point' && oomType === '1') typeBias = 0;
                else if (category === 'line' && oomType === '2') typeBias = 0;
                else if (category === 'area' && (oomType === '4' || oomType === '16')) typeBias = 0;
                else if (category === 'area-small' && (oomType === '4' || oomType === '16' || oomType === '1')) typeBias = 0;
                
                // Forest (405) should never be used for small areas or points
                let forestPenalty = 0;
                if (oomSymbol.code.startsWith('405') && category !== 'area') {
                    forestPenalty = 100;
                }
                
                let widthPenalty = 0;
                if (!hasFill && hasStroke && !isNaN(strokeWidthVal)) {
                    const svgWidthOmap = strokeWidthVal * (25.4 / 72) * 1000;
                    if (oomSymbol.lineWidth !== null) {
                        widthPenalty = Math.abs(svgWidthOmap - oomSymbol.lineWidth) / 10;
                    } else {
                        widthPenalty = 50;
                    }
                }
                
                let priorityBonus = 0;
                if (oomSymbol.name) {
                    const nameLower = oomSymbol.name.toLowerCase();
                    const isCommon = COMMON_KEYWORDS.some(kw => nameLower.includes(kw));
                    if (isCommon) {
                        priorityBonus = -15;
                    }
                }
                
                let groupBonus = 0;
                if (style.groupName) {
                    const groupLower = style.groupName.toLowerCase();
                    const symbolLower = oomSymbol.name ? oomSymbol.name.toLowerCase() : '';
                    const keywords = ["contour", "building", "fence", "wall", "paved", "footpath", "track", "boundary", "bank", "cliff", "road", "canopy", "stairway", "vegetation", "water", "rock", "forest", "marsh", "meadow", "runway", "rough", "open", "land"];
                    for (const kw of keywords) {
                        if (groupLower.includes(kw) && symbolLower.includes(kw)) {
                            groupBonus = -30;
                            break;
                        }
                    }
                }
                
                const score = dist + typeBias + forestPenalty + widthPenalty + priorityBonus + groupBonus;
                if (score < minDist) {
                    minDist = score;
                    bestMatch = oomSymbol;
                }
            });
        }
        
        if (bestMatch) {
            mapping.set(style.key, bestMatch);
            console.log(`  style "${style.key}" (count: ${style.count}) -> Code ${bestMatch.code} "${bestMatch.name}" (score: ${minDist.toFixed(1)})`);
        }
    });
    console.log('Mapped styles:', mapping.size);
    
    // Convert elements
    let newObjectsString = '';
    let totalCount = 0;
    const pageCenter = getPageCenter(svgElement);
    console.log('Page center (SVG points):', pageCenter);
    
    supportedElements.forEach(el => {
        const fill = getElementStyle(el, 'fill');
        const stroke = getElementStyle(el, 'stroke');
        const strokeWidth = getInheritedAttribute(el, 'stroke-width');
        
        // Compute effective stroke width, accounting for element's transform scale
        let effectiveStrokeWidth = strokeWidth;
        const matrix = getCombinedElementMatrix(el);
        if (strokeWidth && !isNaN(parseFloat(strokeWidth))) {
            const scale = getMatrixScale(matrix);
            effectiveStrokeWidth = (parseFloat(strokeWidth) * scale).toFixed(4);
        }
        
        // SVG Group Label Detection
        const groupLabels = getGroupLabels(el);
        const groupName = groupLabels.length > 0 ? groupLabels[0] : '';
        
        // Compute geometry category and BBox
        const bboxInfo = getElementBBoxAndCategory(el);
        const category = bboxInfo.category;
        
        const key = `f:${fill}|s:${stroke}|w:${effectiveStrokeWidth}|g:${groupName}|t:${category}`;
        
        const targetSymbol = mapping.get(key);
        if (targetSymbol) {
            const matrix = getCombinedElementMatrix(el);
            const pathStr = convertShapeToPathString(el);
            if (!pathStr) return;
            
            const subpaths = parseSVGPath(pathStr, matrix, pageCenter);
            const coords = compileSubpathsToCoords(subpaths);
            if (coords.length > 1) {
                newObjectsString += `      <object type="${targetSymbol.objType}" symbol="${targetSymbol.internalId}">\n`;
                newObjectsString += `        <coords count="${coords.length}">${coords.join(';')};</coords>\n`;
                if (targetSymbol.objType === "1") {
                    newObjectsString += `        <pattern rotation="0"><coord x="0" y="0"/></pattern>\n`;
                }
                newObjectsString += `      </object>\n`;
                totalCount++;
            }
        }
    });
    console.log('Total converted objects:', totalCount);
    
    // Verification checks
    const type0Count = (newObjectsString.match(/type="0"/g) || []).length;
    const type1Count = (newObjectsString.match(/type="1"/g) || []).length;
    const type2Count = (newObjectsString.match(/type="2"/g) || []).length;
    console.log('--- Verification ---');
    console.log(`Generated type="0" (Point) objects: ${type0Count}`);
    console.log(`Generated type="1" (Path)  objects: ${type1Count}`);
    console.log(`Generated type="2" (Error) objects: ${type2Count}`);
    if (type2Count > 0) {
        console.error('FAIL: Found type="2" objects which are invalid in OpenOrienteering Mapper!');
        process.exit(1);
    } else {
        console.log('SUCCESS: No type="2" objects found.');
    }
}

run().catch(console.error);
