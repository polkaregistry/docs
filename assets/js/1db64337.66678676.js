(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{74:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return o})),t.d(i,"metadata",(function(){return s})),t.d(i,"toc",(function(){return l})),t.d(i,"default",(function(){return d}));var n=t(3),r=t(7),a=(t(0),t(90)),o={title:"Overview",slug:"/"},s={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"This is a draft proposal of a new type of identity registrar for the Polkadot",source:"@site/docs/overview.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/polkaregistry/docs/edit/master/website/docs/overview.md",version:"current",sidebar:"docs",next:{title:"Architecture",permalink:"/docs/architecture"}},l=[{value:"Optional real-world identity verification",id:"optional-real-world-identity-verification",children:[]},{value:"Public-retrievable evidence for verification",id:"public-retrievable-evidence-for-verification",children:[]},{value:"Merkle tree data",id:"merkle-tree-data",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],c={toc:l};function d(e){var i=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:i,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a draft proposal of a new type of identity registrar for the Polkadot\nnetwork, focusing on ",Object(a.b)("strong",{parentName:"p"},"optional")," real-world identity verification (",Object(a.b)("strong",{parentName:"p"},"without"),"\nrequesting the sender to disclose anything sensitive), and publicly-retrievable\nevidence of verification."),Object(a.b)("p",null,"We accomplish the goal of optional real-world identity verification by taking\nadvantage of existing publicly-available government eID programs (specifically\nin the beginning, Estonia's eID program, which through its e-Residency program\nis available to most parts of the world). The goal of publicly-retrievable\nevidence is done using a Keybase / keys.pub alike infrastructure -- where the\nsigner publishes an authenticated signature on the platform it wishes to verify."),Object(a.b)("h2",{id:"optional-real-world-identity-verification"},"Optional real-world identity verification"),Object(a.b)("p",null,'Currently, none of the live identity registrars on Polkadot can adequately\nverify the "legal name" field of the identity. This new registrar aims at fixing\nthat.'),Object(a.b)("p",null,"To do this, we utilize existing government eID programs. Initially, this will be\nEstonia's eID program. eID creates a government-issued ID, unique to each\nperson. Through the e-Residency program, the eID is available to most\nnationalities in the world. Its signature functionality is allowed for\ngeneral-purpose usage. Upon signature, it creates a X.509 document. The\ncertificate of the eID only contains the signer's legal name and personal code\n(which, according to ",Object(a.b)("a",{parentName:"p",href:"https://www.id.ee/public/The_Estonian_ID_Card_and_Digital_Signature_Concept.pdf"},"Estonia's\ndocument"),",\nis considered public information). So we do not leak or obtain any unnecessary\ninformation, while in the meantime also verify the signer's identity."),Object(a.b)("p",null,"This real-world identity verification is not only useful for confirming a\nsigner's identity, but also provides some level of protection against Sybil\nAttack, in that we can now properly distinguish if multiple addresses are owned\nby the same person."),Object(a.b)("h2",{id:"public-retrievable-evidence-for-verification"},"Public-retrievable evidence for verification"),Object(a.b)("p",null,"Current Polkadot registrars do not yet publish the evidence for verification.\nThis is a disadvantage for users, as when they need to confirm others'\nidentities, they have to ",Object(a.b)("em",{parentName:"p"},"trust")," that the registrars did the verifications\nproperly. By publishing the evidence for verification, we can make the network\nmore decentralized, and eliminate this need for trust."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For social network accounts, we require the signer to publish a signed message\nin a publicly-retrievable URL, just like how Keybase works."),Object(a.b)("li",{parentName:"ul"},"For a Matrix account, we require the signer to send an encrypted message.")),Object(a.b)("h2",{id:"merkle-tree-data"},"Merkle tree data"),Object(a.b)("p",null,"To save blockchain storage, the evidence data will not be directly published\non-chain, but will be retrievable from the web (including IPFS). All evidence\ndata will be put into a merkle tree, and its hash will be periodically saved\non-chain. This allows the data to be used on-chain later (by publishing merkle\ntree proofs) if needed."),Object(a.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(a.b)("p",null,"This document should be considered draft, and substantial changes are expected.\nWei makes no commitment of the registrar until the Polkadot community approves\nit."),Object(a.b)("p",null,"This project will be ran as a side project of Wei, and thus it requires no\nfunding. Registrar verification on-chain will be provided for free without fees.\nHowever, Wei may send treasury tip proposals later in order to cover necessary\ntransaction fees."))}d.isMDXComponent=!0}}]);