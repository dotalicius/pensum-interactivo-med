import { NextResponse } from 'next/server';

// Lista de países bloqueados (códigos ISO)
const BLOCKED_COUNTRIES = [
  'CN', // China
  'IN', // India
  'JP', // Japan
  'KR', // South Korea
  'TH', // Thailand
  'VN', // Vietnam
  'ID', // Indonesia
  'MY', // Malaysia
  'SG', // Singapore
  'PH', // Philippines
  'BD', // Bangladesh
  'PK', // Pakistan
  'LK', // Sri Lanka
  'NP', // Nepal
  'MM', // Myanmar
  'KH', // Cambodia
  'LA', // Laos
  'BN', // Brunei
  'TL', // East Timor
  'MN', // Mongolia
  'TW', // Taiwan
  'HK', // Hong Kong
  'MO', // Macau
];

// Rangos de IP específicos de bots conocidos
const BOT_IP_RANGES = [
  '103.21.244.0/22',
  '103.22.200.0/22', 
  '103.31.4.0/22',
  '104.16.0.0/12',
  '108.162.192.0/18',
  '131.0.72.0/22',
  '141.101.64.0/18',
  '162.158.0.0/15',
  '172.64.0.0/13',
  '173.245.48.0/20',
  '188.114.96.0/20',
  '190.93.240.0/20',
  '197.234.240.0/22',
  '198.41.128.0/17'
];

// User agents de bots conocidos
const BOT_USER_AGENTS = [
  'AhrefsBot',
  'MJ12bot',
  'DotBot',
  'SemrushBot',
  'BLEXBot',
  'YandexBot',
  'Baiduspider',
  'Sogou',
  '360Spider',
  'Sosospider',
  'YoudaoBot',
  'Sogou Pic Spider',
  'Sogou News Spider',
  'Sogou Orion spider',
  'Sogou inst spider',
  'Sogou head spider',
  'Sogou web spider',
  'Sogou-Test-Spider',
  'crawler',
  'spider',
  'bot',
  'scraper',
  'crawling'
];

export function middleware(request) {
  const { nextUrl, headers } = request;
  const country = headers.get('cf-ipcountry') || headers.get('x-vercel-ip-country') || 'US';
  const userAgent = headers.get('user-agent') || '';
  const ip = headers.get('x-forwarded-for') || headers.get('x-real-ip') || '';

  // Log de acceso para monitoreo
  console.log(`Access attempt: ${ip} from ${country} with UA: ${userAgent.substring(0, 100)}`);

  // Bloquear por país
  if (BLOCKED_COUNTRIES.includes(country)) {
    console.log(`Blocked access from country: ${country} (IP: ${ip})`);
    return new NextResponse('Access denied from this region', { 
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'X-Blocked-Reason': 'Country restriction'
      }
    });
  }

  // Bloquear bots por User-Agent
  const isBot = BOT_USER_AGENTS.some(botUA => 
    userAgent.toLowerCase().includes(botUA.toLowerCase())
  );

  if (isBot) {
    console.log(`Blocked bot access: ${userAgent} (IP: ${ip})`);
    return new NextResponse('Bot access denied', { 
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'X-Blocked-Reason': 'Bot detected'
      }
    });
  }

  // Verificar rangos de IP de bots
  if (isIPInBotRange(ip)) {
    console.log(`Blocked IP range access: ${ip}`);
    return new NextResponse('Access denied from this IP range', { 
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'X-Blocked-Reason': 'IP range restriction'
      }
    });
  }

  // Continuar con la request si no está bloqueada
  return NextResponse.next();
}

// Función para verificar si una IP está en un rango de bots
function isIPInBotRange(ip) {
  if (!ip) return false;
  
  const ipNum = ipToNumber(ip);
  
  return BOT_IP_RANGES.some(range => {
    const [rangeIP, prefixLength] = range.split('/');
    const rangeNum = ipToNumber(rangeIP);
    const mask = (0xffffffff << (32 - parseInt(prefixLength))) >>> 0;
    
    return (ipNum & mask) === (rangeNum & mask);
  });
}

// Función para convertir IP a número
function ipToNumber(ip) {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
