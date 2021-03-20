# Polkaregistry Overview

This is a draft proposal of a new type of identity registrar for the Polkadot
network, focusing on **optional** real-world identity verification (**without**
requesting the sender to disclose anything sensitive), and publicly-retrievable
evidence of verification.

We accomplish the goal of optional real-world identity verification by taking
advantage of existing publicly-available government eID programs (specifically
in the beginning, Estonia's eID program, which through its e-Residency program
is available to most parts of the world). The goal of publicly-retrievable
evidence is done using a Keybase / keys.pub alike infrastructure -- where the
signer publishes an authenticated signature on the platform it wishes to verify.

## Optional real-world identity verification

Currently, none of the live identity registrars on Polkadot can adequately
verify the "legal name" field of the identity. This new registrar aims at fixing
that.

To do this, we utilize existing government eID programs. Initially, this will be
Estonia's eID program. eID creates a government-issued ID, unique to each
person. Through the e-Residency program, the eID is available to most
nationalities in the world. Its signature functionality is allowed for
general-purpose usage. Upon signature, it creates a X.509 document. The
certificate of the eID only contains the signer's legal name and personal code
(which, according to [Estonia's
document](https://www.id.ee/public/The_Estonian_ID_Card_and_Digital_Signature_Concept.pdf),
is considered public information). So we do not leak or obtain any unnecessary
information, while in the meantime also verify the signer's identity.

This real-world identity verification is not only useful for confirming a
signer's identity, but also provides some level of protection against Sybil
Attack, in that we can now properly distinguish if multiple addresses are owned
by the same person.

## Public-retrievable evidence for verification

Current Polkadot registrars do not yet publish the evidence for verification.
This is a disadvantage for users, as when they need to confirm others'
identities, they have to *trust* that the registrars did the verifications
properly. By publishing the evidence for verification, we can make the network
more decentralized, and eliminate this need for trust.

* For social network accounts, we require the signer to publish a signed message
  in a publicly-retrievable URL, just like how Keybase works.
* For a Matrix account, we require the signer to send an encrypted message.

## Merkle tree data

To save blockchain storage, the evidence data will not be directly published
on-chain, but will be retrievable from the web (including IPFS). All evidence
data will be put into a merkle tree, and its hash will be periodically saved
on-chain. This allows the data to be used on-chain later (by publishing merkle
tree proofs) if needed.

## Miscellaneous

This document should be considered draft, and substantial changes are expected.
Wei makes no commitment of the registrar until the Polkadot community approves
it.

This project will be ran as a side project of Wei, and thus it requires no
funding. Registrar verification on-chain will be provided for free without fees.
However, Wei may send treasury tip proposals later in order to cover necessary
transaction fees.

