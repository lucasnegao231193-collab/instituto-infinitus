/**
 * Gerador de Payload Pix (BR Code EMVCo)
 * Baseado na especificação do Banco Central do Brasil
 */

interface PixPayloadParams {
  key: string
  name: string
  city: string
  amount?: number
  txid?: string
}

function crc16(payload: string): string {
  const polynomial = 0x1021
  let crc = 0xFFFF

  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? (crc << 1) ^ polynomial : crc << 1
    }
  }

  crc &= 0xFFFF
  return crc.toString(16).toUpperCase().padStart(4, '0')
}

function formatEMV(id: string, value: string): string {
  const length = value.length.toString().padStart(2, '0')
  return `${id}${length}${value}`
}

export function generatePixPayload({
  key,
  name,
  city,
  amount,
  txid = 'INFNTS'
}: PixPayloadParams): string {
  // Payload Format Indicator
  let payload = formatEMV('00', '01')

  // Merchant Account Information
  const merchantAccount = 
    formatEMV('00', 'br.gov.bcb.pix') +
    formatEMV('01', key)
  payload += formatEMV('26', merchantAccount)

  // Merchant Category Code
  payload += formatEMV('52', '0000')

  // Transaction Currency (986 = BRL)
  payload += formatEMV('53', '986')

  // Transaction Amount (opcional)
  if (amount && amount > 0) {
    payload += formatEMV('54', amount.toFixed(2))
  }

  // Country Code
  payload += formatEMV('58', 'BR')

  // Merchant Name (máximo 25 caracteres)
  payload += formatEMV('59', name.substring(0, 25))

  // Merchant City (máximo 15 caracteres)
  payload += formatEMV('60', city.substring(0, 15))

  // Additional Data Field Template
  const additionalData = formatEMV('05', txid.substring(0, 25))
  payload += formatEMV('62', additionalData)

  // CRC16
  payload += '6304'
  const checksum = crc16(payload)
  payload += checksum

  return payload
}

export function formatPixValue(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
