// Middleware para bloquear tráfico de Asia e India
export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || 
             req.headers['x-real-ip'] || 
             req.connection.remoteAddress || 
             req.socket.remoteAddress ||
             (req.connection.socket ? req.connection.socket.remoteAddress : null);

  // Lista de rangos de IP bloqueados (Asia e India)
  const blockedRanges = [
    // China
    '1.0.1.0/24', '1.0.2.0/23', '1.0.8.0/21', '1.0.32.0/19', '1.0.64.0/18',
    '1.0.128.0/17', '1.1.0.0/24', '1.1.2.0/23', '1.1.4.0/22', '1.1.8.0/21',
    '1.1.16.0/20', '1.1.32.0/19', '1.1.64.0/18', '1.1.128.0/17',
    '1.2.0.0/23', '1.2.2.0/24', '1.2.4.0/22', '1.2.8.0/21', '1.2.16.0/20',
    '1.2.32.0/19', '1.2.64.0/18', '1.2.128.0/17',
    '1.4.1.0/24', '1.4.2.0/23', '1.4.4.0/22', '1.4.8.0/21', '1.4.16.0/20',
    '1.4.32.0/19', '1.4.64.0/18', '1.4.128.0/17',
    '1.8.1.0/24', '1.8.2.0/23', '1.8.4.0/22', '1.8.8.0/21', '1.8.16.0/20',
    '1.8.32.0/19', '1.8.64.0/18', '1.8.128.0/17',
    '1.12.0.0/14', '1.16.0.0/12', '1.24.0.0/13', '1.32.0.0/10',
    '1.64.0.0/10', '1.128.0.0/9',
    '2.0.0.0/8', '3.0.0.0/8', '4.0.0.0/6', '8.0.0.0/5', '16.0.0.0/4',
    '32.0.0.0/3', '64.0.0.0/2', '128.0.0.0/1',
    
    // India
    '14.0.0.0/8', '27.0.0.0/8', '49.0.0.0/8', '59.0.0.0/8', '61.0.0.0/8',
    '103.0.0.0/8', '106.0.0.0/8', '110.0.0.0/8', '111.0.0.0/8', '112.0.0.0/8',
    '113.0.0.0/8', '114.0.0.0/8', '115.0.0.0/8', '116.0.0.0/8', '117.0.0.0/8',
    '118.0.0.0/8', '119.0.0.0/8', '120.0.0.0/8', '121.0.0.0/8', '122.0.0.0/8',
    '123.0.0.0/8', '124.0.0.0/8', '125.0.0.0/8', '126.0.0.0/8', '127.0.0.0/8',
    
    // Otros países de Asia
    '1.0.0.0/8', '2.0.0.0/8', '3.0.0.0/8', '4.0.0.0/6', '8.0.0.0/5',
    '16.0.0.0/4', '32.0.0.0/3', '64.0.0.0/2', '128.0.0.0/1',
    
    // Rangos específicos de bots conocidos
    '103.21.244.0/22', '103.22.200.0/22', '103.31.4.0/22', '104.16.0.0/12',
    '108.162.192.0/18', '131.0.72.0/22', '141.101.64.0/18', '162.158.0.0/15',
    '172.64.0.0/13', '173.245.48.0/20', '188.114.96.0/20', '190.93.240.0/20',
    '197.234.240.0/22', '198.41.128.0/17'
  ];

  // Función para verificar si una IP está en un rango bloqueado
  function isIPInRange(ip, range) {
    const [rangeIP, prefixLength] = range.split('/');
    const ipNum = ipToNumber(ip);
    const rangeNum = ipToNumber(rangeIP);
    const mask = (0xffffffff << (32 - parseInt(prefixLength))) >>> 0;
    
    return (ipNum & mask) === (rangeNum & mask);
  }

  // Función para convertir IP a número
  function ipToNumber(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
  }

  // Verificar si la IP está bloqueada
  const isBlocked = blockedRanges.some(range => isIPInRange(ip, range));

  if (isBlocked) {
    // Log del intento de acceso bloqueado
    console.log(`Blocked access from IP: ${ip} at ${new Date().toISOString()}`);
    
    return res.status(403).json({
      error: 'Access denied',
      message: 'Access from this region is not allowed',
      timestamp: new Date().toISOString()
    });
  }

  // Si no está bloqueada, continuar con la request
  return res.status(200).json({
    message: 'Access allowed',
    ip: ip,
    timestamp: new Date().toISOString()
  });
}
