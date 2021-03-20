# Architecture of the identity registrar on Polkadot maintained by Wei

This article documents the architecture of the proposed identity registrar on
Polkadot, maintained by Wei. In overview, we process all identity verification
through Github's issues and pull requests interface, as it is the most familiar
for open source developers.

## Definitions

* **Users**: Those who wish to use the identity verification to verify their
  identities. We assume the user has a Polkadot address, which we refer to as
  the address of the user.
* **Identity registry**: The database of all current available off-chain
  identity verification data.
* **Registrar bot**: The bot that handles merging of pull requests for the
  registrar.

## Workflows

Below we document workflows of the identity registrar.

### Initialize a new verification or re-verify an existing verification

To initialize a new identity verification for an address, or to re-verify an
verification after any information has changed, a user opens a new pull request
against `polkaregistry/registry` repo. It should add or modify files in the repo
of its address, in the format of `polkadot/<address>/<item>`. For example, a
website verification would be `polkadot/<address>/<website>`.

The PR should sets its title in the format of `verification request: <address>`.
The repo will be set up with Github Actions workflows, representing individual
verification items, with the process verifying each items defined in the below
section.

The registrar bot will then re-check the status of all verification items. Only if
all of them passes, the bot will submit a transaction on-chain, seal the
registrar verification, and then merge the PR.

### Re-verify an existing verficiation without data change

If no repo data change is needed but re-verification is required, then a user
opens a new issue against `polkaregistry/registry`, with its title in the format
of `verification request: <address>`. The registrar bot will then re-check the
status of all existing verification items. If everything passes, it will submit
a transaction on-chain, seal the registrar verification, and then close the
issue.

### Remove verification data

A user can submit new pull request removing verification data if it's no longer
used, and the user can prove that it's the owner. They do this by having a
`github` verification item at `polkadot/<address>/github` which proves the
address' ownership of the submitter Github account.

### Remove expired invalid verifications

Periodically, the bot will run in the background, against all existing valid
verifications on-chain. They will be verified again against the data in
`polkaregistry/registry`. If any address contains no-longer-valid verification
items, then the registrar bot will send a transaction to remove its verification
seal. If an email is set, the registrar bot will send an email to notify the
user about the expired verification, and ask to re-submit a new verification.

## Verification items

Note that all verification items are optional. Whether they are required to pass
the registrar verification depends on what the user sets for its identity
information.

### `github`

A `github` verification indirectly proves the ownership of an email address. To
do this, the user uses its Polkadot address to sign the following message:

```
{
    "app": "polkaregistry",
    "version": 1,
    "item": "github",
    "handle": "<github handle>"
}
```

The signed message is then published as a gist of the Github handle, and the
user should put the link of the gist to `polkadot/<address>/github` in
`polkaregistry/registry` repo.

### `web`

To verify a website ownership, the user uses its Polkadot address to sign the
following message:

```
{
    "app": "polkaregistry",
    "version": 1,
    "item": "web",
    "url": "<website url>"
}
```

The signed message is then published in the website's root folder's
`.well-known/polkaregistry.txt`. The user then puts the link to
`.well-known/polkaregistry.txt` to `polkadot/<address>/web` in
`polkaregistry/registry` repo.

### `twitter`

To verify Twitter ownership, the user uses its Polkadot address to sign the
following message:

```
{
    "app": "polkaregistry",
    "version": 1,
    "item": "twitter",
    "handle": "<twitter handle>"
}
```

The signed message is then published as a tweet under the particular Twitter
handle. The user then puts the link to the tweet to `polkadot/<address>/twitter`
in `polkaregistry/registry` repo.

### `matrix`

To verify Matrix account ownership, the user uses its Polkadot address to sign
the following message:

```
{
    "app": "polkaregistry",
    "version": 1,
    "item": "matrix",
    "handle": "<matrix handle>"
}
```

The signed message is then published to the public Matrix room
`#polkaregistry:matrix.org`. The user then puts the event ID of the message to
`polkadot/<address>/matrix` in `polkaregistry/registry` repo.

### `eeeid`

To verify the user's legal name using Estonia's eID program, the user first uses
its Polkadot address to sign the following message:

```
{
    "app": "polkaregistry",
    "version": 1,
    "item": "eeeid"
}
```

The user should then use the DigiDoc signing application to sign the document
with the above signature, which results in a `.ascie` file. The user then
publishes the `.ascie` file to `polkadot/<address>/eeeid` in
`polkaregistry/registry` repo.