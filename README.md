# ariari

SDK officiel pour l'API de paiement Ariary. Permet d'envoyer des paiements, des SMS et des transferts d'argent.

## Installation

```bash
npm install ariari
```

## Configuration

```typescript
import { AriarySDK } from 'ariari';

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
// Envoyer un SMS à plusieurs numéros
const result = await sdk.sms.sendMultiSms({
  phones: ['261345678901', '261345678902'],
  message: 'Bonjour!'
});

// Envoyer des messages différents en masse
const bulkResult = await sdk.sms.sendBulkSms({
  messages: [
    { phones: ['261345678901'], message: 'Message 1' },
    { phones: ['261345678902'], message: 'Message 2' }
  ]
});

// Récupérer l'historique des SMS
const history = await sdk.sms.getSmsHistory();

// Récupérer un SMS par ID
const sms = await sdk.sms.getSmsById(smsId);

// Mettre à jour un SMS
const updated = await sdk.sms.updateSms(smsId, { message: 'Nouveau message' });

// Supprimer un SMS
await sdk.sms.deleteSms(smsId);
```

### Transfer

```typescript
// Envoyer une transaction
const transaction = await sdk.transfer.sendTransaction({
  phone: '261345678901',
  amount: 5000
});

// Récupérer toutes les transactions
const allTransactions = await sdk.transfer.getAllTransactions();

// Récupérer une transaction par ID
const transaction = await sdk.transfer.getTransactionById(transactionId);

// Mettre à jour une transaction
const updated = await sdk.transfer.updateTransaction(transactionId, {
  phone: '261345678902',
  amount: 10000
});
```

## Imports par module

Tu peux aussi importer les types et services directement:

```typescript
// Depuis le payment
import { PaymentService, CreatePaymentDto, PaymentResponseDto } from 'ariari/payment';

// Depuis le SMS
import { SmsService, SendSmsDto, MultiSmsResponseDto } from 'ariari/sms';

// Depuis le transfer
import { TransferService, SendTransactionDto, SendTransactionResponse } from 'ariari/transfert';
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
