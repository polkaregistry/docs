---
title: Procedure
description: How to get your Polkadot identity verified through Polkaregistry.
---

This document describes the procedure to get verified on Polkadot through
Polkaregistry. Polkaregistry is a registrar maintained by Wei on Polkadot,
providing free and trustless identity verification for everyone.

The verification is handled using a Github pull request workflow, against
repository [polkaregistry/registry](https://github.com/polkaregistry/registry).

## On-chain identity

To start the verification, please first set your Polkadot identity on-chain.
Polkaregistry supports the following fields:

* Legal name (verified via Estonia eID / e-Residency program).
* Email address (verified via Github).
* Matrix handle.
* Website (verified via root `.well-known` URL).
* Twitter handle.

## Prepare for proofs

Clone the Github repository
[polkaregistry/registry](https://github.com/polkaregistry/registry), and create
folder `polkadot/<address>`. For example, if you want to verify address
`1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T`, then create folder
`polkadot/1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T`.

### Index file

The index file is a JSON file which documents the verification metadata and
where the registrar should fetch verification proofs. The index file resides in
`polkadot/<address>/index.json`. For example, if your address is
`1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T`, then the index file should be
created at
`polkadot/1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T/index.json`.

Create the file of the following format:

```
{
    "version": 1，
    "address": "<address>",
    "license": "CC-BY-NC-ND-4.0",
    "proofs": {

    }
}
```

Replace `<address>` by your Polkadot address. The proof field is the location
where verification proofs are added.

### Estonia eID proof

This proof allows you to verify your **legal name** field. To create the proof,
you will first need to sign a message with your address. The body of the message
is as follows:

> Polkaregistry proof: My legal name is <legal name> and I own address <address> on Polkadot.

Replace `<legal name>` with your legal name, in `<first name> <last name>`
format, and replace `<address>` with your Polkadot address. The signature should
then be appended to the end, with a space in between. An example is shown as
below:

> Polkaregistry proof: My legal name is Wei Tang and I own address 1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T on Polkadot. 0xd4445c4eef3d495ef342da44ed1d8f80d80fcd86523070e07e3012a06090f950d045cf9b30c8674c6c81f74333f222bd89281e1a214c330e2c07856604ac5c8f

You can also use the tool provided at `polkaregistry/tools` to generate the
proof.

Save the above proof in a file named `polkaregistry.txt`, and then open the eID
signing application DigiDoc4. You can then create a signature, which will give
you an `.ascie` file. Rename the file to `eeid.ascie`.

After this, you can choose how you want to publish the proof. You can either:

* Directly put the proof to the `polkaregistry/registry` repository. The path
  in the repo should be `polkadot/<address>/eeid.ascie`. Then, add `"eeid":
  "local:eeid.ascie"` into the index file proofs section.
* Publish the proof to IPFS. This will allow you to later redact your signature
  from the public view, if you no longer wish to be verified by Polkaregistry.
  In this case, add `"eeid": "<ipfs URI>"` into the index file proofs section.

### Github proof

This proof allows you to verify your **email address** field. If you wish to use
this, make sure the email address your set on-chain is the same as the public
email address in your Github profile. Sign a message with the following body:

> Polkaregistry proof: I am <handle> on Github and own address <address> on Polkadot.

Replace `<handle>` with your Github handle, and `<address>` with your Polkadot
address. The signature should then be appended to the end, with a space in
between. An example is shown as below:

> Polkaregistry proof: I am sorpaas on Github and own address 1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T on Polkadot. 0xfa1e810eb760d7e0fc8ce9523ead16f184ad8d21b06799e932cc1b1585c1341258f6d7e3b021d82d4f18675fc5e29932c1e1d943a12f8ac49381f1d9e401bd8a

Put this signed message into a Github gist, with file name as
`polkaregistry.txt`. Then, add `"github": "<gist URI>"` into the index file
proofs section.

### Matrix proof

This proof allows you to verify your **Matrix** field. Sign a message with the
following body:

> Polkaregistry proof: I am <handle> on Matrix and own address <address> on Polkadot.

Replace `<handle>` with your Matrix handle, and `<address>` with your Polkadot
address. The signature should then be appended to the end, with a space in
between. An example is shown as below:

> Polkaregistry proof: I am @wei:that.world on Matrix and own address 1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T on Polkadot. 0x2eae4e7d7b172b2804f49e0496ee150e289629b90e765a9650acaa989dcd7f29e40590440efef040c1ace4d2e97bfde02fc10ceb4c0cdf42bc357b4b6a9edb87

Use your handle to join the Matrix room at `#polkaregistryproofs:matrix.org`,
and post your signed message. Then, get the event ID if your Matrix message. You
can do this by clicking under your message "options", "view source". The event
ID will be shown in the pop-up.

The final step is to add the Matrix URI of your signed message to the index
file, under `"matrix"` key. It is of the following format:

```
matrix:r/polkaregistryproofs:matrix.org/e/<event id>
```

Replace `<event id>` with the Matrix event ID. And example is:

```
matrix:r/polkaregistryproofs:matrix.org/e/$MU0UBTQrloJ64bblRU-2CIS3yOOjQxHcZmeiUklV30U
```

### Website proof

This proof allows you to verify a **website** link. Sign a message with the
following body:

> Polkaregistry proof: I own website <domain> and own address <address> on Polkadot.

Replace `<domain>` with your website domain, and `<address>` with your Polkadot
address. The signature should then be appended to the end, with a space in
between. An example is shown as below:

> Polkaregistry proof: I own website that.world and own address 1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T on Polkadot. 0x54e003d62f459219e8c273afff4eea0c4548202a98b1ede0a9219618ad8d8064eda38fb58f4858fb31dade71bf68969741a29b20d25ec841c4889b7c7f649388

Make the above message accessible from
`https://<domain>/.well-known/polkaregistry.txt`. For example, if your
`<domain>` part of the link is `that.world`, then it should be accessible from
`https://that.world/.well-known/polkaregistry.txt`.

Add `"website": "https://<domain>/.well-known/polkaregistry.txt"` into the index
file proofs section.

### Twitter proof

This proof allows you to verify your **Twitter** handle. Sign a message with the
following body:

> Polkaregistry proof: I am <handle> on Twitter and own address <address> on Polkadot.

Replace `<handle>` with your Twitter handle, and `<address>` with your Polkadot
address. The signature should then be appended to the end, with a space in
between. An example is shown as below:

> Polkaregistry proof: I am sorpaas on Twitter and own address 1CM4eAY3QFWTPQFNGgvSpPoEAqw1aHA1gmE2atXQ8f4vk1T on Polkadot. 0x5a8d80f73f1aff22492dcb05dec3ced046d9925a4b78d71234bb30d61a56d055600f52001de5294fd0ea4eb20a838d6822909aa4085b893aab187027969afc84

Post a public tweet using your Twitter handle. Copy the tweet link, and add
`"twitter": "<tweet link>"` into the index file proofs section.

## Pull request

After finishing preparing the index file and proofs, open a pull request against
repository [polkaregistry/registry](https://github.com/polkaregistry/registry).
It is then done! Your Polkadot identity will be verified once all proofs are
checked to be valid!