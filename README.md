# ariari

SDK officiel pour l'API de paiement Ariary. Permet d'envoyer des paiements, des SMS et des transferts d'argent.

## Installation

```bash
npm install @ariary/sdk
```

## Configuration

```typescript
import { AriarySDK } from '@ariary/sdk';

const sdk = new AriarySDK({
  secretId: 'votre_secret_id',
  projectId: 'votre_project_id'
});
```

## Utilisation

### Paiement

```typescript
// Créer un paiement
const payment = await sdk.payment.createPayment({
  code: 'PAY-K1X2Y3Z4-ABC123',
  amount: 5000,
  projectId: 'votre_project_id'
});

console.log(payment);
// {
//   id: "...",
//   amount: 5000,
//   rest: 0,
//   status: "payé",
//   ...
// }

// Récupérer tous les paiements
const allPayments = await sdk.payment.getAllPayments();

// Récupérer un paiement par ID
const payment = await sdk.payment.getPaymentById(paymentId);

// Mettre à jour le reste d'un paiement
const updated = await sdk.payment.updatePaymentRest(paymentId, 'TICKET123');
```

### SMS

```typescript
// Envoyer un SMS à un ou plusieurs numéros
const result = await sdk.sms.notify('Bonjour!', ['261345678901', '261345678902']);

// Envoyer des SMS différents
const result = await sdk.sms.notifyBulk([
  { message: 'Message 1', numbers: '261345678901' },
  { message: 'Message 2', numbers: '261345678902' }
]);
```

### Transfer

```typescript
// Envoyer une transaction
const transaction = await sdk.transfer.send('261345678901', 5000);

// Récupérer toutes les transactions
const allTransactions = await sdk.transfer.getAll();
```

## Imports

```typescript
import { AriarySDK, PaymentService, SmsService, TransferService } from '@ariary/sdk';
```

## Types

Tous les types TypeScript sont inclus automatiquement (.d.ts).

```typescript
// Payment
- CreatePaymentDto
- PaymentResponseDto

// SMS
- SendSmsDto
- BulkSmsDto
- SendSmsResponseDto
- MultiSmsResponseDto
- BulkSmsResponseDto
- ResponseSmsDto

// Transfer
- SendTransactionDto
- SendTransactionResponse
- TransactionResponseDto
```

## API

### AriarySDK

```typescript
new AriarySDK(config: ApiConfig)
```

**config:**
- `secretId: string` - Votre ID secret
- `projectId: string` - Votre ID projet
- `baseUrl?: string` - URL de base pour tous les services (optionnel, par défaut: https://back.ariari.mg/payment/api-docs)

## License

ISC
