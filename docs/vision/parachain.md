---
title: Towards a common-good parachain
description: Polkaregistry's common-good parachain vision for Polkadot.
---

In the long term future, it may be worthwhile to move Polkadot's identity
functionalities to a common-good parachain. In Polkadot, a common-good parachain
has a strict definition, meaning it does not create any new tokens, and should
serve for some common-good functionalities.

## On-chain governed PKI trusts

An identity verification, by its definition, has to interact with the real
world. As a result, sometimes we need to rely on existing public-key
infrastructures (PKIs). In general, those PKIs are created by trusted
third-parties, especially governments, such as the Estonia's eID program. Those
allows certain information to be verified (such as legal name), while not
revealing any sensitive information of the verifiee.

What's more, even our "trustless" verifications rely on an implict trust to the
global TCP/IP infrasturcture, and domain name services.

Right now, Polkaregistry only has one trusted PKI -- the Estonia eID's PKI. In
the future, as the PKI list grow, users of Polkadot should democratically decide
PKIs they want to trust and don't want to trust. This requires we put the PKI
roots on-chain, in which a common-good parachain design would be really
beneficial.

## From trustless to truly decentralized

Polkaregistry is trustless. You don't have to trust the registrar to confirm the
validity of the identity. This is already a major step forward compared with
existing Polkadot registrars. In the mean time, this is still not enough.
Eventually, we should move from trustless to truly decentralized.

We do this by building the common-good parachain, and let the validator set
assert on the off-chain information's validity. This works similar like an
on-chain oracle. The identity verification, first and foremost, remains
trustless. In addition, it becomes truly decentralized, in that the seal of the
identity is produced by on-chain consensus.

## More fine-grained control of identity items

The role of registrars will not go. At this moment, a registrar can only attest
the validity of the full set identity of an address. In the future, registrars
will become more specialized and attest identity items. Some registrars may just
be like now -- attesting only people who they already know. Others may serve as
addition to the trustless verifications. For example, from lawyers and other
professions.

## Wider availability and adoption

At this moment, setting and verifying an identity on Polkadot is not cheap. An
identity would require ~20 DOT deposit fee to set on-chain at this moment, and a
verification transaction would cost a registrar ~0.015 DOT for the transaction
fee. The number is likely to decrease in future Polkadot runtime upgrades.
However, as the network is utilized more and more, the fee is eventually going
to be similarly expensive. By moving the whole identity verification
functionality to a parachain, we can off-load this burden for Polkadot, and make
it affordable for everyone to set identities on-chain.